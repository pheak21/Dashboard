<template>
  <div class="create">
    <div v-show="login">
      <el-card>
        <h2>Login</h2>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="ruleForm.email"
              type="text"
              autocomplete="off"
              placeholder="Enter your email address"
            />
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
              placeholder="Enter your password"
            />
          </el-form-item>
          <!-- <el-form-item label="Age" prop="age">
        <el-input v-model.number="ruleForm.age" />
      </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="loginForm(ruleFormRef)"
              >Login</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
          <div>
            if u don't have any account?
            <a @click="signupForm" href="#">Sign Up</a>
          </div>
        </el-form>
      </el-card>
    </div>

    <div v-show="signup">
      <el-card>
        <h2>Sign Up</h2>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="ruleForm2.email"
              type="text"
              autocomplete="off"
              placeholder="Enter your email address"
            />
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input
              v-model="ruleForm2.pass"
              type="password"
              autocomplete="off"
              placeholder="Enter your new password"
            />
          </el-form-item>
          <el-form-item label="Confirm" prop="confirm">
            <el-input
              v-model="ruleForm2.confirm"
              type="password"
              autocomplete="off"
              placeholder="Confirm your password"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="createForm(ruleFormRef)"
              >Sign Up</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
          <div>
            Do u have any account? <a @click="signinForm" href="#">Login</a>
          </div>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

export default defineComponent({
  /* eslint-disable */

  name: "Create",
  setup() {
    const signup = ref(false);
    const login = ref(true);
    const ruleFormRef = ref<FormInstance>();
    const ruleFormRef2 = ref<FormInstance>();

    // const checkAge = (rule: any, value: any, callback: any) => {
    //   if (!value) {
    //     return callback(new Error("Please input the age"));
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error("Please input digits"));
    //     } else {
    //       if (value < 18) {
    //         callback(new Error("Age must be greater than 18"));
    //       } else {
    //         callback();
    //       }
    //     }
    //   }, 1000);
    // };

    const validatePass = (rule: any, value: any, callback: any) => {
      if (value === "") {
        callback(new Error("Please input the Email again"));
      } else {
        callback();
      }
    };

    const validatePass2 = (rule: any, value: any, callback: any) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else {
        callback();
      }
    };

    const validatePass3 = (rule: any, value: any, callback: any) => {
      if (value === "") {
        callback(new Error("Please input the Email again"));
      } else {
        callback();
      }
    };

    const validatePass4 = (rule: any, value: any, callback: any) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (ruleForm2.confirm !== "") {
          if (!ruleFormRef2.value) return;
          ruleFormRef2.value.validateField("checkPass", () => null);
        }
        callback();
      }
    };
    const validatePass5 = (rule: any, value: any, callback: any) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== ruleForm2.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };

    const ruleForm = reactive({
      email: "",
      pass: "",
    });

    const rules = reactive({
      email: [{ validator: validatePass, trigger: "blur" }],
      pass: [{ validator: validatePass2, trigger: "blur" }],
    });

    const ruleForm2 = reactive({
      email: "",
      pass: "",
      confirm: "",
    });

    const rules2 = reactive({
      email: [{ validator: validatePass3, trigger: "blur" }],
      pass: [{ validator: validatePass4, trigger: "blur" }],
      confirm: [{ validator: validatePass5, trigger: "blur" }],
    });

    const createForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("login!");
        } else {
          console.log("error login!");
          return false;
        }
      });
    };

    const loginForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("login!");
        } else {
          console.log("error login!");
          return false;
        }
      });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };

    const signinForm = () => {
      login.value = true;
      signup.value = false;
    };
    const signupForm = () => {
      login.value = false;
      signup.value = true;
    };

    return {
      resetForm,
      loginForm,
      signinForm,
      signupForm,
      createForm,
      rules,
      ruleForm,
      rules2,
      ruleForm2,
      ruleFormRef,
      ruleFormRef2,
      signup,
      login,
    };
  },
});
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
