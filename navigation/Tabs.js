import AddRecord from "../components/addInOrEx/AddRecord";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={AddRecord} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
