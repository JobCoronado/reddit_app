import React from "react";
import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

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
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textPrimary,
    marginVertical: 8,
  },
  data: {
    flex: 3,
    marginLeft: 10,
  },
  created: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    alignSelf: "flex-end",
  },
  social: {
    flex: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
  },
});
