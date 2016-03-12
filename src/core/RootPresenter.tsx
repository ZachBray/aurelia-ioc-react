import * as React from 'react';
import * as Rx from 'rx';

export class RootPresenter extends React.Component<{view$: Rx.IObservable<any>}, {view: any}> {
  subscription = new Rx.SingleAssignmentDisposable();

  componentWillMount() {
    this.subscription.setDisposable(this.props.view$.subscribe(view => this.setState({view})));
  }

  componentWillUnmount() {
    this.subscription.dispose();
  }

  render() {
    return <div>{this.state.view}</div>;
  }
}
