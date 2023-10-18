import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const TabBarIcon = ({ name, focused }) => {
  return (
    <View>
      <Icon name={name} size={24} color={focused ? "blue" : "gray"} />
    </View>
  );
};

export default TabBarIcon;
