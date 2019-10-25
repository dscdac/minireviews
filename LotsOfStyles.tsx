import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  },
  blackBack: {
    backgroundColor: "black"
  },
  whiteColor: {
    color: "white"
  }
});

export class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        <Text style={[styles.bigBlue, styles.blackBack, styles.whiteColor]}>WHITE TEXT BLACK BACKGROUND</Text>
      </View>
    );
  }
}
