import React from 'react';
import {View, StyleSheet} from 'react-native';

import {palette} from '../styles/palette';

const LineSeparator = props => {
    return <View style={[styles.line, {backgroundColor: props.color ?? palette.white}]} />;
};

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
    },
});

export default LineSeparator;
