import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Header from "../components/Header";
import DisplayCard from "../components/DisplayCard";
import AppButton from "../components/Button";
import colors from "../config/colors";
import { ListItemSeparator } from "../components/lists";
import NavigationBar from "./NavigationBar";
import NextBar from "../components/NextBar";
import CustomizationHeader from "./Customization/CustomizationHeader";
import Heading from "../components/Heading";
import AppText from "../components/Text";
const Customization = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [percced, setProcced] = useState("");
  useEffect(() => {
    hide();
  }, []);
  const hide = () => {
    if (toggleCheckBox) {
      setProcced("");
    }
  };
  console.log(toggleCheckBox);
  const nextPage = () => {
    if (toggleCheckBox) {
      navigation.navigate("customizationForm");
      setProcced("");
    } else {
      setProcced("Please agree to continue!");
    }
  };

  return (
    <View style={styles.Container}>
      <Header heading='Customization' goBack={() => navigation.goBack()} />
      <View style={styles.mainBody}>
        <CustomizationHeader
          offerText='50 GB Plan'
          address='100 n main st. 62999'
          onChange={() => navigation.navigate("searchScreen")}
          onView={() => navigation.navigate("offerDetail")}
        />
        <DisplayCard style={{ marginTop: 12 }}>
          <View style={{ width: "100%" }}>
            <Heading title='Acknowledgement' />
            <ListItemSeparator />
            <View style={{ width: "100%" }}>
              <View style={styles.cardBody}>
                <Text style={styles.subTitle}>Please select to agree</Text>
                <View style={styles.testifyBox}>
                  <View>
                    <BouncyCheckbox
                      // style={{ marginHorizontal: }}
                      size={20}
                      fillColor={colors.linear}
                      unfillColor='#FFFFFF'
                      iconStyle={{ borderColor: colors.darkBg }}
                      textStyle={{}}
                      onPress={() => setToggleCheckBox(!toggleCheckBox)}
                    />
                  </View>
                  <Text style={styles.testifyText}>
                    By clicking this box, I provide my signature and express
                    consent to being by clicking this box, I provide my
                    signature and express consent to being By clicking this box,
                    I provide my signature and express consent to being by
                    clicking this box, I provide my signature and express
                    consent to being
                  </Text>
                </View>
                <View style={styles.CardBtnBox}>
                  <AppButton
                    styleIt={styles.btnTwo}
                    title='Continue'
                    iconName='chevron-right'
                    textStyle={[styles.btnText, styles.btnContinue]}
                    x1='0.55'
                    x2='1'
                    y1='0.3'
                    y2='7'
                    colorOne={colors.darkBg}
                    colorTwo={colors.white}
                    onPress={nextPage}
                  />
                  <AppText style={{ color: "tomato" }}>{percced}</AppText>
                </View>
              </View>
              <ListItemSeparator />
              <NextBar start='1' end='6' />
            </View>
          </View>
        </DisplayCard>
      </View>
    </View>
  );
};

export default Customization;

const styles = StyleSheet.create({
  testifyBox: { flexDirection: "row", paddingRight: 10 },
  testifyText: {
    color: colors.medium,
    marginRight: 12,
    paddingRight: 9,
    fontFamily: "MontserratMedium",
  },
  btnText: {
    textTransform: "capitalize",
    fontSize: 14,
    fontWeight: "500",
  },
  CardBtnBox: {
    alignSelf: "center",
    marginVertical: 60,
  },
  btnTwo: {
    width: "70%",
    backgroundColor: colors.darkBg,
    justifyContent: "flex-end",
  },
  btnContinue: { marginRight: "26%" },
  cardBody: { paddingHorizontal: 12, width: "100%" },
  subTitle: {
    fontSize: 16,
    color: colors.darkBg,
    paddingVertical: 12,
    fontFamily: "MontserratSBold",
  },
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.containerBG,
  },
  mainBody: {
    width: "93%",
    alignItems: "center",
    position: "absolute",
    top: 95,
  },
});
