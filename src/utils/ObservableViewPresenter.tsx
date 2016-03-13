import * as React from 'react';
import * as Rx from 'rx';

export class ObservableViewPresenter extends React.Component<{view$: Rx.IObservable<any>}, {view: any}> {
  subscription = new Rx.SingleAssignmentDisposable();
  
  state = { view: null };

  componentWillMount() {
    this.subscription.setDisposable(this.props.view$.subscribe(view => this.setState({view})));
  }

  componentWillUnmount() {
    this.subscription.dispose();
  }

  render() {
    return this.state.view;
  }
}
