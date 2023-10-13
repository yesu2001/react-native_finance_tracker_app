import React, { useState } from "react";
import {
  StatusBar,
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { homeStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function Home() {
  const tabBarHeight = useBottomTabBarHeight;

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Dinner",
      amount: 300,
      type: "expense",
      mode: "UPI",
    },
    {
      id: 2,
      description: "Transport",
      amount: 200,
      type: "expense",
      mode: "UPI",
    },
    {
      id: 2,
      description: "Transport",
      amount: 200,
      type: "expense",
      mode: "UPI",
    },
    {
      id: 2,
      description: "Transport",
      amount: 200,
      type: "expense",
      mode: "UPI",
    },
    {
      id: 2,
      description: "Transport",
      amount: 200,
      type: "expense",
      mode: "UPI",
    },
    {
      id: 2,
      description: "Transport",
      amount: 200,
      type: "expense",
      mode: "UPI",
    },
    {
      id: 2,
      description: "Transport",
      amount: 200,
      type: "expense",
      mode: "UPI",
    },
    {
      id: 2,
      description: "Transport",
      amount: 200,
      type: "expense",
      mode: "UPI",
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={homeStyles.home}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.greeting}>Hello, User</Text>
          <Image
            style={homeStyles.logo}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/48/guest-male.png",
            }}
          />
        </View>
        <View style={{ marginBottom: 70 }}>
          <ScrollView
            style={{ paddingVertical: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={homeStyles.analytics}>
              <Text style={homeStyles.analyticsContent}>Analytics</Text>
            </View>
            <View style={homeStyles.records}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 20,
                }}
              >
                <Text style={homeStyles.recordsTitle}>Transactions</Text>
                <Text style={{ fontSize: 15, color: "blue" }}>View All</Text>
              </View>
              {transactions.map((item, index) => (
                <View style={homeStyles.record} key={index}>
                  <Icon name="bolt" color="yellow" size={25} />
                  <Text style={homeStyles.description}>{item.description}</Text>
                  <Text style={homeStyles.amount}>$ {item.amount}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
