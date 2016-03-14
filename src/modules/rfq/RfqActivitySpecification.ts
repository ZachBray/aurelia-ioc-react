import {singleton, inject, Factory} from 'aurelia-dependency-injection';
import {IActivitySpecification} from '../shell/domain/activities/IActivitySpecification';
import {RfqController} from './RfqController';
import {RfqIntent} from './RfqIntent';

@singleton(IActivitySpecification)
@inject(RfqIntent, Factory.of(RfqController))
export class RfqActivitySpecification implements IActivitySpecification {
  constructor(public intent: RfqIntent, private createRfq: () => RfqController) {
  }

  key = 'Rfq';
 
  create() {
    return this.createRfq();
  }
}
