import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

import {sizing} from "../styles/sizing";
import {palette} from '../styles/palette';

import ScreenWrapper from '../components/ScreenWrapper';
import InputLabel from '../components/InputLabel';
import Button from '../components/Button';


const RegisterClientScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <View style={{flex: 1}}>
            <Text>Olá Cliente</Text>
        </View>
        
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginContainer: {
        paddingHorizontal: sizing.m,
        flex: 1,
        justifyContent: 'center',
    },
    logoImage: {
        width: 320,
        height: 84,
        marginVertical: sizing.xxl,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
});

export default RegisterClientScreen;
