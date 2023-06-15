<template>
  <div>
    <h1>You're in Home page</h1>
    <p>well done 🥳</p>
    <button id="logout" v-on:click="logout();">back to login</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    logout(){
      fetch('http://localhost:3001/logout', {
        method: 'POST',
        credentials: "include",
      }).then(res => {
        return res.json()
      }).then(data => {
        if(data.success == true){
          this.$router.push({name: 'login'})
        }
      })
    }
  }
}
</script>