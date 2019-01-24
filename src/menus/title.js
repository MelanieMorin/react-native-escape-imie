import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default class Title extends PureComponent {
  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleH3}>{`React   Native   Presents`}</Text>
        <Text style={styles.titleH1}>Escape The</Text>
        <Text style={styles.titleH2}>IMIE</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  titleContainer: {
    marginTop: 90,
    marginBottom: 60,
    alignItems: "center"
  },
  titleH1: {
    fontSize: 60,
    color: "$escapeImieMenuPrimaryColor",
    textShadowColor: "$escapeImieMenuSecondaryColor",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 0,
    fontFamily: "$escapeImieMenuFont"
  },
  titleH2: {
    fontSize: 40,
    color: "$escapeImieMenuPrimaryColor",
    textShadowColor: "$escapeImieMenuSecondaryColor",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 0,
    fontFamily: "$escapeImieMenuFont"
  },
  titleH3: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "$escapeImieMenuFont"
  }
});
