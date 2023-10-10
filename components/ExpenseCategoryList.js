import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { expenseCategory } from "../assets/icons";

const ExpenseCategoryList = ({ onCategorySelect, selected }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onCategorySelect(item)}>
      <View
        style={[
          styles.categoryItem,
          { backgroundColor: selected === item.name ? "#bbdef0" : "white" },
        ]}
      >
        <Image
          style={styles.logo}
          source={{
            uri: item.icon,
          }}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={expenseCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal={false}
        numColumns={Math.floor(Dimensions.get("screen").width / 100)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  categoryItem: {
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  logo: {
    width: 35,
    height: 35,
  },
});

export default ExpenseCategoryList;
