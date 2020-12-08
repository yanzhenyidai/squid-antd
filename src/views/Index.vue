<template>
  <el-container>
    <el-header>
      <div>
        <el-image src="https://www.baidu.com/img/flexible/logo/pc/result.png" fit="scale-down"
                  style="height: 35px;float: left;margin-top: 10px"/>
      </div>

      <el-dropdown style="float: right" size="medium" placement="bottom">
        <i class="el-icon-user-solid"
           style="margin-right: 15px;font-weight: bold;padding: 5px;cursor:pointer">欢迎您，王小虎</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-header>
    <el-container>
      <el-aside width="210px">

        <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @open="handleOpen"
            @close="handleClose"
            :router="true">

          <SideMenu v-for="menu in menus" :key="menu.path" :menu="menu" :base-path="menu.path"/>
        </el-menu>

      </el-aside>
      <el-container>
        <el-main>
            <Tags/>
            <router-view style="margin-top: 10px" :key="key"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {mapGetters} from 'vuex'
import SideMenu from "@/views/ele-layout/SideMenu";
import Tags from "@/views/ele-layout/Tags";

export default {
  name: "Index",
  data() {
    return {
      isCollapse: true,
      disabled: true,
    }
  },
  computed: {
    ...mapGetters(['menus']),
    key() {
      return this.$route.path
    },
    activeMenu(){
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    Tags,
    SideMenu
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 !important;
  border-radius: 0px

}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-container {
  height: 100%;
}

.el-aside {
  /*background-color: #D3DCE6;*/
  color: #333;
  text-align: center;
  line-height: 200px;
  /*padding: 5px;*/
}

.el-main {
  /*background-color: #E9EEF3;*/
  color: #333;
  /*text-align: center;*/
  /*line-height: 160px;*/
  padding: 10px;
}

.el-menu {
  height: 100%;
  text-align: left;
}
</style>
