import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class IFormView {
  abstract render(props: {fields: any[]}): any;
}

@transient(IFormView)
@autoinject()
export class FormView implements IFormView {
  render({fields}) {
    return <div>{fields}</div>;
  }
}
