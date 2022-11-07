import React, {useEffect, useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import GenericSearch from '../components/GenericSearch';

import {View, StyleSheet, FlatList, Image} from 'react-native';

import Button from '../components/Button';

import {palette} from '../styles/palette';

import ItemSeparator from '../components/ItemSeparator';
import {hexToRGBA} from '../helpers/hexToRGBA';
import {sizing} from '../styles/sizing';
import {useRoute} from '@react-navigation/native';
import {listSpecialists} from '../networking/auth';
import Card from '../components/Card';
import AppText from '../components/AppText';

const SearchSpecialistScreen = () => {
    const route = useRoute();
    const {specialty} = route.params;
    const [unfilteredData, setUnfilteredData] = useState([]);
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
        async function getSpecialistsFromApi() {
            const apiSpecialists = await listSpecialists(specialty.id);
            setUnfilteredData(apiSpecialists);
            setSpecialists(apiSpecialists);
        }
        getSpecialistsFromApi();
    }, []);
    const onSearchSpecialist = (specialistSearch) => {
        if (!specialistSearch) {
            setSpecialists(unfilteredData);
            return;
        }
        const filteredSpecialists = unfilteredData.filter(specialist => specialist.name.toLowerCase().includes(specialistSearch.toLowerCase()));
        setSpecialists(filteredSpecialists);
    };
    const renderSpecialist = ({item}) => (
        <Card color={hexToRGBA(palette.lightBlue, 0.1)} style={styles.specialistCard} rounded onPress={() => console.log('Aqui')}>
            <View style={styles.specialistInfoContainer}>
                <AppText size="s" color={palette.black}>{specialty.name.toUpperCase()}</AppText>
                <AppText size="m" weight="bold" color={palette.darkBlue} style={styles.specialistText}>{item.name}</AppText>
                <View style={styles.scheduleButtonContainer}>
                    <Button label="Agendar" labelSize="m" color={palette.blue} labelColor={palette.white} labelWeight="bold" />
                </View>
            </View>
            <Image style={styles.specialistImg} source={require('../assets/images/avatar.png')}></Image>
        </Card>
    );
    return (
        <ScreenWrapper>
            <GenericSearch onSearch={onSearchSpecialist} />
            <View style={styles.filterContainer}>
                <Button
                    style={[styles.filterButton, styles.orderButton]}
                    label="Ordenar"
                    icon="down-2"
                    labelSize="s"
                    color={hexToRGBA(palette.black, 0.3)}
                    outline
                />
                <ItemSeparator size="m" />
                <Button
                    style={styles.filterButton}
                    icon="star"
                    iconSize={22}
                    color={hexToRGBA(palette.black, 0.3)}
                    outline
                />
                <ItemSeparator size="m" />
                <Button
                    style={styles.filterButton}
                    icon="clock"
                    iconSize={22}
                    color={hexToRGBA(palette.black, 0.3)}
                    outline
                />
            </View>
            <ItemSeparator size="l" />
            <ItemSeparator size="s" />
            <FlatList data={specialists} renderItem={renderSpecialist} ItemSeparatorComponent={() => <ItemSeparator size="m" />} ListFooterComponent={() => <ItemSeparator size="m" />} />
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    filterButton: {
        borderRadius: sizing.l,
        padding: 0,
        paddingHorizontal: sizing.l,
        height: 32,
    },
    orderButton: {
        flex: 1,
        paddingHorizontal: sizing.m,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    specialistCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    specialistInfoContainer: {
        flex: 1,
    },
    specialistText: {
        marginVertical: sizing.s / 2,
    },
    scheduleButtonContainer: {
        marginTop: sizing.s / 2,
        alignItems: 'flex-start',
    },
    specialistImg: {
        width: 96,
        height: 96,
        borderRadius: 96,
    }
});

export default SearchSpecialistScreen;
