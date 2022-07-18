import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Header from "../components/Header";
import colors from "../config/colors";
import DisplayCard from "../components/DisplayCard";
import { ListItemSeparator, ListPlate } from "../components/lists";
import OfferCard from "../components/OfferCard";
import Price from "../components/Price";
import AppButton from "../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavigationBar from "./NavigationBar";
import NextBar from "../components/NextBar";

const OPTIONS = [
  // { id: 1, icon: require('../assets/Offers/phone.png') },
  { id: 2, icon: require("../assets/Offers/tv.png") },
  { id: 3, icon: require("../assets/Offers/security.png") },
  { id: 4, icon: require("../assets/Offers/internet.png") },
  { id: 5, icon: require("../assets/Offers/more.png") },
];

const OfferDetails = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Header
        heading='Offer Details'
        goBack={() => navigation.navigate("customization")}
      />
      <DisplayCard
        style={{ padding: 0, width: "92%", position: "absolute", top: 80 }}>
        <OfferCard
          logo={require("../assets/Offers/logo.png")}
          offers='306'
          icon={require("../assets/Offers/options.png")}
        />
        <ListItemSeparator />
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.mainLabel}>
              Cox Internet Ultimate 500+ Contour TV preferred + Voice Preferred
              + Homelife Automation
            </Text>
          </View>
          <Price
            oldPrice='277.90'
            newPrice='149'
            cents='90'
            style={{
              marginRight: 50,
              marginTop: 10,
              paddingVertical: 10,
            }}
          />
        </View>
        <ListItemSeparator />
        <View>
          <View style={styles.OptionsPalate}>
            <View style={[styles.OptionBox, styles.active]}>
              <Image
                resizeMode='contain'
                style={styles.OptionIcon}
                source={require("../assets/Offers/phone.png")}
              />
            </View>
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
          </View>
          <View style={styles.OptionDetailsContainer}>
            <View style={styles.OptionDetailsBody}>
              {/* <Text style={styles.detailsText}>Upload Speed Upto 10 MBPS</Text> */}
              <Text style={styles.detailsText}>Unlimted Talk Time 24/7 </Text>
              <View style={styles.btnBox}>
                <AppButton
                  styleIt={styles.btnOne}
                  title='Compare'
                  textStyle={styles.btnText}
                  onPress={() => navigation.navigate("compare")}
                />
                <AppButton
                  styleIt={styles.btnTwo}
                  title='Add to Cart'
                  iconName='chevron-right'
                  x1='0.55'
                  x2='1'
                  y1='0.3'
                  y2='7'
                  colorOne={colors.darkBg}
                  colorTwo={colors.white}
                  textStyle={styles.btnText}
                />
              </View>
            </View>
          </View>
        </View>
        <ListItemSeparator />
        <NextBar start='1' end='365' />
      </DisplayCard>
    </View>
  );
};

export default OfferDetails;

const styles = StyleSheet.create({
  active: {
    backgroundColor: colors.white,
  },
  btnBox: { flexDirection: "row", justifyContent: "center" },
  cardContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  mainLabel: {
    paddingTop: 2,
    fontSize: 18,
    color: colors.medium,
    fontFamily: "MontserratMedium",
    lineHeight: 20,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.containerBG,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  OptionsPalate: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  OptionBox: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    // borderRightColor: colors.lighter,
    // borderRightWidth: 2,
    padding: 13,
    backgroundColor: colors.lightBG,
  },
  OptionBoxSeparator: {
    width: "1%",
    height: "100%",
    backgroundColor: colors.lighter,
  },
  OptionIcon: { width: 28, height: 28 },
  OptionDetailsContainer: {
    minHeight: 160,
  },
  OptionDetailsBody: {
    padding: 12,
    height: 160,
    justifyContent: "space-between",
  },
  detailsText: {
    fontSize: 18,
    fontFamily: "MontserratMedium",

    color: colors.lightest,
    paddingTop: 10,
  },

  btnText: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: "500",
  },
  btnOne: {
    width: 100,
    marginRight: 10,
    padding: 10,
  },
  btnTwo: { width: 190, backgroundColor: colors.darkBg },
});
