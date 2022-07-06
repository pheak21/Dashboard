<template>
  <section class="h-full gradient-form bg-gray-200 md:h-screen">
    <div class="container py-12 px-6 h-full">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="xl:w-10/12">
          <div class="block bg-white shadow-lg rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0">
              <HomeView />
              <div class="lg:w-6/12 px-4 md:px-0">
                <div class="md:p-12 md:mx-6">
                  <div class="text-center">
                    <img
                      class="mx-auto w-44 mt-4 p-2"
                      src="	https://cdn.iconscout.com/icon/free/png-256/coffee-3089220-2642941.png"
                      alt="logo"
                    />
                    <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Login</h4>
                  </div>
                  <div>
                    <el-form
                      ref="ruleFormRef"
                      :model="ruleForm"
                      status-icon
                      :rules="rules"
                      class="demo-ruleForm"
                    >
                      <p class="mb-4">Please login to your account</p>
                      <div class="mb-4">
                        <el-form-item prop="email">
                          <el-input
                            v-model="ruleForm.email"
                            placeholder="Please input email"
                            autocomplete="off"
                          />
                        </el-form-item>
                      </div>
                      <div class="mb-4">
                        <el-form-item prop="password">
                          <el-input
                            v-model="ruleForm.password"
                            type="password"
                            placeholder="Please input password"
                            autocomplete="off"
                            show-password
                          />
                        </el-form-item>
                      </div>
                      <div
                        class="flex justify-between text-center pt-1 mb-12 pb-1"
                      >
                        <div class="mb-4">
                          <el-form-item>
                            <el-button
                              @click="loginForm(ruleFormRef)"
                              type="primary"
                              class="text-black"
                              >Login</el-button
                            >
                            <el-button
                              @click="resetForm(ruleFormRef)"
                              size="default"
                              >Reset</el-button
                            >
                          </el-form-item>
                        </div>

                        <router-link
                          :to="{ name: 'resetpass' }"
                          class="mt-1 text-gray-600 hover:text-blue-600 hover:underline hover:cursor-pointer"
                          >Forgot password?
                        </router-link>
                      </div>
                      <div class="items-center">
                        <label class="text-sm ml-4"
                          >Don't have Acccount?
                          <router-link
                            :to="{ name: 'signup' }"
                            class="text-sm text-blue-600 hover:underline hover:cursor-pointer"
                          >
                            Sign Up
                          </router-link>
                        </label>
                      </div>
                    </el-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";
import HomeView from "@/views/HomeView.vue";
import router from "@/router";
// import type { Action } from "element-plus";

const n = ref("");
const ruleForm = ref({
  email: "",
  password: "",
});

const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else if (value !== "admin") {
    callback(new Error("Your password not correct!"));
  } else {
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value !== "admin") {
    callback(new Error("Your email not correct!"));
  } else {
    callback();
  }
};

const rules = reactive({
  password: [{ validator: validatePass, trigger: "blur" }],
  email: [{ validator: validatePass2, trigger: "blur" }],
});

const loginForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      goto();
      console.log("submit!");
      router.push("/homepage");
    } else {
      open();
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const goto = () => {
  ElMessage({
    type: "success",
    message: `Login.....`,
  });
};
const open = () => {
  ElMessageBox.alert("Can't Login page...!", "Login", {
    confirmButtonText: "OK",
    callback: () => {
      ElMessage({
        type: "info",
        message: `Plz Login again!`,
      });
    },
  });
};
</script>

<style scoped></style>
