import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {sizing} from '../styles/sizing';
import {palette} from '../styles/palette';
import {fonts} from '../styles/fonts';
import ItemSeparator from './ItemSeparator';

const Rating = props => {
	const SalaVirtualIcon = fonts.icons;
	const {stars, size, spacing} = props;
	const renderStar = ({item}) => (
		<SalaVirtualIcon name="star" color={Math.round(stars) >= item ? palette.blue : palette.gray} size={sizing[size] ?? sizing.m} />
	);
	return (
		<View style={styles.ratingContainer}>
			<FlatList data={Array.from({length: 5}, (v, k) => k + 1)} renderItem={renderStar} ItemSeparatorComponent={() => <ItemSeparator size={spacing ?? 4} />} scrollEnabled={false} horizontal />
		</View>
	);
};

const styles = StyleSheet.create({
	ratingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Rating;
