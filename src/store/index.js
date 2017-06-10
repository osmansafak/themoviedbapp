import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    mutations,
    state: {
        genres: [],
        movies: [],
        movie: [],
        cast: [],
        trailer: [],
        now_playing: [],
        popular: [],
        upcoming: [],
        top_rated: [],
        carousel: [],
    },
    getters: {},
    strict: true,
});