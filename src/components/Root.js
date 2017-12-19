import React from "react";
import PropTypes from "prop-types";
import OauthView from './OauthView'
import AlbumSearch from './AlbumSearch'

export default class Root extends React.Component {

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    const store = this.context.store;

    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch({type: "LOAD_AUTHENTICATION"});
  }

  render() {
    const state = this.context.store.getState();
    if(!state.isAuthenticated) {
      return <OauthView dispatch={this.context.store.dispatch} />;
    } else {
      return <AlbumSearch/>;
    }
  }

}
