import React from 'react';
import {Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../styles/fonts';
import AppText from '../components/AppText';
import {palette} from '../styles/palette';
import {sizing} from '../styles/sizing';
import HomeScreen from '../screens/HomeScreen';
import SearchStackScreen from './search';
import MeetingScreen from '../screens/MeetingScreen';
import MainHeader from '../components/MainHeader';
import AccountStackScreen from './account';

const SalaVirtualIcon = fonts.icons;

function getTabIcon(route) {
    route = route.toLowerCase();
    switch (route) {
    case 'home':
        return 'home';
    case 'search':
        return 'search';
    case 'meeting':
        return 'on';
    case 'account':
        return 'user';
    default:
        return 'home';
    }
}

function getScreenLabel(route) {
    switch (route.toLowerCase()) {
    case 'home':
        return 'Início';
    case 'search':
        return 'Busca';
    case 'meeting':
        return 'Reuniões';
    case 'account':
        return 'Conta';
    default:
        return route;
    }
}

const BottomTab = createBottomTabNavigator();

const Tab = () => {
    const {colors} = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                header: () => {
                    return (
                        <MainHeader title={getScreenLabel(route.name)} />
                    );
                },
                tabBarStyle: {
                    height: sizing.l * (Platform.OS === 'android' ? 2.5 : 3.5),
                    backgroundColor: palette.lightGray,
                    borderTopColor: palette.lightGray,
                },
                tabBarLabel: ({focused, color}) => {
                    color = focused ? colors.primary : palette.black;
                    return <AppText size="s" color={color} style={{lineHeight: sizing.m}}>{getScreenLabel(route.name)}</AppText>;
                },
                tabBarIcon: ({focused, color, size}) => {
                    color = focused ? colors.primary : palette.black;
                    return (
                        <SalaVirtualIcon
                            name={getTabIcon(route.name)}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}>
            <BottomTab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <BottomTab.Screen name="Search" component={SearchStackScreen} options={{headerShown: false}} />
            <BottomTab.Screen name="Meeting" component={MeetingScreen} options={{headerShown: false}} />
            <BottomTab.Screen name="Account" component={AccountStackScreen} options={{headerShown: false}} />
        </BottomTab.Navigator>
    );

};

export default Tab;
