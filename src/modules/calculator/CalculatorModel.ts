import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class ICalculatorModel {
  abstract add(x: number, y: number): number;
}

@transient(ICalculatorModel)
@autoinject()
export class CalculatorModel implements ICalculatorModel {
  add(x: number, y:number) : number {
    return x + y;
  }
}
