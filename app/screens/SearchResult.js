import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
  ListPlate,
} from '../components/lists';
import colors from '../config/colors';
import DisplayCard from '../components/DisplayCard';
import AppButton from '../components/Button';
import Header from '../components/Header';
import NavigationBar from './NavigationBar';
import DropDownPicker from 'react-native-dropdown-picker';

const initialData = [
  {
    id: 1,
    title: '',
    offers: '306',
    image: require('../assets/Results/firstenergy.png'),
  },
  {
    id: 2,
    offers: '39',
    // title: 'Offer(s) 306',
    image: require('../assets/Results/bestbuy.png'),
  },
  {
    id: 3,
    title: 'Offer(s) 39',
    image: require('../assets/Results/directtv.png'),
  },
  {
    id: 4,
    title: 'Offer(s) 139',
    image: require('../assets/Results/firstenergy.png'),
  },
  {
    id: 5,
    title: 'Offer(s) 306',
    image: require('../assets/Results/bestbuy.png'),
  },
  {
    id: 6,
    title: 'Offer(s) 39',
    image: require('../assets/Results/directtv.png'),
  },
  {
    id: 7,
    title: 'Offer(s) 139',
    image: require('../assets/Results/firstenergy.png'),
  },
  {
    id: 8,
    title: 'Offer(s) 306',
    image: require('../assets/Results/bestbuy.png'),
  },
  {
    id: 9,
    title: 'Offer(s) 39',
    image: require('../assets/Results/directtv.png'),
  },
  {
    id: 10,
    title: 'Offer(s) 139',
    image: require('../assets/Results/firstenergy.png'),
  },
  {
    id: 11,
    title: 'Offer(s) 306',
    image: require('../assets/Results/bestbuy.png'),
  },
  {
    id: 12,
    title: 'Offer(s) 39',
    image: require('../assets/Results/directtv.png'),
  },
];

function SearchResult(props) {
  const [items, setItems] = useState(initialData);
  const [refreshing, setRefreshing] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([
    { label: 'Select', value: null },
    { label: 'Direct Tv', value: true },
    { label: 'Best Buy', value: true },
    { label: 'First Energy', value: true },
    { label: 'Century Link', value: true },
  ]);

  const handle = (item) => {
    // Delete the message from messages
    // setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <View style={styles.Container}>
      <Header heading='Search Result' />

      <View style={styles.CardsContainer}>
        <Screen>
          <DisplayCard
            style={{
              borderRadius: 10,
              marginBottom: 16,
              width: '100%',
              paddingHorizontal: 8,

              flexDirection: 'row',
            }}
          >
            <View
              style={{
                white: '100%',
              }}
            >
              <View
                style={{
                  white: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '75%',
                  }}
                >
                  <Image
                    style={{ width: 10, height: 10, marginRight: 2 }}
                    resizeMode='contain'
                    source={require('../assets/Results/pin.png')}
                  />
                  <Text style={{ fontSize: 12, color: colors.medium }}>
                    100 m main st. 6299
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '25%',
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    resizeMode='contain'
                    source={require('../assets/Results/update.png')}
                  />
                  <Image
                    style={{ width: 25, height: 25 }}
                    resizeMode='contain'
                    source={require('../assets/Results/options.png')}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: colors.containerBG,
                height: 5,
                marginVertical: 6,
              }}
            ></View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <View style={{ width: '35%', marginRight: 3 }}>
                <Text
                  style={{
                    fontSize: 13,
                    paddingLeft: 3,
                    color: colors.medium,
                  }}
                >
                  Providers
                </Text>

                <DropDownPicker
                  items={options}
                  open={open}
                  defaultIndex={0}
                  // maxHeight={33}
                  value={value}
                  textStyle={{ backgroundColor: colors.linear }}
                  labelStyle={{
                    fontFamily: 'MontserratMedium',
                    fontSize: 12,
                    marginRight: 2,
                    color: colors.medium,
                  }}
                  setOpen={setOpen}
                  style={{
                    backgroundColor: colors.lighter,
                    justifyContent: 'space-between',
                    paddingVertical: 0,
                    paddingLeft: 0,
                  }}
                  setValue={setValue}
                  containerStyle={{
                    height: 35,
                    width: '100%',
                    paddingTop: 5,
                  }}
                  onChangeItem={(item) => console.log(item.label, item.value)}
                />
              </View>
              <View
                style={{
                  white: '65%',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingLeft: 3,
                      color: colors.medium,
                    }}
                  >
                    Price From To
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  <View
                    style={{
                      width: '23%',
                      backgroundColor: colors.lighter,

                      marginTop: 5,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                      padding: 3,
                      paddingVertical: 7,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        paddingLeft: 3,
                        color: colors.medium,
                      }}
                    >
                      + 1 -
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '24%',
                      backgroundColor: colors.lighter,

                      marginTop: 5,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                      padding: 3,
                      paddingVertical: 7,
                      borderRadius: 5,
                      marginLeft: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        paddingLeft: 3,
                        color: colors.medium,
                      }}
                    >
                      + 100 -
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '15%',
                      backgroundColor: colors.linear,
                      borderRadius: 4,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 5,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 3,
                      paddingVertical: 7,
                      borderRadius: 5,
                      marginLeft: 3,
                    }}
                  >
                    <Image
                      resizeMode='contain'
                      source={require('../assets/Results/search.png')}
                      style={{ width: 14, height: 14 }}
                    />
                  </View>
                  <View
                    style={{
                      width: '15%',
                      backgroundColor: colors.darkBg,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 5,
                      alignItems: 'center',
                      borderRadius: 5,
                      marginLeft: 3,
                    }}
                  >
                    <Image
                      resizeMode='contain'
                      style={{ width: 14, height: 14 }}
                      source={require('../assets/Results/reload.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </DisplayCard>

          {/*  */}
          <FlatList
            data={items}
            keyExtractor={(items) => items.id.toString()}
            renderItem={({ item }) => (
              <ListPlate
                title={item.title}
                subTitle={item.description}
                image={item.image}
                offersTitle={item.offers}
                onPress={() => console.log('item selected', item)}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handle(item)} />
                )}
              />
            )}
            refreshing={refreshing}
            onRefresh={() => {
              setItems([...initialData]);
            }}
          />
        </Screen>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.containerBG,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  CardsContainer: {
    flex: 1,
    width: '93%',
    alignItems: 'center',
    borderRadius: 10,
    // padding: 10,
    marginTop: -115,
  },
  headerBg: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '22%',
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 23,
    color: colors.white,
    fontWeight: '400',
  },
});

export default SearchResult;

// import React from 'react';
// import { View, StyleSheet, Text, Image } from 'react-native';

// import colors from '../config/colors';

// const SearchResult = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerBg}>
//         <Text>Search Result</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',

//     backgroundColor: colors.containerBG,
//     position: 'relative',
//     justifyContent: 'flex-start',
//   },
//   headerBg: {
//     backgroundColor: colors.background,
//     height: '22%',

//   },
// });

// export default SearchResult;
