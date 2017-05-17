import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {Actions} from "react-native-router-flux";
import AlbumCover from "./AlbumCoverCell";
import Workaround from "../misc/Workaround";

export default AlbumCollection = (props) => (
  <View style={{...Workaround.style.root}}>
    <FlatList
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={
            () => Actions.album({title: item.title, album: item})
          }
        >
          <AlbumCover album={item}/>
        </TouchableOpacity>
      )}
      data={props.albums}
      keyExtractor={(item, index) => index}
    />
  </View>
);
