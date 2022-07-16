<template>
  <SearchAndFilterTableVue
    :filter-table-data="movementTable"
    :table-header="movementHeaderTable"
  >
    <template #popUpForm>
      <el-button
        text
        @click="dialogFormVisible = true"
        type="primary"
        class="text-black"
        plain
        >Add New</el-button
      >
      <el-dialog v-model="dialogFormVisible" title="Add new movement">
        <employeeMovementVue
          @toggleCancelButton="toggleCancelButton"
          @toggleSaveButton="toggleSaveButton"
        />
      </el-dialog>
    </template>
  </SearchAndFilterTableVue>
</template>

<script lang="ts" setup>
import SearchAndFilterTableVue from '@/components/Tables/SearchAndFilterTable.vue';
import { ref } from 'vue';
import employeeMovementVue from './employeeMovement.vue';

const dialogFormVisible = ref(false);

const movementHeaderTable = [
  'No',
  'Employee',
  'Type',
  'F Branch',
  'F Department',
  'F Job Title',
  'To Branch',
  'To Department',
  'To Job Title',
];

const movementTable = ref([
  {
    'No': "1",
    'Employee': "Kong Bunthoeurn",
    'Type': "Promote",
    'F Branch': "KOI",
    'F Department': "Development Team",
    'F Job Title': "Backend Developer",
    'To Branch': "KOI",
    'To Department': "Development Team",
    'To Job Title': "Senior Backend Developer",
  },
]);

const toggleCancelButton = () => {
  dialogFormVisible.value = false;
};

const toggleSaveButton = () => {
  dialogFormVisible.value = false;
};
</script>
