<template>
  <div>
    <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="100px" class="demo-ruleForm" size="mini">
      <el-row>
        <el-col span="8">
          <el-form-item label="谜面">
            <el-input v-model="dengmiQueryForm.mimian"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="谜目">
            <el-input v-model="dengmiQueryForm.mimu"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="谜格">
            <el-input v-model="dengmiQueryForm.mige"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="8">
          <el-form-item label="谜底">
            <el-input v-model="dengmiQueryForm.midi"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="作者">
            <el-input v-model="dengmiQueryForm.zuozhe"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="谜底字数">
            <el-input v-model="dengmiQueryForm.midiLength"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button type="primary" @click="submitForm" icon="el-icon-search">查询</el-button>
          <el-button type="warning" @click="resetForm" icon="el-icon-search" plain>重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "dengmiQuery",
  data() {
    return {
      dengmiQueryForm: {
        mimian:'',
        mimu:'',
        mige:'',
        midi:'',
        zuozhe:'',
        midiLength:''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
