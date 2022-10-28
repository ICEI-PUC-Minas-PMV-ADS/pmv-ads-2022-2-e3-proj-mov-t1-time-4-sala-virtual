import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from './AppText';
import {palette} from '../styles/palette';
import Button from './Button';
import {sizing} from '../styles/sizing';
import ItemSeparator from './ItemSeparator';

const AppointmentInfo = props => {
  const {title} = props;

  return (
    <View style={[styles.container, {paddingHorizontal: sizing.s}]}>
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
            Dra. Alice Costa
          </AppText>
          <AppText color={palette.black} size="xs">
            Cardiologia
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
            10/10/2022
          </AppText>
          <AppText color={palette.black} size="xs">
            terça-feira
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
          09:00 AM - 10:00 AM
        </AppText>
        <AppText color={palette.black} size="xs">
          1 hora
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
          style={{backgroundColor: palette.white, paddingVertical: (sizing.s/2), width: '45%'}}></Button>
        <Button
          label="Cancelar"
          color={palette.red}
          labelWeight="bold"
          labelColor={palette.red}
          outline={palette.red}
          style={{backgroundColor: palette.white, paddingVertical: (sizing.s/2), width: '45%'}}></Button>
      </View>
      <ItemSeparator size="m" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.extraLightBlue,
    width: '95%',
    borderRadius: sizing.m,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center'
  },
});

export default AppointmentInfo;
