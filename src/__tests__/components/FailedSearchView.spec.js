import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import FailedSearchView from "../../../src/components/FailedSearchView";

describe('FailedSearchView', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <FailedSearchView />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});