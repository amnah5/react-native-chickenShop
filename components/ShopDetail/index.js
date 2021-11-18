import React from "react";
import { Text, View, Image } from "react-native";
import shopStore from "../../stores/shopStore";
import styles from "./styles";
import { baseURL, instance } from "../../stores/instance";
import ProductList from "../ProductList";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
import Navigation from "../Navigation";

function ShopDetail({ Navigation, route }) {
  if (shopStore.isLoading) return <Spinner />;
  const shop = shopStore.shops[0];
  console.log(shop);
  return (
    <View style={styles.shopDetailWrapper}>
      <Image
        style={styles.shopDetailImage}
        source={{ uri: baseURL + shop.image }}
      />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <ProductList products={shop.products} />
    </View>
  );
}
export default observer(ShopDetail);
