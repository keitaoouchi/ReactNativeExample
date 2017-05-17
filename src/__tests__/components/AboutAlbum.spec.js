import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import AboutAlbum from "../../../src/components/AboutAlbum";
import AlbumFactory from "../factories/AlbumFactory";
import FetchMock from "fetch-mock";

describe('AboutAlbum', () => {

  beforeAll(() => {
    this.album = AlbumFactory.build('AlbumFactory');
    FetchMock.get('*', {});
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <AboutAlbum album={this.album}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});