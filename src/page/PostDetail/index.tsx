//Dependencies
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

//Routes
import { ParamsRoutes, postDetail } from "../../routes";

//Styles
import { styles } from "./style";

const PostDetail = () => {
  const route = useRoute<RouteProp<ParamsRoutes, typeof postDetail>>();
  const uri = route.params.url;
  return <WebView style={styles.container} source={{ uri }} />;
};

export default PostDetail;
