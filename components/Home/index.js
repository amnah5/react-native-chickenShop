import React from "react";
import { Text, View, Alert, ImageBackground } from "react-native";
import { Button } from "native-base";
import styles from "../ShopDetail/styles";

const Home = ({ navigation }) => {
  return (
    // <ImageBackground
    //   source={{
    //     url: "https://th.bing.com/th/id/OIP.IB3efbOjWe-WF_rjLP8mtwHaFC?pid=ImgDet&rs=1",
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
      <Text style={{ color: "#000", fontSize: "38px", textAlign: "center" }}>
        Shops
      </Text>
      {/* <Button
        onPress={() => {
          Alert.alert("Shops");
        }}
      >
        Visit shops
      </Button> */}
      <Button
        onPress={() => navigation.navigate("ShopList")}
        // style={styles.button}
        title="Click here"
      >
        Visit Shops
      </Button>
    </View>
    // </ImageBackground>
  );
};
export default Home;
