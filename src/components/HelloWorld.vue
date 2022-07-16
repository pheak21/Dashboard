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
            <div class="flex flex-wrap items-right">
              <el-dropdown trigger="click">
                <el-button
                  class="el-dropdown-link"
                  style="
                    font-size: 20px;
                    position: absolute;
                    top: -5px;
                    right: -30px;
                    background: #d2691e;
                  "
                  type="warning"
                  circle
                  >S</el-button
                >
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <router-link :to="{ name: 'loginform' }">
                        <el-button>
                          Logout
                          <el-icon style="margin-left: 5px"><Right /></el-icon>
                        </el-button>
                      </router-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
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
                <el-dropdown trigger="click">
                  <el-button
                    type="white"
                    style="
                      margin-top: 20px;
                      width: 100px;
                      height: 50px;
                      border-radius: 80px;
                      margin-left: 45px;
                    "
                  >
                    NEW<el-icon class="el-icon--right"><plus /></el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item
                        style="border-bottom: 1px solid #e3e3e3"
                      >
                        <el-icon><Folder /></el-icon>Folder</el-dropdown-item
                      >
                      <el-dropdown-item>
                        <el-icon><DocumentAdd /></el-icon>File
                        upload</el-dropdown-item
                      >
                      <el-dropdown-item
                        style="border-bottom: 1px solid #e3e3e3"
                      >
                        <el-icon><FolderAdd /></el-icon>Folder
                        upload</el-dropdown-item
                      >
                      <el-dropdown-item>
                        <el-dropdown
                          split-button
                          type="white"
                          @click="handleClick"
                        >
                          Google Doc
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
                          Google Slides
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
                          More
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
                  <el-icon><collection /></el-icon>
                  <span>My Drive</span>
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
                <el-icon><stamp /></el-icon>
                <span>Share with me</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><clock /></el-icon>
                <span>Recent</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><star /></el-icon>
                <span>Starred</span>
              </el-menu-item>
              <el-menu-item index="5" style="border-bottom: 1px solid #e3e3e3">
                <el-icon><delete /></el-icon>
                <span>Trash</span>
              </el-menu-item>
              <el-menu-item index="6">
                <el-icon><cloudy /></el-icon>
                <span>Storage</span>
              </el-menu-item>
              <el-menu-item index="7">
                <div class="demo-progress">
                  <el-progress
                    :percentage="50"
                    style="width: 160px; padding-top: 30px"
                  />
                </div>
              </el-menu-item>
              <span style="font-size: 12px; color: #8a8a8a"
                >8.5 GB of 15 GB useg</span
              >
              <el-button>Buy Storage</el-button>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <div
            style="
              height: 30px;
              display: flex;
              border-bottom: 1px solid #e3e3e3;
              justify-content: space-between;
            "
          >
            <el-dropdown trigger="click">
              <span
                class="el-dropdown-link"
                style="cursor: pointer; font-size: 18px"
              >
                My Drive
                <el-icon class="el-icon--right"><caret-bottom /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item style="border-bottom: 1px solid #e3e3e3">
                    <el-icon><Folder /></el-icon>Folder</el-dropdown-item
                  >
                  <el-dropdown-item>
                    <el-icon><DocumentAdd /></el-icon>File
                    upload</el-dropdown-item
                  >
                  <el-dropdown-item style="border-bottom: 1px solid #e3e3e3">
                    <el-icon><FolderAdd /></el-icon>Folder
                    upload</el-dropdown-item
                  >
                  <el-dropdown-item>
                    <el-dropdown split-button type="white" @click="handleClick">
                      Google Doc
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item>Action 1</el-dropdown-item>
                          <el-dropdown-item>Action 2</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-dropdown split-button type="white" @click="handleClick">
                      Google Slides
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
            <div>
              <el-icon style="margin-right: 25px; font-size: 18px"
                ><expand
              /></el-icon>
              <el-icon style="margin-right: 10px; font-size: 18px"
                ><QuestionFilled
              /></el-icon>
            </div>
          </div>
          <p
            style="
              text-align: left;
              font-size: 15px;
              color: grey;
              padding-top: 7px;
            "
          >
            Quick Access
          </p>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="(o, index) in 4"
              :key="o"
              :span="4"
              :offset="index > 0 ? 2 : 0"
            >
              <el-card :body-style="{ padding: '5px' }" shadow="never">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 10px">
                  <span>Yummy hamburger</span>
                  <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
          <div
            style="
              padding: 25px 0 10px 0;
              display: flex;
              justify-content: space-between;
            "
          >
            <p style="text-align: pleft; font-size: 15px; color: grey">
              Folder
            </p>
            <p style="font-size: 15px; color: grey">
              Name<el-icon style="margin-left: 10px"><top /></el-icon>
            </p>
          </div>
          <div>
            <div class="flex flex-row">
              <el-button style="padding: 10px" class="md:w-28"
                ><el-icon class="el-icon--right" style="font-size: 18px"
                  ><Folder /></el-icon
                >Default</el-button
              >
              <el-button style="padding: 10px" class="md:w-28"
                ><el-icon class="el-icon--right" style="font-size: 18px"
                  ><Folder /></el-icon
                >Default</el-button
              >
              <el-button style="padding: 10px" class="md:w-28"
                ><el-icon class="el-icon--right" style="font-size: 18px"
                  ><Folder /></el-icon
                >Default</el-button
              >
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
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
    const handleChange = (value2: any) => {
      console.log(value2);
    };
    const input = ref("");
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    const handleClick = () => {
      // eslint-disable-next-line no-alert
      alert("button click");
    };

    return {
      input,
      value,
      options,
      value2,
      handleChange,
      handleOpen,
      handleClose,
      handleClick,
      currentDate,
    };
  },
});
</script>

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
  margin-top: 12px;
  line-height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
  height: 150px;
}
.demo-progress .el-progress--line {
  margin-bottom: 20px;
}
</style>
