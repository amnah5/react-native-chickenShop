import React from "react";
import cartStore from "../stores/cartStore";
import { useState } from "react";
import { Button, HStack, Image } from "native-base";
import NumericInput from "react-native-numeric-input";
import { baseURL } from "../stores/instance";
const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const handleAdd = () => {
    cartStore.addItemToCart(product, quantity);
    // setQuantity(value);
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
      <Text>{product.name}</Text>
      <NumericInput value={quantity} onChange={(value) => setQuantity(value)} />
      <Button onPress= {handleAdd}>Add</Button>
    </HStack>
  );
};

export default ProductItem;
