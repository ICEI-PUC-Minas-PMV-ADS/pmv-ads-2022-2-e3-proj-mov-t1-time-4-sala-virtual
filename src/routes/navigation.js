import React from 'react';

import {useThemes} from '../providers/themes';
import Auth from './auth';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';

const Navigation = () => {
  const themes = useThemes();
  return (
    <GestureHandlerRootView
      style={{flex: 1, backgroundColor: themes.theme.colors.background}}>
      <NavigationContainer
        theme={themes.theme}
        onReady={() => RNBootSplash.hide()}>
          <Auth />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigation;
