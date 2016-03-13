import {singleton, inject, All} from 'aurelia-dependency-injection';
import {IIntent} from '../domain/intents/IIntent';
import {IActivitySpecification} from '../domain/activities/IActivitySpecification';
import {IActivityController} from '../domain/activities/IActivityController';

export abstract class IActivityFactory {
  abstract create(intent: IIntent): IActivityController;
}

@singleton(IActivityFactory)
@inject(All.of(IActivitySpecification))
export class ActivityFactory implements IActivityFactory {
  constructor(private activitySpecifications: IActivitySpecification[]) {
  }

  create(intent) {
    const activitySpec = this.activitySpecifications.find(spec => spec.intent.key === intent.key);
    return activitySpec.create();
  }
}
