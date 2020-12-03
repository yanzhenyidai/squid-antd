<template>
  <div>
    <el-form :inline="true" :model="fUser" style="margin-top: 20px" class="demo-form-inline" size="small">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="用户代码">
              <el-input v-model="fUser.userCode" placeholder="用户代码"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="用户名">
              <el-input v-model="fUser.userName" placeholder="用户名"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="是否锁定">
              <el-select v-model="fUser.isLock" placeholder="是否锁定">
                <el-option label="全部" value=""></el-option>
                <el-option label="否" value="0"></el-option>
                <el-option label="是" value="1"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>


    <el-table
        :data="tableData"
        :height="tableHeight"
        border
        size="small"
        style="width: 100%;"
        v-loading="loading"
        ref="topictable"
    >
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
          prop="userCode"
          label="用户代码"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <!--        <template slot-scope="scope">-->
        <template>
          <el-button @click="drawer=true" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 10px">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageTotal">
      </el-pagination>
    </div>

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
      tableData: [],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 10,
      loading: true,
      pageTotal: 0,
      tableHeight: null,
      fUser: {
        userName: '',
        userCode: '',
        isLock: ''
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
      this.pageSize = val
      this.findByPage()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.findByPage()
    },
    onSubmit() {
      this.findByPage();
    },
    findByPage() {
      this.loading = true

      this.$axios({
        url: `/fUser/findByPage/${this.currentPage}/${this.pageSize}`,
        method: 'post',
        contentType: 'application/json',
        data: this.fUser
      }).then((response) => {
        this.tableData = response.data.content;
        this.pageTotal = response.data.totalElements;
        this.loading = false;

      })
    }
  }, mounted() {
    this.findByPage()
    console.log(window.innerHeight)
    console.log(this.$refs.topictable.$el)
    console.log(this.$refs.topictable.$el.offsetTop)
    this.tableHeight =
        window.innerHeight - this.$refs.topictable.$el.offsetTop - 60;
    console.log(this.tableHeight)

  }
}
</script>

<style>
</style>

