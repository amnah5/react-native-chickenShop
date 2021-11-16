import { NativeBaseProvider } from "native-base";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./components/Navigation";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
