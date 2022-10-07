import {themes} from '../styles/themes';

export const initialState = {
  dark: themes.light.dark,
  colors: themes.light.colors,
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case 'THEME_CHANGE':
      return {
        ...prevState,
        dark: action.dark,
        colors: action.colors,
      };
  }
};
