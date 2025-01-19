import React, { useRef, useState } from "react";
import { StyleSheet, Animated, View, Text, SafeAreaView } from "react-native";

import { Colors } from "@/constants/Colors";
import Blogs from "@/components/Blogs";
import Tabs from "@/components/Tabs";
import Users from "@/components/Users";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  const TABS = ["Blogs", "Users"];

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [80, 0],
    extrapolate: "clamp",
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          { height: headerHeight, opacity: headerOpacity },
        ]}
      >
        <Text style={styles.title}>Blog</Text>
        <Text style={styles.subtitle}>Your posts here</Text>
      </Animated.View>

      <Tabs tabs={TABS} setActiveTab={setActiveTab} />

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        nestedScrollEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {activeTab === 0 ? (
          <View style={styles.tabContent}>
            <Blogs />
          </View>
        ) : (
          <View style={styles.tabContent}>
            <Users />
          </View>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.dark.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#ebebeb",
  },
  scrollContent: {
    padding: 16,
  },
  tabContent: {
    padding: 16,
    borderRadius: 8,
  },
  tabContentText: {
    fontSize: 16,
    color: Colors.light.text,
  },
});
