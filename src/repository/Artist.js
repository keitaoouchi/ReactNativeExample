export default class Artist {

  constructor({id, name, url, spotifyURL, imageURL}) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.spotifyURL = spotifyURL;
    this.imageURL = imageURL;
  }

  static fetch(url) {
    return fetch(
      url,
    ).then(
      res => res.json(),
    ).then(
      json => Artist._trans(json),
    );
  }

  fetchRelatedArtists() {
    return fetch(
      `${this.url}/related-artists`,
    ).then(
      res => res.json(),
    ).then(
      json => {
        return json.artists.map(json => Artist._trans(json)).filter(artist => !!artist);
      },
    );
  }

  static _trans(json) {
    if (json.images.length === 0) {
      return null;
    }
    return new Artist({
      id: json.id,
      name: json.name,
      url: json.href,
      spotifyURL: json.external_urls.spotify,
      imageURL: json.images[0].url,
    });
  }
}