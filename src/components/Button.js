import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {sizing} from '../styles/sizing';
import {fonts} from '../styles/fonts';
import {hexToRGBA} from '../helpers/hexToRGBA';

const Button = props => {
  const {
    style,
    label,
    color,
    labelColor,
    labelSize,
    labelWeight,
    outline,
    onPress,
    icon,
    muted,
  } = props;
  let _handleButtonPress = async () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        {
          borderColor: muted ? 'transparent' : (!outline
            ? pressed
              ? hexToRGBA(color, 0.9)
              : color
            : color),
          backgroundColor: muted ? 'transparent' : (!outline
            ? pressed
              ? hexToRGBA(color, 0.9)
              : color
            : 'transparent'),
          opacity: !muted ? 1 : (pressed ? 0.9 : 1),
        },
        style ?? {},
      ]}
      onPress={_handleButtonPress}>
      {icon && (
        <Icon
          style={[styles.iconStyle, {color: labelColor}]}
          name={icon}
          size={sizing.l}
        />
      )}
      <Text
        style={[
          styles.labelText,
          {
            color: labelColor,
            fontFamily: fonts.sans.normal[labelWeight ?? 'regular'],
            fontSize: fonts.sizing[labelSize ?? 'm'],
          },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizing.s,
    padding: sizing.m,
    borderWidth: 1,
  },
  iconStyle: {
    position: 'absolute',
    left: sizing.xl,
  },
  labelText: {
    textAlign: 'center',
  },
});

export default Button;
