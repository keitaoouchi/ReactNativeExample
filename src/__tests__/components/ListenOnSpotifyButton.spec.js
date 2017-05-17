import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import ListenOnSpotifyButton from "../../../src/components/ListenOnSpotifyButton";

describe('ListenOnSpotifyButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ListenOnSpotifyButton url="https://example.com"/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
