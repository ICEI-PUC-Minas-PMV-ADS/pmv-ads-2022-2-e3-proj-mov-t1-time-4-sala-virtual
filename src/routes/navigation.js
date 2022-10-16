import React, {useCallback, useEffect, useState} from 'react';

import {useThemes} from '../providers/themes';
import {useAuth} from '../providers/auth';
import Auth from './auth';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

const Navigation = () => {
    const {theme, fontsLoaded} = useThemes();
    const {state} = useAuth();
    const [isReady, setIsReady] = useState(false);
    const onAppReady = useCallback(() => {
        if (fontsLoaded) {
            setIsReady(true);
        }
    }, [fontsLoaded]);
    useEffect(() => {
        async function hideSplash() {
            if (isReady && !state.isLoading) {
                await SplashScreen.hideAsync();
            }
        }
        hideSplash();
    }, [state, isReady]);
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
