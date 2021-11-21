import React from "react";
import cartStore from "../../stores/cartStore";
import Icon from "react-native-vector-icons/FontAwesome";

const ItemDelete = (productId) => {
  return (
    <Icon name="trash-o" onPress={() => cartStore.removeItem(productId)} />
  );
};

export default ItemDelete;
