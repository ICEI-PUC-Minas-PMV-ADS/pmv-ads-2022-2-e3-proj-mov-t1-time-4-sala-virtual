import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

import {sizing} from '../styles/sizing';
import {palette} from '../styles/palette';

import ListaTeste from '../components/SpecialtyCards'
import GenericSearch from '../components/GenericSearch';

const SearchScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <Text> z              Retornar</Text>
        <GenericSearch />
        <ListaTeste title = "Medicina"/>
        
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        paddingTop: sizing.m*3
    },
    textContainer: {
        paddingTop: sizing.xxl,
    },


});

export default SearchScreen;
