import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';
import AppText from '../components/AppText';

import {useAuth} from '../providers/auth';
import {palette} from '../styles/palette';
import ItemSeparator from '../components/ItemSeparator';
import Card from '../components/Card';
import {fonts} from '../styles/fonts';

import AppointmentInfo from '../components/AppointmentInfo';
import {sizing} from '../styles/sizing';
import {getClosestScheduledAppointment} from '../networking/auth';

const SalaVirtualIcon = fonts.icons;

const HomeScreen = () => {
  const navigation = useNavigation();
  const {state} = useAuth();
  const [closestAppointment, setClosestAppointment] = useState(null);
  useEffect(() => {
    async function getClosestScheduledAppointmentFromApi() {
      const closestAppointmentFromApi = await getClosestScheduledAppointment();
      setClosestAppointment(closestAppointmentFromApi);
    }
    getClosestScheduledAppointmentFromApi();
  })
  return (
    <ScreenWrapper scroll>
      {Platform.OS === 'android' && (
        <ItemSeparator size={sizing.xxl + sizing.s} />
      )}
      <ItemSeparator size="l" />
      <AppText weight="bold" size="l" color={palette.darkBlue}>
        Olá, {state.user.name}!
      </AppText>
      <ItemSeparator size="l" />
      {closestAppointment && (
          <View>
            <AppointmentInfo
                title="Próxima Reunião"
                specialist={closestAppointment.specialist}
                specialty={closestAppointment.specialty}
                startDate={closestAppointment.startDate}
                endDate={closestAppointment.endDate}
                rounded
            />
            <ItemSeparator size="l" />
          </View>
      )}
      <Card
        onPress={() => navigation.navigate('Search')}
        style={styles.bannerContainer}
        color={palette.lightBlue}
        rounded>
        <Image
          style={styles.bannerImage}
          source={require('../assets/images/banner.jpg')}
        />
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            <SalaVirtualIcon
              name="search"
              size={fonts.sizing.l + 2}
              color={palette.white}
            />
          </View>
          <ItemSeparator size="m" />
          <View style={styles.textContainer}>
            <AppText
              color={palette.white}
              weight="bold"
              size={fonts.sizing.m + 2}>
              Precisa de orientação?
            </AppText>
            <AppText color={palette.white} size={fonts.sizing.m + 2}>
              Encontre um especialista
            </AppText>
          </View>
        </View>
      </Card>
      {Platform.OS === 'android' && (
        <ItemSeparator size="l" />
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    padding: 0,
  },
  bannerImage: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    borderTopLeftRadius: sizing.s,
    borderTopRightRadius: sizing.s,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: sizing.m,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
});

export default HomeScreen;
