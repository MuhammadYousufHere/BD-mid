import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

import AppButton from '../../components/Button';
import colors from '../../config/colors';

const AddressHeader = ({ offer = '....', address = '....', onEdit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.leftBody}>
          <Image
            style={styles.addressIcon}
            source={require('../../assets/Results/pin.png')}
          />
          <Text style={styles.addressText}>{address}</Text>
          <TouchableWithoutFeedback onPress={onEdit}>
            <Image
              style={styles.editIcon}
              source={require('../../assets/Results/update.png')}
            />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text style={styles.offerText}>{offer}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <AppButton
          title='View Offer'
          styleIt={styles.btnOne}
          textStyle={styles.btnText}
          x1='1'
          y1='9'
          x2='4'
          y2='5'
        />
      </View>
    </View>
  );
};

export default AddressHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  leftBody: { flexDirection: 'row', alignItems: 'center' },
  btnOne: {
    // marginLeft: 0,
  },
  btnText: {
    textTransform: 'capitalize',
    fontSize: 13,
    fontWeight: '500',
  },
  editIcon: { width: 18, height: 18, resizeMode: 'contain' },

  right: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  offerText: {
    fontSize: 20,
    color: colors.darkBg,
    paddingLeft: 3,
    paddingTop: 3,
    fontFamily: 'MontserratSBold',
  },
  left: {
    flex: 0.65,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  addressIcon: { width: 15, height: 15, resizeMode: 'contain' },
  addressText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: colors.medium,
    marginRight: 12,
    paddingRight: 6,
  },
});
