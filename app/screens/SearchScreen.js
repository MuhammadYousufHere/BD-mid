import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormInput, SubmitButton } from "../components/forms";
const src = require("../assets/Search.jpg");
const validationSchema = Yup.object().shape({
  address: Yup.string().required().label("Address"),
  apartment: Yup.string().required().min(10).label("Apartment address"),
  zipCode: Yup.string().required().min(4).label("Zip Code"),
});

function SearchScreen(props, { navigation }) {
  return (
    <ImageBackground source={src} style={{ width: "100%", height: "100%" }}>
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={require("../assets/logo.png")}
        />

        <Form
          initialValues={{ address: "", apartment: "", zipCode: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}>
          <FormInput
            autoCapitalize='none'
            autoCorrect={false}
            name='address'
            placeholder='Address'
            textContentType='fullStreetAddress'
          />
          <FormInput
            autoCapitalize='none'
            autoCorrect={false}
            name='apartment'
            placeholder='Apartment'
            textContentType='location'
          />
          <FormInput
            autoCapitalize='none'
            autoCorrect={false}
            name='zipCode'
            placeholder='Zip Code'
            textContentType='postalCode'
          />

          <SubmitButton title='Search' styleIt={styles.submitBtn} />
        </Form>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  submitBtn: {
    marginTop: 35,
  },
  logo: {
    width: "55%",
    height: 70,
    alignSelf: "center",
    marginVertical: 30,
    // marginBottom: ,
  },
});

export default SearchScreen;
