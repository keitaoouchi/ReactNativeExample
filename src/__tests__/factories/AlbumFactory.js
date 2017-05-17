import {Factory} from "rosie";
import Album from "../../../src/repository/Album";
import ArtistFactory from "./ArtistFactory";

export default AlbumFactory =
  Factory.define('Album', Album).attr('type', 'album').sequence('url', (i) => `https://example.com/${i}`).sequence('coverImageURL', (i) => `https://example.com/${i}`).sequence('title', (i) => `AlbumTitle-${i}`).attr('artist', ArtistFactory.build('Artist'));
