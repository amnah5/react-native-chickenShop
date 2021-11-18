import React from "react";
import cartStore from "../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const handleAdd = (value) => {
    cartStore.addItemToCart(product, value);
    setQuantity(value);
  };

  return (
    <HStack w="100%" alignItems="center" space="3">
      {/* <Image
        source={{
          uri: baseURL + product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      /> */}
      <Text>{product.name}</Text>
      <NumericInput value={quantity} onChange={(value) => setQuantity(value)} />
    </HStack>
  );
};

export default ProductItem;
