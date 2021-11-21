import React from "react";
import { View, Text } from "react-native";
import { Badge, VStack } from "native-base";

import Navigation from "../Navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const Cart = ({ navigation }) => {
  return (
    <View>
      <VStack>
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="999px"
          mb={-4}
          mr={-4}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}
        >
          2
        </Badge>
      </VStack>
      <Text>{cartStore.totalQuantity}</Text>
      <Text>
        <Icon
          size={25}
          style={styles.cartButton}
          name="cart"
          onPress={() => navigation.navigate("CartList")}
        />
        ;
      </Text>
    </View>
  );
};

export default observer(Cart);
