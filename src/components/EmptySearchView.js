import React from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import Workaround from "../misc/Workaround";
import Color from "../misc/Color";
import dismissKeyboard from "dismissKeyboard";

export default EmptySearchView = () => (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={style.root}>
      <Text style={style.mainText}>該当する結果は見つかりませんでした</Text>
      <Text style={style.subText}>別のキーワードをお試しください</Text>
    </View>
  </TouchableWithoutFeedback>
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
  mainText: {
    color: 'white',
    fontSize: 20,
    margin: 8,
  },
  subText: {
    color: 'white',
    opacity: 0.7,
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
  },
};