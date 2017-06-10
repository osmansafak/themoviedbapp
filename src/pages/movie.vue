<script>
    import moment from 'moment';
    import Loader from './loader.vue';
    export default {
        name: 'Movie',
        data() {
            return {}
        },
        components: {
            Loader,
        },
        computed: {
            MovieDetail () {
                return this.$store.state.movie;
            },
        },
        created () {
            this.$store.dispatch('GET_MOVIE', {
                id: this.$route.params.id,
            });
        },
        methods: {
            moment: function (data) {
                return moment(data).format('LL');
            },
            posterImg: function (data) {
                if (data) {
                    return 'https://image.tmdb.org/t/p/w150'+ data;
                } else {
                    return '/static/images/no-image.png';
                }
            },
            backdropImg: function (data) {
                if (data) {
                    return 'https://image.tmdb.org/t/p/w500'+ data;
                } else {
                    return '/static/images/no-image-backdrop.png';
                }
            },
            isLoading: function () {
                if (this.MovieDetail.id == this.$route.params.id) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    }
</script>
<template>
    <f7-page :key="$route.path" class="bg-white">
        <f7-navbar title="Movie Detail" back-link="Back" sliding></f7-navbar>
        <loader v-if="!isLoading()" />
        <div v-if="isLoading()" >
            <img :src="backdropImg(MovieDetail.backdrop_path)" width="100%">
            <div class="card movie-card">
                <div class="card-header">
                    <div class="movie-poster"><img :src="posterImg(MovieDetail.poster_path)" width="75"></div>
                    <div class="movie-name">{{MovieDetail.title}}</div>
                    <div class="movie-facts">{{moment(MovieDetail.release_date)}}</div>
                    <div class="movie-facts">User Score: {{MovieDetail.vote_average*10}}%</div>
                </div>
                <div class="card-content">
                    <div class="card-content-inner">
                        <p>{{MovieDetail.overview}}</p>
                    </div>
                </div>
            </div>
        </div>
    </f7-page>
</template>
<style>
    .movie-card .card-header {
        display: block;
        padding: 10px;
        min-height: 135px;
    }
    .movie-card .movie-poster {
        float: left;
    }
    .movie-card .movie-name {
        margin-left: 85px;
        font-weight: bold;
        font-size: 18px;
        color: #ff3b30;
    }
    .movie-card .movie-facts {
        margin: 10px 0 0 85px;
        font-size: 12px;
    }
    .movie-card .card-content-inner {
        padding: 15px 10px;
    }
</style>