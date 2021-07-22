import { MaterialTopTabBarOptions } from "@react-navigation/material-top-tabs";
import theme from "../../styles/theme";

export const tabBarOptions = (
  opt?: MaterialTopTabBarOptions
): MaterialTopTabBarOptions => ({
  activeTintColor: theme.colors.white,
  inactiveTintColor: theme.colors.primary,
  style: {
    backgroundColor: theme.colors.white,
  },
  labelStyle: {
    textAlign: "center",
  },
  indicatorStyle: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    backgroundColor: theme.colors.primary,
    height: "100%",
  },
  ...opt,
});
