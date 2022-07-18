import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
const CompareListItem = ({
  price,
  duration,
  cents,
  lineTop,
  lineBottom,
  image,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.PriceContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {lineTop}
            </Text>
            <View style={styles.PriceOtherTextContainer}>
              <Text style={styles.PriceOtherText}>$</Text>
              <Text style={styles.titleBlock}>{price}</Text>
              <Text
                style={styles.PriceOtherText}
              >{`${cents}/${duration}`}</Text>
            </View>
            <Text style={styles.title} numberOfLines={1}>
              {lineBottom}
            </Text>
          </View>

          <View style={styles.iconContainer}>
            <Image style={styles.image} resizeMode='contain' source={image} />
          </View>

          <MaterialCommunityIcons
            color={colors.medium}
            name='chevron-right'
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default CompareListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 14,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'flex-start',
    padding: 7,
  },

  PriceContainer: {
    marginRight: 25,
    justifyContent: 'flex-start',
  },
  titleBlock: {
    color: colors.darkBg,
    padding: 1,
    fontSize: 34,
    fontFamily: 'MontserratSBold',
  },
  PriceOtherTextContainer: {
    flexDirection: 'row',
    marginBottom: -8,
  },
  title: {
    color: colors.lightest,
    fontFamily: 'MontserratMedium',
    fontSize: 13,
  },
  PriceOtherText: {
    color: colors.darkBg,
    padding: -7,
    fontFamily: 'MontserratSBold',
    fontSize: 17,
  },
  iconContainer: {
    flex: 1,
  },
  image: {
    width: 85,
    height: 85,
    alignSelf: 'flex-end',
    marginRight: 13,
  },
});
