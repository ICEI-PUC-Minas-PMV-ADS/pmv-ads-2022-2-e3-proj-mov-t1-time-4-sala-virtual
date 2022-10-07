import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import ForgotScreen from '../screens/ForgotScreen';
import RegisterScreen from '../screens/RegisterScreen';

const LoginStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LoginStack;
