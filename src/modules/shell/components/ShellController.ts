import * as Rx from 'rx';
import {singleton, autoinject} from 'aurelia-dependency-injection';
import {ILauncherController} from './launcher/LauncherController';
import {IGridLayoutController} from './grid-layout/GridLayoutController';
import {IActivityFactory} from '../services/ActivityFactory';
import {IShellView} from './ShellView';

export abstract class IShellController {
  view$: Rx.IObservable<any>;
  abstract dispose(): void;
}

@singleton(IShellController)
@autoinject()
export class ShellController implements IShellController {
  view$: Rx.IObservable<any>;
  private intentSubscription = new Rx.SingleAssignmentDisposable();

  constructor(private view: IShellView,
              private layout: IGridLayoutController,
              private launcher: ILauncherController,
              private activityFactory: IActivityFactory) {

    this.intentSubscription.setDisposable(launcher.launchedIntents$.subscribe(intent => this.handleIntent(intent)));

    this.view$ = Rx.Observable.combineLatest(launcher.view$, layout.view$,
      (launcherView, layoutView) => view.render({launcherView, layoutView}));
  }

  dispose() {
    this.intentSubscription.dispose();
  }

  private handleIntent(intent) {
    const activity = this.activityFactory.create(intent);
    this.layout.show(activity.view$);
  }
}
