import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class RouterScroll extends Component<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <></>;
  }
}

export default withRouter(RouterScroll);
