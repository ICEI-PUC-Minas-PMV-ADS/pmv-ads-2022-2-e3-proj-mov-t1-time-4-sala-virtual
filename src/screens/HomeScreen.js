import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import AppText from '../components/AppText';

import {useAuth} from '../providers/auth';
import { palette } from '../styles/palette';

import AppointmentInfo from '../components/AppointmentInfo';


const HomeScreen = () => {
    const {state} = useAuth();
    return (
      <ScreenWrapper style={styles.appContainer}>
          <AppText weight="bold" size="l" color={palette.darkBlue}>Olá, {state.user.name}!</AppText>
          <AppointmentInfo title="Próxima Reunião"></AppointmentInfo>
      </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
