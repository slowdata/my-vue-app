<template>
  <div id="app">
    <div class="container">
      <div class="notification">
        <projects></projects>
      </div>
    </div>

  </div>
</template>

<script>
//import Counter from './components/Counter.vue'
import Projects from './components/projects.vue'

export default {
  name: 'app',
  components: { Projects },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
