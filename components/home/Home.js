import React, { useState, useEffect } from "react";
import {
  StatusBar,
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { homeStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { expenseCategory } from "../../assets/icons";

export default function Home({ navigation }) {
  const tabBarHeight = useBottomTabBarHeight;
  const transactions = useSelector((state) => state.transactions);

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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Transactions")}
                >
                  <Text>View All</Text>
                </TouchableOpacity>
              </View>
              {transactions.map((item, index) => (
                <View style={homeStyles.record} key={index}>
                  <Icon name="bolt" color="yellow" size={25} />
                  <Text style={homeStyles.description}>{item.description}</Text>
                  <Text
                    style={[
                      homeStyles.amount,
                      { color: item.isExpense ? "red" : "green" },
                    ]}
                  >
                    $ {item.amount}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

//  {transactions.length > 0 ? (
//   <FlatList
//     data={transactions}
//     keyExtractor={(item, index) => index.toString()}
//     renderItem={({ item }) => <Text>text</Text>}
//   />
// ) : (
//   <Text>No transactions to display.</Text>
// )}
