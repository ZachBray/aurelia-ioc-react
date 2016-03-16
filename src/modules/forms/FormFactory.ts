import {singleton, inject, All} from 'aurelia-dependency-injection';
import {IFormSchema} from "./domain/IFormSchema";

export abstract class IFormFactory {
  abstract create(schema: IFormSchema);
}

@singleton(IFormFactory)
export class FormFactory implements IFormFactory {
  constructor() {
  }

  create(schema) {
  }
}
