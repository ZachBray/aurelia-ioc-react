import {autoinject, singleton} from 'aurelia-dependency-injection';
import {IIntent} from '../shell/domain/intents/IIntent';

@singleton(IIntent) // TODO: This doesn't work as expected if also resolving CalulcateIntent
@autoinject()
export class CalculateIntent implements IIntent {
  key = 'calculate';
  displayName = 'Calculate';

  toString() {
    return this.displayName;
  }
}
