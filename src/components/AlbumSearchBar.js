import {connect} from "react-redux";
import SearchBar from "./SearchBar";

const mapStateToProps = (state) => {
  return {inputValue: state.inputValue};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => dispatch({type: 'UPDATE_INPUT', value: text}),
    dispatch,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, {
    ...stateProps,
    ...dispatchProps,
    // redux-saga
    onSubmit: () => {
      dispatchProps.dispatch(
        {type: 'ALBUM_SEARCH_REQUEST', keyword: stateProps.inputValue});
    },
  });
};

export default AlbumSearchBar = connect(mapStateToProps, mapDispatchToProps,
  mergeProps)(SearchBar);
