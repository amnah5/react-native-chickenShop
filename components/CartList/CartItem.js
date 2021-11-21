import React from "react";
import { Button, HStack, Image } from "native-base";
import { observer } from "mobx-react";
import { baseURL } from "../../stores/instance";
import { View } from "native-base";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";
import { useState } from "react";
import { Text } from "react-native";

// import Icon from "react-native--vector-icons/FontAwesome";
import ItemDelete from "../Icons/ItemDelete";
const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const product = item.product;
  const handleAdd = () => {
    // setQuantity(value);
    cartStore.addItemToCart(item.product, quantity);
  };
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: baseURL + product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />

      <NumericInput valueType="integer"
            totalHeight={30}
            totalWidth={60}
            rounded
            type="up-down"
            value={quantity}
            onChange={(value) => setQuantity(value)}  />
      <Button onPress={handleAdd}>Add</Button>
      <Text>{item.product.name}</Text>
      <Text>quantity: {item.product.quantity}</Text>
      <Text>total: {item.quantity * item.product.price} KD</Text>
      <ItemDelete />
    </HStack>
  );
};

export default observer(CartItem);
