import {IIntent} from '../intents/IIntent';
import {IActivityController} from './IActivityController';

export abstract class IActivitySpecification {
  key: string;
  intent: IIntent;
  abstract create(): IActivityController;
}
