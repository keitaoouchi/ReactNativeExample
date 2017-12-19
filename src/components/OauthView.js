import React from "react";
import { WebView } from "react-native";
import uuid from "uuid/v4";
import Color from "../misc/Color";
import URL from "url-parse";
import Authentication from "../model/Authentication";

export default class OauthView extends React.Component {

  constructor(props) {
    super(props);

    const clientId = "4ea85a5da08444a0b7298218dc163000";
    const redirectTo = encodeURIComponent("https://github.com/keitaoouchi/ReactNativeExample");
    this.oAuthState = uuid();

    this.oAuthUrl = "https://accounts.spotify.com/authorize?" +
    `client_id=${clientId}&` +
    "response_type=token&" +
    `redirect_uri=${redirectTo}&` +
    `state=${this.oAuthState}`;

    this.dispatch = props.dispatch;
  }

  processNavigation(navigation) {
    const url = new URL(navigation.url);
    if (url.host === "github.com" && url.pathname === "/keitaoouchi/ReactNativeExample") {
      const tokenMatcher = url.hash.match(/access_token=(.+)&/);
      const expiresInMatcher = url.hash.match(/expires_in=(\d+)/);
      if (tokenMatcher && expiresInMatcher) {
        const token = tokenMatcher[1];
        const expiresIn = new Date().getTime() + parseInt(expiresInMatcher[1], 10) * 1000
        const epoch = expiresIn.toString();
        Authentication.save(token, epoch).then(() => {
          this.dispatch({type: "AUTHENTICATED"});
        })
      } else {
        this.dispatch({type: "NOT_AUTHENTICATED"});
      }

    }
  }

  render() {
    return (<WebView
      onNavigationStateChange={this.processNavigation}
      source={{uri: this.oAuthUrl}}
      style={style.root}
    />);
  }
}

const style = {
  root: {flex: 1, backgroundColor: Color.white, marginTop: 16},
};