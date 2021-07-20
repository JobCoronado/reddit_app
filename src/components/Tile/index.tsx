import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
export interface IItemProps {
  data: IPost;
}
export interface IPost {
  pathImage: string;
  createAt: string;
  title: string;
  autor: string;
  score: number;
  numberComments: number;
}
const Item = ({ data }: IItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: data.pathImage }} />
      <View style={styles.data}>
        <Text style={styles.text}>{data.createAt}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.social}>
          <Text style={styles.text}>{data.autor}</Text>
          <Text style={styles.text}>score:{data.score}</Text>
          <Text style={styles.text}>{data.score} comments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
