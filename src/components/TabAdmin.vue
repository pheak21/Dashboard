<template>
  <div>
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <div v-for="(value, index) in headerTabs" :key="index">
        <el-tab-pane :label="value.label" :name="value.name">
          {{ value.label }}
          <slot :name="value.label" />
        </el-tab-pane>
      </div>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import {ref, defineProps} from 'vue';
import type {TabsPaneContext} from 'element-plus';
import type {HeaderTab} from '@/types/tableData';

defineProps<{
  headerTabs: HeaderTab[];
}>();

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>