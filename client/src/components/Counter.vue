<template>
  <div>
    <h2>The count: {{ count }}</h2>

    <p><button @click="count += 1">Increment</button></p>

    <ul>
      <li v-for="skill in skills">{{ skill }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      count: 0,
      skills: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/skills')
      .then(res => { 
        this.skills = res.data
      })
    

    
  }
  
}
</script>

<style>

</style>
