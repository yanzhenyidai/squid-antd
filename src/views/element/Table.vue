<template>
  <div v-loading="loading">

    <el-form :inline="true" :model="fUser" class="demo-form-inline" size="mini">
      <el-form-item label="用户代码">
        <el-input v-model="fUser.userCode" placeholder="用户代码"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="fUser.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="是否锁定">
        <el-select v-model="fUser.isLock" placeholder="是否锁定">
          <el-option label="全部" value=""></el-option>
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-row>
      <el-button size="small">默认按钮</el-button>
      <el-button size="small" type="primary">主要按钮</el-button>
      <el-button size="small" type="success">成功按钮</el-button>
      <el-button size="small" type="info">信息按钮</el-button>
      <el-button size="small" type="warning">警告按钮</el-button>
      <el-button size="small" type="danger">危险按钮</el-button>
    </el-row>

    <el-table
        :data="tableData"
        border
        size="mini"
        max-height="630px"
        style="width: 100%;margin-top: 15px">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          prop="id"
          label="id"
          width="120">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="电话"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="password"
          label="密码"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="userName"
          label="用户名"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="float: right;margin-top: 5px">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
const tableData = [];

export default {
  data() {
    return {
      tableData: tableData,
      multipleSelection: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      loading: true,
      fUser: {
      }
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      console.log('submit!');
    }
  }, mounted() {
    this.$axios({
      url: '/fUser/findAll',
      method: 'post',
      contentType: 'application/json',
      data: {}
    }).then((response) => {
      this.tableData = response.data;
      this.loading = false;
    })
  }
}
</script>

<style>
</style>

