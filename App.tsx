import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Item from "./src/components/Tile";

export default function App() {
  const data = {
    pathImage:
      "https://a.thumbs.redditmedia.com/9fuHmWFDneUpPq155LnK0HRSpez08j5RcYDrim1SZ04.jpg",
    createAt: "7 minutes ago",
    title: "Saw this piece of thread fallen on the floor.",
    autor: "t2_5tldv43l",
    score: 10,
    numberComments: 10,
  };
  return (
    <View style={styles.container}>
      <Item data={data} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
