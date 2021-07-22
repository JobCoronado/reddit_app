import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import dayjs from "dayjs";
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
}
const Post = ({ data }: IPostProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: data.pathImage }} />
      <View style={styles.data}>
        <Text style={styles.created}>{dayjs(data.createAt).toNow()}</Text>
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
