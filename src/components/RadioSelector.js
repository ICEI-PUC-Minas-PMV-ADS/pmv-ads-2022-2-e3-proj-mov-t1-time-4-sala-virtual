import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, ScrollView, StyleSheet, FlatList, Pressable} from 'react-native';
import {sizing} from '../styles/sizing';
import AppText from './AppText';
import {palette} from '../styles/palette';
import {hexToRGBA} from '../helpers/hexToRGBA';
import ItemSeparator from './ItemSeparator';

const RadioSelector = props => {
	const {options, value, onSelect} = props;
	const selectorRef = useRef();
	const dateTo12Hour = date => date.toLocaleTimeString([], {
		timeStyle: 'short',
	});
	const renderRadio = ({item}) => (
		<Pressable key={item.id} style={[styles.radioButton]} onSelect={() => onSelect(item)}>
			<AppText weight="bold">{`${dateTo12Hour(item.startDate)} - ${dateTo12Hour(item.endDate)}`}</AppText>
		</Pressable>
	)
	return (
		<ScrollView style={styles.radioContainer}>
			{options?.map(option => renderRadio({item: option}))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	radioContainer: {
		flex: 1,
		height: sizing.xxl * 3,
	},
	radioButton: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: sizing.m,
		borderColor: palette.blue,
		borderWidth: 1,
		borderRadius: sizing.s,
		marginBottom: sizing.m,
	},
	selected: {
		borderColor: palette.green,
		backgroundColor: palette.green,
	},
	disabled: {
		borderColor: palette.gray,
		backgroundColor: palette.gray,
	},
});

export default RadioSelector;
