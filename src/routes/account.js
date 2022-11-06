import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from '../screens/AccountScreen';
import EditAccountScreen from '../screens/EditAccountScreen';
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
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
