//Dependencies
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Pages
import HomePage from "../page/Home";
import PostDetail from "../page/PostDetail";

//Routes
export const home = "Home";
export const homeNew = "HomeNew";
export const homeTop = "homeTop";
export const homePopular = "homePopular";
export const homeHot = "homeHot";
export const postDetail = "postDetail";

//Types
export type ParamsRoutes = {
  [postDetail]: {
    url: string;
  };
};

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={home}
          options={{ title: "reddit/r/programing" }}
          component={HomePage}
        />
        <Stack.Screen
          name={postDetail}
          options={{ title: "Post Detail" }}
          component={PostDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
