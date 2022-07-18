import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "../components/Header";
import MessagesScreen from "../screens/MessagesScreen";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
// import
// import { CartStackScreen } from "./index";
import FAQ from "../screens/FAQ";
import Notification from "../screens/Notification";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsOfUse from "../screens/TermsOfUse";
import More from "../screens/More";
import Customization from "../screens/Customization";
import OfferDetails from "../screens/OfferDetails";
import CustomizationForm from "../screens/CustomizationForm";
import Compare from "../screens/Compare/Compare";
import SearchScreen from "../screens/SearchScreen";
import Cart from "../screens/Cart/Cart";
import colors from "../config/colors";
import SearchResult from "../screens/SearchResult";
import ViewDetails from "../screens/ViewDetails";
import WelCome from "../screens/WelCome";
import SelectServices from "../screens/SelectServices";
import CartStackScreen from "./CartNavigator";
import AccountScreen from "../screens/AccountScreen";

const AppNavigator = (props) => {
  const notification_unread_count = useSelector(
    (state) => state.notifications.unread_count
  );
  const unread_messages_count = useSelector(
    (state) => state.messages.unread_count
  );

  const SearchStack = createNativeStackNavigator();

  const SearchStackScreen = () => {
    return (
      <SearchStack.Navigator>
        <SearchStack.Screen
          name='selectServices'
          options={{ headerShown: false }}
          // component={NotificationsScreen}
          component={SelectServices}
        />
        <SearchStack.Screen
          name='searchScreen'
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </SearchStack.Navigator>
    );
  };

  const MessageStack = createNativeStackNavigator();

  const MessageStackScreen = () => {
    return (
      <MessageStack.Navigator>
        <MessageStack.Screen name='Message List' component={MessagesScreen} />
        <MessageStack.Screen
          name='Message Details Screen'
          component={Customization}
        />
      </MessageStack.Navigator>
    );
  };

  const MoreStack = createNativeStackNavigator();
  const MoreStackScreen = () => {
    return (
      <MoreStack.Navigator>
        <MoreStack.Screen
          name='more'
          component={More}
          options={{ headerShown: false }}
        />
        <MoreStack.Screen name='notification' component={Notification} />
        <MoreStack.Screen name='privacyPolicy' component={PrivacyPolicy} />
        <MoreStack.Screen name='termsOfUse' component={TermsOfUse} />
        <MoreStack.Screen name='fAQ' component={FAQ} />
      </MoreStack.Navigator>
    );
  };

  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search";
            } else if (route.name === "Cart") {
              iconName = focused ? "ios-cart" : "ios-cart";
            } else if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Account") {
              iconName = focused
                ? "person-circle-outline"
                : "person-circle-outline";
            } else if (route.name === "More") {
              iconName = focused ? "reader-outline" : "reader-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.linear,
          tabBarInactiveTintColor: colors.medium,
          tabBarStyle: [
            { display: "flex", height: 50, paddingVertical: 6 },
            null,
          ],
        })}>
        <Tab.Screen name='Home' component={WelCome} />
        <Tab.Screen name='Search' component={SearchStackScreen} />
        <Tab.Screen
          name='Cart'
          component={CartStackScreen}
          options={
            unread_messages_count > 0
              ? { tabBarBadge: unread_messages_count }
              : null
          }
        />

        <Tab.Screen name='Account' component={AccountScreen} />

        <Tab.Screen name='More' component={MoreStackScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
