import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchCategoryScreen from '../screens/SearchCategoryScreen';
import SearchSpecialtyScreen from '../screens/SearchSpecialtyScreen';
import SearchSpecialistScreen from '../screens/SearchSpecialistScreen';
import MainHeader from '../components/MainHeader';
import ScheduleScreen from '../screens/ScheduleScreen';

const SearchStack = createNativeStackNavigator();

function getScreenTitle(route) {
    switch (route.toLowerCase()) {
    case 'search':
    case 'search main':
        return 'Categorias';
    case 'specialties':
        return 'Busca/Especialidades';
    case 'specialists':
        return 'Busca/Especialistas';
    case 'schedule':
        return 'Busca/Perfil Especialista';
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
            <SearchStack.Screen name="Specialists" component={SearchSpecialistScreen} />
            <SearchStack.Screen name="Schedule" component={ScheduleScreen} />
        </SearchStack.Navigator>
    );
};

export default SearchStackScreen;
