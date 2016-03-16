import * as Rx from 'rx';
import {inject} from 'aurelia-dependency-injection';
import {IObjectView} from './ObjectView';
import {IFormController} from "../IFormController";
import {IValidator} from "../../domain/IValidator";
import {IFields} from '../../domain/IFormSchema';

@inject(IObjectView)
export class ObjectController implements IFormController {
  constructor(private view: IObjectView, private fields: IFields<IFormController>, private validator: IValidator) {
  }

  private fieldViews$ = this.combineFields(field => field.view$);
  private fieldValidities$ = this.combineFields(field => field.isValid$);
  private areChildrenValid$ = this.fieldValidities$.map(validities => validities.reduce((acc, isValid) => acc && isValid, true));

  private object$ = this.combineFields((field, key) => field.value$.map(value => ({[key]: value})))
    .map(values => Object.assign({}, ...values));

  private error$ = Rx.Observable.combineLatest(this.areChildrenValid$, this.object$,
    (areChildrenValid, value) => this.validator.validate({value, areSubFormsValid: areChildrenValid}));

  value$ = this.object$;
  isValid$ = Rx.Observable.combineLatest(this.areChildrenValid$, this.error$,
    (areChildrenValid, error) => areChildrenValid && error === undefined);
  view$ = Rx.Observable.combineLatest(this.fieldViews$, this.error$, (fields, error) => this.view.render({fields, error}));

  private combineFields<T>(selector: (form: IFormController, key: string) => Rx.Observable<T>) {
    const values$ = Object.keys(this.fields).map(k => selector(this.fields[k], k));
    return Rx.Observable.combineLatest(values$, (...values) => values);
  }
}
