import React, {useMemo, useState, useContext, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {themes} from '../styles/themes';

const ThemeContext = React.createContext();

const ThemeProvider = props => {
  const scheme = useColorScheme();
  const defaultTheme =
    scheme === 'dark'
      ? Object.assign({}, JSON.parse(JSON.stringify(themes.dark)))
      : Object.assign({}, JSON.parse(JSON.stringify(themes.light)));
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    setTheme(
      Object.assign(
        {},
        JSON.parse(
          JSON.stringify(
            scheme === 'dark'
              ? Object.assign({}, JSON.parse(JSON.stringify(themes.dark)))
              : Object.assign({}, JSON.parse(JSON.stringify(themes.light))),
          ),
        ),
      ),
    );
  }, [scheme]);
  const changeBackground = color => {
    let newTheme = Object.assign({}, JSON.parse(JSON.stringify(scheme === 'dark'
            ? Object.assign({}, JSON.parse(JSON.stringify(themes.dark)))
            : Object.assign({}, JSON.parse(JSON.stringify(themes.light))),
        ),
      ),
    );
    if (color) {
      newTheme.colors.background = color;
    }
    setTheme(newTheme);
  };
  const value = useMemo(() => {
    return {theme, changeBackground};
  }, [theme]);
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useThemes = () => useContext(ThemeContext);
export {ThemeContext, useThemes};
export default ThemeProvider;
