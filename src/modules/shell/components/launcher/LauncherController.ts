import * as Rx from 'rx';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {ILauncherView} from './LauncherView';
import {IIntentRepository} from '../../services/IntentRepository';
import {IIntent} from '../../domain/intents/IIntent';
import {ISelectorController} from '../../../common/components/selector/SelectorController';

export abstract class ILauncherController {
  view$: Rx.Observable<any>;
  launchedIntents$: Rx.Observable<IIntent>;
}

@transient(ILauncherController)
@autoinject()
export class LauncherController implements ILauncherController {
  constructor(private view: ILauncherView, private selector: ISelectorController<IIntent>, private intentRepository: IIntentRepository) {
    selector.setOptions(intentRepository.intents);
  }

  view$ = this.selector.view$.map(selector => this.view.render({selector}));

  launchedIntents$ = this.selector.value$
    .filter(intent => intent !== undefined)
    .do(() => this.selector.setValue(undefined));
    
}
