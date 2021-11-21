import React from "react";
import {  Text } from "react-native";
import { HStack, Image, Pressable } from "native-base";
import { baseURL } from "../../stores/instance";
import { observer } from "mobx-react-lite";
const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ShopDetail", { shop: shop });
        console.log("clcik");
      }}
    >
      <HStack w="100%" alignItems="center" space="3">
        <Image
          source={{
            uri: baseURL + shop.image,
          }}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
        <Text>{shop.name}</Text>
      </HStack>
    </Pressable>
  );
};
export default ShopItem;
