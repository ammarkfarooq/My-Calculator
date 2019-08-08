import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class OutputScreenRow extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          editable={false}
          value={this.props.value}
          placeholder={this.props.placeholder}
          style={styles.inputText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: "#ddd",
    color: "#ff0000",
    marginTop: 20,
    textAlign: "right",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 28,
    fontWeight: "bold"
  }
});
