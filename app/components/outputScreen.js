import React from "react";
import OutputScreenRow from "./outputScreenRow";
import { View } from "react-native";

export default class OutputScreen extends React.Component {
  render() {
    return (
      <View>
        <OutputScreenRow placeholder="Input" value={this.props.question} />
        <OutputScreenRow placeholder="Output" value={this.props.answer} />
      </View>
    );
  }
}
