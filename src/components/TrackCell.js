import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Util from "../Util";

export default function TrackCell({track, onPress, isPlaying}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={ style.root }>
        {isPlaying ?
          <Icon style={style.icon} name="pause" size={12} color="white"/>
          : <Text style={style.number}>{track.track_number}.</Text>
        }
        <Text style={ style.name }>{track.name}</Text>
        <Text style={ style.duration }>{Util.millisecToHumanReadable(
          track.duration_ms)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = {
  root: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
  },
  icon: {flex: 2},
  number: {flex: 2, color: 'white'},
  name: {flex: 8, color: 'white'},
  duration: {flex: 2, color: 'white'},
};