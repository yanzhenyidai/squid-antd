<template>
  <el-submenu :index="menu.path" v-if="!menu.hidden">
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
          @click="doTag(children)"
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
    doTag(children){
        const tag = {};
        tag.name = children.name
        tag.path = children.path
        tag.closable = true
        this.$store.dispatch('addTag',tag)
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>
