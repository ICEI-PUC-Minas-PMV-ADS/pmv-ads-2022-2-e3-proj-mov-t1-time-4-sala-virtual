import React from 'react';
import {SafeAreaView, View, StyleSheet,Text} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import {sizing} from '../styles/sizing';

const ScreenWrapper = props => {
  const customStyle = props.style ?? [];
  const ViewComponent = props.scroll ? ScrollView : View;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ViewComponent style={[styles.screenContainer, customStyle]}>
        {props.children}
      </ViewComponent>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: sizing.m,
  },
});

export default ScreenWrapper;
