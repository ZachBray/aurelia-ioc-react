import * as Rx from 'rx';
import {transient, inject, Factory} from 'aurelia-dependency-injection';
import {IFormView} from './FormView';
import {IFormSchema} from '../../domain/IFormSchema';
import {TextInputController} from '../text-input/TextInputController';

export abstract class IFormController {
  view$: Rx.Observable<any>;
  value$: Rx.Observable<any>;
  isValid$: Rx.Observable<boolean>;
  abstract setSchema(schema: IFormSchema);
}

interface IField {
  value$: Rx.Observable<any>;
  view$: Rx.Observable<any>;
}

interface IFormState {
  schema: IFormSchema;
  fields: Map<string, IField>;
}

@transient(IFormController)
@inject(IFormView, Factory.of(TextInputController))
export class FormController implements IFormController {
  private state$ = new Rx.BehaviorSubject<IFormState>({
    schema: null,
    fields: new Map<string, IField>()
  });

  constructor(private view: IFormView, private inputFactory: () => TextInputController) {
  }

  view$ = this.state$.map(({fields}) => Array.from(fields))
                     .map(fields => fields.map(([_, field]) => field.view$))
                     .map(fieldView$$ => Rx.Observable.combineLatest(fieldView$$, (...views) => views))
                     .switch()
                     .map(fields => this.view.render({fields}));
  
  value$ = this.state$.map(({fields}) => Array.from(fields))
                      .map(fields => fields.map(([key, field]) => field.value$.map(value => ({[key]: value}))))
                      .map(fieldValue$ => Rx.Observable.combineLatest(fieldValue$, (...values) => Object.assign({}, ...values)))
                      .switch();

  isValid$ = null;

  setSchema(schema) {
    const fields = new Map<string, IField>();
    schema.fields.forEach(field => {
      const input = this.inputFactory();
      input.setLabel(field.displayName);
      fields.set(field.key, input);
    });
    this.state$.onNext({schema, fields});
  }
}
