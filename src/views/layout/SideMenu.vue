<template>

  <a-menu theme="dark" :default-selected-keys="['1']" :router="true" mode="inline">
    <a-sub-menu v-for="(menu, index) in menus" :key="index">
      <span slot="title">
        <a-icon type="user"/>
        <span>{{ menu.name }} {{index}}</span>
      </span>
      <a-menu-item v-for="(children, i) in menu.children" :key="i">
        <router-link :to="children.path">
          {{ children.name }}
        </router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
// import ItemMenu from "@/views/layout/ItemMenu";

export default {
  name: "SiderMenu",
  props: {
    menus: Array
  },
  // components: {
  //   ItemMenu
  // }
}
</script>

<style scoped>

</style>
