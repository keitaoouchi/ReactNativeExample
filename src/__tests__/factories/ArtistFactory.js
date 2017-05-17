import {Factory} from "rosie";
import Artist from "../../../src/repository/Artist";

export default ArtistFactory =
  Factory.define('Artist', Artist).sequence('id').sequence('name', (i) => `Name-${i}`).sequence('url', (i) => `https://example.com/${i}`).sequence('spotifyURL', (i) => `https://example.com/${i}`).sequence('imageURL', (i) => `https://example.com/${i}`);