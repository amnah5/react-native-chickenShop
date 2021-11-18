import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import Cart from "../Icons/Cart";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={({ route }) => {
          return {
            title: Home,
            headerRight: () => <Cart Navigation={Navigation} />,
          };
        }}
      />
      {/* <Screen name="ShopList" component={ShopList} /> */}
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <Cart />,
          };
        }}
      />
      <Screen name="CartList" component={CartList} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{ title: "Choose a Shop", headerRight: () => <Cart /> }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default Navigation;
