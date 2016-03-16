import * as React from 'react';
import TextField from 'material-ui/lib/text-field';
import {transient, autoinject} from 'aurelia-dependency-injection';
import {ITextFieldSchema} from "../../domain/IFormSchema";

export abstract class ITextInputView {
  abstract render(props: {
    value: string,
    error: string,
    schema: ITextFieldSchema,
    onChange: (value: string) => void;
  }): any;
}

@transient(ITextInputView)
@autoinject()
export class TextInputView implements ITextInputView {
  render({value, error, schema, onChange}) {
    return <TextField floatingLabelText={schema.label}
                      hintText={schema.hint}
                      errorText={error}
                      value={value}
                      onChange={e => onChange(e.target.value)} />;
  }
}
