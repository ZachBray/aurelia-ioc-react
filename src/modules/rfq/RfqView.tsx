import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class IRfqView {
  abstract render(props: {productForm: any}): any;
}

@transient(IRfqView)
@autoinject()
export class RfqView implements IRfqView {
  render({productForm}) {
    return <div>{productForm}</div>;
  }
}
