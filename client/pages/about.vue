<template lang="pug">
div
    nuxt-link(to="/") Home
    p rendered on {{ renderer }}
    v-btn(color="primary") Primary
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component
export default class AboutComponent extends Vue {
    asyncData({ req }) {
        return {
            renderer: req ? 'server' : 'client',
        }
    }
}
</script>

<style lang="sass" scoped>
.colored
    background: red
</style>
