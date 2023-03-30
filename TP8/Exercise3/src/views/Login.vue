<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
    <div id="i" class="w-full mt-6 p-4">
      <div class="flex justify-center">
        <img class="w-[35%]" src="https://cdn-icons-png.flaticon.com/512/428/428933.png" alt="">
      </div>
      <form action="" onsubmit="return false">
          <label for="">Username</label><br>
          <input id="username" ref="username" class="w-full border-[1px] border-black p-2" type="text" ><br>
          <label for="">Password</label><br>
          <input id="password" ref="password" class="w-full border-[1px] border-black p-2" type="password"><br>
          <button id="login" v-on:click="login();" class="w-full bg-[#04a96d] text-white py-2 my-4">Login</button>
          <div class="w-full flex justify-end">
        <button >
          Forgot
          <span class="text-[#04a96d]">password?</span>
        </button>
      </div>
      </form>
    </div>
</template>
<script>
  export default {
    name: "Login",
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods:{

      login(){console.log(this.$refs.password.value);
      console.log(this.$refs.username.value);
        // console.warn(this.username,this.password)
        fetch('http://localhost:3001/login', {
          method: 'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            "username":this.$refs.username.value, 
            "password":this.$refs.password.value
          })
        }).then(res => {
          // console.log(this.username);
          return res.json();
        }).then((data) => {
          console.log(data);
          if(data.success === true){
            this.$router.push('/home')
          }else{
            this.$router.push('/fail')
          }
        })
      }
    }
  }
</script>
<style>
  #i{
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
  }
</style>
