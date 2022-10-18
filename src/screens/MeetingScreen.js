import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const MeetingScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <Text>Reuniões</Text>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MeetingScreen;
