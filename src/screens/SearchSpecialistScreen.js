import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import SearchSpecialist from '../components/SearchSpecialist';
import GenericSearch from '../components/GenericSearch';

import {View, StyleSheet} from 'react-native';

import Button from '../components/Button';

import {palette} from '../styles/palette';

import {fonts} from '../styles/fonts';

import ItemSeparator from '../components/ItemSeparator';
import {hexToRGBA} from '../helpers/hexToRGBA';
import {sizing} from '../styles/sizing';

const SalaVirtualIcon = fonts.icons;

const SearchSpecialistScreen = () => {
  return (
    <ScreenWrapper>
      <GenericSearch />
      <ItemSeparator size="m" />
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.buttonHeader}
          label={[
            'Ordernar       ',
            <SalaVirtualIcon
              name="down-2"
              size={fonts.sizing.l}
              color={palette.black}
            />,
          ]}
          labelSize="s"
          color={hexToRGBA(palette.black, 0.3)}
          outline></Button>
        <Button
          style={styles.buttonHeader}
          label={[
            <SalaVirtualIcon
              name="star"
              size={fonts.sizing.l}
              color={palette.black}
            />,
          ]}
          labelSize="s"
          color={hexToRGBA(palette.black, 0.3)}
          outline
        />
        <Button
          style={styles.buttonHeader}
          label={[
            <SalaVirtualIcon
              name="clock"
              size={fonts.sizing.l}
              color={palette.black}
            />,
          ]}
          labelSize="s"
          color={hexToRGBA(palette.black, 0.3)}
          outline
        />
      </View>
      <ItemSeparator size="xl" />
      <SearchSpecialist specialist="Paloma Chaves" specialty="cardiologista" />
    </ScreenWrapper>
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
});

export default SearchSpecialistScreen;
