import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ItemSeparator from '../components/ItemSeparator';
import Button from '../components/Button';
import {palette} from '../styles/palette';
import {useNavigation} from '@react-navigation/native';

const ForgotScreen = () => {
    const navigation = useNavigation();
    return (
      <ScreenWrapper style={styles.appContainer}>
          <Text>Esqueci minha senha</Text>
          <ItemSeparator/>
          <Button label="Redefinir senha" color={palette.darkBlue} labelColor={palette.white} onPress={() => navigation.navigate('PasswordReset')}></Button>
      </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ForgotScreen;
