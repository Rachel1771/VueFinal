<template>
  <div id="app">
    <router-view/>
    <Tail></Tail>
  </div>
</template>

<script>
import Tail from './components/tail'

export default {
  name: "app",
  components: {
    Tail
  },
};
</script>

<style>

</style>
