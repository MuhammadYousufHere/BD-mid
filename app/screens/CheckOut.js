import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import Header from "../components/Header";
import DisplayCard from "../components/DisplayCard";
import colors from "../config/colors";
import NavigationBar from "./NavigationBar";
import OfferCard from "../components/OfferCard";
import { ListItemSeparator } from "../components/lists";
import AppButton from "../components/Button";
import GrandTotal from "../components/GrandTotal";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const CheckOut = ({ navigation }) => {
  // const cartItems = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModelVisible, setModelVisible] = useState(false);
  const [show, setShow] = useState(true);

  return show ? (
    <View style={styles.Container}>
      <Header
        heading='Cart'
        goBack={() => navigation.navigate("searchResults")}
      />
      <DisplayCard style={styles.MainBody}>
        <OfferCard
          logo={require("../assets/Offers/logo.png")}
          desc='Cox Internet Ultimate 500+ Contour TV preferred + Voice Preferred +
       Homelife Automation'
        />
        <ListItemSeparator />
        <GrandTotal
          offer='50 GB Plan'
          monthlyTotal={149.99}
          oneTimeTotal={0}
          clearCart={() => setShow(false)}
          next={() => navigation.navigate("customization")}
        />
      </DisplayCard>
    </View>
  ) : (
    <EmptyCart />
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.lightBG,
    alignItems: "center",
  },
  MainBody: {
    width: "93%",
    paddingVertical: 8,
    position: "absolute",
    top: 90,
  },
});

export default CheckOut;
