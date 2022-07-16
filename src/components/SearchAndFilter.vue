<template>
  <div class="container mx-auto px-2 mt-5">
    <el-form
      label-position="left"
      label-width="100px"
      status-icon
      class="demo-ruleForm"
      :rules="rules"
    >
      <div class="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
        <el-form-item label="Name" prop="name">
          <el-input v-model="ruleForm.name" size="large"/>
        </el-form-item>
        <el-form-item label="Currency" prop="currency">
          <el-select
            v-model="ruleForm.currency"
            placeholder="Select Parent Structure"
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
        <el-form-item label="Min Salary" prop="minSalary">
          <el-input v-model="ruleForm.minSalary" size="large"/>
        </el-form-item>
        <el-form-item label="Mix Salary" prop="mixSalary">
          <el-input v-model="ruleForm.mixSalary" size="large"/>
        </el-form-item>
      </div>
    </el-form>
    <div class="grow"></div>
    <div class="flex justify-end">
      <el-button @click="toggleCancelButton">Cancel</el-button>
      <el-button @click="toggleSaveButton">Save</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';
import type {FormRules} from 'element-plus';
import type {DropdownItem} from '@/types/dropDownitem';

const options: DropdownItem[] = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];

const ruleForm = reactive({
  name: '',
  currency: '',
  minSalary: '',
  mixSalary: '',
});

const rules = reactive<FormRules>({
  name: [{required: true}],
  currency: [{required: true}],
  minSalary: [{required: true}],
  mixSalary: [{required: true}],
});

const emit = defineEmits({
  toggleCancelButton: (emitValue: boolean) => emitValue,
  toggleSaveButton: (emitValue: boolean) => emitValue,
});

let isCancel: boolean = false;
let isSaveButton: boolean = false;

const toggleCancelButton = () => {
  emit('toggleCancelButton', (isCancel = !isCancel));
};

const toggleSaveButton = () => {
  emit('toggleSaveButton', (isSaveButton = !isSaveButton));
};
</script>

<style></style>
