import { observer } from "mobx-react";
import shopStore from "../../stores/shopStore";
import { View } from "native-base";
import React from "react";
import ShopItem from "./ShopItem";

function ShopList() {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));
  return <View>{shopList}</View>;
}

export default observer(ShopList);
