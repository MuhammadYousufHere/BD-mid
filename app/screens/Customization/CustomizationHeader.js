import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import DisplayCard from "../../components/DisplayCard";
import AppButton from "../../components/Button";
import { ListItemSeparator } from "../../components/lists";
const CustomizationHeader = ({ address, offerText, onChange, onView }) => {
  return (
    <DisplayCard>
      <View style={{ width: "100%" }}>
        <View style={styles.topPart}>
          <Text style={styles.offerText}>{offerText}</Text>
          <AppButton
            title='View Offer'
            styleIt={styles.btnOne}
            textStyle={styles.btnText}
            x1='1'
            y1='9'
            x2='4'
            y2='5'
            onPress={onView}
          />
        </View>
        <ListItemSeparator />
        <View style={styles.bottomPart}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.addressIcon}
              resizeMode='contain'
              source={require("../../assets/Results/pin.png")}
            />
            <Text style={styles.addressText}>{address}</Text>
          </View>
          <TouchableWithoutFeedback onPress={onChange}>
            <Image
              style={{ width: 23, height: 23 }}
              resizeMode='contain'
              source={require("../../assets/Results/update.png")}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </DisplayCard>
  );
};

export default CustomizationHeader;

const styles = StyleSheet.create({
  btnText: {
    textTransform: "capitalize",
    fontSize: 14,
    fontWeight: "500",
  },
  btnOne: {
    width: 120,
    marginTop: 0,
  },
  addressIcon: { width: 15, height: 15 },
  addressText: {
    color: colors.medium,
    marginRight: 12,
    paddingRight: 6,
    fontFamily: "MontserratMedium",
  },
  bottomPart: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topPart: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  offerText: {
    fontSize: 22,
    color: colors.darkBg,
    fontFamily: "MontserratBold",
  },
});
