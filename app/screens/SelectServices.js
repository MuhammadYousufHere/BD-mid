import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
import AppText from "../components/Text";
import DisplayCard from "../components/DisplayCard";

const data = [
  { id: 1, icon: require("../assets/Services/tv.png"), desc: "TV" },
  { id: 2, icon: require("../assets/Services/phone.png"), desc: "Phone" },
  { id: 3, icon: require("../assets/Services/internet.png"), desc: "Internet" },
  {
    id: 4,
    icon: require("../assets/Services/homeSecurity.png"),
    desc: "Home Security",
  },
  {
    id: 5,
    icon: require("../assets/Services/homeServices.png"),
    desc: "Home Services",
  },
  { id: 6, icon: require("../assets/Services/plug.png"), desc: "Utility" },
];

function SelectServices({ navigation }) {
  // const productData = navigation.getParam("searchScreen");

  return (
    <ImageBackground
      // blurRadius={0}
      style={styles.background}
      // source={require('../assets/bg.jpg')}
      source={require("../assets/Splash.jpg")}>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>Select Services</AppText>
      </View>
      <DisplayCard style={styles.displayCard}>
        {data.map(({ id, icon, desc }) => {
          return (
            <Pressable
              key={id}
              onPress={() => navigation.navigate("searchScreen")}>
              <View style={styles.subBox}>
                <Image style={styles.image} source={icon} />
                <AppText style={styles.details}>{desc}</AppText>
              </View>
            </Pressable>
          );
        })}
        <Pressable onPress={() => navigation.navigate("searchScreen")}>
          <View style={styles.SelectAllContainer}>
            <Text style={styles.SelectAll}>Select All</Text>
          </View>
        </Pressable>
      </DisplayCard>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  details: {
    color: colors.medium,
    fontSize: 15,
    fontFamily: "MontserratMedium",
  },
  displayCard: { width: "90%" },
  headerContainer: {
    position: "absolute",
    top: 85,
    alignItems: "center",
  },
  header: {
    color: colors.white,
    fontSize: 22,
    fontFamily: "MontserratMedium",
  },
  image: {
    width: 65,
    height: 65,
    margin: 15,
  },

  subBox: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 9,
  },
  SelectAllContainer: {
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  SelectAll: {
    marginTop: 14,
    fontSize: 20,
    color: colors.linear,
    fontFamily: "MontserratSBold",
  },
});

export default SelectServices;
