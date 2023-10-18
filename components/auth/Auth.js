import React, { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../reducers/auth"; // Import your authSlice

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  //   const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleAuthentication = () => {
    // Simulate registration or login. Replace this with your actual authentication logic.
    if (isSignUp) {
      // Registration
      // Save user data to the Redux store
      const userData = { email, password };
      dispatch(setUser(userData));
    } else {
      // Login
      // Implement your login logic and set user data to the Redux store
      const userData = { email, password }; // Replace with your login logic
      dispatch(setUser(userData));
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <Text>{isSignUp ? "Sign Up" : "Log In"}</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ padding: 5, margin: 5 }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={{ padding: 5, margin: 5 }}
        />
        <Button
          title={isSignUp ? "Sign Up" : "Log In"}
          onPress={handleAuthentication}
        />
        <Button
          title={isSignUp ? "Switch to Log In" : "Switch to Sign Up"}
          onPress={() => setIsSignUp(!isSignUp)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
