import React from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import Workaround from "../misc/Workaround";
import Color from "../misc/Color";
import ListenOnSpotifyButton from "./ListenOnSpotifyButton";
import dismissKeyboard from "dismissKeyboard";

export default InitSearchView = () => {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={style.root}>
        <Text style={style.mainText}>検索してみよう。</Text>
        <Text style={style.subText}>好きなアーティストを探してみて</Text>
        <ListenOnSpotifyButton
          url="https://open.spotify.com/"
          title="Spotifyを開く"
          color={Color.pink}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = {
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.black,
    ...Workaround.root,
  },
  mainText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    margin: 16,
  },
  subText: {
    color: 'white',
    opacity: 0.7,
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 32,
  },
};