import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import AppText from '../components/AppText';
import InputLabel from '../components/InputLabel';
import Button from '../components/Button';
import {palette} from '../styles/palette';
import {useNavigation} from '@react-navigation/native';

const ForgotScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../assets/images/logo.png')}
      />
      <ItemSeparator />
      <ItemSeparator size="xl" />
      <AppText color={palette.black} align={'center'} size="m">
        Para redefinir a sua senha, informe o usuário ou e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções
      </AppText>
      <ItemSeparator size="xl" />
      <InputLabel placeholder={'Email'} error />
      <ItemSeparator size="xl" />
      <Button
        label="Enviar"
        color={palette.blue}
        labelWeight="bold"
        labelColor={palette.white}
        onPress={() => navigation.navigate('PasswordReset')} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  logoImage: {
    height: 84,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default ForgotScreen;
