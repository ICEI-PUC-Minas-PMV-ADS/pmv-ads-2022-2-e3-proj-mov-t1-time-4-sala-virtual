export const initialState = {
  isLoading: true,
  isSignedIn: false,
  userToken: null,
  user: null,
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: true,
        userToken: action.token,
        user: action.user,
      };
    case 'PROFILE_CHANGE':
      return {
        ...prevState,
        user: action.user,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: false,
        userToken: null,
        user: null,
      };
  }
};
