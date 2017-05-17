import React from "react";
import {Animated, Easing, Text, View} from "react-native";
import ListenOnSpotifyButton from "./ListenOnSpotifyButton";

export default class ArtistHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  render() {
    return (
      <View style={ style.root }>
        {this.props.artist.imageURL ? <Animated.Image
          source={{uri: this.props.artist.imageURL}}
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
          : null
        }
        <Text style={style.artistName}>{this.props.artist.name}</Text>
        <ListenOnSpotifyButton url={this.props.artist.spotifyURL}/>
      </View>
    );
  }
}

const style = {
  root: {
    width: 320,
    height: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {width: 160, height: 160, borderRadius: 80},
  artistName: {fontSize: 20, margin: 16, color: 'white'},
};