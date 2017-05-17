import React from "react";
import {Animated, Easing, Text, TouchableOpacity, View} from "react-native";
import Util from "../Util";
import ListenOnSpotifyButton from "./ListenOnSpotifyButton";

export default class AlbumHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  render() {
    const album = this.props.album;
    const albumDetail = this.props.albumDetail;
    const onPressArtistName = this.props.onPressArtistName;
    const spotifyURL = !!albumDetail && albumDetail.spotifyURL || '';
    return (
      <View style={ style.root }>
        <Animated.Image
          source={ {uri: album.coverImageURL}}
          style={ [style.image, {opacity: this.state.fadeAnim}]}
          onLoadEnd={() => {
            Animated.timing(
              this.state.fadeAnim,
              {
                toValue: 1,
                easing: Easing.easeInOut,
              },
            ).start();
          }}
        />
        <Text style={ style.albumTitle }>{album.title}</Text>
        <View style={ style.artistName }>
          <Text style={ style.by }>By</Text>
          <TouchableOpacity
            style={ style.button }
            onPress={onPressArtistName}>
            <View>
              <Text style={ style.buttonText }>{album.artist.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={ style.miscInfo }>{Util.releasedYear(albumDetail)}</Text>
        <ListenOnSpotifyButton url={spotifyURL}/>
      </View>
    );
  }
}

const style = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  by: {opacity: 0.5, fontSize: 16, color: 'white'},
  button: {padding: 8},
  buttonText: {color: 'white', fontWeight: 'normal', fontSize: 16},
  image: {width: 240, height: 240, margin: 20},
  albumTitle: {fontSize: 24, margin: 12, color: 'white', fontWeight: 'bold'},
  artistName: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  miscInfo: {fontSize: 12, margin: 8, opacity: 0.5, color: 'white'},
};