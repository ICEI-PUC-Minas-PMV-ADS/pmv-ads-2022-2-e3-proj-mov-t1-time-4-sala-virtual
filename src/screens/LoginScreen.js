import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {sizing} from "../styles/sizing";
import ScreenWrapper from '../components/ScreenWrapper';
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
    return (
        <ScreenWrapper style={styles.loginContainer}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.logoImage}
                    source={require('../assets/images/logo.png')}
                />
                <LoginForm/>
            </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        paddingHorizontal: sizing.m,
        flex: 1,
        justifyContent: 'center',
        marginTop: sizing.xxl,
    },
    logoImage: {
        width: 320,
        height: 84,
        marginVertical: sizing.xxl,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

export default LoginScreen;
