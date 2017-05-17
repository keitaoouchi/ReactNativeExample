import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import AlbumCoverCell from "../../../src/components/AlbumCoverCell";
import AlbumFactory from "../factories/AlbumFactory";

describe('AlbumCoverCell', () => {
  it('renders correctly', () => {
    const album = AlbumFactory.build('Album');
    const tree = renderer.create(
      <AlbumCoverCell album={album}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
