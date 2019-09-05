<template>
    <v-app id="app" class="layout--off" color="gray-lighten2">
        <v-app-bar app color="indigo" dark clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="title">Application</v-toolbar-title>
            <AppHeader></AppHeader>
        </v-app-bar>
        <v-navigation-drawer app class="primary" v-model="drawer" stateless clipped>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                    v-for="link in links"
                    :key="link.icon"
                    router
                    :to="link.route"
                    active-class="red--text"
                >
                    <v-list-item-icon>
                        <v-icon color="white">mdi-{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title color="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <!-- fluid -->
            <v-container class="fill-height align-start">
                <router-view />
            </v-container>
        </v-content>
        <AppFooter title="Mike"></AppFooter>
        <!--        <v-footer fixed dark>Hallo TEST</v-footer>-->
        <!--    </div>-->
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

interface Link {
    icon: string;
    text: string;
    route: string;
}

@Component({ components: { AppFooter, AppHeader } })
export default class App extends Vue {
    public drawer: boolean = false;

    /** Menü im Drawer */
    public links: Link[] = [
        { icon: 'cactus', text: 'Kaktus', route: '/' },
        { icon: 'cake-layered', text: 'Kuchen', route: '/' },
        { icon: 'bug', text: 'Bug', route: '/about' },
    ];
}
</script>

<style lang="scss">
.title {
    min-width: fit-content;
}

.v-content {
    height: calc(var(--content-height, 100%));
    max-height: calc(var(--content-height, 100%));

    overflow-y: scroll;
}
</style>
