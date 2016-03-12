import * as React from 'react';
import {transient, autoinject} from 'aurelia-dependency-injection';

export abstract class ICalculatorView {
  abstract render(props: {result: number}): any;
}

@transient(ICalculatorView)
@autoinject()
export class CalculatorView implements ICalculatorView {
  render({result}) {
    return <div>{result}</div>;
  }
}
