//Dependencies
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FlatList, View, Text } from "react-native";

//Services
import { getPostByCategory } from "../../api/services/posts/getPostByCategory";

//Components
import Post, { IPost } from "../../components/Post";

//Context
import { RefreshContext } from "../../context/reloadPost";

//Utils
import { RouteToCategoryPost } from "../../utils/constant";

//Styles
import { styles } from "./style";

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const route = useRoute();

  const { refresh, onChangeRefreshStatus } = useContext(RefreshContext);
  useEffect(() => {
    (async () => {
      const category = RouteToCategoryPost(route.name);
      try {
        const resPosts = (await getPostByCategory({ category: category })).map(
          ({ data }) => ({
            pathImage: data.thumbnail,
            createAt: data.created,
            title: data.title,
            autor: data.author,
            score: data.score,
            numComments: data.num_comments,
            url: `https://www.reddit.com${data.permalink}`,
          })
        );
        setPosts(resPosts);
        onChangeRefreshStatus(false);
      } catch (error) {}
    })();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item: post, index }) => <Post key={index} data={post} />}
      />
    </View>
  );
};

export default PostsPage;
