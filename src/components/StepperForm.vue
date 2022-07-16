<template>
  <div>
    <el-steps
      :active="active"
      finish-status="process"
      class="container mx-auto px-2"
    >
      <!-- eslint-disable-next-line -->
      <template v-for="item in stepperObject" :key="item">
        <el-step :title="item" simple />
      </template>
    </el-steps>
    <div v-for="(item, index) in stepperObject" :key="index">
      <div v-show="index === active">
        <slot :name="item" />
      </div>
    </div>

    <div class="flex container mx-auto px-2">
      <div class="flex">
        <el-button @click="next" v-show="active != lengthStepperObject - 1"
          >Next</el-button
        >
        <el-button @click="previous" v-show="active >= 1"> Previous</el-button>
      </div>
      <div class="grow"></div>
      <div class="flex justify-right">
        <el-button @click="toggleCancelButton">Cancel</el-button>
        <el-button @click="toggleSaveButton">Save</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const props = defineProps<{
  stepperObject: Array<string>;
}>();
let isCancel: boolean = false;
let isSaveButton: boolean = false;

const emit = defineEmits({
  toggleCancelButton: (emitValue: boolean) => emitValue,
  toggleSaveButton: (emitValue: boolean) => emitValue,
});

const toggleCancelButton = () => {
  emit('toggleCancelButton', (isCancel = !isCancel));
};

const toggleSaveButton = () => {
  emit('toggleSaveButton', (isSaveButton = !isSaveButton));
};

// eslint-disable-next-line vue/no-setup-props-destructure
const lengthStepperObject = props.stepperObject.length;

const active = ref(0);

const next = () => {
  if (active.value++ >= lengthStepperObject - 1) active.value = 0;
};

const previous = () => {
  active.value--;
};
</script>
