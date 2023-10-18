import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { Tabs } from "./navigation/Tabs";
import { store } from "./reducers/store";
import GetStarted from "./components/auth/GetStarted";
import Auth from "./components/auth/Auth";

const Stack = createStackNavigator();

export default function Main() {
  const isUser = useSelector((state) => state.auth.isUser);

  return (
    <>
      {isUser ? (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: StatusBar.currentHeight,
          }}
        >
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={"GetStarted"}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="GetStarted" component={GetStarted} />
              <Stack.Screen name="Auth" component={Auth} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
});
