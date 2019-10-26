import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Bananas } from "./Bananas";
import { Blink } from "./Blink";
import { LotsOfStyles } from "./LotsOfStyles";
import { FixedDimensionsBasics } from "./FixedDimensionsBasics";
import { FlexDimensionsBasics } from "./FlexDimensionsBasics";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
    //   <Text>Hello world!</Text>
    //   <Bananas />
    //   <Blink text="Hello Blink!!" />
    //   <Blink />
    //   <LotsOfStyles />
    //   <FixedDimensionsBasics />
    //   <FlexDimensionsBasics />
    // </View>

    // <View style={{ flex: 1 }}>
    //   <FlexDimensionsBasics />
    // </View>

    <View style={styles.container}>
      <FlexDimensionsBasics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#ABC",
    //alignItems: "center"
    justifyContent: "flex-end"
  },
  text: {
    color: "#12F"
  }
});
