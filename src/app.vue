<script>
  import Home from './pages/home.vue';
  import GenreList from './pages/genre-list.vue';
  export default {
    data() {
      return {}
    },
    components: {
      Home,
      GenreList,
    },
  }
</script>

<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <f7-popup tablet-fullscreen>
      <f7-navbar title="Genres" class="bg-red color-white">
        <f7-nav-right>
          <f7-link close-popup right color="white" text="Cancel"></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <genre-list />
    </f7-popup>
    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios" class="bg-red color-white border-red">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-popup></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>The Movie Database App</f7-nav-center>
          <f7-nav-right>
            <f7-link href="/search"><i class="f7-icons">search_strong</i></f7-link>
          </f7-nav-right>

        </f7-navbar>

        <!-- Pages -->
        <f7-pages>
          <home />
        </f7-pages>

      </f7-view>
    </f7-views>

  </div>
</template>

<style>
  .demo-card-header-pic .card-header {
    height: 40vw;
    background-size: cover;
    background-position: center;
  }
  .swiper-slide span {
    width: 100%;
    text-align: center;
    display: block;
    font-size:21px;
    position: absolute;
    bottom: 30px;
    color: #fff;
    overflow: hidden;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  }
</style>