import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useTheme} from '@react-navigation/native';

import {Home} from '../screens/home';

import {fonts} from '../styles/fonts';
import {hexToRGBA} from '../helpers/hexToRGBA';
import AppHeaderText from '../components/AppHeaderText';

function getTabIcon(route) {
  route = route.toLowerCase();
  switch (route) {
    default:
      return 'home';
  }
}

function getScreenTitle(route) {
  switch (route.toLowerCase()) {
    case 'home':
      return 'Início';
    default:
      return route;
  }
}

const BottomTab = createBottomTabNavigator();

const Tab = () => {
  const {colors} = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerTitle: props => {
          props.children = getScreenTitle(props.children);
          return (
            <AppHeaderText size="m" weight="bold" align="center" {...props} />
          );
        },
        animationEnabled: false,
        tabBarLabelStyle: {
          fontFamily: fonts.sans.normal.regular,
        },
        tabBarIcon: ({focused, color, size}) => {
          color = focused ? colors.primary : hexToRGBA(colors.text, 0.5);
          return (
              <Text>Home</Text>
            // <AppIcon
            //   name={getTabIcon(route.name)}
            //   size={size}
            //   color={color}
            // />
          );
        },
      })}>
      <BottomTab.Screen name="Home" component={Home} />
    </BottomTab.Navigator>
  );
};

export default Tab;
