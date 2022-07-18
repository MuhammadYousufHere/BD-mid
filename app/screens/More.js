import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DisplayCard from "../components/DisplayCard";
import Header from "../components/Header";
import Icon from "../components/Icon";
import { ListItemSeparator, ListPlate } from "../components/lists";
import colors from "../config/colors";

const More = ({ navigation }) => {
  const initialData = [
    {
      id: 1,
      title: "Notification",
      icon: {
        name: "bell",
        backgroundColor: colors.tertiary,
      },
      goTo: "notification",
    },
    {
      id: 2,
      title: "Privacy Policy",
      goTo: "privacyPolicy",
      icon: {
        name: "shield-alert",
        backgroundColor: colors.tertiary,
      },
    },
    {
      id: 3,
      title: "Terms of Use",
      goTo: "termsOfUse",
      icon: {
        name: "format-list-text",
        backgroundColor: colors.tertiary,
      },
    },
    {
      id: 4,
      title: "FAQ",
      icon: "bell",
      icon: {
        name: "comment-question-outline",
        backgroundColor: colors.tertiary,
      },
      goTo: "fAQ",
    },
  ];
  const [items, setItems] = useState(initialData);

  return (
    <View style={styles.container}>
      <Header heading='More' goBack={() => navigation.goBack()} />
      <DisplayCard style={styles.mainBody}>
        <FlatList
          data={items}
          keyExtractor={(items) => items.id.toString()}
          renderItem={({ item }) => (
            <ListPlate
              style={{ borderRadius: 0, marginBottom: 0 }}
              itemName={item.title}
              // icon={item.image}
              iconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.goTo)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </DisplayCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.containerBG,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainBody: {
    width: "93%",
    position: "absolute",
    top: 90,
    // backgroundColor: colors.black,
  },
});

export default More;
