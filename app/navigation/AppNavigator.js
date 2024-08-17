import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FoodCardDetail from "../screens/FoodCardDetail";
import OrderDetails from "../screens/OrderDetails";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="FoodCardDetail" component={FoodCardDetail} />
        <Stack.Screen name="Details" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
