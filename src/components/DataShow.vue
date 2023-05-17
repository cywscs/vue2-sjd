<template>
  <el-card>
    <div class="search-wrap">
      <el-input v-model="search" placeholder="输入名字搜索"/>
      <el-button type="primary" @click="searchName(search)">搜索</el-button>
    </div>

    <el-table
        :data="filterTableData"
        border
        style="width: 100%">
      <el-table-column
          prop="scode"
          label="序号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sname"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sno"
          label="学号">
      </el-table-column>
      <el-table-column
          prop="classs"
          label="班级">
      </el-table-column>
      <el-table-column
          prop="Times"
          label="旷课次数">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary"
                     size="mini"
                     @click="handleEdit(scope.$index, scope.row,scope);dialogFormVisible=true">编辑
          </el-button>
          <el-button
              type="danger"
              size="mini"
              @click="handleDelete(scope.$index, scope.row);centerDialogVisible=true;isDelete=true">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <EditDialog
        :dialogFormVisible="dialogFormVisible"
        :dialog-form="dialogForm"
        :setDialog="setDialog"
    />
    <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <span>确定删除吗？内容不可恢复</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="isDelete=false;centerDialogVisible = false;deleteData()" >取 消</el-button>
    <el-button type="primary" @click="deleteData();centerDialogVisible = false;">确 定</el-button>
  </span>
    </el-dialog>
  </el-card>
</template>

<script>
import EditDialog from '@/components/EditDialog.vue'
import {getDataShow} from '@/axios/api/api'
import {deleteData} from "@/axios/api/api";

export default {
  components: {EditDialog},
  data() {
    return {
      search: '',
      tableData: [],
      dialogForm: {
        scode: '',
        sname: '',
        sno: '',
        classes: '',
        Times: ''
      },
      dialogFormVisible: false,
      centerDialogVisible: false,
      isDelete: false,
      DeleteForm: {
        scode: '',
        sname: '',
        sno: '',
        classes: '',
        Times: ''
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let res = await getDataShow()
      console.log(res)

      this.tableData = res.data.data
    },
    handleEdit(index, row, scope) {
      this.dialogForm = row
      console.log(row)
    },
    handleDelete(index, row) {
      this.DeleteForm = row
      console.log(index, row)
    },
    deleteData() {
      if (this.isDelete){

        deleteData(this.DeleteForm).then(res => {
          if (res){
            this.getData()
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }
        })
        this.isDelete = false
      }else {

          this.$message({
            type: 'info',
            message: '已取消删除'
          });

      }
    },
    setDialog(val) {
      this.dialogFormVisible = val
    },
    searchName(name) {
      console.log(name)
      let res = this.tableData.filter(item => {
        return item.sname === name
      })
      this.filterTableData = res
    }
  },
  computed: {
    // 搜索含有关键字的数据
    filterTableData() {
      return this.tableData.filter((item) => {
        return item.sname.indexOf(this.search) !== -1
      })
    }
  }
}
</script>
<style scoped lang="less">
.search-wrap {
  width: 500px;
  height: 50px;
  display: flex;
  margin-bottom: 10px;

  .el-button {
    width: 100px;
    height: 40px;
    margin-left: 50px;
  }
}
</style>