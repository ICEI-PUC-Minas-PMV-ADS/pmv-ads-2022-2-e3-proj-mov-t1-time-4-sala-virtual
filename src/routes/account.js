import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from '../screens/AccountScreen';
import EditAccountScreen from '../screens/EditAccountScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import MainHeader from '../components/MainHeader';

const AccountStack = createNativeStackNavigator();

export const accountScreens = [
    {
        screen: 'EditAccount',
        icon: 'user',
        title: 'Dados pessoais',
        description: 'Minhas informações da conta',
    },
];

function getScreenTitle(route) {
    switch (route.toLowerCase()) {
    case 'account':
    case 'account main':
        return 'Ajustes de Conta';
    case 'editaccount':
        return 'Conta/Edite Seu Perfil';
    case 'newpassword':
        return 'Conta/Redefinir Senha';
    default:
        return route;
    }
}

const AccountStackScreen = () => {
    return (
        <AccountStack.Navigator
            screenOptions={({route}) => ({
                header: () => {
                    return (
                        <MainHeader title={getScreenTitle(route.name)} />
                    );
                },
                animationEnabled: false,
                headerBackTitleVisible: false,
            })}>
            <AccountStack.Screen name="Account Main" component={AccountScreen}/>
            <AccountStack.Screen name="EditAccount" component={EditAccountScreen} />
            <AccountStack.Screen name="NewPassword" component={NewPasswordScreen} />
        </AccountStack.Navigator>
    );
};

export default AccountStackScreen;
