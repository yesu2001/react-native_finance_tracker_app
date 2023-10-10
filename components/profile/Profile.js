import React from "react";
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 30 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vel tellus id dui iaculis porta. suscipit quam eget, condimentum
          dapibus eros. Sed vel neque in felis rutrum pulvinar vel at nibh.
          Vivamus facilisis, libero ut scelerisque bibendum, turpis velit
          rhoncus libero, nec lobortis est ante sit amet risus. Sed bibendum
          viverra libero, ac ullamcorper ligula rhoncus a. Suspendisse ultrices
          interdum ex sed gravida. Aliquam quis massa aliquet, tempus nisi et,
          eleifend diam. Praesent pretium quam diam, id molestie mi rutrum eu.
          Sed ut nibh vitae nibh volutpat ornare. Suspendisse utnuncpretium,
          faucibus lectus vel, congue tellus. Vestibulum eu lacinia dolor. Fusce
          non purus nec nunc faucibus vestibulum.
        </Text>
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
