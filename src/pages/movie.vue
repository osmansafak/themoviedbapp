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
            MovieCast () {
                return this.$store.state.cast;
            },
            MovieTrailer () {
                return this.$store.state.trailer;
            },
        },
        created () {
            this.$store.dispatch('GET_MOVIE', {
                id: this.$route.params.id,
            });
            this.$store.dispatch('GET_CAST', {
                id: this.$route.params.id,
            });
            this.$store.dispatch('GET_TRAILER', {
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
            profileImg: function (data) {
                if (data) {
                    return `<img src="https://image.tmdb.org/t/p/w150${data}" width="75">`
                } else {
                    return `<img src="/static/images/no-image.png" width="75">`
                }
            },
            isLoading: function () {
                if (this.MovieDetail.id == this.$route.params.id) {
                    return true;
                } else {
                    return false;
                }
            },
            onGenreClick: function (data) {
                this.$router.load({url: '/movies/' + data.id + '/genre/' + data.name});
            },
            minToHour: function (data) {
                let result = '';
                let hours = Math.floor(data/60);
                let minutes = data % 60;
                if (hours>0) result += hours + 'h ';
                if (minutes>0) result += minutes + 'm';
                return result;
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
                    <div class="movie-facts">Runtime: {{minToHour(MovieDetail.runtime)}}</div>
                    <div class="movie-facts">Status: {{MovieDetail.status}}</div>
                </div>
                <div class="card-content">
                    <div class="card-content-inner">
                        <p>{{MovieDetail.overview}}</p>
                    </div>
                </div>
            </div>
            <div class="card" v-if="MovieDetail.genres.length">
                <div class="card-header">Genres</div>
                <div class="card-content">
                    <div class="card-content-inner">
                        <f7-chip v-for="genre in MovieDetail.genres" :text="genre.name" @click="onGenreClick(genre)" bg="red" color="white" :key="genre.id"></f7-chip>
                    </div>
                </div>
            </div>
            <div class="card" v-if="MovieTrailer.length">
                <div class="card-header">Trailer</div>
                <div class="card-content">
                    <div class="card-content-inner">
                        <iframe width="100%" :src="'https://www.youtube.com/embed/'+MovieTrailer[0].key" frameborder="0"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="card" v-if="MovieCast.length">
                <div class="card-header">Cast</div>
                <div class="card-content">
                    <div class="card-content-inner">
                        <f7-list media-list>
                            <f7-list-item v-for="cast in MovieCast" :key="cast.id"
                                          :media=profileImg(cast.profile_path)
                                          :title=cast.name
                                          :subtitle=cast.character
                            ></f7-list-item>
                        </f7-list>
                    </div>
                </div>
            </div>
            <div class="card" v-if="MovieDetail.production_companies.length">
                <div class="card-header">Production Companies</div>
                <div class="card-content">
                    <div class="card-content-inner">
                        <p v-for="company in MovieDetail.production_companies" :key="company.id">{{company.name}}</p>
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
    .chip {
        margin-right: 5px;
    }
</style>