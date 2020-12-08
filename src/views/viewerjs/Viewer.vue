<template>
  <el-container>
    <el-aside width="70%">
      <div id="viewer">
        <ul>
          <li v-for="(img,index) in imgUrlList" :key="index" style="display: none">
            <img :src="img" height="100px">
          </li>
        </ul>
      </div>

    </el-aside>
    <el-main width="30%">
      <div>
        <el-form ref="form" :model="form" label-width="100px" size="small">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import ViewerJS from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default {
  data() {
    return {
      imgUrlList: [
        'https://fengyuanchen.github.io/viewerjs/images/tibet-1.jpg',
        'https://fengyuanchen.github.io/viewerjs/images/tibet-1.jpg',
        'https://fengyuanchen.github.io/viewerjs/images/tibet-1.jpg',
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  mounted() {
   const viewer = document.getElementById("viewer")
    new ViewerJS(viewer,{
      inline: true,
      navbar: true,
      button: false,
      title: false
    })
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
  text-align: center;
}

.el-container {
  height: 95% !important;
}

ul {
  display: flex;
  flex-wrap: wrap;
}
ul li{
  width:265px;
  height: 180px;
  list-style: none;
  border:2px solid #CCC;
  border-radius: 3px;
  padding: 1px;
  margin: 10px;
  cursor: pointer;
}
</style>
