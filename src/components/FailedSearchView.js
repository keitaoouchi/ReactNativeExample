import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import Workaround from "../misc/Workaround";
import Color from "../misc/Color";
import dismissKeyboard from "dismissKeyboard";

export default FailedSearchView = () => (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={style.root}>
      <Icon style={style.icon} name="exclamation-triangle" size={56}
            color={Color.pink}/>
      <Text style={style.mainText}>検索時に問題が発生しました</Text>
      <Text style={style.subText}>しばらく待って再度お試しください</Text>
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
  icon: {
    margin: 12,
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