import React from "react";
import { Text, View, Image } from "react-native";
import shopStore from "../../stores/shopStore";
import styles from "./styles";
import { baseURL, instance } from "../../stores/instance";
import ProductList from "../ProductList";
import { Spinner } from "native-base";
import { observer } from "mobx-react";
import Navigation from "../Navigation";

function ShopDetail({ navigation, route }) {
  if (shopStore.isLoading) return <Spinner />;
  const shop = route.params.shop
  console.log(shop);
  return (
    <View style={styles.shopDetailWrapper}>
      <Image
        style= {{width:50 , height:50}}
        source={{ uri: baseURL + shop.image }}

      />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <ProductList products={shop.products} />
    </View>
  );
}
export default observer(ShopDetail);
