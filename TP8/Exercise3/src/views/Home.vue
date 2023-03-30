<template>
    <div>
      <h1>You're in Home page</h1>
      <p>well done 🥳</p>
      <button id="logout" v-on:click="logout();" class="underline text-blue-600"> back to login</button>
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