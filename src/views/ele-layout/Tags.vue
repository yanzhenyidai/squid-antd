<template>
  <div>
    <el-tag
        :key="tag.path"
        v-for="tag in dynamicTags"
        :closable="tag.closable"
        :disable-transitions="false"
        @close="handleClose(tag.path)">
      <router-link :to="tag.path">
      {{ tag.name }}
      </router-link>
    </el-tag>
    <!--<el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import path from 'path'

export default {
  data() {
    return {
      // dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    };
  },
  computed: {
    ...mapGetters(['dynamicTags','menus'])
  },
  mounted() {
    let children = this.$route

    const tag = {};
    tag.name = children.name
    tag.path = children.path
    tag.closable = true
    this.$store.dispatch('addTag',tag)
    // this.menus.forEach(menu => {
    //   if(menu.path !== this.$route.path && menu.children !== undefined){
    //     menu.children.forEach(children => {
    //       if(children.path === this.$route.path){
    //         console.log(children)
    //       }
    //     })
    //   }
    // })
  },
  methods: {
    handleClose(tag) {
      // alert(tag);
      // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      let route =  this.$store.dispatch('removeTag',tag)

      route.then(value => {
        const lastRoute = value.slice(-1)[0]
        this.$router.push(lastRoute.path)
      })
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        // alert(inputValue)
        // this.dynamicTags.push(inputValue);
        this.$store.dispatch('addTag',inputValue)
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
