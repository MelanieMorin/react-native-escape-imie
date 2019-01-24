import React, { PureComponent } from "react";
import { View, StatusBar, Platform } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import MainMenu from "./src/menus/main";
import Game from "./src/game";

const defaultTheme = {
  $escapeImieMenuMaxWidth: 500,
  $escapeImieMenuFont: Platform.OS === "ios" ? "System" : "normal",
  $escapeImieMenuBackgroundColor: "black",
  $escapeImieMenuPrimaryColor: "#2068E3",
  $escapeImieMenuSecondaryColor: "#00FFFF"//"#25D9D9"
};

export default class EscapeImie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gameVisible: false
    };
  }

  async componentWillMount() {
    await EStyleSheet.build(Object.assign({}, defaultTheme, this.props.theme));
  }

  toggleGame = gameVisible => {
    this.setState({
      gameVisible
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} hidden={this.state.gameVisible} animated showHideTransition={"slide"} />
        <MainMenu onPlayGame={_ => this.toggleGame(true)} />
        <Game
          visible={this.state.gameVisible}
          onClose={_ => this.toggleGame(false)}
        />
      </View>
    );
  }
}

EscapeImie.defaultProps = {
  theme: defaultTheme
};

const styles = EStyleSheet.create({
  container: {
    flex: 1
  }
});
