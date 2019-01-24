import React from "react";
import { AppLoading, Asset, Font } from 'expo';
import EscapeImie from "@melaniemorin/react-native-escape-imie";
import Preload from "./Preload";

export default class App extends React.Component {
  state = {
    ready: false
  }

  async _loadAssetsAsync() {
    await Promise.all([
      ...Preload.images.map(x => Asset.fromModule(x).downloadAsync()),
      ...Preload.fonts.map(x => Font.loadAsync(x))
    ])
  }

  render() {
    if (!this.state.ready) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ ready: true })}
        />
      );
    }

    return (
      <EscapeImie
        theme={{
          $escapeImieMenuFont: "ArcadeClassic"
        }}
      />
    );
  }
}
