import React, {useCallback} from 'react';

import {useThemes} from '../providers/themes';
import {useAuth} from '../providers/auth';
import Auth from './auth';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

const Navigation = () => {
    const {theme, fontsLoaded} = useThemes();
    const {state} = useAuth();
    const onAppReady = useCallback(async () => {
        if (fontsLoaded && !state.isLoading) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, state]);
    return !fontsLoaded ? null : (
    <GestureHandlerRootView
        style={{flex: 1, backgroundColor: theme.colors.background}}>
        <NavigationContainer
        theme={theme}
        onReady={onAppReady}>
            <Auth />
        </NavigationContainer>
    </GestureHandlerRootView>
    );
};

export default Navigation;
