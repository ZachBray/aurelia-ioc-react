import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {ICalculatorController} from './ICalculatorController';
import {IRootController} from '../../core/IRootController';
import {ICalculatorModel} from './ICalculatorModel';
import {CalculatorView} from './CalculatorView';

@transient(IRootController)
@autoinject()
export class CalculatorController implements ICalculatorController, IRootController {
  constructor(private calculator: ICalculatorModel) {
  }

  getView() {
    const result = this.calculator.add(2, 2);
    return <CalculatorView result={result} />;
  }
}
