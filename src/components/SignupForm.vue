<template>
  <section class="h-full gradient-form bg-gray-200 md:h-screen">
    <div class="container py-12 px-6 h-full">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="xl:w-10/12">
          <div class="block bg-white shadow-lg rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0">
              <HomeView/>
              <div class="lg:w-6/12 px-4 md:px-0">
                <div class="signupform md:p-12 md:mx-6">
                  <div class="text-center">
                    <img
                      class="mx-auto w-44 mt-4 p-2"
                      src="	https://cdn.iconscout.com/icon/free/png-256/coffee-3089220-2642941.png"
                      alt="logo"
                    />
                    <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                      Sign Up
                    </h4>
                  </div>
                  <div>
                    <el-form
                      ref="ruleFormRef3"
                      :model="ruleForm3"
                      status-icon
                      :rules="rules3"
                      class="demo-ruleForm"
                    >
                      <p class="mb-4">Create your new account</p>
                      <div class="mb-4">
                        <el-form-item prop="email">
                          <el-input
                            v-model="ruleForm3.email"
                            placeholder="Please input email"
                            autocomplete="off"
                          />
                        </el-form-item>
                      </div>
                      <div class="mb-4">
                        <el-form-item prop="name">
                          <el-input
                            v-model="ruleForm3.name"
                            placeholder="Please input fullname"
                            autocomplete="off"
                          />
                        </el-form-item>
                      </div>
                      <div class="mb-4">
                        <el-form-item prop="pass">
                          <el-input
                            v-model="ruleForm3.pass"
                            type="password"
                            placeholder="input new password"
                            autocomplete="off"
                          />
                        </el-form-item>
                      </div>
                      <div class="mb-4">
                        <el-form-item prop="checkPass">
                          <el-input
                            v-model="ruleForm3.checkPass"
                            type="password"
                            placeholder="input password again"
                            autocomplete="off"
                          />
                        </el-form-item>
                      </div>
                      <div class="mb-4">
                        <el-form-item>
                          <el-button
                            type="primary"
                            @click="signupForm(ruleFormRef3)"
                            class="text-black"
                            >Sign Up</el-button
                          >
                          <el-button @click="resetForm(ruleFormRef3)"
                            >Reset</el-button
                          >
                        </el-form-item>
                      </div>
                      <div class="items-center">
                        <label class="text-sm ml-4"
                          >Don't have Acccount?
                          <router-link
                            :to="{ name: 'loginform' }"
                            class="text-sm text-blue-600 hover:underline hover:cursor-pointer"
                          >
                            Sign In
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
// import type { Action } from "element-plus";

const ruleForm3 = reactive({
  email: "",
  name: "",
  pass: "",
  checkPass: "",
});
const names = ref("");
names.value = ruleForm3.name;

const ruleFormRef3 = ref<FormInstance>();

const validatePass6 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else {
    callback();
  }
};
const validatePass7 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input Fullname"));
  } else if (value === names.value) {
    callback(new Error("This name use already!!"));
  } else {
    callback();
  }
};
const validatePass8 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm3.checkPass !== "") {
      if (!ruleFormRef3.value) return;
      ruleFormRef3.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass9 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm3.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const rules3 = reactive({
  email: [{ validator: validatePass6, trigger: "blur" }],
  name: [{ validator: validatePass7, trigger: "blur" }],
  pass: [{ validator: validatePass8, trigger: "blur" }],
  checkPass: [{ validator: validatePass9, trigger: "blur" }],
});

const signupForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      Success();
      console.log("submit!");
    } else {
      notSuccess();
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const Success = () => {
  ElMessageBox.alert("Sign up Successfully...!", "Sign Up", {
    confirmButtonText: "OK",
    callback: () => {
      ElMessage({
        type: "success",
        message: `Successfully.`,
      });
    },
  });
};
const notSuccess = () => {
  ElMessageBox.alert("Can not Sign up...!", "Sign Up", {
    confirmButtonText: "OK",
    callback: () => {
      ElMessage({
        type: "info",
        message: `Plz Sign Up again!`,
      });
    },
  });
};
</script>

<style scoped></style>
