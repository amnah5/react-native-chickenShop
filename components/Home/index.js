import React from "react";
import {
  Text,
  View,
  Alert,
  ImageBackground,
  backgroundImage,
} from "react-native";
import { Button } from "native-base";
import styles from "../ShopDetail/styles";

const Home = ({ navigation }) => {
  return (
    // <ImageBackground
    //   source={{
    //     url: "https://image.freepik.com/free-photo/top-view-mixed-colorful-healthy-raw-food-wood-kitchen-countertop-background_8087-2193.jpg",
    //   }}
    //   style={styles.backgroundImage}
    // >

    <View
      style={{
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <ImageBackground source={{
  url: "https://image.freepik.com/free-photo/top-view-mixed-colorful-healthy-raw-food-wood-kitchen-countertop-background_8087-2193.jpg",
  }}>
</ImageBackground>
      <Text style={{ color: "#000", fontSize: "38px", textAlign: "center" }}>
        Shops
      </Text>
      <Button
        onPress={() => navigation.navigate("ShopList")}
        // style={styles.button}
      >
        Visit Shops
      </Button>
      <Button onPress={()=> navigation.navigate("Signup")}>SignUp</Button>
      <Button onPress={()=> navigation.navigate("Signin")}>SignIn</Button>

    </View>
    // </ImageBackground>
  );
};
export default Home;
