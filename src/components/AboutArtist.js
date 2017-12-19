import React from "react";
import {ScrollView} from "react-native";
import {Actions} from "react-native-router-flux";
import ArtistHeader from "./ArtistHeader";
import Workaround from "../misc/Workaround";
import HorizontalAlbumCoverCollection from "./HorizontalAlbumCoverCollection";
import RelatedArtistCollection from "./RelatedArtistCollection";
import Color from "../misc/Color";
import AboutArtistActionCreator from "../flux/action/AboutArtistActionCreator";
import AboutArtistStore from "../flux/store/AboutArtistStore";
import {Dispatcher} from "flux";

const AboutArtistPresentation = ({artist, albums, singles, relatedArtists}) => (
  <ScrollView
    horizontal={false}
    style={{
      flex: 1,
      backgroundColor: Color.black, ...Workaround.style.root
    }}
    showsVerticalScrollIndicator={true}
    alwaysBounceVertical={true}
    bounces={true}
    directionalLockEnabled={true}
    automaticallyAdjustContentInsets={false}
  >
    <ArtistHeader
      artist={artist}
    />
    <HorizontalAlbumCoverCollection
      title="アルバム"
      albums={albums}
      onPress={(album) => Actions.album({title: album.title, album, hideNavBar: false})}
    />
    <HorizontalAlbumCoverCollection
      title="シングル"
      albums={singles}
      onPress={(album) => Actions.album({title: album.title, album, hideNavBar: false})}
    />
    <RelatedArtistCollection
      title="関連アーティスト"
      artists={relatedArtists}
      onPress={(artist) => Actions.artist({title: artist.name, artist, hideNavBar: false})}
    />
  </ScrollView>
);

export default class AboutArtist extends React.Component {

  constructor(props) {
    super(props);

    const dispatcher = new Dispatcher();
    this.actionCreator = new AboutArtistActionCreator(dispatcher);
    this.store = new AboutArtistStore(dispatcher);
  }

  componentDidMount() {
    this.store.addListener(() => this.forceUpdate());
    this.actionCreator.reloadArtist(this.props.artist);
    this.actionCreator.fetchAlbums(this.props.artist);
    this.actionCreator.fetchRelatedArtists(this.props.artist);
  }

  render() {
    const state = this.store.getState();
    return <AboutArtistPresentation
      artist={state.artist || this.props.artist}
      albums={state.albums}
      singles={state.singles}
      relatedArtists={state.relatedArtists}
    />;
  }
}
