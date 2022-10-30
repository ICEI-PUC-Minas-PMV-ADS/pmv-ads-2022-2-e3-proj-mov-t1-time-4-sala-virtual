import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import LoginForm from '../components/LoginForm';
import ItemSeparator from '../components/ItemSeparator';

const LoginScreen = () => {
    return (
        <ScreenWrapper style={styles.loginContainer}>
            <Image
                style={styles.logoImage}
                source={require('../assets/images/logo.png')}
            />
            <ItemSeparator size="xl" />
            <LoginForm/>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
    },
    logoImage: {
        height: 84,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

export default LoginScreen;
