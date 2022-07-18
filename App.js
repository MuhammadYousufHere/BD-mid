import { StatusBar } from "expo-status-bar";
import * as React from "react";
// import { Provider } from 'react-redux';
// import store from './app/store';
// import Navigator from './app/Navigator';
import ReduxThunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
// import store from './store';
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import SearchScreen from "./app/screens/SearchScreen";
import WelCome from "./app/screens/WelCome";
import SelectServices from "./app/screens/SelectServices";
import SearchResult from "./app/screens/SearchResult";
import OfferDetails from "./app/screens/OfferDetails";
import CheckOut from "./app/screens/CheckOut";
import More from "./app/screens/More";
import Customization from "./app/screens/Customization";
import Congrats from "./app/screens/Congrats";
import CustomizationForm from "./app/screens/CustomizationForm";
import Compare from "./app/screens/Compare/Compare";
import GradientSc from "./app/screens/GradientSc";
import ViewDetails from "./app/screens/ViewDetails";
import Font from "./app/screens/Font";
import EmptyCart from "./app/screens/EmptyCart";
import Cart from "./app/screens/Cart/Cart";
import AppNavigator from "./app/navigation/AppNavigator";
import notificationsReducer from "./store/reducers/notifications";
import messagesReducer from "./store/reducers/messages";
// import WelcomeScreen from './app/screens/WelcomeScreen';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  messages: messagesReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require("./app/assets/fonts/Montserrat-Bold.ttf"),
    MontserratSBold: require("./app/assets/fonts/Montserrat-SemiBold.ttf"),
    Montserrat: require("./app/assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./app/assets/fonts/Montserrat-Medium.ttf"),
    MontserratThin: require("./app/assets/fonts/Montserrat-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    // <View style={styles.container}>
    //   {/* <WelCome /> */}
    //   {/* <SearchScreen /> */}
    //   {/* <SelectServices /> */}
    //   {/* <SearchResult /> */}
    //   {/* <Compare /> */}
    //   {/* <OfferDetails /> */}
    //   {/* <Cart /> */}
    //   {/* <More /> */}
    //   {/* <Customization /> */}

    //   {/* <CustomizationForm /> */}
    //   <CheckOut />
    //   {/* <ViewDetails /> */}
    //   {/* <Congrats />  */}

    //   <StatusBar style='auto' />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
