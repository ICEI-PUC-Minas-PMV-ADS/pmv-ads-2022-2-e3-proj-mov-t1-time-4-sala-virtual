import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputLabel from './InputLabel';
import ItemSeparator from './ItemSeparator';
import {palette} from '../styles/palette';

const GenericSearch = props => {
    const {
        onSearch,
    } = props;
    return (
        <View style={styles.searchContainer}>
            <ItemSeparator size="xl" />
            <InputLabel placeholder="Busca" onChangeText={onSearch} icon="search" iconColor={palette.black} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
    },
});

export default GenericSearch;
