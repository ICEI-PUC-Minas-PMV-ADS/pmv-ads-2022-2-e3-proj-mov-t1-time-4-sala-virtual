import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Card from '../components/Card';
import AppText from '../components/AppText';
import {palette} from '../styles/palette';
import GridList from '../components/GridList';
import {listCategories} from '../networking/auth';
import ItemSeparator from '../components/ItemSeparator';
import {sizing} from '../styles/sizing';
import GenericSearch from '../components/GenericSearch';
import gradientWheel from '../helpers/gradientWheel';

const SearchScreen = () => {
    const [unfilteredData, setUnfilteredData] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function getCategoriesFromApi() {
            const apiCategories = await listCategories();
            setUnfilteredData(apiCategories);
            setCategories(apiCategories);
        }
        getCategoriesFromApi();
    }, []);
    const onSearchCategory = (categorySearch) => {
        if (!categorySearch) {
            setCategories(unfilteredData);
            return;
        }
        const filteredCategories = unfilteredData.filter(category => category.name.toLowerCase().includes(categorySearch.toLowerCase()));
        setCategories(filteredCategories);
    };
    const blueWheel = gradientWheel(['#192157', '#24307D', '#2C3A97', '#2A5EAD', '#2779A3']);
    const greenWheel = gradientWheel(['#17A339', '#20AD18', '#4E961D', '#88AD18', '#A39F17']);
    const renderCategory = ({item, index}) => (
        <Card color={(index + 1) % 2 === 0 ? greenWheel(Math.round((index + 1) / 2)) : blueWheel(Math.round((index + 1) / 2))} style={styles.categoryCard} rounded onPress={async () => console.log('aqui')}>
            <AppText weight="bold" size="l" color={palette.white}>{item.name}</AppText>
        </Card>
    );
    return (
        <ScreenWrapper>
            <GenericSearch onSearch={onSearchCategory} />
            <GridList data={categories} renderItem={renderCategory} numColumns={2} ItemSeparatorComponent={() => <ItemSeparator size="m" />}></GridList>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    categoryCard: {
        padding: sizing.s,
        paddingVertical: 32,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SearchScreen;
