import axios from 'axios';

export const getNewsList = function ({commit}, date) {
	if (!date) {
		axios.get('http://lovestreet.leanapp.cn/zhihu/news/latest')
				.then(res => {
					// commit('GETNEWSLIST', {date: '每日精选', stories: res.data["top_stories"]});
					commit('GETNEWSLIST', res.data);
					commit('GETHOTNEWS', res.data["top_stories"])
				}).catch(err => console.log(err));
	} else {
		axios.get('http://lovestreet.leanapp.cn/zhihu/before/' + date)
				.then(res => {
					commit('GETNEWSLIST', res.data);
				}).catch(err => console.log(err));
	}
}
export const changeLastDay = function({commit}) {
	commit('CHANGELASTDAY');
}
export const getDetail = function({commit}, id) {
	axios.get('http://lovestreet.leanapp.cn/zhihu/news/' + id)
			.then(res => {
				commit('GETDETAIL', res.data)
			})
}
export const clearDetail = function({commit}) {
	commit('CLEARDETAIL')
}
export const getThemes = function({commit}) {
	axios.get('http://lovestreet.leanapp.cn/zhihu/themes')
			.then(res => {
				commit('GETTHEMES', res.data.others)
			})
}
export const getThemeList = function({commit}, id) {
	axios.get('http://lovestreet.leanapp.cn/zhihu/themes/' + id)
			.then(res =>{
				commit('GETTHEMELIST', res.data)
			})
}
export const clearThemeList = function ({commit}) {
	commit('CLEARTHEMELIST')
}
