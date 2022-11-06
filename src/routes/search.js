import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchCategoryScreen from '../screens/SearchCategoryScreen';
import SearchSpecialtyScreen from '../screens/SearchSpecialtyScreen';
import MainHeader from '../components/MainHeader';

const SearchStack = createNativeStackNavigator();

function getScreenTitle(route) {
    switch (route.toLowerCase()) {
    case 'search':
    case 'search main':
        return 'Categorias';
    case 'specialties':
        return 'Busca/Especialidades';
    default:
        return route;
    }
}

const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator
            screenOptions={({route}) => ({
                header: () => {
                    return (
                        <MainHeader title={getScreenTitle(route.name)} />
                    );
                },
                animationEnabled: false,
                headerBackTitleVisible: false,
            })}>
            <SearchStack.Screen name="Search Main" component={SearchCategoryScreen} />
            <SearchStack.Screen name="Specialties" component={SearchSpecialtyScreen} />
        </SearchStack.Navigator>
    );
};

export default SearchStackScreen;
