<template>
  <div class="about">
    <h1>This is an about page - Count: {{counter}}</h1>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import counter from '../store/modules/CounterModule';

  @Component({ components: { } })
  export default class About extends Vue {
    public get counter() {
      return counter.count;
    }

  }
</script>
<style lang="scss"></style>
