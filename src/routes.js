export default [
    {
        name: 'Home',
        path: '/',
        component: require('./pages/home.vue')
    },
    {
        name: 'GenreList',
        path: '/genre-list',
        component: require('./pages/genre-list.vue')
    },
    {
        name: 'Movies',
        path: '/movies/:id/:type/:name',
        component: require('./pages/movie-list.vue')
    },
    {
        name: 'Movie',
        path: '/movie/:id',
        component: require('./pages/movie.vue')
    },
    {
        name: 'Search',
        path: '/search',
        component: require('./pages/search.vue')
    }
]