<template>
  <StepperFormVue :stepper-object="stepperObject">
    <template #Work>
      <div class="container mx-auto px-2 mt-5">
        <el-form
          label-position="top"
          label-width="100px"
          status-icon
          class="demo-ruleForm"
          :rules="rules"
        >
          <div class="grid sm:grid-cols-2 gap-4">
            <el-form-item label="Employer Name" prop="employeeName">
              <el-select
                v-model="ruleForm.employeeName"
                placeholder="Select Employee Name"
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
            <el-form-item label="Movement Type" prop="movementType">
              <el-select
                v-model="ruleForm.movementType"
                placeholder="Promote|Demote|Tranfer"
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
            <el-form-item label="Current Branch" prop="currentBranch">
              <el-select
                v-model="ruleForm.currentBranch"
                placeholder="Select Branch"
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
            <el-form-item label="New Branch" prop="newBranch">
              <el-select
                v-model="ruleForm.newBranch"
                placeholder="Select Branch"
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
            <el-form-item label="Current Department" prop="currentDepartment">
              <el-select
                v-model="ruleForm.currentDepartment"
                placeholder="Select Department"
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
            <el-form-item label="New Department" prop="newDepartment">
              <el-date-picker
                v-model="ruleForm.newDepartment"
                type="date"
                placeholder="Select Department"
                size="large"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="Current Job Title" prop="currentJobTitle">
              <el-select
                v-model="ruleForm.currentJobTitle"
                placeholder="Select Job Title"
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
            <el-form-item label="New Job Title" prop="newJobTitle">
              <el-select
                v-model="ruleForm.newJobTitle"
                placeholder="Select Job Title"
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
            <el-form-item label="Salary" prop="salary">
              <el-input v-model="ruleForm.salary" size="large"/>
            </el-form-item>
            <el-form-item label="Effective Date" prop="effectiveDate">
              <el-input v-model="ruleForm.effectiveDate" size="large"/>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </template>
    <template #Report>
      <div class="container mx-auto px-2 mt-5">
        <el-form
          label-position="top"
          label-width="100px"
          status-icon
          class="demo-ruleForm"
          :rules="rules"
        >
          <div class="grid grid-cols-2 gap-4">
            <el-form-item label="Supervisor" prop="supervisor">
              <el-select
                v-model="ruleForm.supervisor"
                placeholder="Select Supervisor"
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
            <el-form-item label="Indirect Supervisor" prop="indirectSupervisor">
              <el-select
                v-model="ruleForm.indirectSupervisor"
                placeholder="Select Indirect Supervisor"
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
            <el-form-item label="First Level Approver" prop="firstLevelApprover">
              <el-select
                v-model="ruleForm.firstLevelApprover"
                placeholder="Select First Level Approver"
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
            <el-form-item label="Second Level Approver" prop="secondLevelApprover">
              <el-select
                v-model="ruleForm.secondLevelApprover"
                placeholder="Select Second Level Approver"
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
            <el-form-item label="Third Level Approver" prop="thirdLevelApprover">
              <el-select
                v-model="ruleForm.thirdLevelApprover"
                placeholder="Select Third Level Approver"
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
          </div>
        </el-form>
      </div>
    </template>
  </StepperFormVue>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';
import type {FormRules} from 'element-plus';
import StepperFormVue from '../../components/StepperForm.vue';

const stepperObject = [
  'Work',
  'Report',
];

const options = [
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
  employeeName: '',
  movementType: '',
  currentBranch: '',
  newBranch: '',
  currentDepartment: '',
  newDepartment: '',
  currentJobTitle: '',
  newJobTitle: '',
  salary: '',
  effectiveDate: '',
  supervisor: '',
  indirectSupervisor: '',
  firstLevelApprover: '',
  secondLevelApprover: '',
  thirdLevelApprover: '',
});

const rules = reactive<FormRules>({
  employeeName: [{required: true}],
  movementType: [{required: true}],
  currentBranch: [{required: true}],
  newBranch: [{required: true}],
  currentDepartment: [{required: true}],
  newDepartment: [{required: true}],
  currentJobTitle: [{required: true}],
  newJobTitle: [{required: true}],
  salary: [{required: true}],
  effectiveDate: [{required: true}],
  supervisor: [{required: true}],
  indirectSupervisor: [{required: true}],
  firstLevelApprover: [{required: true}],
  secondLevelApprover: [{required: true}],
  thirdLevelApprover: [{required: true}],
});
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
  color: var(--primary-text-color);
  border-color: #a0cfff;
}
.el-step__head.is-process .el-step__line {
  background-color: var(--primary-text-color) !important;
}

.el-step__head.is-wait {
  color: var(--el-text-color-placeholder);
  border-color: grey !important;
}
</style>
