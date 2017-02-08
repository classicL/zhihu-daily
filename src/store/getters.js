export const newsList = state => {
	return state.data.newsList
}

export const lastDay = state => {
	let date = new Date(state.data.lastDay); 
	return parseDate(date);
}

export const hotNews = state => {
	return state.data.hotNews
}

export const detail = state => {
	return state.data.detail
}

export const themes = state => {
	return state.data.themes
}

export const themeList = state => {
	return state.data.themeList
}

function parseDateTime (timestamp) {
	let d = new Date(timestamp);
	return d.getFullYear() + '-' + serializeNum(d.getMonth() + 1) + '-' + serializeNum(d.getDate())
				+ ' ' + serializeNum(d.getHours()) + ':' + serializeNum(d.getMinutes()) + ':' + serializeNum(d.getSeconds());
}
function parseDate (timestamp) {
	let d = new Date(timestamp);
	return d.getFullYear() + serializeNum(d.getMonth() + 1) + serializeNum(d.getDate());

}
function serializeNum (num) {
	return num > 9 ? num : '0' + num;
}