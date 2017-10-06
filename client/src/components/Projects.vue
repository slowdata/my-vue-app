<template>
  <form method="POST" action="/projects" @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Projects Name</label>
      <div class="control">
        <input class="input" type="text" 
          placeholder="e.g Project4Kids" v-model="name">
      </div>
    </div>

    <div class="field">
      <label class="label">Project Description</label>
      <div class="control">
        <input class="input" type="text" 
          placeholder="Control the kids information" v-model="description">
      </div>
    </div>
    <div class="control">
      <button class="button is-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: "",
      description: ""
    }
  },
  methods: {
    onSubmit () {
      axios.post('http://localhost:3000/projects', {
        name: this.name,
        description: this.description
      }).then()
    }
  }
  
}
</script>

<style>

</style>
