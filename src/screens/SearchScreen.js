import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

import {sizing} from '../styles/sizing';
import {palette} from '../styles/palette';

import GenericSearch from '../components/GenericSearch';
import ItemSeparator from '../components/ItemSeparator';
import SpecialtyCards from '../components/SpecialtyCards';

const SearchScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <ItemSeparator size='m'/>
        <Text> z              Retornar</Text>
        <ItemSeparator size='m'/>
        <GenericSearch />
        <SpecialtyCards />
        
        
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        margin:sizing.m
    },
});

export default SearchScreen;
