import React from "react";
import { Button, Center, VStack } from "native-base";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";

const CartList = ({navigation}) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} navigation={navigation} />
  ));
  return (
    <Center>
      <VStack space="5">
        {cartList}
        <Button onPress={cartStore.checkout}>Checkout</Button>
      </VStack>
    </Center>
  );
};
export default observer(CartList);
