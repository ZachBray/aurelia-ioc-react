import * as React from 'react';
import {Textfield} from 'react-mdl';
import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class ITextInputView {
  abstract render(props: {
    label: string,
    value: string,
    onChange: (value: string) => void;
  }): any;
}

@transient(ITextInputView)
@autoinject()
export class TextInputView implements ITextInputView {
  render({label, value, onChange}) {
    return <Textfield label={label} 
                      floatingLabel={true}
                      value={value} 
                      onChange={e => onChange(e.target.value)} />;
  }
}
