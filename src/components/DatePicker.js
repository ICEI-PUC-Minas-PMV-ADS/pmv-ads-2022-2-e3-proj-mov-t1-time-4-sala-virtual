import React, {useEffect, useRef, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {sizing} from '../styles/sizing';
import AppText from './AppText';
import {palette} from '../styles/palette';
import {hexToRGBA} from '../helpers/hexToRGBA';
import ItemSeparator from './ItemSeparator';

const DatePicker = props => {
	function listDaysInMonth(year, month) {
		const date = new Date(year, month, 1);
		const dates = [''];
		while (date.getMonth() === month) {
			dates.push(date.getDate());
			date.setDate(date.getDate() + 1);
		}
		dates.push('');
		return dates;
	}
	function listMonths() {
		return ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', ''];
	}
	function listYears(startYear, endYear) {
		let year = startYear;
		const years = [''];
		while(year <= endYear) {
			years.push(year);
			year += 1;
		}
		years.push('');
		return years;
	}
	const {minDate, maxDate, value, onSelect} = props;
	const today = new Date();
	const date = value ?? today;
	const [days, setDays] = useState([]);
	const [months, setMonths] = useState([]);
	const [years, setYears] = useState([]);
	const [selectedDate, setSelectedDate] = useState(date);
	const monthSelector = useRef();
	const daySelector = useRef();
	const yearSelector = useRef();
	useEffect(() => {
		setDays(listDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth()));
		setMonths(listMonths());
		setYears(listYears(minDate.getFullYear(), maxDate.getFullYear()));
		scrollToDate(selectedDate);
		if (onSelect) {
			onSelect(selectedDate);
		}
	}, [selectedDate]);
	const scrollToDate = (date, animated = true) => {
		monthSelector.current?.scrollTo({y: date.getMonth() * sizing.xxl}, animated);
		daySelector.current?.scrollTo({y: (date.getDate() - 1) * sizing.xxl}, animated);
		yearSelector.current?.scrollTo({y: (date.getFullYear() - minDate.getFullYear()) * sizing.xxl}, animated);
	}
	const getDateOrToday = (newDate) => {
		return newDate < date ? date : newDate;
	}
	const onScrollMonth = ({nativeEvent}) => setSelectedDate(getDateOrToday(new Date(selectedDate.setMonth(Math.floor(nativeEvent.targetContentOffset.y / sizing.xxl)))));
	const onScrollDay = ({nativeEvent}) => setSelectedDate(getDateOrToday(new Date(selectedDate.setDate(Math.floor(nativeEvent.targetContentOffset.y / sizing.xxl) + 1))));
	const onScrollYear = ({nativeEvent}) => setSelectedDate(getDateOrToday(new Date(selectedDate.setFullYear(years[Math.floor(nativeEvent.targetContentOffset.y / sizing.xxl) + 1]))));
	return (
		<View style={styles.pickerContainer}>
			<View style={styles.column}>
				<View style={[styles.rowBarrier, styles.topBarrier]} />
				<ScrollView ref={monthSelector} onScrollEndDrag={onScrollMonth} snapToInterval={sizing.xxl} snapToAlignment="start" decelerationRate="fast">
					{months.map((month, index) => <View key={index} style={styles.row}><AppText color={palette.black} size="l">{month}</AppText></View>)}
				</ScrollView>
				<View style={[styles.rowBarrier, styles.bottomBarrier]} />
			</View>
			<ItemSeparator size="s" />
			<View style={styles.column}>
				<View style={[styles.rowBarrier, styles.topBarrier]} />
				<ScrollView ref={daySelector} onScrollEndDrag={onScrollDay} snapToInterval={sizing.xxl} snapToAlignment="start" decelerationRate="fast">
					{days.map((day, index) => <View key={index} style={styles.row}><AppText color={palette.black} size="l">{day}</AppText></View>)}
				</ScrollView>
				<View style={[styles.rowBarrier, styles.bottomBarrier]} />
			</View>
			<ItemSeparator size="s" />
			<View style={styles.column}>
				<View style={[styles.rowBarrier, styles.topBarrier]} />
				<ScrollView ref={yearSelector} onContentSizeChange={() => scrollToDate(date, false)} onScrollEndDrag={onScrollYear} snapToInterval={sizing.xxl} snapToAlignment="start" decelerationRate="fast">
					{years.map((year, index) => <View key={index} style={styles.row}><AppText color={palette.black} size="l">{year}</AppText></View>)}
				</ScrollView>
				<View style={[styles.rowBarrier, styles.bottomBarrier]} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	pickerContainer: {
		flex: 1,
		flexDirection: 'row',
		height: sizing.xxl * 3,
	},
	column: {
		flex: 1,
	},
	row: {
		height: sizing.xxl,
		alignItems: 'center',
		justifyContent: 'center',
	},
	rowBarrier: {
		flex: 1,
		left: 0,
		right: 0,
		height: sizing.xxl,
		position: 'absolute',
		backgroundColor: hexToRGBA(palette.white, 0.4),
		borderColor: palette.blue,
		zIndex: 2,
	},
	topBarrier: {
		top: 0,
		borderBottomWidth: 3,
	},
	bottomBarrier: {
		bottom: 0,
		borderTopWidth: 3,
	},
});

export default DatePicker;
