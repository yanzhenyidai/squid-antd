<template>
  <div>
  <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
    点我打开
  </el-button>

  <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      :modal-append-to-body="false"
      :size="`90%`"
      :show-close="true"
  >
    <router-view/>
  </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  }
};
</script>