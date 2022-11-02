import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {hexToRGBA} from '../helpers/hexToRGBA';


import {sizing} from '../styles/sizing';
import {useTheme} from '@react-navigation/native';

const Card = props => {
  const {colors} = useTheme();
  const {
    style,
    color,
    rounded,
    onPress,
  } = props;
  let _handleCardPress = async () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <Pressable
      style={({pressed}) => [
        styles.card,
        {
          backgroundColor: color ?? hexToRGBA(colors.primary, 1),
          borderRadius: rounded ? sizing.s : 0,
          opacity: pressed ? 0.9 : 1,
        },
        style ?? {},
      ]}
      onPress={_handleCardPress}>
      {props.children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: sizing.m,
  },
});

export default Card;