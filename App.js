import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Tabs } from "./navigation/Tabs";
import { store } from "./reducers/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightgreen",
    marginTop: StatusBar.currentHeight,
  },
});
