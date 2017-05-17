import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import EmptySearchView from "../../../src/components/EmptySearchView";

describe('EmptySearchView', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <EmptySearchView />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});