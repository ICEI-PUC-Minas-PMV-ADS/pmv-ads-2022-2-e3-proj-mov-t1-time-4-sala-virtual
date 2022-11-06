import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import GenericSearch from '../components/GenericSearch';
import {useRoute} from '@react-navigation/native';
import AppText from '../components/AppText';
import {listSpecialties} from '../networking/auth';
import Card from '../components/Card';
import {palette} from '../styles/palette';
import {hexToRGBA} from '../helpers/hexToRGBA';
import {sizing} from '../styles/sizing';
import ItemSeparator from '../components/ItemSeparator';
import {fonts} from '../styles/fonts';

const SearchSpecialtyScreen = () => {
    const SalaVirtualIcon = fonts.icons;
    const route = useRoute();
    const {category} = route.params;
    const [unfilteredData, setUnfilteredData] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    useEffect(() => {
        async function getCategoriesFromApi() {
            const apiSpecialties = await listSpecialties(category.id);
            setUnfilteredData(apiSpecialties);
            setSpecialties(apiSpecialties);
        }
        getCategoriesFromApi();
    }, []);
    const onSearchSpecialty = (specialtySearch) => {
        if (!specialtySearch) {
            setSpecialties(unfilteredData);
            return;
        }
        const filteredSpecialties = unfilteredData.filter(specialty => specialty.name.toLowerCase().includes(specialtySearch.toLowerCase()));
        setSpecialties(filteredSpecialties);
    };
    const renderSpecialty = ({item}) => (
        <Card color={hexToRGBA(palette.lightBlue, 0.1)} style={styles.specialtyCard} rounded onPress={() => console.log('aqui')}>
            <View style={styles.specialtyCardContainer}>
                <AppText weight="bold" size="l" color={palette.darkBlue} style={styles.specialtyText}>{item.name.toUpperCase()}</AppText>
                <SalaVirtualIcon name="right" size={sizing.l} style={styles.specialtyIcon} color={palette.darkBlue} />
            </View>
        </Card>
    );
    return (
        <ScreenWrapper>
            <GenericSearch onSearch={onSearchSpecialty} />
            <AppText weight="bold" size="xxl" align="center" color={palette.darkBlue} style={styles.categoryHeader}>{category.name}</AppText>
            <ItemSeparator size="l" />
            <FlatList data={specialties} renderItem={renderSpecialty} ItemSeparatorComponent={() => <ItemSeparator size="m" />} ListFooterComponent={() => <ItemSeparator size="m" />} />
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    categoryHeader: {
        lineHeight: 37,
    },
    specialtyCard: {
        padding: sizing.l,
        paddingVertical: sizing.m,
        justifyContent: 'center',
    },
    specialtyCardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    specialtyText: {
        flex: 1,
    },
    specialtyIcon: {
        width: sizing.l,
    },
});

export default SearchSpecialtyScreen;
