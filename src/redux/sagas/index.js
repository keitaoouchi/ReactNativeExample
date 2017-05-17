import {call, put, takeLatest} from "redux-saga/effects";
import Album from "../../repository/Album";
import {STATUS} from "../../components/AlbumSearch";

function* searchAlbum(action) {
  try {
    yield put({type: 'UPDATE_STATUS', status: STATUS.LOADING});
    yield put({type: 'UPDATE_ALBUMS', albums: []});
    const keyword = action.keyword;
    if (keyword === '') {
      yield put({type: 'UPDATE_STATUS', status: STATUS.INIT});
    } else {
      const albums = yield call(Album.search, keyword);
      if (albums.length > 0) {
        yield put({type: 'UPDATE_STATUS', status: STATUS.SUCCESS});
        yield put({type: 'UPDATE_ALBUMS', albums: albums});
      } else {
        yield put({type: 'UPDATE_STATUS', status: STATUS.EMPTY});
      }
    }
  } catch (e) {
    // TODO: エラーメッセージを活かすreducer実装
    yield put({type: 'UPDATE_STATUS', status: STATUS.FAILED});
    yield put({type: 'UPDATE_ALBUMS', albums: []});
  }
}

function* saga() {
  yield takeLatest('ALBUM_SEARCH_REQUEST', searchAlbum,);
}

export default saga;