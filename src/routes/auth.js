import React from 'react';

import {useAuth} from '../providers/auth';

import LoginStack from './login';
import Tab from './index';

const Auth = () => {
    const {state} = useAuth();
    return state.userToken == null ||
    ('is_active' in state.user && !state.user.isActive) ? (
            <LoginStack />
        ) : (
            <Tab />
        );
};

export default Auth;
