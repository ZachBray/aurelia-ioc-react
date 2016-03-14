import * as Rx from 'rx';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {ITextInputView} from './TextInputView';

export abstract class ITextInputController {
  view$: Rx.Observable<any>;
  value$: Rx.Observable<string>;
  abstract setLabel(label: string);
  abstract setValue(value: string);
}

@transient(ITextInputController)
@autoinject()
export class TextInputController implements ITextInputController {
  private state$ = new Rx.BehaviorSubject<{value: string, label: string}>({
    value: '',
    label: ''
  });

  constructor(private view: ITextInputView) { }

  view$ = this.state$.map(({value, label}) => this.view.render({value, label, onChange: value => this.setValue(value)}));
  value$ = this.state$.map(({value}) => value);

  setValue(value: string) {
    const {label} = this.state$.getValue();
    const newState = {label, value};
    this.state$.onNext(newState);
  }

  setLabel(label: string) {
    const {value} = this.state$.getValue();
    const newState = {label, value};
    this.state$.onNext(newState);
  }
}
