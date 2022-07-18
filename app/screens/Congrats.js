import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { SvgUri } from "react-native-svg";
import AppButton from "../components/Button";

const Congrats = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Screen>
        <View style={styles.textContainer}>
          <Text style={styles.congratsText}>Congratulations!</Text>
          <Text style={styles.tagline}>
            You have successfully placed your order
          </Text>
        </View>
        <View style={styles.illusContainer}>
          <Image
            style={styles.illus}
            resizeMode='contain'
            source={require("../assets/Congrats/illus2.png")}
          />
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            styleIt={styles.btn}
            colorOne={colors.congrats}
            colorTwo={colors.congrats}
            title='Done'
            textStyle={styles.btnText}
            onPress={() => navigation.goBack()}
          />

          <View>
            <Text style={styles.summary}>View Full Summary</Text>
          </View>
        </View>
      </Screen>
    </View>
  );
};

export default Congrats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
  },
  congratsText: {
    fontSize: 25,
    fontFamily: "MontserratSBold",
    color: colors.darkBg,
  },
  illus: {
    width: 300,
    height: 300,
  },
  tagline: {
    color: colors.mediumTwo,
    fontSize: 14,
    lineHeight: 50,
    fontFamily: "MontserratMedium",
  },
  btnText: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "500",
    alignSelf: "center",
  },
  btn: {
    width: "90%",

    backgroundColor: colors.congrats,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  illusContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  summary: {
    fontSize: 18,
    fontFamily: "MontserratSBold",

    color: colors.linear,
  },
  textContainer: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
