//Dependencies
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

//Routes
import Routes from "./src/routes";

//Component
import { RefreshProvider } from "./src/context/reloadPost";

dayjs.extend(relativeTime);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RefreshProvider>
        <Routes />
      </RefreshProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
