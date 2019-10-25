import React, { Component } from "react";
import { Text, View } from "react-native";

export interface blinkProps {
  text?: string;
}
export interface blinkState {
  isShowingText: boolean;
}

export class Blink extends Component<blinkProps, blinkState> {
  static defaultProps = {
    text: "default!!!"
  };

  componentDidMount() {
    // Toggle the state every second
    setInterval(() => this.setState(previousState => ({ isShowingText: !previousState.isShowingText })), 1000);
  }

  //state object
  state = {
    isShowingText: true
  };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}
