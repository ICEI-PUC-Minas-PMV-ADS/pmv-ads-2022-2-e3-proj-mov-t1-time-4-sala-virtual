import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import AppText from '../components/AppText';

import {useAuth} from '../providers/auth';
import {palette} from '../styles/palette';
import ItemSeparator from '../components/ItemSeparator';
import Card from '../components/Card';
import {fonts} from '../styles/fonts';

import AppointmentInfo from '../components/AppointmentInfo';
import {sizing} from '../styles/sizing';

const SalaVirtualIcon = fonts.icons;

const HomeScreen = () => {
  const {state} = useAuth();
  return (
    <ScreenWrapper style={styles.appContainer}>
      <AppText
        weight="bold"
        size="l"
        color={palette.darkBlue}
        style={{marginTop: sizing.xxl * 2, alignSelf: 'flex-start'}}>
        Olá, {state.user.name}!
      </AppText>
      <ItemSeparator size="l" />
      <AppointmentInfo
        title="Próxima Reunião"
        specialist="Dra. Alice Costa"
        specialty="Cardiologia"
        date="10/10/2022"
        weekDay="terça-feira"
        startEndHour="09:00 AM - 10:00 AM"
        duration="1 hora"
        rounded></AppointmentInfo>
      <ItemSeparator size="l" />

      <View style={{flexDirection: 'row'}}>
        <Card color={palette.lightBlue} rounded style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            <SalaVirtualIcon
              name="left-2"
              size={fonts.sizing.l + 1}
              color={palette.black}
            />
          </View>
          <View>
            <AppText color={palette.white} weight="bold" size="l">
              Precisa de orientação?
            </AppText>
            <AppText color={palette.white} size="l">
              Precisa de orientação?
            </AppText>
          </View>
        </Card>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: sizing.l + sizing.s,
  },
});

export default HomeScreen;
