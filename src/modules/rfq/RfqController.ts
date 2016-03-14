import * as Rx from 'rx';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {IRfqView} from './RfqView';
import {IFormController} from '../forms/components/form/FormController';

export abstract class IRfqController {
  view$: Rx.Observable<any>;
}

@transient(IRfqController)
@autoinject()
export class RfqController implements IRfqController {
  constructor(private view: IRfqView, private formController: IFormController) {
    formController.setSchema({
      fields: [{
        key: 'notional',
        displayName: 'Notional',
        fieldType: 'text',
        isRequired: true
      }, {
        key: 'maturity',
        displayName: 'Maturity',
        fieldType: 'text',
        isRequired: true
      }]
    });
    formController.value$.subscribe(value => console.log(value));
  }

  view$ = this.formController.view$.map(productForm => this.view.render({productForm}));
}

