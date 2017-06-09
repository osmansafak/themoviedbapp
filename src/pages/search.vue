<script>
    import moment from 'moment';
    export default {
        name: 'Search',
        data() {
            return {
                currentPage:1,
            }
        },
        computed: {
            allMovies () {
                return this.$store.state.movies;
            },
        },
        methods: {
            onSearch: function (event) {
                let query = event.target.value;
                if (query) {
                    this.$store.dispatch('GET_MOVIES', {
                        type: 'search',
                        id: query,
                        page: this.currentPage,
                    });
                }
            },
            posterImg: function (data) {
                if (data) {
                    return `<img src="https://image.tmdb.org/t/p/w150${data}" width="75">`
                } else {
                    return `<img src="/static/images/no-image.png" width="75">`
                }
            },
            moment: function (date) {
                return moment(date).format('LL');
            }
        },
        created () {
            this.$store.dispatch('REMOVE_MOVIES');
        },
    }
</script>
<template>
    <f7-page key="$route.path">
        <f7-navbar title="Search" back-link="Back" sliding></f7-navbar>
        <f7-searchbar
                cancel-link="Cancel"
                placeholder="Search in movies"
                :clear-button="true"
                v-on:change="onSearch"
        ></f7-searchbar>
        <f7-list media-list>
            <f7-list-item v-for="movie in allMovies" :key="movie.id"
                          :link="'/movie/'+movie.id"
                          :media=posterImg(movie.poster_path)
                          :title=movie.original_title
                          :subtitle=moment(movie.release_date)
                          :text=movie.overview
            ></f7-list-item>
        </f7-list>
    </f7-page>
</template>