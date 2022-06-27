<template>
  <div class="signup">
    <form>
      <h2>Sign Up</h2>
      <label>email <address></address></label>
      <input type="email" v-model="email"/>
      <label>full name</label>
      <input type="text" v-model="fullname"/>
      <label>password</label>
      <input type="password" v-model="password"/>
      <label>confirm</label>
      <input type="password" v-model="confirm"/>
      <div>
        <input type="checkbox" v-model="term"/>
        <label>accept term & conditions</label>
      </div>
      <button @click="signupForm">Sign Up</button>
      <label style="font-size: 14px">if you have any acccount? 
        <router-link :to="{ name: 'login'}" 
          style="color:blue; text-decoration:underline">
          Sign In
        </router-link>
      </label>
    </form>
  </div>
  <div>
    {{formSubmit.user}}
    {{formSubmit.name}}
    {{formSubmit.pass}}
    {{formSubmit.con}}
    {{formSubmit.t}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  /* eslint-disable */

  name: "Signup",
  setup() {
    const email = ref('');
    const fullname = ref('');
    const confirm= ref('');
    const password = ref('');
    const term = ref(false);
   const formSubmit = ref({
      user:'',
      name:'',
      pass:'',
      con:'',
      t:false,
    });

    const signupForm = () => {
      formSubmit.value.user = email.value;
      formSubmit.value.name = fullname.value;
      formSubmit.value.pass = password.value;
      formSubmit.value.con = confirm.value;
      formSubmit.value.t = term.value;
      
      email.value ='',
      fullname.value = '',
      password.value = '',
      confirm.value = '',
      term.value = false
    }
    return {
      email,
      fullname,
      password,
      confirm,
      term,
      formSubmit,
      signupForm,
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, 
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
button:hover {
  background: rgb(88, 88, 88);
  color: white;
}
input[type= "checkbox"] {
  display: inline-block;
  position: relative;
  width: 16px;
  margin-right: 10px;
  top: 2px;
}
</style>