<template>
  <div class="resetpass md:p-12 md:mx-6">
    <div class="text-center">
      <img
        class="mx-auto w-44 mt-4 p-2"
        src="	https://cdn.iconscout.com/icon/free/png-256/coffee-3089220-2642941.png"
        alt="logo"
      />
      <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Reset Password</h4>
    </div>
    <div>
      <el-form
        ref="ruleFormRef2"
        :model="ruleForm2"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <p class="mb-4">Please your new password</p>
        <div class="mb-4">
          <el-form-item prop="pass">
            <el-input
              v-model="ruleForm2.pass"
              type="password"
              placeholder="inpuut new password"
              autocomplete="off"
              show-password
            />
          </el-form-item>
        </div>
        <div class="mb-4">
          <el-form-item prop="checkPass">
            <el-input
              v-model="ruleForm2.checkPass"
              type="password"
              placeholder="input password again"
              autocomplete="off"
              show-password
            />
          </el-form-item>
        </div>
        <div class="flex justify-between text-center pt-1 mb-12 pb-1">
          <div class="mb-4">
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm(ruleFormRef2)"
                class="text-black"
                >Submit</el-button
              >
              <el-button @click="resetForm(ruleFormRef2)">Reset</el-button>
            </el-form-item>
          </div>
          <router-link :to="{ name: 'loginform' }">
            <el-button>Back</el-button>
          </router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const ruleFormRef2 = ref<FormInstance>();

const validatePass3 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm2.checkPass !== "") {
      if (!ruleFormRef2.value) return;
      ruleFormRef2.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass4 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm2.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm2 = reactive({
  pass: "",
  checkPass: "",
});

const rules = reactive({
  pass: [{ validator: validatePass3, trigger: "blur" }],
  checkPass: [{ validator: validatePass4, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style></style>
