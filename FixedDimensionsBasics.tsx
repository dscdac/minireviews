import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export class FixedDimensionsBasics extends Component {
  /*
  styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      color: "#12F"
    }
  });
  */

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
        <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}
