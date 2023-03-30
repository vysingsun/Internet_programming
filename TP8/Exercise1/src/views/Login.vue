<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
    <div id="i" class="w-full mt-6">
      <div class="flex justify-center">
        <img class="w-[35%]" src="https://cdn-icons-png.flaticon.com/512/428/428933.png" alt="">
      </div>
      <form action="">
        <label for="">Username</label><br>
      <input class="w-full border-[1px] border-black p-2" type="text"><br>
      <label for="">Password</label><br>
      <input class="w-full border-[1px] border-black p-2" type="password"><br>
      <button class="w-full bg-[#04a96d] text-white py-2 my-4" id="login" onclick="login();">Login</button>
      <div class="w-full flex justify-end">
        <button >
          Forgot
          <span class="text-[#04a96d]">password?</span>
        </button>
      </div>
      </form>
    </div>
</template>

