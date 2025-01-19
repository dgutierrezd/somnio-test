import React, { useState } from "react";
import { fetchUsers } from "@/redux/store/usersSlice";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { User } from "@/redux/interfaces";
import UserItem from "./UserItem";

export default function Users() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { users, loadingUsers } = useSelector((state: any) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  useEffect(() => {
    if (!loadingUsers && users?.length) {
      setFilteredUsers(users);
    }
  }, [users]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = users.filter((user: User) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderUserItem = ({ item }: { item: User }) => <UserItem user={item} />;

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar usuarios..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredUsers}
        nestedScrollEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    textAlign: "center",
    marginVertical: 16,
    fontSize: 16,
    color: "#555",
  },
  searchInput: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
