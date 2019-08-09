import React from "react";
import OutputScreenRow from "./outputScreenRow";
import { View } from "react-native";

export default class OutputScreen extends React.Component {
  render() {
    return (
      <View>
        <OutputScreenRow value={this.props.question} />
        <OutputScreenRow value={this.props.answer} />
      </View>
    );
  }
}
