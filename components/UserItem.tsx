import { User } from "@/redux/interfaces";
import { StyleSheet, Text, View } from "react-native";

interface UserItemProps {
  user: User;
}

export default function UserItem({ user }: UserItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.company.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
