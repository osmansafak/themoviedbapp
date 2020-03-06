<script>
import SwiperContent from "./swiper.vue";
import Loader from "./loader.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    SwiperContent,
    Loader
  },
  computed: {
    allMovies() {
      return this.$store.state.carousel;
    }
  },
  created() {
    this.$store.dispatch("GET_CAROUSEL");
  }
};
</script>
<template>
  <f7-page class="bg-white" :key="'/'">
    <!-- Page Content -->
    <loader v-if="!allMovies.length" />
    <f7-swiper pagination :params="{loop:true}" v-if="allMovies.length">
      <f7-swiper-slide v-for="movie in allMovies" :key="movie.id">
        <f7-link :href="'/movie/'+movie.id">
          <img :src="'https://image.tmdb.org/t/p/original'+movie.backdrop_path" width="100%" />
          <span>{{movie.title}}</span>
        </f7-link>
      </f7-swiper-slide>
    </f7-swiper>
    <swiper-content :datatype="'now_playing'" :datatitle="'Now Playing'" />
    <swiper-content :datatype="'popular'" :datatitle="'Popular'" />
    <swiper-content :datatype="'top_rated'" :datatitle="'Top Rated'" />
    <swiper-content :datatype="'upcoming'" :datatitle="'Upcoming'" />
  </f7-page>
</template>