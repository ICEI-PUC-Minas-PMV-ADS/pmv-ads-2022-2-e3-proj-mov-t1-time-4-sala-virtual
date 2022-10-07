import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  TapGestureHandler,
  State,
  TextInput,
} from 'react-native-gesture-handler';

import {useTheme} from '@react-navigation/native';

import AppText from './AppText';
import {sizing} from '../styles/sizing';
import {fonts} from '../styles/fonts';
import {hexToRGBA} from '../helpers/hexToRGBA';
import {palette} from '../styles/palette';
import {mask} from 'react-native-mask-text';
import {useDebouncedCallback} from 'use-debounce';

const InputLabel = props => {
  const fieldRef = useRef(null);
  const {
    placeholder,
    value,
    onChangeText,
    onBlur,
    onFocus,
    error,
    touched,
    keyboardType,
    autoCapitalize,
    secureTextEntry,
    autoFocus,
  } = props;
  const [innerValue, setInnerValue] = useState('');
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    setInnerValue(props.mask ? mask(value, props.mask) : value);
  }, [value, props.mask]);
  const debounced = useDebouncedCallback(text => {
    onChangeText(text);
  }, 200);
  const _onChangeInput = text => {
    text = props.mask ? mask(text, props.mask) : text;
    setInnerValue(text);
    debounced(text);
  };
  const _onFocus = event => {
    setFocus(true);
    if (onFocus) {
      onFocus(event);
    }
  }
  const _onBlur = event => {
    setFocus(false);
    if (onBlur) {
      onBlur(event);
    }
  }
  const {colors} = useTheme();
  const _onTapInput = event => {
    if (event.nativeEvent.state !== State.END) {
      return;
    }
    if (!fieldRef.current) {
      return;
    }
    fieldRef.current.focus();
  };
  return (
    <View style={styles.containerStyle}>
      <TapGestureHandler onHandlerStateChange={_onTapInput}>
        <View>
          <AppText
            size="xs"
            color={
              error && touched ? palette.red : hexToRGBA(colors.text, 0.6)
            }>
            {props.label}
          </AppText>
          <TextInput
            ref={fieldRef}
            style={[styles.textInputStyle, {color: colors.text, borderColor: error && touched ? palette.red : (focus ? palette.green : colors.text)}]}
            placeholder={placeholder}
            onChangeText={_onChangeInput}
            onBlur={_onBlur}
            onFocus={_onFocus}
            value={innerValue}
            placeholderTextColor={hexToRGBA(colors.text, 0.8)}
            keyboardType={keyboardType ?? 'default'}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry ?? false}
            autoFocus={autoFocus}
          />
        </View>
      </TapGestureHandler>
      {error && touched && (
        <View style={styles.errorContainer}>
          <AppText size="s" style={styles.errorStyle}>
            {error}
          </AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: sizing.m,
  },
  errorContainer: {
    paddingBottom: sizing.s,
  },
  errorStyle: {
    width: '100%',
    color: palette.red,
    marginTop: sizing.s,
  },
  textInputStyle: {
    width: '100%',
    fontFamily: fonts.sans.normal.regular,
    fontSize: fonts.sizing.m,
    borderBottomWidth: 1,
  },
});

export default InputLabel;
