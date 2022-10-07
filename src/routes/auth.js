import React from 'react';

import SplashScreen from '../screens/SplashScreen';

import {useAuth} from '../providers/auth';

import LoginStack from './login';
import Tab from './index';

const Auth = () => {
  const {state} = useAuth();
  if (state.isLoading) {
    return (
      <SplashScreen />
    );
  }
  return state.userToken == null ||
    ('is_active' in state.user && !state.user.is_active) ? (
    <LoginStack />
  ) : (
    <Tab />
  );
};

export default Auth;
