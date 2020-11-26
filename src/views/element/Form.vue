<template>
  <el-form :model="fUser"  ref="fUser" label-width="100px" class="demo-ruleForm" size="small">
    <el-form-item label="用户代码" prop="userCode">
      <el-input v-model="fUser.userCode"></el-input>
    </el-form-item>
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="fUser.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="fUser.password"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="fUser.email"></el-input>
    </el-form-item>
    <el-form-item label="手机" prop="phone">
      <el-input v-model="fUser.phone"></el-input>
    </el-form-item>
    <el-form-item label="是否锁定" prop="isLock">
      <el-select v-model="fUser.isLock" placeholder="请选择">
        <el-option label="否" value="0"></el-option>
        <el-option label="是" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('fUser')">立即创建</el-button>
      <el-button @click="resetForm('fUser')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      fUser: {
        userCode: '',
        userName: '',
        password: '',
        email: '',
        phone: '',
        isLock: ''
      },
      // rules: {
      //   name: [
      //     {required: true, message: '请输入活动名称', trigger: 'blur'},
      //     {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
      //   ],
      //   region: [
      //     {required: true, message: '请选择活动区域', trigger: 'change'}
      //   ],
      //   date1: [
      //     {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
      //   ],
      //   date2: [
      //     {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
      //   ],
      //   type: [
      //     {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
      //   ],
      //   resource: [
      //     {required: true, message: '请选择活动资源', trigger: 'change'}
      //   ],
      //   desc: [
      //     {required: true, message: '请填写活动形式', trigger: 'blur'}
      //   ]
      // }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(JSON.stringify(this.fUser));
          this.$axios({
            method: 'post',
            url: '/fUser/createUser',
            contentType: 'application/json',
            data: this.fUser
          }).then((response) => {
            console.log(response);
          })
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