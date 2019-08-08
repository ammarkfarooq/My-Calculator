import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Back from './back.png'

export default class ButtonTax extends React.Component {
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
    width: 90,
    height: 60,
    borderRadius: 10,
    marginTop: 30,
    image: 'Back'
  },
  buttonText: {
    position: "absolute",
    top: 12,
    left: 25,
    fontSize: 26,
    fontWeight: "bold"
  }
});
