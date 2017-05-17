import Track from "./Track";

export default class AlbumDetail {

  constructor({tracks, label, releasedAt, spotifyURL}) {
    this.tracks = tracks;
    this.label = label;
    this.releasedAt = releasedAt;
    this.spotifyURL = spotifyURL;
  }

  static fetch(album) {
    return fetch(
      album.url,
    ).then(
      res => res.json(),
    ).then(
      json => {
        return new AlbumDetail({
          tracks: json.tracks.items.map((item) => new Track(item)),
          label: json.label,
          releasedAt: json.release_date,
          spotifyURL: json.external_urls.spotify,
        });
      },
    );
  }
}