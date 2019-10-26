import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Bananas } from "./Bananas";
import { Blink } from "./Blink";
import { LotsOfStyles } from "./LotsOfStyles";
import { FixedDimensionsBasics } from "./FixedDimensionsBasics";

export class FlexDimensionsBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `heigtht: 300` instead of `flex: 1`?
      <View style={{ flex: 0.95 }}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 2, backgroundColor: "skyblue", alignItems: "center" }}>
          <Text style={{ color: "#35F" }}>Hello</Text>
          <Blink text="world" />
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
            backgroundColor: "steelblue",
            justifyContent: "center",
            alignContent: "center",
            flexShrink: 1
          }}
        >
          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
              {this.state.text
                .split(" ")
                .map(word => word && "🍕")
                .join(" ")}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
