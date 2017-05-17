import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import AboutArtist from "../../../src/components/AboutArtist";
import ArtistFactory from "../factories/ArtistFactory";
import FetchMock from "fetch-mock";

describe('AboutArtist', () => {

  beforeAll(() => {
    FetchMock.get('*', {});
  });

  it('renders correctly', () => {
    const artist = ArtistFactory.build('Artist');
    const tree = renderer.create(
      <AboutArtist artist={artist}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});