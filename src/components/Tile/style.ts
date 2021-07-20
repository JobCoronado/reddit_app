import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#F8F9FA",
  },
  image: {
    flex: 1,
    borderRadius: 4,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    color: "#222222",
    marginVertical: 8,
  },
  data: {
    flex: 3,
    marginLeft: 10,
    alignItems: "flex-end",
  },
  social: {
    flex: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#222222",
  },
});
