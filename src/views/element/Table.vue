<template>
  <div>
    <el-form :model="fUser" ref="fUserForm" label-width="80px" class="demo-ruleForm" :size="small">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="fUser.userName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户代码">
            <el-input v-model="fUser.userCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="是否锁定">
            <el-select v-model="fUser.isLock" placeholder="是否锁定">
              <el-option label="全部" value=""></el-option>
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-button type="primary" icon="el-icon-search" :size="small" @click="findByPage">搜索</el-button>
        <el-button type="primary" :size="small">主要按钮</el-button>
        <el-button type="success" :size="small">成功按钮</el-button>
        <el-button type="info" :size="small">信息按钮</el-button>
        <el-button type="warning" :size="small">警告按钮</el-button>
        <el-button type="danger" :size="small">危险按钮</el-button>
      </el-row>
    </el-form>

    <el-table
        :data="tableData"
        :height="tableHeight"
        border
        :size="small"
        style="width: 100%;margin-top: 10px;"
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
          <el-button @click="drawer=true" type="text" :size="small">查看</el-button>
          <el-button type="text" :size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageTotal"
      style="margin-top: 10px">
      </el-pagination>

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
      small: 'small',
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
      },
      dengmiQueryForm: {
        mimian:'',
        mimu:'',
        mige:'',
        midi:'',
        zuozhe:'',
        midiLength:''
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
    this.tableHeight =
        window.innerHeight - this.$refs.topictable.$el.offsetTop - 60;
    console.log(this.tableHeight)

  }
}
</script>

<style>
.el-select {
  display: inline-block;
  position: relative;
  width: 100% !important;
}
</style>

