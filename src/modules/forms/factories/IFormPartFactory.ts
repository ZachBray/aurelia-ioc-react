import {IFormSchema} from "../domain/IFormSchema";
export abstract class IFormPartFactory {
  kind: string;
  abstract create(schema: IFormSchema) {

  }
}
