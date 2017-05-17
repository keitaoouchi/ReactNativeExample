import React from "react";
import {Animated, Easing, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Color from "../misc/Color";

export default class RelatedArtistCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  render() {
    const title = this.props.title;
    const artists = this.props.artists;
    const onPress = this.props.onPress;
    return (
      <View style={style.root}>
        <Text style={style.title}>{title}</Text>
        <ScrollView
          horizontal={true}
          style={style.scroll}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          bounces={true}
          directionalLockEnabled={true}
          automaticallyAdjustContentInsets={false}
        >
          {artists.map((artist, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => onPress(artist)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Animated.Image
                source={{uri: artist.imageURL}}
                style={[style.image, {opacity: this.state.fadeAnim}]}
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
              <Text
                style={style.artistName}
                numberOfLines={2}
              >{artist.name}</Text>
            </TouchableOpacity>),
          )}
        </ScrollView>
      </View>
    );
  }
}

const style = {
  root: {
    marginBottom: 8,
  },
  scroll: {height: 180},
  title: {
    fontSize: 16,
    color: 'white',
    margin: 8,
  },
  image: {
    width: 120,
    height: 120,
    margin: 8,
  },
  artistName: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: Color.black,
    opacity: 0.6,
    width: 120,
    height: 36,
    left: 0,
    right: 0,
    fontSize: 14,
  },
};
