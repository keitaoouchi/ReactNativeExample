import React from "react";
import {Linking, Text, TouchableOpacity, View} from "react-native";
import Color from "../misc/Color";

export default ListenOnSpotifyButton = ({url, color, title = 'Spotifyで聴く'}) => (
  <TouchableOpacity
    onPress={() => {
      if (!!url && Linking.canOpenURL(url)) {
        Linking.openURL(url);
      }
    }}
  >
    <View style={ [style.button, !!color && {backgroundColor: color}] }>
      <Text style={ style.text }>{title}</Text>
    </View>
  </TouchableOpacity>
);

const style = {
  button: {
    backgroundColor: Color.green,
    height: 44,
    width: 200,
    padding: 8,
    borderRadius: 22,
    margin: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
  },
};