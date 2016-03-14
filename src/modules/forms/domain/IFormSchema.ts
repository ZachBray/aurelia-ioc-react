interface IFieldSchema {
  key: string;
  displayName: string;
  fieldType: 'text';
  isRequired: boolean;
}

export interface IFormSchema {
  fields: IFieldSchema[];
}
