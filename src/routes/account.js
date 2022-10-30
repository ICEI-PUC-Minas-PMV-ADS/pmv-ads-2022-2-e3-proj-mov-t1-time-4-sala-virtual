import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from '../screens/AccountScreen';

export const accountScreens = [
  {
    screen: 'profile',
    icon: 'user',
    title: 'Dados pessoais',
    description: 'Minhas informações da conta',
  },
  {
    screen: 'wallet',
    icon: 'credit-card',
    title: 'Carteira',
    description: 'Meu saldo e cartões',
  },
  {
    screen: 'notifications',
    icon: 'notification-on',
    title: 'Notificações',
    description: 'Minhas notificações',
  },
  {
    screen: 'help',
    icon: 'square',
    title: 'Ajuda',
    description: 'Perguntas frequentes',
  }
];

const AccountStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: true}}>
      <Stack.Screen
        name="Account"
        options={{headerShown: false}}
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
