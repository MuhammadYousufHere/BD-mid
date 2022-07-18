import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import Header from "../components/Header";
import Screen from "../components/Screen";
import DisplayCard from "../components/DisplayCard";
import colors from "../config/colors";
import AppButton from "../components/Button";
import { ListItemSeparator } from "../components/lists";
import AddressHeader from "./CustomizationForm/AddressHeader";
import { Form, FormInput, SubmitButton } from "../components/forms";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Heading from "../components/Heading";
import RadioButtons from "../components/RadioButton/RadioButton";
import DropDownPicker from "react-native-dropdown-picker";

const billing = [
  {
    key: 1,
    text: "Same As Services Address",
  },
  {
    key: 2,
    text: "Different From Services Address",
  },
];
const card = [
  {
    key: 1,
    text: "American Pay",
  },
  {
    key: 2,
    text: "Master Card",
  },
  {
    key: 3,
    text: "Visa",
  },
];
const CustomizationForm = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [show, setShow] = useState(false);
  const onSelectAdd = (item) => {
    if (selectedAddress && selectedAddress.key === item.key) {
      setSelectedAddress(null);
    } else {
      setSelectedAddress(item);
      if (item.key === 2) {
        setShow(true);
      } else setShow(false);
    }
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };
  const editAddress = () => {
    // console.warn('Edit Address');
    navigation.navigate("searchScreen");
  };
  // DropDown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([
    { label: "Select", value: null },
    { label: "2020", value: true },
  ]);
  // Form
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required().min(4).label("User Name"),
    password: Yup.string().required().min(7).label("Password"),
    firstName: Yup.string().required().min(4).label("First Name"),
    lastName: Yup.string().required().min(4).label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    phone: Yup.string().required().label("Phone"),
    newAddress: Yup.string().required().min(7).label("Address"),
    cvv: Yup.string().required().label("CVV"),
  });
  return (
    <View style={styles.Container}>
      <Header heading='Customization' goBack={() => navigation.goBack()} />

      <View style={styles.mainBody}>
        <DisplayCard styles={styles.Top}>
          <AddressHeader
            offer='50 GB Plan'
            address='100 n main st. 62999'
            onEdit={editAddress}
          />
        </DisplayCard>
        <ScrollView
          style={{ marginTop: 12, borderRadius: 10 }}
          showsVerticalScrollIndicator={false}>
          <Form
            initialValues={{
              userName: "",
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              phone: "",
              newAddress: "",
              cvv: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}>
            <DisplayCard>
              <View style={styles.firstSec}>
                <View style={styles.heading}>
                  <Text style={styles.headingText}>User Information</Text>
                </View>
                {/* <Heading title='User Information' /> */}
                <ListItemSeparator style={{ height: 2 }} />

                <FormInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='default'
                  name='userName'
                  placeholder='User Name'
                  textContentType='username'
                />
                <FormInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  icon='eye'
                  name='password'
                  placeholder='Password'
                  secureTextEntry={showPassword}
                  textContentType='password'
                  onIconPress={() => setShowPassword(!showPassword)}
                />
                <FormInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='default'
                  name='firstName'
                  placeholder='First Name'
                  textContentType='namePrefix'
                />
                <FormInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='default'
                  name='lastName'
                  placeholder='Last Name'
                  textContentType='nameSuffix'
                />
                <FormInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='email-address'
                  name='email'
                  placeholder='Email'
                  textContentType='emailAddress'
                />
                <FormInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='numeric'
                  name='phone'
                  placeholder='Phone Number'
                  textContentType='telephoneNumber'
                />
              </View>
            </DisplayCard>

            <DisplayCard style={{ marginTop: 12 }}>
              <View style={styles.firstSec}>
                <View style={styles.heading}>
                  <Text style={styles.headingText}>Billing Address</Text>
                </View>
                <ListItemSeparator style={{ height: 2 }} />
                <Text style={styles.subTitle}>Select Billing Address</Text>
                <View>
                  <View style={styles.radioBox}>
                    <RadioButtons
                      selectedOption={selectedAddress}
                      onSelect={onSelectAdd}
                      options={billing}
                    />
                    {show && (
                      <FormInput
                        width='93%'
                        autoCapitalize='none'
                        autoCorrect={false}
                        // icon='email'
                        keyboardType='default'
                        name='newAddress'
                        placeholder='Specify Address'
                        textContentType='fullStreetAddress'
                      />
                    )}
                  </View>
                </View>
              </View>
            </DisplayCard>
            <DisplayCard style={{ marginTop: 12 }}>
              <View style={styles.LastSec}>
                <View style={styles.heading}>
                  <Text style={styles.headingText}>
                    Credit Card Information
                  </Text>
                </View>
                <ListItemSeparator style={{ height: 2 }} />
                <Text style={styles.subTitle}>Credit Card Type</Text>
                <View>
                  <View style={styles.radioBox}>
                    <RadioButtons
                      selectedOption={selectedOption}
                      onSelect={onSelect}
                      options={card}
                    />
                  </View>

                  <View style={{ marginBottom: 15 }}>
                    <FormInput
                      width='93%'
                      autoCapitalize='none'
                      autoCorrect={false}
                      name='cvv'
                      placeholder='CVV'
                    />
                  </View>
                  <Text style={styles.subTitle}>Expiration Year</Text>

                  <View
                    style={{
                      zIndex: 2434242,
                      width: "95%",
                      backgroundColor: colors.lighter,
                      overflow: "visible",
                      alignSelf: "center",
                    }}>
                    <DropDownPicker
                      items={options}
                      open={open}
                      defaultIndex={0}
                      // maxHeight={33}
                      value={value}
                      labelStyle={{
                        fontFamily: "MontserratMedium",
                        fontSize: 12,
                        marginRight: "80%",
                        color: colors.medium,
                      }}
                      setOpen={setOpen}
                      style={{
                        borderColor: colors.darkBg,
                        justifyContent: "space-between",
                        paddingVertical: 0,
                        paddingLeft: 0,
                      }}
                      setValue={setValue}
                      containerStyle={{
                        height: 35,
                        width: "100%",
                      }}
                      onChangeItem={(item) =>
                        console.log(item.label, item.value)
                      }
                    />
                  </View>
                </View>
                <View style={{ alignItems: "center", paddingVertical: 30 }}>
                  {/* replace with submit */}
                  {/* <SubmitButton title='Continue' /> */}
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
                    onPress={() => navigation.navigate("congrats")}
                  />
                </View>
              </View>
            </DisplayCard>
          </Form>
        </ScrollView>
      </View>
    </View>
  );
};

