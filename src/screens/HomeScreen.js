import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import AppText from '../components/AppText';

import {useAuth} from '../providers/auth';
import {palette} from '../styles/palette';
import ItemSeparator from '../components/ItemSeparator';

import AppointmentInfo from '../components/AppointmentInfo';
import {sizing} from '../styles/sizing';

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
      <ItemSeparator size="l"/>
      <AppointmentInfo title="Próxima Reunião"></AppointmentInfo>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    alignItems: 'center',
    paddingHorizontal: sizing.l + sizing.s
  },
});

export default HomeScreen;
