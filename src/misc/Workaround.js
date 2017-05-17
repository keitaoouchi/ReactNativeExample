import {Dimensions, Platform} from "react-native";

// this is a Really sorry object.
export default Workaround = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  style: {
    root: {
      ...Platform.select({
        ios: {
          marginTop: 64,
        },
        android: {
          marginTop: 54,
        },
      }),
      flex: 1,
    },
  },
};