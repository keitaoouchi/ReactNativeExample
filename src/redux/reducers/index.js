import {combineReducers} from "redux";
import {STATUS} from "../../components/AlbumSearch";

const inputValue = (state = '水曜日のカンパネラ', action) => {
  if (action.type === 'UPDATE_INPUT') {
    return action.value;
  }
  return state;
};

const albums = (state = [], action) => {
  if (action.type === 'UPDATE_ALBUMS') {
    return action.albums;
  }
  return state;
};

const searchStatus = (state = STATUS.INIT, action) => {
  if (action.type === 'UPDATE_STATUS') {
    return action.status || state;
  }
  return state;
};

export default reducer = combineReducers({
  inputValue,
  albums,
  searchStatus,
});
