import AddRecord from "../components/addInOrEx/AddRecord";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AllTransactionsScreen from "../components/AllTransactions";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Transactions" component={AllTransactionsScreen} />
    </Stack.Navigator>
  );
};

export function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Add":
              iconName = "plus";
              break;
            case "Profile":
              iconName = "user";
              break;
            default:
              iconName = "question";
          }
          return <TabBarIcon name={iconName} focused={focused} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Add" component={AddRecord} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
