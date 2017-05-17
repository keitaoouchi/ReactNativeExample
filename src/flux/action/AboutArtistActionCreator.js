import AboutArtistActionTypes from "./AboutArtistActionTypes";
import Album from "./../../repository/Album";
import Artist from "./../../repository/Artist";

export default class AboutArtistActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  fetchAlbums(artist) {
    Album.fetch(artist).then(
      items => {
        const albums = [];
        const singles = [];
        items.forEach(item => {
          if (item.type === 'album') {
            albums.push(item);
          } else {
            singles.push(item);
          }
        });
        this.dispatcher.dispatch({
          type: AboutArtistActionTypes.UPDATE_RELEASES,
          albums,
          singles,
        });
      },
    );
  }

  reloadArtist(artist) {
    this.dispatcher.dispatch({type: AboutArtistActionTypes.UPDATE_ARTIST, artist});

    Artist.fetch(artist.url).then(
      artist => this.dispatcher.dispatch(
        {type: AboutArtistActionTypes.UPDATE_ARTIST, artist}),
    );
  }

  fetchRelatedArtists(artist) {
    artist.fetchRelatedArtists().then(
      relatedArtists => this.dispatcher.dispatch({
        type: AboutArtistActionTypes.UPDATE_RELATED_ARTISTS,
        relatedArtists,
      }),
    );
  }

};