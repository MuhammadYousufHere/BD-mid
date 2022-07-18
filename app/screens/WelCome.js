import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import testSvg from '../assets/splach-illus.svg'; // SVG
import Button from '../components/Button';

function WelCome(props) {
  return (
    //   <LinearGradient
    //   style={styles.background}
    //   end={{ x: 0.3, y: 0.1 }}
    //   start={{ x: 0, y: 0.8 }}
    //   colors={[colors.tertiary, colors.gradient]}
    // ></LinearGradient>
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require('../assets/bg.jpg')}
    >
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>Get great deals on</Text>
        <Text style={styles.tagline}>Services and products</Text>
        <Text style={styles.tagline}>For your home</Text>
      </View>
      {/* <View style={{ flex: 1, width: '100%', position: 'absolute', bottom: 0 }}>
        <Image
          style={styles.illus}
          source={require('../assets/Component.jpg')}
        />
      </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  illus: {
    width: '100%',
    resizeMode: 'contain',
    height: 400,
  },

  taglineContainer: {
    position: 'absolute',
    bottom: '45%',

    alignItems: 'center',
  },
  tagline: {
    fontSize: 23,
    fontWeight: '400',
    lineHeight: 30,
    color: '#fff',
    fontFamily: 'MontserratMedium',
  },
});

export default WelCome;
