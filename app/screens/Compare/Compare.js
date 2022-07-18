import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState } from "react";

import NavigationBar from "../NavigationBar";
import Header from "../../components/Header";
import DisplayCard from "../../components/DisplayCard";
import { ListItemSeparator } from "../../components/lists";
import colors from "../../config/colors";
import CompareListItem from "./CompareListItem";

const initialData = [
  {
    id: 1,
    icon: require("../../assets/Compare/dish.png"),
    price$: 291,
    cents: 99,
    promo: "America's Top 200",
    promoPricing: "",
    duration: "MO",
  },
  {
    id: 2,
    icon: require("../../assets/Compare/adt.png"),
    price$: 4409,
    cents: 99,
    promo: " America's Top 200",
    promoPricing: "Protect your home with…",
    duration: "MO",
  },
  {
    id: 3,
    icon: require("../../assets/Compare/dish.png"),
    price$: 99,
    cents: 99,
    promo: "Protect your home with…",
    promoPricing: "",
    duration: "MO",
  },
];
// const [image] = initialData;
const Compare = ({ navigation }) => {
  const [items, setItems] = useState(initialData);
  const [refreshing, setRefreshing] = useState(false);

  const handle = (item) => {
    // Delete the message from messages
    // setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <View style={styles.Container}>
      <Header
        heading='Compare'
        goBack={() => navigation.navigate("offerDetail")}
      />
      <View style={styles.MainBody}>
        <DisplayCard>
          <View style={styles.upperBody}>
            <View style={styles.Top}></View>
            <ListItemSeparator />
            <View style={styles.Bottom}>
              <Text style={styles.resultText}>50 Search Results</Text>
              <Image
                style={styles.icon}
                resizeMode='contain'
                source={require("../../assets/Compare/msg.png")}
              />
            </View>
          </View>
        </DisplayCard>
        <DisplayCard style={styles.lowerBody}>
          <View style={{ width: "100%" }}>
            <FlatList
              data={items}
              keyExtractor={(items) => items.id.toString()}
              renderItem={({ item }) => (
                <CompareListItem
                  image={item.icon}
                  price={item.price$}
                  lineTop={item.promoPricing}
                  lineBottom={item.promo}
                  duration={item.duration}
                  cents={item.cents}
                />
              )}
              ItemSeparatorComponent={ListItemSeparator}
              refreshing={refreshing}
              onRefresh={() => {
                setItems([...initialData]);
              }}
            />
          </View>
        </DisplayCard>
      </View>
    </View>
  );
};

export default Compare;

const styles = StyleSheet.create({
  Bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  Top: {
    padding: 70,
  },
  MainBody: {
    width: "93%",
    position: "absolute",
    top: 95,
  },
  upperBody: {
    width: "100%",
  },
  icon: {
    width: 23,
    height: 23,
  },
  resultText: {
    fontSize: 16,
    color: colors.darkBg,
    fontFamily: "MontserratSBold",
  },
  lowerBody: {
    width: "100%",
    marginTop: 8,
  },
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.containerBG,
    alignItems: "center",
  },
});
