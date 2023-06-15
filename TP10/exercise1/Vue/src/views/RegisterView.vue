<template>
  <div class="wrappers">
    <div>
      <div class="title">
        <div>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p>
        </div>
      </div>
      <div class="input">
        <label for="email">Email</label><br />
        <input id="email" v-model="email" type="text" placeholder="Enter email" />
      </div>
      <div class="input">
        <label for="username">Username</label><br />
        <input id="username" v-model="username" type="text" placeholder="Username" />
      </div>
      <div class="input">
        <label for="firstname">First name</label><br />
        <input id="firstname" v-model="firstname" type="text" placeholder="First name" />
      </div>
      <div class="input">
        <label for="lastname">Last name</label><br />
        <input id="lastname" v-model="lastname" type="text" placeholder="Last name" />
      </div>
      <div class="input">
        <label for="password">Password</label><br />
        <input id="password" v-model="password" type="text" placeholder="Create your password" />
      </div>
      <div class="input">
        <button id="login" v-on:click="register();">Login</button>
      </div>
    </div>
  </div>
</template>

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

<style>
.wrappers {
  display: block;
  width: 500px;
  border: 1px solid gray;
  padding: 20px;
  text-align: center;
}
.title {
  display: flex;
  text-align: left;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
}
.input {
  text-align: left;
}
.input input {
  width: 100%;
  height: 50px;
  padding-left: 10px;
  margin: 10px 10px 10px 0px;
}
.input button {
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: 0px solid black;
  color: white;
  background-color: green;
}
.content p {
  margin-top: 10px;
}
.content button {
  margin-left: 10px;
  width: 90px;
  height: 25px;
  color: white;
  background-color: gray;
  border: 0px;
  border-radius: 2px;
  margin-top: 5px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

