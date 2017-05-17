import {ReduceStore} from "flux/utils";
import AboutAlbumActionTypes from "./../action/AboutAlbumActionTypes";

export default class AboutAlbumStore extends ReduceStore {

  getInitialState() {
    return {
      albumDetail: null,
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case AboutAlbumActionTypes.UPDATE_ALBUM_DETAIL:
        return Object.assign({}, state, {albumDetail: action.albumDetail});
      default:
        return state;
    }
  }
}