import * as Rx from 'rx';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {ICalculatorModel} from './CalculatorModel';
import {ICalculatorView} from './CalculatorView';

export abstract class ICalculatorController {
  view$: Rx.Observable<any>;
}

@transient(ICalculatorController)
@autoinject()
export class CalculatorController implements ICalculatorController {
  constructor(private calculator: ICalculatorModel, private view: ICalculatorView) {
  }

  view$ = Rx.Observable.defer(() => {
    const result = this.calculator.add(2, 2);
    return Rx.Observable.return(this.view.render({result}));
  });
}
