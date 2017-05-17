import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import RelatedArtistCollection from "../../../src/components/RelatedArtistCollection";

describe('RelatedArtistCollection', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <RelatedArtistCollection title="test" artists={[]} onPress={() => {
      }}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});