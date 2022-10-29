import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import NewPasswordResetForm from '../components/NewPasswordResetForm';

const NewPasswordResetScreen = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <NewPasswordResetForm />
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

export default NewPasswordResetScreen;