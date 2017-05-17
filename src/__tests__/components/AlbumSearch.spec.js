import "react-native";
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import AlbumSearch from "../../../src/components/AlbumSearch";
import reducer from "../../redux/reducers";

describe('AlbumSearch', () => {

  beforeAll(() => {
    this.store = createStore(reducer);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={this.store}><AlbumSearch /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});