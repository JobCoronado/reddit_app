import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getPostByCategory } from "./src/api/services/posts/getPostByCategory";
import Post, { IPost } from "./src/components/Post";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
export default function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    (async () => {
      const resPosts = (await getPostByCategory({ category: "new" })).map(
        ({ data }) => ({
          pathImage: data.thumbnail,
          createAt: data.created,
          title: data.title,
          autor: data.author,
          score: data.score,
          numComments: data.num_comments,
        })
      );
      setPosts(resPosts);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: post, index }) => <Post key={index} data={post} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
