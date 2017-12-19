export default class Track {
  constructor({id, name, preview_url, track_number, duration_ms}) {
    this.id = id;
    this.name = name;
    this.preview_url = preview_url;
    this.track_number = track_number;
    this.duration_ms = duration_ms;
  }
}