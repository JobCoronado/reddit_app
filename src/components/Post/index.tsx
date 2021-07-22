//Dependencies
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";

//Styles
import { styles } from "./style";

//Routes
import { postDetail } from "../../routes";

//Types
export interface IPostProps {
  data: IPost;
}
export interface IPost {
  pathImage: string;
  createAt: number;
  title: string;
  autor: string;
  score: number;
  numComments: number;
  url: string;
}

const Post = ({ data }: IPostProps) => {
  const navigation = useNavigation();
  const onHandledPress = (url: string) => () => {
    navigation.navigate(postDetail, { url });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onHandledPress(data.url)}
    >
      <Image style={styles.image} source={{ uri: data.pathImage }} />
      <View style={styles.data}>
        <Text style={styles.created}>{dayjs.unix(data.createAt).toNow()}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.social}>
          <Text style={styles.text}>{data.autor}</Text>
          <Text style={styles.text}>score: {data.score}</Text>
          <Text style={styles.text}>{data.numComments} comments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
