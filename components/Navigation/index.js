import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import Cart from "../Icons/Cart";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      {/* <Screen name="ShopList" component={ShopList} /> */}
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route, navigation }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <Cart navigation={navigation} />,
            headerStyle: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5dc",
            },
          };
        }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => ({
          title: "Shop List",
          headerStyle: {
            backgroundColor: "#f5f5dc",
            headerRight: () => <Cart navigation={navigation} />,
          },
        })}
      />
      <Screen name="CartList" component={CartList} />
      <Screen name="Cart" component={CartList} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;
