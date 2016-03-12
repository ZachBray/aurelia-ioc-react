import {transient, autoinject} from 'aurelia-dependency-injection';
import {ICalculatorModel} from './ICalculatorModel';

@transient(ICalculatorModel)
@autoinject()
export class CalculatorModel implements ICalculatorModel {
  add(x: number, y:number) : number {
    return x + y;
  }
}
