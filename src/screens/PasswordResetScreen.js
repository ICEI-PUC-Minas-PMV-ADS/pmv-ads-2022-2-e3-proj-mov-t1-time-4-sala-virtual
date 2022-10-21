import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import PasswordResetForm from '../components/PasswordResetForm';

const PasswordResetScreen = () => {
  return (
    <ScreenWrapper style={styles.appContainer}>
      <ItemSeparator size="xl" />
        <Image
        style={styles.logoImage}
        source={require('../assets/images/logo.png')}
      />
      <ItemSeparator size="xl" />
      <PasswordResetForm />
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

export default PasswordResetScreen;
