import moment from 'moment';
import 'moment/locale/pt-br';

export function getWeekDayFromDate(date) {
	return moment(date).format('dddd');
}

export function getLocalizedDate(date) {
	return moment(date).format('DD/MM/YYYY');
}

export function get12HourFromDate(date) {
	return moment(date).format('LT');
}

export function getDiffInHours(startDate, endDate) {
	startDate = moment(startDate);
	endDate = moment(endDate);
	const diffInHours = endDate.diff(startDate, 'hours', true);
	return diffInHours + ' hora' + (diffInHours !== 1 ? 's' : '');
}
