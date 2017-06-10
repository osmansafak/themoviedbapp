import axios from 'axios';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '76b9286f87785330967086a41e740a35';

export default {

    GET_GENRES ({ commit }) {
        axios.get(API_URL + 'genre/movie/list?api_key=' + API_KEY).then((res) => {
            if (res.status === 200) {
                commit('SET_GENRES', res.data)
            }
        })
    },
    GET_MOVIE ({ commit },data) {
        axios.get(API_URL + 'movie/' + data.id + '?api_key=' + API_KEY).then((res) => {
            if (res.status === 200) {
                commit('SET_MOVIE', res.data);
            }
        })
    },
    GET_CAST ({ commit },data) {
        axios.get(API_URL + 'movie/' + data.id + '/credits?api_key=' + API_KEY).then((res) => {
            if (res.status === 200) {
                commit('SET_CAST', res.data);
            }
        })
    },
    GET_TRAILER ({ commit },data) {
        axios.get(API_URL + 'movie/' + data.id + '/videos?api_key=' + API_KEY).then((res) => {
            if (res.status === 200) {
                commit('SET_TRAILER', res.data);
            }
        })
    },
    GET_MOVIES ({ commit },data) {
        if (data.type == 'genre') {
            if (data.page == 1) {
                commit('REMOVE_MOVIES')
            }
            axios.get(API_URL + 'genre/' + data.id + '/movies?page=' + data.page + '&api_key=' + API_KEY).then((res) => {
                if (res.status === 200) {
                    commit('SET_MOVIES', res.data)
                }
            });
        } else if (data.type == 'futured') {
            axios.get(API_URL + 'movie/' + data.id + '?page=' + data.page + '&api_key=' + API_KEY).then((res) => {
                if (res.status === 200) {
                    commit('SET_MOVIES', res.data)
                }
            });
        } else if (data.type == 'search') {
            if (data.page == 1) {
                commit('REMOVE_MOVIES')
            }
            axios.get(API_URL + 'search/movie?query=' + data.id + '&page=' + data.page + '&api_key=' + API_KEY).then((res) => {
                if (res.status === 200) {
                    commit('SET_MOVIES', res.data)
                }
            });
        }
    },
    REMOVE_MOVIES ({ commit }) {
        commit('REMOVE_MOVIES')
    },
    GET_SWIPER ({commit}, data) {
        commit('REMOVE_MOVIES')
        axios.get(API_URL + 'movie/' + data.type + '?api_key=' + API_KEY).then((res) => {
            if (res.status === 200) {
                commit('SET_SWIPER', {data: res.data, type: data.type})
            }
        });
    },
    GET_CAROUSEL ({commit}) {
        axios.get(API_URL + 'discover/movie?sort_by=popularity.desc&&primary_release_year='+ new Date().getFullYear() +'&api_key=' + API_KEY).then((res) => {
            if (res.status === 200) {
                commit('SET_CAROUSEL', res.data);
                return res;
            }
        });
    },
}