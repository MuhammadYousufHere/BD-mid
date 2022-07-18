import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CheckOut from "../screens/CheckOut";
import Customization from "../screens/Customization";
import CustomizationForm from "../screens/CustomizationForm";
import SearchResult from "../screens/SearchResult";
import Congrats from "../screens/Congrats";
import SearchScreen from "../screens/SearchScreen";
import OfferDetails from "../screens/OfferDetails";
import Compare from "../screens/Compare/Compare";
<CheckOut />;
const CartStack = createNativeStackNavigator();
const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name='cart'
        component={CheckOut}
        options={{ headerShown: false }}
      />

      <CartStack.Screen
        name='searchResults'
        component={SearchResult}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name='compare'
        component={Compare}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name='offerDetail'
        component={OfferDetails}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name='searchScreen'
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name='customization'
        component={Customization}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name='customizationForm'
        component={CustomizationForm}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name='congrats'
        component={Congrats}
        options={{ headerShown: false }}
      />
    </CartStack.Navigator>
  );
};

export default CartStackScreen;
