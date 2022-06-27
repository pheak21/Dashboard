<template>
  <div class="login">
    <form>
      <h2>Login</h2>
      <label>email</label>
      <input type="email" v-model="email" />
      <label>password</label>
      <input type="password" v-model="password" />
      <div>
        <input type="checkbox" v-model="remenber" />
        <label>Remenber Me</label>
      </div>
      <button @click="loginForm"><router-link :to="{ name: 'home'}">Login</router-link></button>
      <label style="font-size: 14px">Don't have Acccount? 
        <router-link :to="{ name: 'signup'}" 
          style="color:blue; text-decoration:underline">
          Sign Up
        </router-link>
      </label>
    </form>
  </div>
  <div>
    <!-- {{ email }}
    {{ password }}
    {{ remenber }} -->
    {{formSubmit.user}}
    {{formSubmit.pass}}
    {{formSubmit.rem}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  /* eslint-disable */

  name: "Login",
  setup() {
    const email = ref('');
    const password = ref('');
    const remenber = ref(false);
    const formSubmit = ref({
      user:'',
      pass:'',
      rem:false,
    });

    const loginForm = () => {
        formSubmit.value.user = email.value,
        formSubmit.value.pass = password.value,
        formSubmit.value.rem = remenber.value,
        email.value = ''
        password.value = ''
        remenber.value = false
    };
    return {
      email,
      password,
      remenber,
      formSubmit,
      loginForm,
    };
  },
});
</script>

<style scoped>
h2 {
  text-align: center; 
  font-size: 35px;
  font-weight: bold;
}
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
label {
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
}
input {
  display: block;
  width: 100%;
  padding: 10px 6px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid gainsboro;
  background-color: rgb(244, 244, 244);
}
button {
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, 
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
button:hover {
  background: rgb(88, 88, 88);
  color: white;
}
input[type="checkbox"] {
  display: inline-block;
  position: relative;
  width: 16px;
  margin-right: 10px;
  top: 2px;
}
</style>
