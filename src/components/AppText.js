import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../styles/fonts';
import {hexToRGBA} from '../helpers/hexToRGBA';

const AppText = props => {
  const {size, color, align, weight, style, opacity} = props;
  const {colors} = useTheme();
  let customStyle = {
    color: color ?? colors.text,
  };
  if (opacity) {
    customStyle.color = hexToRGBA(customStyle.color, opacity);
  }
  if (size) {
    customStyle.fontSize = fonts.sizing[size] ?? size;
  }
  if (align) {
    customStyle.textAlign = align;
  }
  if (weight && fonts.sans.normal[weight]) {
    customStyle.fontFamily = fonts.sans.normal[weight];
  }
  return (
    <Text style={[styles.textStyle, customStyle, {...style}]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.sans.normal.regular,
    fontSize: fonts.sizing.m,
  },
});

export default AppText;
