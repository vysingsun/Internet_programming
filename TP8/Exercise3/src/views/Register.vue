<template>
    <div class="m-6">
      <div class="text-[225%]">Sign Up</div>
      <div>Please fill in this form to create an account.</div>
      <div class="w-full h-[1px] bg-slate-600 mb-4"></div>
      <label  for="">Email</label><br>
      <input id="email" v-model="email" class="w-full bg-[#f1f1f1] p-2 mb-4" type="text" placeholder="Enter Email"><br>
      <label for="">Username</label><br>
      <input id="username" v-model="username" class="w-full bg-[#f1f1f1] p-2 mb-4" type="text" placeholder="Username"><br>
      <label for="">First name</label><br>
      <input id="firstname" v-model="firstname" class="w-full bg-[#f1f1f1] p-2 mb-4" type="text" placeholder="First name"><br>
      <label for="">Last name</label><br>
      <input id="lastname" v-model="lastname" class="w-full bg-[#f1f1f1] p-2 mb-4" type="text" placeholder="Last name"><br>
      <label for="">Password</label><br>
      <input id="password" v-model="password" class="w-full bg-[#f1f1f1] p-2" type="password" placeholder="Create your Password"><br>
      <div class="my-4">
        By creating an account you agree to our 
        <span class="text-blue-500"> Terms & Privacy</span>.
      </div>
      <button id="login" v-on:click="register();" class="w-[50%] bg-[#1eb37c] text-white py-2">Sign Up</button>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
  export default {
  name: "Register",
  data(){
    return{
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      password: ''
    }
  },
  methods:{
    register(){
      fetch('http://localhost:3001/register', {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
          },
        body: JSON.stringify({
          "email": this.email,
          "username": this.username,
          "firstname": this.firstname,
          "lastname": this.lastname,
          "password": this.password
        })
      }).then(res => {
        return res.json();
      }).then((data) => {
        console.log(data);
        if(data.success == true){
          this.$router.push({name: 'login'})
        }
      })
    }
  }
}
</script>
