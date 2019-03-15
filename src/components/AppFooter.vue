<template>
    <footer class="modal__footer">
        <div>
            <button @click="onClick">Click!</button>
            <span id="app">Loading... / {{title_inc || title}}</span>
        </div>
        <div>
            <!--<div class="version_block">-->
                <!--<span class="version">Version <%= version %></span>-->
                <!--<span class="separator">/</span>-->
                <!--<span class="published"><%= published %></span>-->
                <!--<span class="separator">/</span>-->
            <!--</div>-->
            <!--<% if(devmode) { %>-->
            <!--<span class="devmode">DevMode</span>-->
            <!--<% } else { %>-->
            <!--<span class="production">Production</span>-->
            <!--<% } %>-->
        </div>

    </footer>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class AppFooter extends Vue {
        private counter = 0;
        private anotherTitle: string = '';

        @Prop({default: process.env.VUE_APP_TITLE })
        private title!: string;

        // Component methods can be declared as instance methods
        public onClick(): void {
            this.counter++;
            this.anotherTitle = this.title + this.counter;
        }

        public get title_inc(): string { return this.anotherTitle; }
    }
    
</script>

<style scoped lang="scss"></style>


