import * as Rx from 'rx';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {ISelectorView} from './ISelectorView';

export abstract class ISelectorController<T> {
  view$: Rx.Observable<any>;
  value$: Rx.Observable<T>;
  abstract setValue(value: T);
  abstract setOptions(values: T[]);
}

@transient(ISelectorController)
@autoinject()
export class SelectorController<T> implements ISelectorController<T> {
  private currentValue$ = new Rx.ReplaySubject<T>(1);
  private options$ = new Rx.ReplaySubject<T[]>(1);

  constructor(private view: ISelectorView<T>) {
    this.currentValue$.onNext(undefined);
    this.options$.onNext([]);
  }

  view$ = Rx.Observable.combineLatest(this.currentValue$, this.options$, (value, options) =>
    this.view.render({value, options, onChange: value => this.setValue(value)}));

  value$ = this.currentValue$.asObservable();

  setValue(value) {
    setTimeout(() => this.currentValue$.onNext(value), 0);
  }

  setOptions(values) {
    this.options$.onNext(values);
  }
}
