import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const PasswordResetScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <Text>Redefinir senha</Text>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PasswordResetScreen;
