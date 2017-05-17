import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import ArtistHeader from "../../../src/components/ArtistHeader";
import ArtistFactory from "../factories/ArtistFactory";

describe('ArtistHeader', () => {

  it('renders correctly', () => {
    const artist = ArtistFactory.build('Artist');
    const tree = renderer.create(
      <ArtistHeader artist={artist}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
