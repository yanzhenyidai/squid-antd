<template>
  <div>
    <a-menu-item v-for="(children, index) in childrens" :key="index">
      <router-link to="/index/ant-table">
        {{ children.path }}
      </router-link>
    </a-menu-item>
  </div>
</template>

<script>
export default {
  name: "ItemMenu",
  props: {
    childrens: Array
  }
}
</script>

<style scoped>

</style>
