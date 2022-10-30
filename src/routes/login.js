import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import ForgotScreen from '../screens/ForgotScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';
import RegisterClientScreen from '../screens/RegisterClientScreen';
import RegisterSpecialistScreen from '../screens/RegisterSpecialistScreen';

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
                <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="RegisterClient" component={RegisterClientScreen} />
                <Stack.Screen name="RegisterSpecialist" component={RegisterSpecialistScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default LoginStack;
