//Dependencies
import React from "react";
import "react-native-gesture-handler";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
} from "@react-navigation/material-top-tabs";

//Styles
import { tabBarOptions } from "./style";

const Tab = createMaterialTopTabNavigator();

//Types

interface ITopTabBar {
  screens: IScreen[];
  tabBarOptions?: MaterialTopTabBarOptions;
  initialRouteName?: string;
}

interface IScreen {
  route: string;
  component: React.ComponentType<any>;
  label: string;
}

const TopTabBar = (props: ITopTabBar) => {
  return (
    <Tab.Navigator
      initialRouteName={props.initialRouteName}
      tabBarOptions={tabBarOptions(props.tabBarOptions)}
    >
      {props.screens.map(({ component, label, route }, idx) => (
        <Tab.Screen
          key={idx}
          name={route}
          component={component}
          options={{
            tabBarLabel: label,
            title: label,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabBar;
