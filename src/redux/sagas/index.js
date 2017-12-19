import {call, put, takeLatest} from "redux-saga/effects";
import Album from "../../model/Album";
import {STATUS} from "../../components/AlbumSearchContents";
import Authentication from "../../model/Authentication";

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

function* loadAuthentication() {
  try {
    const auth = yield call(Authentication.load)
    if(auth.isValid()) {
      yield put({type: "AUTHENTICATED"})
    } else {
      // FIXME: ????
      yield call(Authentication.invalidate)
      yield put({type: "NOT_AUTHENTICATED"})
    }
  } catch (e) {
    yield put({type: "NOT_AUTHENTICATED"})
  }
}

function* searchAlbumAsync() {
  yield takeLatest('ALBUM_SEARCH_REQUEST', searchAlbum,);
}

function* loadAuthenticationAsync() {
  yield takeLatest('LOAD_AUTHENTICATION', loadAuthentication,);
}

export {searchAlbumAsync, loadAuthenticationAsync};