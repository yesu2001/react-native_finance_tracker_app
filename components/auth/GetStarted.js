import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Finance App</Text>

      <Text style={styles.description}>
        Learn how to manage your expenses and income with ease.
      </Text>
      <Button
        title="Get Started"
        onPress={() => {
          navigation.navigate("Auth");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default GetStarted;
