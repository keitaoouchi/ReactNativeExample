import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import HorizontalAlbumCoverCollection from "../../../src/components/HorizontalAlbumCoverCollection";

describe('HorizontalAlbumCoverCollection', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <HorizontalAlbumCoverCollection title="test" albums={[]}
                                      onPress={() => {
                                      }}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});