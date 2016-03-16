export interface IFieldSchema {
  label: string;
  hint?: string;
}

export interface ITextFieldSchema extends IFieldSchema {
  kind: 'text';
  isMultiLine?: boolean;
  isPassword?: boolean;
}

export interface IFields<V> {
  [key: string]: V;
}

export interface IObjectSchema {
  kind: 'object';
  fields: IFields<IFormSchema>;
}

export type IFormSchema = IObjectSchema | ITextFieldSchema;
