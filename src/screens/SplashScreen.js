import React from 'react';
import {Platform, StyleSheet, View, Image} from 'react-native';
import {palette} from "../styles/palette";

const SplashScreen = () => (
    <View style={styles.screenContainer}>
        <Image
            style={styles.logoContainer}
            source={require('../assets/images/splash_logo.png')}
        />
    </View>
);

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: palette.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        width: Platform.OS === 'ios' ? 168 : 139,
        height: Platform.OS === 'ios' ? 160 : 132,
    },
});

export default SplashScreen;
