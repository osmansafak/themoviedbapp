<script>
    export default {
        name: 'CategoryList',
        data() {
            return {}
        },
        computed: {

            allGenres () {
                return this.$store.state.genres;
            },
        },
        created () {
            this.$store.dispatch('GET_GENRES')
        },
    }
</script>
<template>
    <f7-page class="bg-white">
        <f7-navbar title="Genre" back-link="Back" sliding></f7-navbar>
        <f7-block-title>&nbsp;</f7-block-title>
        <f7-list>
            <f7-list-item v-for="(genre,index) in allGenres" :link="'/movies/' + genre.id + '/genre/' + genre.name"
                          :title="genre.name" link-close-popup :key="index"></f7-list-item>
        </f7-list>
    </f7-page>
</template>

