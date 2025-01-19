import { Colors } from "@/constants/Colors";
import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

interface TabsProps {
  tabs: string[];
  setActiveTab: (tab: number) => void;
}

export default function Tabs({ tabs, setActiveTab }: TabsProps) {
  const indicatorPosition = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    Animated.timing(indicatorPosition, {
      toValue: index * (width / tabs.length),
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabButton}
          onPress={() => handleTabPress(index)}
        >
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.indicator,
          { transform: [{ translateX: indicatorPosition }] },
        ]}
      />
    </View>
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
  tabContainer: {
    flexDirection: "row",
    backgroundColor: Colors.light.background,
    elevation: 4,
    zIndex: 1,
    position: "relative",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 16,
    color: Colors.light.text,
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    width: "50%",
    height: 4,
    backgroundColor: Colors.light.primaryColor,
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
    alignItems: "center",
  },
  tabContentText: {
    fontSize: 16,
    color: Colors.light.text,
  },
});
