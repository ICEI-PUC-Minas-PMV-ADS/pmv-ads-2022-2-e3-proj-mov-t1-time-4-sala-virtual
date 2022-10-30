import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from './AppText';
import {palette} from '../styles/palette';
import {hexToRGBA} from '../helpers/hexToRGBA';
import Button from './Button';
import {sizing} from '../styles/sizing';
import ItemSeparator from './ItemSeparator';
import {fonts} from '../styles/fonts';

const SalaVirtualIcon = fonts.icons;

const AppointmentInfo = props => {
  const {
    title,
    rounded,
    specialist,
    specialty,
    date,
    weekDay,
    startEndHour,
    duration,
  } = props;

  return (
    <View
      style={[
        styles.container,
        {paddingHorizontal: sizing.s, borderRadius: rounded ? sizing.s : 0},
      ]}>
      <ItemSeparator size="s" />
      <AppText color={palette.black} weight="bold">
        {title}
      </AppText>

      <ItemSeparator size="s" />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Button label="teste" muted style={{justifyContent: 'flex-start'}} />
        <View style={{paddingHorizontal: sizing.s}}>
          <AppText weight="bold" size="s">
            {specialist}
          </AppText>
          <AppText color={palette.black} size="xs">
            {specialty}
          </AppText>
        </View>
      </View>

      <ItemSeparator size="s" />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: palette.white}} />
      </View>

      <ItemSeparator size="s" />

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Button label="teste" muted style={{justifyContent: 'flex-start'}} />
        <View style={{paddingHorizontal: sizing.s}}>
          <AppText weight="bold" size="s">
            {date}
          </AppText>
          <AppText color={palette.black} size="xs">
            {weekDay}
          </AppText>
        </View>
      </View>

      <ItemSeparator size="s" />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: palette.white}} />
      </View>

      <ItemSeparator size="s" />

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Button label="teste" muted style={{justifyContent: 'flex-start'}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: palette.white}} />
        </View>
        <View style={{paddingHorizontal: sizing.s}}>
          <AppText weight="bold" size="s">
            {startEndHour}
          </AppText>
          <AppText color={palette.black} size="xs">
            {duration}
          </AppText>
        </View>
      </View>

      <ItemSeparator size="s" />

      <View style={styles.buttons}>
        <Button
          label="Entrar"
          color={palette.blue}
          labelWeight="bold"
          labelColor={palette.blue}
          outline={palette.blue}
          style={{
            backgroundColor: palette.white,
            paddingVertical: sizing.s / 2,
            width: '45%',
          }}></Button>
        <Button
          label="Cancelar"
          color={palette.red}
          labelWeight="bold"
          labelColor={palette.red}
          outline
          style={{
            backgroundColor: palette.white,
            paddingVertical: sizing.s / 2,
            width: '45%',
          }}></Button>
      </View>
      <ItemSeparator size="m" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: hexToRGBA(palette.lightBlue, 0.1),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
  },
});

export default AppointmentInfo;
