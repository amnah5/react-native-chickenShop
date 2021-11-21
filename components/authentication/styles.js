import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    borderBottomWidth: 1,
  },
  AuthOther: {
    marginTop: 15,
  },
});

export default styles;
