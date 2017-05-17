import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import AlbumCollection from "../../../src/components/AlbumCollection";

describe('AlbumCollection', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <AlbumCollection albums={[]}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
