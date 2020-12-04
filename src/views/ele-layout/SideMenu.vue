<template>
  <el-submenu :index="menu.path">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{ menu.name }}</span>
    </template>
    <div v-for="(children,index) in menu.children" :key="index"
         >
      <router-link :to="children.path">
      <el-menu-item
          :index="children.path"
          :key="children.path"
      >

          {{children.name}}

      </el-menu-item>
      </router-link>
    </div>

  </el-submenu>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
    }
  },
  props: {
    menu: Object
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>
</style>
