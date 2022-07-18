import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import DisplayCard from '../components/DisplayCard';
import OfferCard from '../components/OfferCard';
import { ListItemSeparator } from '../components/lists';
import NavigationBar from './NavigationBar';
import colors from '../config/colors';
import NextBar from '../components/NextBar';
import AppButton from '../components/Button';

const OPTIONS = [
  { id: 1, icon: require('../assets/ViewDetails/phone.png') },
  { id: 2, icon: require('../assets/Offers/tv.png') },
  { id: 3, icon: require('../assets/Offers/security.png') },
  { id: 4, icon: require('../assets/Offers/internet.png') },
];
const ViewDetails = () => {
  return (
    <View style={styles.Container}>
      <Header heading='View Details' />
      <View style={styles.mainBody}>
        <DisplayCard>
          <OfferCard
            logo={require('../assets/Offers/logo.png')}
            offers='306'
            icon={require('../assets/Offers/options.png')}
          />
          <ListItemSeparator
            style={{ height: 1.6, backgroundColor: colors.lighter }}
          />
          <View>
            <View style={styles.OptionsPalate}>
              {OPTIONS.map(({ id, icon }, i) => {
                return (
                  <>
                    <ListItemSeparator
                      style={styles.OptionBoxSeparator}
                      key={i}
                    />
                    <View style={styles.OptionBox} key={id}>
                      <Image
                        resizeMode='contain'
                        style={styles.OptionIcon}
                        source={icon}
                      />
                    </View>
                  </>
                );
              })}
              <View style={[styles.OptionBox, styles.active]}>
                <Image
                  resizeMode='contain'
                  style={styles.OptionIcon}
                  source={require('../assets/ViewDetails/option.png')}
                />
              </View>
            </View>
            <View style={styles.OptionDetailsContainer}>
              <View style={styles.OptionDetailsBody}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <AppButton
                      styleIt={[styles.btnOne, styles.BasicBtn]}
                      title='Basic'
                      textStyle={styles.btnText}
                      x1='1'
                      y1='9'
                      x2='4'
                      y2='5'
                    />
                    <Text
                      style={{
                        color: colors.medium,
                        fontFamily: 'MontserratMedium',
                      }}
                    >
                      Details
                    </Text>
                  </View>
                  <View style={[styles.OptionBox, styles.active]}>
                    <Image
                      resizeMode='contain'
                      style={styles.OptionIcon}
                      source={require('../assets/ViewDetails/msg.png')}
                    />
                  </View>
                </View>
                <Text style={styles.detailsText}>
                  Upload Speed Upto 10 MBPS
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <AppButton
                    styleIt={styles.btnOne}
                    title='Compare'
                    textStyle={styles.btnText}
                  />
                  <AppButton
                    styleIt={styles.btnTwo}
                    title='Add to Cart'
                    iconName='chevron-right'
                    textStyle={styles.btnText}
                    x1='0.55'
                    x2='1'
                    y1='0.3'
                    y2='7'
                    colorOne={colors.darkBg}
                    colorTwo={colors.white}
                  />
                </View>
              </View>
            </View>
            {/* <View style={{}}>
              <View style={{ paddingVertical: 60 }}></View>
            </View> */}
          </View>
          <ListItemSeparator />
          <NextBar start='1' end='365' />
        </DisplayCard>
      </View>
      {/* <Text>ViewDetails</Text> */}
    </View>
  );
};

export default ViewDetails;

const styles = StyleSheet.create({
  active: {
    backgroundColor: colors.white,
  },
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  mainBody: {
    width: '93%',
    position: 'absolute',
    top: 90,
  },
  OptionsPalate: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  OptionBox: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRightColor: colors.lighter,
    // borderRightWidth: 2,
    padding: 13,
    backgroundColor: colors.lightBG,
  },
  OptionBoxSeparator: {
    width: '1%',
    height: '100%',
    backgroundColor: colors.lighter,
  },
  OptionIcon: { width: 28, height: 28 },
  OptionDetailsContainer: {
    minHeight: 160,
  },

  OptionDetailsContainer: {
    minHeight: 160,
  },
  OptionDetailsBody: {
    padding: 12,
    height: 360,
    justifyContent: 'space-between',
  },
  detailsText: {
    fontSize: 18,
    fontFamily: 'MontserratMedium',
    color: colors.lightest,
    paddingTop: 10,
  },

  btnText: {
    textTransform: 'none',
    fontSize: 14,
  },
  btnOne: {
    width: '45%',
    marginRight: 5,
    padding: 10,
  },
  BasicBtn: {
    marginBottom: 10,
    marginRight: 19,
  },
  btnTwo: { width: '53%', backgroundColor: colors.darkBg },
});
