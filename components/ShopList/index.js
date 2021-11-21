import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import { View, Text } from "native-base";
import React from "react";
import ShopItem from "./ShopItem";
import Cart from "../Icons/Cart";
function ShopList({ navigation }) {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop._id} />
  ));
  return (
    <View>
      <Text>{shopList}</Text>
    </View>
  );
}

export default observer(ShopList);
