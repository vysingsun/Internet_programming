<template>
    <div>
      <h1>Password or Username incorrect 🧐</h1>
      
      <button id="logout" v-on:click="logout();" class="underline text-blue-600">login again</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'home',
    methods: {
      logout(){
        this.$router.push({name: 'login'})
      }
    }
  }
  </script>