import {singleton, inject, Factory} from 'aurelia-dependency-injection';
import {IActivitySpecification} from '../shell/domain/activities/IActivitySpecification';
import {CalculatorController} from './CalculatorController';
import {CalculateIntent} from './CalculateIntent';

@singleton(IActivitySpecification)
@inject(CalculateIntent, Factory.of(CalculatorController))
export class CalculatorActivitySpecification implements IActivitySpecification {
  constructor(public intent: CalculateIntent, private createCalculator: () => CalculatorController) {
  }

  key = 'Calculator';
 
  create() {
    return this.createCalculator();
  }
}
