import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BlogItem from "./BlogItem";
import { fetchPosts } from "@/redux/store/postsSlice";
import { Post } from "@/redux/interfaces";

export default function Blogs() {
  const { posts } = useSelector((state: any) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts() as any);
  }, [dispatch]);

  const renderBlogItem = ({ item }: { item: Post }) => (
    <BlogItem post={item} key={item.id} />
  );

  return (
    <View>
      <FlatList
        data={posts}
        nestedScrollEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBlogItem}
      />
    </View>
  );
}
