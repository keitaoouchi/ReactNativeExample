import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import AlbumHeader from "../../../src/components/AlbumHeader";
import AlbumFactory from "../factories/AlbumFactory";
import AlbumDetailFactory from "../factories/AlbumDetailFactory";

describe('AlbumHeader', () => {
  it('renders correctly', () => {
    const album = AlbumFactory.build('Album');
    const albumDetail = AlbumDetailFactory.build('AlbumDetail');
    const tree = renderer.create(
      <AlbumHeader album={album} albumDetail={albumDetail}
                   onPressArtistName={() => {
                   }}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
