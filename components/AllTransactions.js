import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

const AllTransactionsScreen = () => {
  // Fetch and display all transactions or categories here

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            alignItems: "center",
            marginTop: 50,
            gap: 10,
          }}
        >
          <Image
            source={{ uri: "https://shorturl.at/DKSVY" }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 25 }}>Username</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllTransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
});
