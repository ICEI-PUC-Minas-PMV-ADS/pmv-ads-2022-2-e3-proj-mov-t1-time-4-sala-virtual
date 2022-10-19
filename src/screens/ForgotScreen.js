import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import {sizing} from '../styles/sizing';
import AppText from '../components/AppText';
import InputLabel from '../components/InputLabel';
import Button from '../components/Button';
import {palette} from '../styles/palette';
import {useNavigation} from '@react-navigation/native';

const ForgotScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper style={styles.appContainer}>
      <View style={{flex: 1}}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/logo.png')}
        />
        <ItemSeparator />
        <AppText color={'black'} align={'center'} size={16}>
          {
            'Para redefinir a sua senha, informe o usuário ou e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções'
          }
        </AppText>
        <ItemSeparator />
        <InputLabel placeholder={'Email'} error />
        <ItemSeparator />
      </View>
      <Button
        label="Enviar"
        color={palette.blue}
        style={styles.ButtonStyle}
        labelColor={palette.white}
        onPress={() => navigation.navigate('PasswordReset')}></Button>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 35,
  },
  logoImage: {
    width: 320,
    height: 84,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 184,
  },
  ButtonStyle: {
    marginTop: sizing.l,
    width: '100%',
  },
});

export default ForgotScreen;
