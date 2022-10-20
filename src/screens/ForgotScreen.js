import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import ForgotForm from '../components/ForgotForm';

const ForgotScreen = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <ItemSeparator size="xl" />
      <Image
        style={styles.logoImage}
        source={require('../assets/images/logo.png')}
      />
      <ItemSeparator size="xl" />
      <ForgotForm />
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
