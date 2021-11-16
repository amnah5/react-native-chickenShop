import React from "react";
import { Text, View, Alert } from "react-native";
import { Button } from "native-base";

const Home = ({ navigation }) => {
  return (
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
  );
};
export default Home;
