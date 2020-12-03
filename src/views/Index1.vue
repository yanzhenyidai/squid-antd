<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo"/>
        <SideMenu :menus="menus"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />

        <a-avatar style="float: right" shape="square" size="large" icon="user"/>

      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >

        <!--<ul v-for="(menu, index) in menus" :key="index">
          {{ menu.path }}
          <ul v-for="(children, index) in menu.children" :key="index">
            {{ children.path }}
          </ul>
        </ul>

        {{ menus }}-->
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import SideMenu from '@/views/layout/SideMenu'
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapGetters(['menus'])
  },
  components: {
    SideMenu
  }
};
</script>
<style>
.ant-layout {
  min-height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
