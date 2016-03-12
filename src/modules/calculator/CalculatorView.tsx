import * as React from 'react';

export class CalculatorView extends React.Component<{result: number}, {}> {
  render() {
    return <div>{this.props.result}</div>;
  }
}
