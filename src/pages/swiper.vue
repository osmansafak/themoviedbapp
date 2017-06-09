<script>
    import Loader from './loader.vue';
    export default {
        name: 'swiper',
        props: ['datatype', 'datatitle'],
        data() {
            return {}
        },
        components: {
            Loader,
        },
        computed: {
            allMovies () {
                let state_name=this.datatype;
                return this.$store.state[state_name];

            },
        },
        created () {
            this.$store.dispatch('GET_SWIPER', {
                type: this.datatype,
            });
        },
    }
</script>
<template>
    <section>
        <f7-block-title>
            {{ datatitle }}
            <f7-link color="red" :href="'/movies/' + datatype + '/futured/' + datatitle" text="See All"
                     style="float: right;"></f7-link>
        </f7-block-title>
        <loader v-if="!allMovies.length" />
        <f7-block v-if="allMovies.length">
            <f7-swiper :params="{slidesPerView:3}">
                <f7-swiper-slide v-for="movie in allMovies" :key="movie.id"><f7-link :href="'/movie/'+movie.id"><img :src="'https://image.tmdb.org/t/p/w150/' + movie.poster_path" width="75" ></f7-link></f7-swiper-slide>
            </f7-swiper>
        </f7-block>
    </section>
</template>
