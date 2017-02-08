import store from '../index.js'
import Vue from 'vue'

const state = {
    newsList: [],
    lastDay: new Date().getTime(),
    hotNews: [],
    detail: '',
    themes: [],
    themeList: ''
};


const mutations = {
    GETNEWSLIST (state, list) {
    	state.newsList.push(list);
    	if (!list.top_stories) {
				state.lastDay -= 3600 * 1000 * 24;
    	}
    },
    CHANGELASTDAY (state) {
    	state.lastDay -= 3600 * 1000 * 24;
    },
    GETHOTNEWS (state, list) {
        state.hotNews = list;
    },
    GETDETAIL (state, data) {
        state.detail = data;
    },
    CLEARDETAIL (state) {
        state.detail = '';
    },
    GETTHEMES (state, themes) {
        state.themes = themes;
    },
    GETTHEMELIST (state, data) {
        state.themeList = data;
    },
    CLEARTHEMELIST (state) {
        state.themeList = '';
    }
}

export default {
    state,
    mutations
}