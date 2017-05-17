import Artist from "./Artist";

export default class Album {

  constructor({type, coverImageURL, title, url, artist}) {
    this.type = type;
    this.coverImageURL = coverImageURL;
    this.title = title;
    this.url = url;
    this.artist = artist;
  }

  static _trans(json_items) {
    return json_items.map(item => {
      const images = item.images;
      const artists = item.artists;
      if (images && images.length > 0 && artists && artists.length > 0) {
        return new Album({
          type: item.album_type,
          coverImageURL: images[0].url,
          title: item.name,
          url: item.href,
          artist: new Artist({
            id: artists[0].id,
            name: artists[0].name,
            url: artists[0].href,
            spotifyURL: artists[0].external_urls.spotify,
            imageURL: null,
          }),
        });
      } else {
        return null;
      }
    }).filter(artist => !!artist);
  }

  static search(keyword) {
    return fetch(
      `https://api.spotify.com/v1/search?q=${encodeURI(
        keyword)}&type=album&market=JP`,
    ).then(
      res => res.json(),
    ).then(
      json => json.albums.items,
    ).then(
      json_items => Album._trans(json_items),
    );
  }

  static fetch(artist) {
    return fetch(
      `${artist.url}/albums?album_type=album,single&market=JP`,
    ).then(
      res => res.json(),
    ).then(
      json => json.items,
    ).then(
      json_items => Album._trans(json_items),
    );
  }
}
