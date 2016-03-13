import * as Rx from 'rx';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {IGridLayoutView} from './GridLayoutView';

export abstract class IGridLayoutController {
  view$: Rx.Observable<any>;
  abstract show(item$: Rx.Observable<any>): Rx.IDisposable;
}

@transient(IGridLayoutController)
@autoinject()
export class GridLayoutController implements IGridLayoutController {
  constructor(private view: IGridLayoutView) {
  }

  private items$ = new Rx.ReplaySubject<(items: Rx.Observable<any>[]) => Rx.Observable<any>[]>(1);

  view$ = this.items$
    .scan((acc, f) => f(acc), [])
    .map(items$ => Rx.Observable.combineLatest(items$, (...items) => items))
    .switch()
    .startWith([])
    .map(items => this.view.render({items}));

  show(item$) {
    this.items$.onNext(items => {
      items.push(item$);
      return items;
    });
    return Rx.Disposable.create(() =>
      this.items$.onNext(items => {
        const index = items.indexOf(item$);
        items.splice(index, 1);
        return items;
      }));
  }
}
