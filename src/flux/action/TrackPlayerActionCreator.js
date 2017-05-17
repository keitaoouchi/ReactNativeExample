import TrackPlayerActionTypes from "./TrackPlayerActionTypes";

export default class TrackPlayerActionCreator {

  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  toggleTrack(track) {
    this.dispatcher.dispatch({
      type: TrackPlayerActionTypes.TOGGLE_TRACK,
      track,
    });
  }

  releasePlayer() {
    this.dispatcher.dispatch({
      type: TrackPlayerActionTypes.STOP_TRACK,
    });
  }
};