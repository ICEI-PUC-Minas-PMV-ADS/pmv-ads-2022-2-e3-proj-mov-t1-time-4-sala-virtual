import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
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
    <ScreenWrapper style={styles.appContainer} scroll>
      <AppText
        weight="bold"
        size="l"
        color={palette.darkBlue}
        style={{marginTop: sizing.xl + sizing.m, alignSelf: 'flex-start'}}>
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

      <Image
        style={styles.bannerImage}
        source={require('../assets/images/banner.jpg')}
      />

      <View style={{flexDirection: 'row'}}>
        <Card
          color={palette.lightBlue}
          style={{
            flexDirection: 'row',
            borderBottomLeftRadius: sizing.s,
            borderBottomRightRadius: sizing.s,
          }}>
          <View style={{flexDirection: 'row'}}>
            <SalaVirtualIcon
              name="search"
              size={fonts.sizing.l + 1}
              color={palette.white}
              style={{alignSelf: 'center', paddingRight: sizing.m}}
            />
          </View>
          <View>
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
        </Card>
      </View>

      <ItemSeparator size="l"/>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: sizing.l + sizing.s,
  },
  bannerImage: {
    height: 250,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    borderTopLeftRadius: sizing.s,
    borderTopRightRadius: sizing.s,
  },
});

export default HomeScreen;