export default CustomizationForm;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: "100%",
    // width: '100%',
    justifyContent: "flex-start",
    backgroundColor: colors.containerBG,
    alignItems: "center",
  },
  btnText: {
    textTransform: "capitalize",
    fontSize: 14,
  },
  btnTwo: {
    width: "70%",
    backgroundColor: colors.darkBg,
    justifyContent: "flex-end",
  },
  btnContinue: { marginRight: "26%" },
  subTitle: {
    fontSize: 16.5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontFamily: "MontserratSBold",
  },
  mainBody: {
    width: "93%",
    height: "100%",
    // position: 'absolute',
    marginTop: -76,
    // top: 90,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-around',
    marginBottom: 12,
  },
  radioBox: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  optionText: {
    fontSize: 14,
    color: colors.medium,
    fontFamily: "MontserratSBold",
  },
  firstSec: {
    // flex: 1,
    width: "100%",
    paddingHorizontal: 5,

    // paddingVertical: 10,
  },
  LastSec: {
    // flex: 1,
    width: "100%",
    // paddingVertical: 10,
  },
  Middle: {
    marginTop: 5,
    // display: 'none',
  },
  Top: {
    marginBottom: 5,
  },
  heading: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 8,
  },
  headingText: {
    fontSize: 19,
    padding: 2,
    color: colors.darkBg,
    fontFamily: "MontserratSBold",
  },
});
