import fuzzysearch from 'fuzzysearch';
import {singleton, inject, All} from 'aurelia-dependency-injection';
import {IIntent} from '../domain/intents/IIntent';

export abstract class IIntentRepository {
  intents: IIntent[]; // TODO: Eventually this should be removed from the public interface
  abstract search(text: string): IIntent[];
}

@singleton(IIntentRepository)
@inject(All.of(IIntent))
export class IntentRepository implements IIntentRepository {
  constructor(public intents: IIntent[]) {}

  search(text) {
    return this.intents.filter(intent => fuzzysearch(text, intent.displayName));
  }
}
