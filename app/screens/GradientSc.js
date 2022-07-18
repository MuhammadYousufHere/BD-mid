import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';
import colors from '../config/colors';
import AppButton from '../components/Button';
const GradientSc = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        // flex: 1,
        justifyContent: 'space-between',
        // backgroundColor: colors.medium,
        // alignItems: 'flex-start',
      }}
    >
      <LinearGradient
        // colors={[colors.linear, colors.gradient, colors.secondary]}
        colors={['#584BDD', '#AA55FF']}
        // start={{ x: 0.1, y: 0.6 }}
        // end={{ x: 1, y: 0.4 }}
        start={{ x: 0, y: 1.6 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: '100%',
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 22,
            textShadowColor: '#000',
            shadowRadius: 33,
          }}
        >
          GradientSc
        </Text>
      </LinearGradient>
      <AppButton title='My Button' styleIt={{ width: '70%', height: 50 }} />
      <View style={{ width: '100%' }}>
        <Image
          resizeMode='contain'
          style={{ width: '100%', height: 170 }}
          source={require('../assets/Component.jpg')}
        />
      </View>
    </View>
  );
};

export default GradientSc;

const styles = StyleSheet.create({});
