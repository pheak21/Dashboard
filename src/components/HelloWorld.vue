<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
  </div> -->

  <div class="common-layout">
    <el-container>
      <el-header class="header" style="display: flex">
        <div class="icon1" style="font-szie: 20px">
          <Basketball style="width: 1em; height: 1em; font-size: 40px" />
          <p>Drive</p>
        </div>
        <!-- <input v-model="input" placeholder="Search...." /> -->
        <el-input
          v-model="input"
          placeholder="Search......"
          class="input-with-select"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
        <div class="icon2">
          <QuestionFilled
            style="width: 1em; height: 1em; margin: 0 25px 0 25px"
          />
          <Setting style="width: 1em; height: 1em; margin-right: 25px" />
          <Menu style="width: 1em; height: 1em; margin-right: 25px" />
          <el-row style="width: 45px">
            <el-button
              style="font-size: 20px; position: absolute; top: -5px; right: 5px"
              type="warning"
              :icon="Star"
              circle
              >S</el-button
            >
          </el-row>
        </div>
      </el-header>
      <el-container>
        <el-aside width="180px" style="display: flex">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <div class="flex flex-wrap items-center">
                <el-dropdown>
                  <el-button
                    type="white"
                    style="
                      margin-top: 20px;
                      width: 100px;
                      height: 50px;
                      border-radius: 80px;
                    "
                  >
                    NEW<el-icon class="el-icon--right"><plus /></el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>
                        <el-dropdown
                          split-button
                          type="white"
                          @click="handleClick"
                        >
                          Dropdown List
                          <template #dropdown>
                            <el-dropdown-menu>
                              <el-dropdown-item>Action 1</el-dropdown-item>
                              <el-dropdown-item>Action 2</el-dropdown-item>
                            </el-dropdown-menu>
                          </template>
                        </el-dropdown>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <el-dropdown
                          split-button
                          type="white"
                          @click="handleClick"
                        >
                          Dropdown List
                          <template #dropdown>
                            <el-dropdown-menu>
                              <el-dropdown-item>Action 1</el-dropdown-item>
                              <el-dropdown-item>Action 2</el-dropdown-item>
                            </el-dropdown-menu>
                          </template>
                        </el-dropdown>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <!-- <el-select-v2 v-model="value" :options="options"
            placeholder="Please select" style="width: 240px"
            multiple /> -->
          <div class="example-block" style="display: flex">
            <el-cascader
              v-model="value"
              :options="options"
              @change="handleChange"
            />
          </div>
          <el-row style="margin-top: 20px">
            <el-col
              v-for="(o, index) in 3"
              :key="o"
              :span="5"
              :offset="index > 0 ? 3 : 0"
            >
              <el-card :body-style="{ padding: '5px' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 15px; margin: 5px">
                  <span>Yummy hamburger</span>
                  <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <!-- <el-button text class="button">Operating</el-button> -->
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <div class="demo-progress" style="margin-top: 20px">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="70"
            />
            <el-progress
              :text-inside="true"
              :stroke-width="24"
              :percentage="100"
              status="success"
            />
            <el-progress
              :text-inside="true"
              :stroke-width="22"
              :percentage="80"
              status="warning"
            />
            <el-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="50"
              status="exception"
            />
          </div>
          <!-- <div class="demo-progress">
            <el-progress type="circle" :percentage="0" />
            <el-progress type="circle" :percentage="25" />
            <el-progress type="circle" :percentage="100" status="success" />
            <el-progress type="circle" :percentage="70" status="warning" />
            <el-progress type="circle" :percentage="50" status="exception" />
          </div> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script >
/* eslint-disable */

import { ref } from "vue";
const currentDate = ref(new Date());
const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const value = ref([]);
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }))
);
const value2 = ref([]);
const handleChange = (value2) => {
  console.log(value2);
};
const input = ref("");
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      input,
      value,
      options,
      value2,
      handleChange,
      handleOpen,
      handleClose,
      currentDate,
    };
  },
  data() {
    return {
      key: "",
      keyPath: [],
      options: [
        {
          value: "guide",
          label: "Guide",
          children: [
            {
              value: "disciplines",
              label: "Disciplines",
              children: [
                {
                  value: "consistency",
                  label: "Consistency",
                },
                {
                  value: "feedback",
                  label: "Feedback",
                },
                {
                  value: "efficiency",
                  label: "Efficiency",
                },
                {
                  value: "controllability",
                  label: "Controllability",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "side nav",
                  label: "Side Navigation",
                },
                {
                  value: "top nav",
                  label: "Top Navigation",
                },
              ],
            },
          ],
        },
        {
          value: "component",
          label: "Component",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout",
                },
                {
                  value: "color",
                  label: "Color",
                },
                {
                  value: "typography",
                  label: "Typography",
                },
                {
                  value: "icon",
                  label: "Icon",
                },
                {
                  value: "button",
                  label: "Button",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio",
                },
                {
                  value: "checkbox",
                  label: "Checkbox",
                },
                {
                  value: "input",
                  label: "Input",
                },
                {
                  value: "input-number",
                  label: "InputNumber",
                },
                {
                  value: "select",
                  label: "Select",
                },
                {
                  value: "cascader",
                  label: "Cascader",
                },
                {
                  value: "switch",
                  label: "Switch",
                },
                {
                  value: "slider",
                  label: "Slider",
                },
                {
                  value: "time-picker",
                  label: "TimePicker",
                },
                {
                  value: "date-picker",
                  label: "DatePicker",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker",
                },
                {
                  value: "upload",
                  label: "Upload",
                },
                {
                  value: "rate",
                  label: "Rate",
                },
                {
                  value: "form",
                  label: "Form",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table",
                },
                {
                  value: "tag",
                  label: "Tag",
                },
                {
                  value: "progress",
                  label: "Progress",
                },
                {
                  value: "tree",
                  label: "Tree",
                },
                {
                  value: "pagination",
                  label: "Pagination",
                },
                {
                  value: "badge",
                  label: "Badge",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert",
                },
                {
                  value: "loading",
                  label: "Loading",
                },
                {
                  value: "message",
                  label: "Message",
                },
                {
                  value: "message-box",
                  label: "MessageBox",
                },
                {
                  value: "notification",
                  label: "Notification",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "Menu",
                },
                {
                  value: "tabs",
                  label: "Tabs",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb",
                },
                {
                  value: "dropdown",
                  label: "Dropdown",
                },
                {
                  value: "steps",
                  label: "Steps",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog",
                },
                {
                  value: "tooltip",
                  label: "Tooltip",
                },
                {
                  value: "popover",
                  label: "Popover",
                },
                {
                  value: "card",
                  label: "Card",
                },
                {
                  value: "carousel",
                  label: "Carousel",
                },
                {
                  value: "collapse",
                  label: "Collapse",
                },
              ],
            },
          ],
        },
        {
          value: "resource",
          label: "Resource",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "docs",
              label: "Design Documentation",
            },
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgb(212, 212, 212);
}
.input-with-select {
  margin-left: 55px;
  width: 50%;
}
.icon1 {
  display: flex;
  flex-direction: row;
  font-size: 20px;
}
p {
  font-weight: 10px;
  margin: 8px 10px 10px 0;
}
.icon2 {
  display: flex;
  flex-direction: row;
  font-size: 24px;
  padding: 8px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 10px;
  line-height: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
