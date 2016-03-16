import * as Rx from 'rx';
import {inject} from 'aurelia-dependency-injection';
import {ITextInputView} from './TextInputView';
import {ITextFieldSchema} from "../../domain/IFormSchema";
import {IValidator} from "../../domain/IValidator";
import {IFormController} from "../IFormController";

@inject(ITextInputView)
export class TextInputController implements IFormController {
  private text$ = new Rx.BehaviorSubject<string>('');

  constructor(private view: ITextInputView, private schema: ITextFieldSchema, private validator: IValidator) { }

  private error$ = this.text$.map(value => this.validator.validate({value, areSubFormsValid: true}));
  view$ = Rx.Observable.combineLatest(this.text$, this.error$,
    (value, error) => this.view.render({value, error, schema: this.schema, onChange: value => this.text$.onNext(value)}));
  value$ = this.text$.asObservable();
  isValid$ = this.error$.map(error => error === undefined);
}
