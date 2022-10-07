import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const ForgotScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <Text>Esqueci minha senha</Text>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ForgotScreen;
