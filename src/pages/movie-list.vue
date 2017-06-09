<script>
    import moment from 'moment';
    let timeout;
    export default {
        name: 'MovieList',
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
        created () {
            this.$store.dispatch('GET_MOVIES', {
                type: this.$route.params.type,
                id: this.$route.params.id,
                page: this.currentPage,
            })
        },
        methods: {
            moment: function (data) {
                return moment(data).format('LL');
            },
            posterImg: function (data) {
                if (data) {
                    return `<img src="https://image.tmdb.org/t/p/w150${data}" width="75">`
                } else {
                    return `<img src="/static/images/no-image.png" width="75">`
                }
            },
            onInfiniteScroll: function (event) {
                var self = this;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    self.currentPage++;
                    self.$store.dispatch('GET_MOVIES', {
                        type: self.$route.params.type,
                        id: self.$route.params.id,
                        page: self.currentPage,
                    });
                }, 500);
            }
        },
    }
</script>
<template>
    <f7-page :key="$route.path" infinite-scroll @infinite="onInfiniteScroll">
        <f7-navbar :title="$route.params.name" back-link="Back" sliding></f7-navbar>
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