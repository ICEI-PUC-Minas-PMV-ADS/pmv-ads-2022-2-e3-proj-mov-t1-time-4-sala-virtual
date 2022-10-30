import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import RegisterForm from '../components/RegisterForm';
import ItemSeparator from '../components/ItemSeparator';

const RegisterClientScreen = () => (
    <ScreenWrapper scroll>
        <ItemSeparator size="xl" />
        <Image
            style={styles.logoImage}
            source={require('../assets/images/logo.png')}
        />
        <ItemSeparator size="xl" />
        <RegisterForm type="client" />
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    logoImage: {
        height: 84,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

export default RegisterClientScreen;
