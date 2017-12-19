import {combineReducers} from "redux";
import {STATUS} from "../../components/AlbumSearchContents";

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

const isAuthenticated = (state = false, action) => {
  if (action.type === "AUTHENTICATED") {
    return true;
  } else if (action.type === "NOT_AUTHENTICATED") {
    return false;
  }
  return state;
}

export default reducer = combineReducers({
  inputValue,
  albums,
  searchStatus,
  isAuthenticated
});
