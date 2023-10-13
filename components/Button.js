import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title } = props;
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: props.bgColor ? props.bgColor : "#1E80FF",
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, { color: props.color ? props.color : "#FFFFFF" }]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
