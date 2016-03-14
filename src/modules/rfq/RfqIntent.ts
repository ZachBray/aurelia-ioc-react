import {autoinject, singleton} from 'aurelia-dependency-injection';
import {IIntent} from '../shell/domain/intents/IIntent';

@singleton(IIntent) // TODO: This doesn't work as expected if also resolving CalulcateIntent
@autoinject()
export class RfqIntent implements IIntent {
  key = 'rfq';
  displayName = 'Rfq';

  toString() {
    return this.displayName;
  }
}
