import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Button extends React.Component {
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
    backgroundColor: "#228b22",
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 30
  },
  buttonText: {
    position: "absolute",
    top: 17,
    left: 26,
    fontSize: 20,
    fontWeight: "bold"
  }
});
