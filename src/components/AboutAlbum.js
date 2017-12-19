import React from "react";
import {FlatList, View} from "react-native";
import {Actions} from "react-native-router-flux";
import AlbumHeader from "./AlbumHeader";
import TrackCell from "./TrackCell";
import Workaround from "../misc/Workaround";
import Color from "../misc/Color";
import AboutAlbumActionCreator from "../flux/action/AboutAlbumActionCreator";
import AboutAlbumStore from "../flux/store/AboutAlbumStore";
import {Dispatcher} from "flux";
import TrackPlayer from "./../misc/TrackPlayer";

const AboutAlbumPresentation = ({tracks, album, albumDetail, artist, playingTrack, actionCreator}) => (
  <View style={ style.root }>
    <FlatList
      enableEmptySections={true}
      data={tracks}
      keyExtractor={(item, index) => index}
      // FIXME: ListHeaderComponent would re-mount every time FlatList re-render it's item.
      // https://github.com/facebook/react-native/issues/13365
      ListHeaderComponent={() =>
        <AlbumHeader
          key={1}
          album={album}
          albumDetail={albumDetail}
          onPressArtistName={() => {
            Actions.artist({
              title: artist.name,
              album: album,
              artist: artist,
              hideNavBar: false
            });
          }}
        />
      }
      renderItem={({item}) => (
        <TrackCell
          track={item}
          onPress={() => actionCreator.toggleTrack(item)}
          isPlaying={playingTrack === item}
        />
      )}
    />
  </View>
);

export default class AboutAlbum extends React.Component {

  constructor(props) {
    super(props);

    const dispatcher = new Dispatcher();
    this.actionCreator = new AboutAlbumActionCreator(dispatcher);
    this.store = new AboutAlbumStore(dispatcher);
    this.player = TrackPlayer.shared;
  }

  componentDidMount() {
    this.store.addListener(() => this.forceUpdate());
    this.playerListener = this.player.store.addListener(() => this.forceUpdate());
    this.actionCreator.fetchAlbumDetail(this.props.album);
  }

  componentWillUnmount() {
    this.playerListener.remove();
  }

  render() {
    const state = this.store.getState();
    const playerState = this.player.store.getState();
    return <AboutAlbumPresentation
      tracks={state.albumDetail ? state.albumDetail.tracks : []}
      album={this.props.album}
      albumDetail={state.albumDetail}
      artist={this.props.album.artist}
      playingTrack={playerState.playingTrack}
      actionCreator={this.player.actionCreator}
    />;
  }
}

const style = {
  root: {flex: 1, backgroundColor: Color.black, ...Workaround.style.root},
};
