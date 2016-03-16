import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class IObjectView {
  abstract render(props: {fields: any[], error: string}): any;
}

@transient(IObjectView)
@autoinject()
export class ObjectView implements IObjectView {
  render({fields, error}) {
    return <div>{fields} {error}</div>;
  }
}
