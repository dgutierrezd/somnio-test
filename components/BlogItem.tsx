import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Post } from "@/redux/interfaces";

interface BlogItemProps {
  post: Post;
}

export default function BlogItem({ post }: BlogItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{post.title}</Text>
        <Text style={styles.itemDescription}>{post.body}</Text>
      </View>
      <View style={styles.itemFooter}>
        <Text style={styles.itemFooterText}>Somnio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: Colors.light.background,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 20,
    color: Colors.light.text,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: Colors.light.text,
  },
  itemContent: {
    padding: 16,
  },
  itemFooter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.primaryColor,
    padding: 16,
    borderRadius: 8,
    height: 80,
  },
  itemFooterText: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.light.background,
  },
});
