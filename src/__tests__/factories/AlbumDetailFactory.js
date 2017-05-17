import {Factory} from "rosie";
import AlbumDetail from "../../../src/repository/AlbumDetail";
import moment from "moment";

export default AlbumFactory =
  Factory.define('AlbumDetail', AlbumDetail).attr('tracks', []).sequence('label', (i) => `Label-${i}`).sequence('spotifyURL', (i) => `https://example.com/${i}`).sequence('releasedAt', () => moment().format('YYYY-MM-DD'));

