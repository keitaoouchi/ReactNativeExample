import {ReduceStore} from "flux/utils";
import TrackPlayerActionTypes from "./../action/TrackPlayerActionTypes";

export default class TrackPlayerStore extends ReduceStore {

  getInitialState() {
    return {
      playingTrack: null,
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case TrackPlayerActionTypes.PLAY_TRACK:
        return Object.assign({}, state, {playingTrack: action.track});
      case TrackPlayerActionTypes.STOP_TRACK:
        return Object.assign({}, state, {playingTrack: null});
      case TrackPlayerActionTypes.TOGGLE_TRACK:
        if (state.playingTrack) {
          if (state.playingTrack.id === action.track.id) {
            return Object.assign({}, state, {playingTrack: null});
          } else {
            return Object.assign({}, state, {playingTrack: action.track});
          }
        } else {
          return Object.assign({}, state, {playingTrack: action.track});
        }
      default:
        return state;
    }
  }
}