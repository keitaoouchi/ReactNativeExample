import ReactNativeSound from "react-native-sound";
import TrackPlayerStore from "./../flux/store/TrackPlayerStore";
import TrackPlayerActionCreator from "./../flux/action/TrackPlayerActionCreator";
import {Dispatcher} from "flux";

export default class TrackPlayer {

  static shared = new TrackPlayer();

  constructor() {
    this._player = null;
    const dispatcher = new Dispatcher();
    this.actionCreator = new TrackPlayerActionCreator(dispatcher);
    this.store = new TrackPlayerStore(dispatcher);
    this.store.addListener(() => {
      const state = this.store.getState();
      const playingTrack = state.playingTrack;
      if (playingTrack) {
        this._play(playingTrack);
      } else {
        this._stop();
      }
    });
  }

  _play(track) {
    this._stop();
    this._player = new ReactNativeSound({uri: track.preview_url}, (e) => {
      if (e || !this._player) {
        return;
      }
      this._player.play(() => (this.actionCreator && this.actionCreator.releasePlayer()));
    })
  }

  _stop() {
    if (this._player) {
      this._player.release();
    }
    this._player = null;
  }

}