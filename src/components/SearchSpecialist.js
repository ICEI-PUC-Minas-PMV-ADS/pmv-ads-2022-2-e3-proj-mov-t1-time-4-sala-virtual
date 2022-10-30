import React from 'react';

import {View, StyleSheet} from 'react-native';

import {palette} from '../styles/palette';

import Button from './Button';
import AppText from '../components/AppText';
import ItemSeparator from '../components/ItemSeparator';
import {hexToRGBA} from '../helpers/hexToRGBA';
import {sizing} from '../styles/sizing';

const SearchSpecialist = () => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        style={styles.button}
        label="Ordenar............^"
        labelSize="s"
        color={hexToRGBA(palette.black, 0.3)}
        outline
      />
      <Button
        style={styles.button}
        label="01"
        labelSize="s"
        color={hexToRGBA(palette.black, 0.3)}
        outline
      />
      <Button
        style={styles.button}
        label="02"
        labelSize="s"
        color={hexToRGBA(palette.black, 0.3)}
        outline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: sizing.l,
    paddingHorizontal: sizing.l,
  },
});

export default SearchSpecialist;
