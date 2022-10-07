import React, {useMemo, useReducer, useContext, useEffect} from 'react';
import {useThemes} from './themes';
import EncryptedStorage from 'react-native-encrypted-storage';

import * as auth from '../networking/auth';

import reducer, {initialState} from '../reducers/auth';

const AuthContext = React.createContext();

const apiInstance = auth.getInstance();

const AuthProvider = props => {
  const themes = useThemes();
  const [state, dispatch] = useReducer(reducer, initialState || {});
  useEffect(() => {
    const bootstrapAsync = async () => {
      apiInstance.interceptors.request.use(
        async config => {
          const token = await EncryptedStorage.getItem('userToken');
          if (token) {
            config.headers.Authorization = 'Bearer ' + token;
          } else {
            config.headers.Authorization = null;
          }
          return config;
        },
        error => {
          Promise.reject(error);
        },
      );
      apiInstance.interceptors.response.use(
        response => response,
        error => {
          if (error.response && error.response.status === 401) {
            handleSignOut();
          }
          return Promise.reject(error);
        },
      );
      try {
        const userToken = await EncryptedStorage.getItem('userToken');
        if (userToken) {
          return handleSignIn(userToken);
        } else {
          return handleSignOut();
        }
      } catch (e) {
        throw new Error(e);
      }
    };
    bootstrapAsync();
  }, []);
  const handleSignIn = async token => {
    themes.changeBackground(null);
    try {
      await EncryptedStorage.setItem('userToken', token);
      const user = await auth.getProfile();
      dispatch({type: 'SIGN_IN', user: user, token: token});
      return user;
    } catch (e) {
      return handleSignOut();
    }
  };
  const handleSignOut = async () => {
    try {
      await EncryptedStorage.removeItem('userToken');
      dispatch({type: 'SIGN_OUT'});
    } catch (e) {
      dispatch({type: 'SIGN_OUT'});
    }
  };
  const handleProfileChange = async user => {
    dispatch({type: 'PROFILE_CHANGE', user: user});
  };
  const value = useMemo(() => {
    return {
      state,
      handleSignIn,
      handleSignOut,
      handleProfileChange,
    };
  }, [state]);
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export {AuthContext, useAuth};
export default AuthProvider;
