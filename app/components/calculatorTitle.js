import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class CalculatorTitle extends React.Component {
  render() {
    return (
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>{this.props.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleHeader: {
    //flex:1,
    backgroundColor: "#00ffff",
    //justifyContent:'center',
    alignItems: "center",
    marginTop: 30
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffd700"
  }
});
