import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';

const NAV = [
  { id: 1, icon: require('../assets/Offers/search.png') },
  { id: 2, icon: require('../assets/Offers/home.png') },
  { id: 3, icon: require('../assets/Offers/total.png') },
  { id: 4, icon: require('../assets/Offers/cart.png') },
  { id: 5, icon: require('../assets/Offers/group.png') },
];

const NavigationBar = ({ style }) => {
  return (
    <View style={[styles.Container, style, styles.elevation]}>
      {NAV.map(({ id, icon }) => {
        return (
          <View style={{ padding: 13 }} key={id}>
            <Image
              resizeMode='contain'
              style={{ width: 32, height: 32 }}
              source={icon}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    shadowColor: colors.darkBg,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  elevation: {
    shadowColor: colors.darkBg,

    elevation: 15,
  },
});

export default NavigationBar;
