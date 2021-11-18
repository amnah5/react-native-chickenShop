import React from "react";
import { Button, HStack, Image } from "native-base";
import { observer } from "mobx-react";
import { baseURL } from "../../stores/instance";
import { View } from "native-base";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";
import { useState } from "react";
const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const product = item.product;
  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(item.product, value);
  };
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />

      <NumericInput value={quantity} onChange={(value) => setQuantity(value)} />
      <Button onPress={handleAdd}>Add</Button>
      <Text>{product.name}</Text>
      <Text>quantity: {item.quantity}</Text>
      <Text>total: {item.quantity * product.price} KD</Text>
    </HStack>
  );
};

export default observer(CartItem);
