<template>
    <div id="app" class="layout">
        <AppHeader></AppHeader>
        <div class="layout__content">
            <!-- Router-Component wird hier gerendert -->
            <router-view />
        </div>
        <AppFooter title="Mike"></AppFooter>
    </div>
</template>

<script lang="ts">
import { LoggerFactory } from '@mmit/logging'
import { Component, Vue } from 'vue-property-decorator';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

@Component({ components: { AppFooter, AppHeader } })
export default class App extends Vue {
    private readonly logger = LoggerFactory.getLogger('vue-ts-starter.App');

    private showUpgradeUI = false
    
    // public async accept(): void {
    //     this.showUpgradeUI = false
    //     await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    // }

    // - LiveCycle-Hooks -----------------------------------------------------------------------

    // public created(): void {
    //     this.logger.info('Created!');
    //
    //     if (this.$workbox) {
    //         this.$workbox.addEventListener("waiting", () => {
    //             this.showUpgradeUI = true;
    //         });
    //     }
    // }
}

</script>

<style lang="scss">
/*#app {*/
/*    font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*    -webkit-font-smoothing: antialiased;*/
/*    -moz-osx-font-smoothing: grayscale;*/
/*    text-align: center;*/
/*    color: #2c3e50;*/
/*}*/
/*#nav {*/
/*    padding: 30px;*/
/*    a {*/
/*        font-weight: bold;*/
/*        color: #2c3e50;*/
/*        &.router-link-exact-active {*/
/*            color: #42b983;*/
/*        }*/
/*    }*/
/*}*/
</style>
