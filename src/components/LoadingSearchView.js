import React from "react";
import {ActivityIndicator, View} from "react-native";
import Color from "../misc/Color";
import Workaround from "../misc/Workaround";

export default LoadingSearchView = () => (
  <View style={ style.root }>
    <ActivityIndicator
      animating={true}
      color="white"
      size="large"
    />
  </View>
);

const style = {
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.black,
    ...Workaround.root,
  },
};