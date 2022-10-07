import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const RegisterScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <Text>Cadastre sua conta</Text>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RegisterScreen;
