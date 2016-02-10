import * as React from 'react';
import Calculator from './calculator';

export default class App extends React.Component<{}, {}> {
  render() {
    return <div>{new Calculator().add(2,2)}</div>;
  }
}
