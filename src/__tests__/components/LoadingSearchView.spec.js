import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LoadingSearchView from "../../../src/components/LoadingSearchView";

describe('LoadingSearchView', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <LoadingSearchView />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});