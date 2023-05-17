<template>
  <div>
    <!-- Form -->
    <el-dialog title="信息修改" :visible.sync="dialogFormVisible" @close="setDialog(false)">
      <el-form :model="dialogForm">
        <el-form-item label="序号" :label-width="formLabelWidth">
          <el-input  v-model="dialogForm.scode" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.sname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.sno" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.classes" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.Times" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="旷课次数" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.scode" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setDialog(false)">取 消</el-button>
        <el-button type="primary" @click="setDialog(false);editData()">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import {editData} from "@/axios/api/api";

export default {
  name: 'EditDialog',
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    },
    dialogForm: {
      type: Object,
      default: () => {
        return {
          name: '1',
        }
      }
    },
    setDialog: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      formLabelWidth: '120px'
    };
  },
  methods: {
    editData() {
      editData(this.dialogForm).then(res => {
        console.log(res);
      })
      this.$message({
        type: 'success',
        message: '修改成功!'
      });
    }
  }
}

</script>

<style scoped>

</style>