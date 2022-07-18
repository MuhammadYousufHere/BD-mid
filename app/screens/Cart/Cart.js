import { StyleSheet, Text, View } from "react-native";
import React from "react";
import EmptyCart from "../EmptyCart";
import NavigationBar from "../NavigationBar";
import CheckOut from "../CheckOut";
const Cart = ({}) => {
  const show = true;
  return show ? <CheckOut /> : <EmptyCart />;
};

export default Cart;

const styles = StyleSheet.create({});
