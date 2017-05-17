import {ReduceStore} from "flux/utils";
import AboutArtistActionTypes from "./../action/AboutArtistActionTypes";

export default class AboutArtistStore extends ReduceStore {

  getInitialState() {
    return {
      artist: null,
      albums: [],
      singles: [],
      relatedArtists: [],
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case AboutArtistActionTypes.UPDATE_ARTIST:
        return Object.assign({}, state, {artist: action.artist});
      case AboutArtistActionTypes.UPDATE_RELEASES:
        return Object.assign({}, state,
          {albums: action.albums, singles: action.singles});
      case AboutArtistActionTypes.UPDATE_RELATED_ARTISTS:
        return Object.assign({}, state, {relatedArtists: action.relatedArtists});
      default:
        return state;
    }
  }
}