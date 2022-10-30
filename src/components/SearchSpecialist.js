import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

import {palette} from '../styles/palette';

import Button from './Button';
import AppText from '../components/AppText';
import ItemSeparator from '../components/ItemSeparator';
import {hexToRGBA} from '../helpers/hexToRGBA';
import {sizing} from '../styles/sizing';
import Card from '../components/Card';

const SearchSpecialist = props => {
  const {specialty, specialist, avatar} = props;
  return (
    <View>
      <View style={styles.cardContainer}>
        <Card
          style={styles.cardContainer}
          rounded
          color={hexToRGBA(palette.blue, 0.1)}>
          <View>
            <AppText size="s" color={palette.black}>
              {specialty.toUpperCase()}
            </AppText>
            <ItemSeparator size={sizing.s - 4} />
            <AppText size="m" weight="bold" color={palette.darkBlue}>
              {specialist}
            </AppText>
            <ItemSeparator size="s" />
            <Button
              style={styles.buttonSend}
              label="Agendar"
              labelColor={palette.white}
              color={palette.blue}
              labelWeight="bold"
              labelSize="m">
              {'Agendar'}
            </Button>
          </View>
          <View>
            <Image style={styles.avatarImage} source={avatar} />
          </View>
        </Card>
      </View>
      <ItemSeparator size="m" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonHeader: {
    borderRadius: sizing.l,
    paddingHorizontal: sizing.l,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarImage: {
    width: 96,
    height: 96,
  },
  buttonSend: {
    width: '70%',
  },
});

export default SearchSpecialist;
