<template>
    <div class="about">
        <h1>This is an about page - Count: {{ counter }} /</h1>
        <p class="red white--text pa-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        </p>
        <p class="pink red--text lighten-5 text--darken-3 pa-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        </p>
        <h1 class="display-2">Headline</h1>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import counter from '../store/modules/CounterModule';

@Component({ components: {} })
export default class About extends Vue {
    public get counter(): number {
        return counter.count;
    }

    public get published(): string {
        return process.env.VUE_APP_PUBLISHED || '<process.env.VUE_APP_PUBLISHED = undefined>';
    }
}
</script>
<style lang="scss"></style>
