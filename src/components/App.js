import React from "react";
import {Router, Scene} from "react-native-router-flux";
import {applyMiddleware, createStore} from "redux";
import {connect, Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import AlbumSearch from "./AlbumSearch";
import AboutAlbum from "./AboutAlbum";
import AboutArtist from "./AboutArtist";
import reducer from "../redux/reducers/index";
import saga from "../redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
const ReduxRouter = connect()(Router);

export default App = (props) => (
  <Provider store={store}>
    <ReduxRouter>
      <Scene key="search" component={AlbumSearch} initial={true}/>
      <Scene key="album" component={AboutAlbum}/>
      <Scene key="artist" component={AboutArtist}/>
    </ReduxRouter>
  </Provider>
);
