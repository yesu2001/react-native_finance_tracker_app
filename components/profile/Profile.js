import React from "react";
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
});
