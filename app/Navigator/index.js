import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import colors from '../config/colors';
import More from '../screens/More';
import Customization from '../screens/Customization';
import SearchScreen from '../screens/SearchScreen';

const tabScreensConfig = {
  Products: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='home-outline' size={25} color={tabInfo.tintColor} />
        // <Text>JJ</Text>
      ),
    },
  },
  Map: {
    screen: Customization,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='map-outline' size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  // Cart: {
  //   screen: CartStackNavigator,
  //   navigationOptions: {
  //     tabBarIcon: (tabInfo) => (
  //       <Ionicons name='cart-outline' size={25} color={tabInfo.tintColor} />
  //     ),
  //   },
  // },
  Profile: {
    screen: More,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name='person-outline' size={25} color={tabInfo.tintColor} />
      ),
    },
  },
};

const AppTabNavigation = createMaterialBottomTabNavigator(tabScreensConfig, {
  activeColor: colors.medium,
  shifting: true,
  barStyle: {
    backgroundColor: '#fff',
  },
});

export default createAppContainer(AppTabNavigation);
