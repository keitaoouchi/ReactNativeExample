import React from "react";
import PropTypes from 'prop-types';
import AlbumCollection from "./AlbumCollection";
import AlbumSearchBar from "./AlbumSearchBar";
import EmptySearchView from "./EmptySearchView";
import LoadingSearchView from "./LoadingSearchView";
import InitSearchView from "./InitSearchView";
import FailedSearchView from "./FailedSearchView";
import {Actions} from "react-native-router-flux";

export const STATUS = {
  INIT: 1,
  LOADING: 2,
  SUCCESS: 3,
  EMPTY: 4,
  FAILED: 5,
};

export default class AlbumSearchContents extends React.Component {

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };


  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    const store = this.context.store;

    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  render() {
    const state = this.context.store.getState();
    switch (state.searchStatus) {
      case STATUS.LOADING:
        return <LoadingSearchView />;
      case STATUS.EMPTY:
        return <EmptySearchView />;
      case STATUS.SUCCESS:
        return  <AlbumCollection albums={state.albums}/>;
      case STATUS.FAILED:
        return <FailedSearchView />;
      default:
        return <InitSearchView />;
    }
  }

}
