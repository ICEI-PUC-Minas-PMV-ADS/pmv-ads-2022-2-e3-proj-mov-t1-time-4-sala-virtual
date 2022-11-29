import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import AppText from '../components/AppText';
import AppointmentInfo from '../components/AppointmentInfo';
import ItemSeparator from '../components/ItemSeparator';
import {sizing} from '../styles/sizing';
import {palette} from '../styles/palette';

const MeetingScreen = () => (
  <ScreenWrapper scroll style={styles.appContainer}>
    {Platform.OS === 'android' && (
      <ItemSeparator size={sizing.xxl + sizing.s} />
    )}
    <ItemSeparator size="l" />
    <AppText
      weight="bold"
      size="l"
      style={{alignSelf: 'center'}}
      color={palette.darkBlue}>
      Reuniões Agendadas
    </AppText>
    <ItemSeparator size={sizing.l + sizing.s} />
    <View>
      <AppointmentInfo
        specialist="Dra. Alice Costa"
        specialty="Cardiologia"
        date="10/10/2022"
        weekDay="terça-feira"
        startHour="2022-12-08 09:00:00"
        endHour="2022-12-08 10:00:00"
        duration="1 hora"
        rounded
      />
      <ItemSeparator size="m" />
    </View>
  </ScreenWrapper>
);

const styles = StyleSheet.create({});

export default MeetingScreen;
