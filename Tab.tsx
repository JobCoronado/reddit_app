/* import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
 */

// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
/* import "react-native-gesture-handler"; */
import { Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="SecondPage"
      tabBarOptions={{
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#F8F8F8",
        style: {
          backgroundColor: "white",
        },
        labelStyle: {
          textAlign: "center",
        },
        indicatorStyle: {
          borderBottomColor: "white",
          borderBottomWidth: 1,
          backgroundColor: "red",
          height: "100%",
        },
      }}
    >
      <Tab.Screen
        name="FirstPage"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Setting",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="ThirdPage"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="FourthPage"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: "Tab Stack"}}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="SecondPage"
        tabBarOptions={{
          activeTintColor: "#FFFFFF",
          inactiveTintColor: "#F8F8F8",
          style: {
            backgroundColor: "white",
          },
          labelStyle: {
            textAlign: "center",
          },
          indicatorStyle: {
            borderBottomColor: "white",
            borderBottomWidth: 1,
            backgroundColor: "red",
            height: "100%",
          },
        }}
      >
        <Tab.Screen
          name="FirstPage"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="SecondPage"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Setting",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="settings" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="ThirdPage"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="FourthPage"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
