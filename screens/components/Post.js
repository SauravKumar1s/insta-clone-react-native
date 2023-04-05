import { useState } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import {
  Heart,
  Comment,
  Message,
  More,
  Dots,
  Share,
  Bookmark,
} from "../../Icons";
import { dayjs } from "../../utils";
import SeeMore from "react-native-see-more-inline";
import FitImage from "./FitImage";

const Post = ({ post }) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image style={styles.avatar} source={{ uri: post.user.avatar }} />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>
        <Dots size={16} fill="#262626" />
      </View>
      <FitImage src={post.image} />
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Heart style={styles.action} size={24} fill="#222" />
          <Comment style={styles.action} size={24} fill="#222" />
          <Share style={styles.action} size={24} fill="#222" />
        </View>
        <Bookmark size={24} fill="#222" />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
    height: 49,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 49,
  },
  action: {
    marginRight: 15,
  },
  // inner: {
  //   paddingHorizontal: 15,
  // },
  // likes: {
  //   fontWeight: "600",
  //   fontSize: 14,
  // },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  // icon: {
  //   marginRight: 15,
  // },
  // description: {
  //   fontSize: 14,
  //   fontWeight: "normal",
  // },
  // post: {
  //   marginBottom: 20,
  // },
  // comments: {
  //   opacity: 0.5,
  // },
  // time: {
  //   fontSize: 12,
  //   opacity: 0.5,
  // },
  // translation: {
  //   fontSize: 12,
  //   fontWeight: "600",
  //   paddingLeft: 10,
  // },
  // hashtag: {
  //   color: "#00376b",
  // },
});
