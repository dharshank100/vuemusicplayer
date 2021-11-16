<template>
  <div class="register">
    <h1>Register</h1>
     <form @submit.prevent="Register">
       <input type="text" placeholder="Email" v-model="email" />
       <input type="password" placeholder= "password" v-model="password" />
       <input type="submit" value="Register">
       <p>Have an account? <router-link to="/login">Login Here</router-link></p>
     </form>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.register {
  font-size: 45px;
  float: left;
}
</style>