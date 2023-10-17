import AddRecord from "../components/addInOrEx/AddRecord";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AllTransactionsScreen from "../components/AllTransactions";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Add" component={AddRecord} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Transactions" component={AllTransactionsScreen} />
    </Stack.Navigator>
  );
};
