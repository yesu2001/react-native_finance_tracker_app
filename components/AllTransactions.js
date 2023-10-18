import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

const AllTransactionsScreen = () => {
  // Fetch and display all transactions or categories here
  const categories = [
    { label: "🍕", value: "Food" },
    { label: "🥕 ", value: "Groceries" },
    { label: "🚌 ", value: "Transport" },
    { label: "🏥 ", value: "Health" },
    { label: "🎓 ", value: "Education" },
    { label: "👕 ", value: "Clothes" },
    { label: "✏️ ", value: "Stationary" },
    { label: "🎛️ ", value: "Others" },
  ];
  const numColumns = 3; // You can adjust this number

  // Calculate the width of each item based on the number of columns
  const itemWidth = 90 / numColumns + "%";
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        {/* <Text>Categories</Text> */}
        <FlatList
          data={categories}
          numColumns={numColumns}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                width: itemWidth,
                padding: 5,
                margin: 5,
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 30 }}>{item.label}</Text>
              <Text style={{ fontSize: 18 }}>{item.value}</Text>
            </View>
          )}
        />
      </View>
      {/* <ScrollView style={styles.container}>
        <View
          style={{
            alignItems: "center",
            marginTop: 50,
            gap: 10,
          }}
        >
          <View style={{}}>
            {categories.map((category) => (
              <View>
                <Text style={{ fontSize: 40 }}>{category.label}</Text>
                <Text style={{ fontSize: 18 }}>{category.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default AllTransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#ecf0f1",
  },
});
