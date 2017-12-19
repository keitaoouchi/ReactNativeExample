import React from "react";
import { View } from "react-native";
import AlbumSearchContents from "./AlbumSearchContents";
import AlbumSearchBar from "./AlbumSearchBar";
import Color from "../misc/Color";

export default class AlbumSearch extends React.Component {

  render() {
    return (
      <View style={style.root}>
        <AlbumSearchBar {...this.props} />
        <AlbumSearchContents />
      </View>
    )
  }

}


const style = {
  root: {flex: 1, backgroundColor: Color.black},
};
