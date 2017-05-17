import React from "react";
import {Animated, Easing, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class HorizontalAlbumCoverCollection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  render() {
    const title = this.props.title;
    const albums = this.props.albums;
    const onPress = this.props.onPress;

    return (
      <View style={ style.root }>
        <Text style={ style.title }>{title}</Text>
        <ScrollView
          horizontal={true}
          style={{height: 140}}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          bounces={true}
          directionalLockEnabled={true}
          automaticallyAdjustContentInsets={false}
        >
          {albums.map((album, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => onPress(album)}
            >
              <Animated.Image
                source={{uri: album.coverImageURL}}
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
            </TouchableOpacity>),
          )}
        </ScrollView>
      </View>
    );
  }
}

const style = {
  root: {marginBottom: 8},
  title: {fontSize: 16, color: 'white', margin: 8},
  image: {width: 120, height: 120, margin: 8},
};
