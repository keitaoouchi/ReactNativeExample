import AboutAlbumActionTypes from "./AboutAlbumActionTypes";
import AlbumDetail from "./../../repository/AlbumDetail";

export default class AboutAlbumActionCreator {

  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  fetchAlbumDetail(album) {
    AlbumDetail.fetch(album).then(
      albumDetail => {
        this.dispatcher.dispatch({
          type: AboutAlbumActionTypes.UPDATE_ALBUM_DETAIL,
          albumDetail,
        });
      },
    );
  }
};