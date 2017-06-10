export default {

    SET_GENRES (state, genres) {
        state.genres = genres.genres;
    },
    SET_MOVIE (state, movie) {
        state.movie = movie;
    },
    SET_CAST (state, cast) {
        state.cast = cast.cast.slice(0,5);
    },
    SET_TRAILER (state, trailer) {
        state.trailer = trailer.results;
    },
    SET_MOVIES (state, movies) {
        state.movies = state.movies.concat(movies.results);
    },
    REMOVE_MOVIES (state, movies) {
        state.movies = [];
    },
    SET_SWIPER (state, movies) {
        state[movies.type] = movies.data.results.slice(0,10);
    },
    SET_CAROUSEL (state, movies) {
        state.carousel = movies.results.slice(0,5);
    },

}