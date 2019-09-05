<template>
    <v-container fluid d-flex class="pr-0">
        <!--<router-link to="/">Home</router-link>-->
        <!--<router-link to="/about">About</router-link>-->
        <v-toolbar-items>
            <v-btn text to="/" :ripple="false">Link 1</v-btn>
            <v-btn text to="/about" :ripple="false">Link 2</v-btn>
            <v-btn text :ripple="false">Link 3</v-btn>
        </v-toolbar-items>
        <!--            <router-link to="/">Home</router-link>-->
        <!--            <router-link to="/about">About</router-link>-->
        <!--            <v-badge class="align-self-end ml-auto">-->
        <!--                <template v-slot:badge-->
        <!--                    >0</template-->
        <!--                >-->
        <!--                <v-icon>mdi-email</v-icon>-->
        <!--            </v-badge>-->
        <!--            <v-flex xs3>-->
        <!--            </v-flex>-->
        <!--            <v-flex xs3>-->
        <!--            </v-flex>-->
        <!--            <v-spaceer></v-spaceer>-->
        <!--            <v-flex xs3>-->
        <!--                &lt;!&ndash;                <div class="demo_images">&ndash;&gt;-->
        <!--                &lt;!&ndash;                    <img&ndash;&gt;-->
        <!--                &lt;!&ndash;                        class="cat"&ndash;&gt;-->
        <!--                &lt;!&ndash;                        style="position: absolute;"&ndash;&gt;-->
        <!--                &lt;!&ndash;                        v-bind:style="{ left: counter + 'px' }"&ndash;&gt;-->
        <!--                &lt;!&ndash;                        src="../assets/images/static/cat.jpg"&ndash;&gt;-->
        <!--                &lt;!&ndash;                    />&ndash;&gt;-->
        <!--                &lt;!&ndash;                </div>&ndash;&gt;-->
        <!--            </v-flex>-->
        <!--            &lt;!&ndash;            <v-spaceer></v-spaceer>&ndash;&gt;-->
        <!--            &lt;!&ndash;            <v-flex xs3 class="demo_images">&ndash;&gt;-->
        <!--            &lt;!&ndash;                <img id="frontImg" :src="img" />&ndash;&gt;-->
        <!--            &lt;!&ndash;            </v-flex>&ndash;&gt;-->

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
            <v-btn icon>
                <v-icon>mdi-export-variant</v-icon>
            </v-btn>

            <v-badge style="margin-top: 14px" class="mr-2">
                <template v-slot:badge
                    >0
                </template>
                <v-icon>mdi-email</v-icon>
            </v-badge>
        </v-toolbar-items>

        <v-menu left bottom class="ml-3">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import lambi from '../assets/images/lambi.png';
import counter from '../store/modules/CounterModule';

@Component
export default class AppHeader extends Vue {
    @Prop() private msg!: string;

    get img(): string {
        return lambi;
    }

    public get counter(): number {
        return Math.min(500, Math.max(110, counter.count));
    }
}
</script>

<style scoped lang="scss">
.v-btn--active.v-btn {
    color: red;
}

.v-btn:before {
    background-color: transparent;
}
</style>
