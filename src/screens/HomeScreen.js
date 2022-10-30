import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

import {useAuth} from '../providers/auth';

const HomeScreen = () => {
    const {state} = useAuth();
    return (
        <ScreenWrapper style={styles.appContainer}>
            <Text>Olá, {state.user.name}</Text>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
