import React from "react";
import {Animated, Easing, Text, View} from "react-native";
import Workaround from "../misc/Workaround";

export default class AlbumCoverCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      album: props.album,
      fadeAnim: new Animated.Value(0),
    };
  }

  render() {
    return (
      <View style={style.root}>
        <Animated.Image
          style={[style.image, {opacity: this.state.fadeAnim}]}
          source={{uri: this.state.album.coverImageURL}}
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
        <Animated.View style={[style.mask, {opacity: this.state.fadeAnim}]}>
          <Text
            style={ style.artistName }>{this.state.album.artist.name}</Text>
          <Text style={ style.albumName }>{this.state.album.title}</Text>
        </Animated.View>

      </View>
    );
  }
};

const style = {
  root: {width: Workaround.SCREEN_WIDTH, height: Workaround.SCREEN_WIDTH},
  image: {width: Workaround.SCREEN_WIDTH, height: Workaround.SCREEN_WIDTH},
  mask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistName: {
    marginBottom: 8,
    color: 'rgba(255,255,255,0.5)',
  },
  albumName: {
    color: 'white',
  },
};
