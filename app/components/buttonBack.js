import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ButtonBack extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        value={this.props.label}
        activeOpacity={0.7}
        onPress={() => this.props.handleClick(this.props.label)}
      >
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffd800",
    width: 90,
    height: 60,
    borderRadius: 10,
    marginTop: 30
  },
  buttonText: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 26,
    fontWeight: "bold"
  }
});
