<template>
  <div class="container mx-auto px-2 mt-5">
    <el-form
      label-position="left"
      label-width="200px"
      status-icon
      class="demo-ruleForm"
      :rules="rules"
    >
      <div class="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
        <el-form-item label="Employee" prop="employee">
          <el-select
            v-model="ruleForm.employee"
            placeholder="Select"
            size="large"
            class="w-full"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Qualification" prop="qualification">
          <el-select
            v-model="ruleForm.qualification"
            placeholder="Select"
            size="large"
            class="w-full"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Institute" prop="institute">
          <el-input v-model="ruleForm.institute" />
        </el-form-item>
        <el-form-item label="Start Date" prop="startDate">
          <el-date-picker
            v-model="ruleForm.startDate"
            type="date"
            placeholder="Pick a day"
            size="large"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="Completed On" prop="completedOn">
          <el-date-picker
            v-model="ruleForm.completedOn"
            type="date"
            placeholder="Pick a day"
            size="large"
            style="width: 100%"
          />
        </el-form-item>
      </div>
    </el-form>
    <div class="grow"></div>
    <div class="flex">
      <el-button @click="toggleCancelButton">Cancel</el-button>
      <el-button @click="toggleSaveButton">Save</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { FormRules } from "element-plus";

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

const ruleForm = reactive({
  employee: "",
  qualification: "",
  institute: "",
  startDate: "",
  completedOn: "",
});
const rules = reactive<FormRules>({
  employee: [{ required: true }],
  qualification: [{ required: true }],
  institute: [{ required: true }],
});

let isCancel: boolean = false;
let isSaveButton: boolean = false;

const emit = defineEmits({
  toggleCancelButton: (emitValue: boolean) => emitValue,
  toggleSaveButton: (emitValue: boolean) => emitValue,
});

const toggleCancelButton = () => {
  emit("toggleCancelButton", (isCancel = !isCancel));
};

const toggleSaveButton = () => {
  emit("toggleSaveButton", (isSaveButton = !isSaveButton));
};
</script>

<style>
.el-form--label-top .el-form-item .el-form-item__label {
  display: flex;

  flex-direction: row-reverse;
}
.el-form-item.is-required:not(.is-no-asterisk)
  > .el-form-item__label-wrap
  > .el-form-item__label:before,
.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
  margin-left: 4px;
}

.el-step__head.is-process {
  color: #337ecc;
  border-color: #a0cfff;
}
.el-step__head.is-process .el-step__line {
  background-color: #337ecc !important;
}
</style>
