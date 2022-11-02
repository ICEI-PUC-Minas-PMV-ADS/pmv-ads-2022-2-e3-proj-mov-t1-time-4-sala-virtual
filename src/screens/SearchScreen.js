import React from 'react';
import {StyleSheet, Text} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';

const SearchScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <Text>Busca</Text>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchScreen;

{/*
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

import GenericSearch from '../components/GenericSearch';
import ItemSeparator from '../components/ItemSeparator';
import SpecialtyCards from '../components/SpecialtyCards';

const SearchScreen = () => (
    <ScreenWrapper style={styles.appContainer}>
        <Text> Aqui tem um voltar</Text>
        <ItemSeparator size='m'/>
        <GenericSearch />
        <SpecialtyCards title='Medicina' 
        objectList = 
        {[{id: 1, name: 'Acumputura'},
        {id: 2, name: 'Alergia e imunologia'},
        {id: 3, name: 'Anestesiologia'},
        {id: 4, name: 'Angiologia'},
        {id: 5, name: 'Cardiologia'},
        {id: 6, name: 'Cirurgia'},
        {id: 7, name: 'Dermatologia'},]}
        />
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    appContainer: {
        alignItems: 'center',
    },
});

export default SearchScreen;
*/}
