import React from "react";
import {Platform, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "../misc/Color";
import Workaround from "../misc/Workaround";

export default SearchBar = (props) => (
  <View style={style.root}>
    <View style={style.search}>
      <Icon name="search" size={20} color="lightgray" style={style.icon}/>
      <TextInput
        style={style.input}
        onChangeText={props.onChange}
        onSubmitEditing={props.onSubmit}
        value={props.inputValue}
      />
    </View>
  </View>
);

const style = {
  root: {
    backgroundColor: Color.ivory,
    height: Workaround.style.root.marginTop,
    flex: 0,
  },
  search: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 20,
      },
      android: {
        marginTop: 8,
      },
    }),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 8,
    flex: 1,
  },
  input: {
    flex: 12,
    ...Platform.select({
      ios: {
        height: 40,
      },
      android: {
        height: 44,
      },
    }),
    marginRight: 12,
    paddingLeft: 12,
    borderColor: Color.ivory,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Color.gray,
  },
};
