import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import InitSearchView from "../../../src/components/InitSearchView";

describe('InitSearchView', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <InitSearchView />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});