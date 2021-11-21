import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "native-base";
import { useState } from "react";

function Sign() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
  };
  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  const Signup = ({ navigation }) => {
    return (
      <View>
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={styles.AuthOther}
        >
          Click here to register!
        </Text>
        <Text style={styles.authTitle}>Signup</Text>
        <TextInput
          onChangeText={(username) => setUser({ ...user, username })}
          style={styles.authTextInput}
          placeholder="Username"
        />
        <TextInput
          onChangeText={(password) => setUser({ ...user, password })}
          style={styles.authTextInput}
          placeholder="Password"
        />
        <Button onPress={handleSubmit}>Signup</Button>
      </View>
    );
  };
}

export default Sign;
