<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>开始识别</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form>
        <el-form-item label="选择图片">
          <el-upload class="upload-demo" drag action="/api1/upload" :on-success="uploadSuccess" :on-error="uploadError">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
          </el-checkbox>

          <el-checkbox-group v-model="subForm.checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="classItem in classes" :label="classItem" :key="classItem" >{{ classItem }}</el-checkbox>
          </el-checkbox-group>
          <el-button type="primary" @click="detect">开始识别</el-button>
        </el-form-item>
        <el-form-item label="识别结果">

          <el-card class="result" v-loading="loading">
            <el-image :src="resultList.image" style="width: 512px; height: 512px">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
              <span class="undelivered-list">
                <div>
                  <div>
                    <span >应到人数:{{ yd }}</span>
                  </div>
                  <div>
                    <span>实到人数:{{ sd }}</span>
                  </div>
                  <span>未交手机名单：</span>
                </div>
                <div v-for="item in undeliveredList" :key="item">{{item}}</div>
              </span>
              
          </el-card>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {getDetect, postData} from '@/axios/api/api'
import {MessageBox} from "element-ui";

export default {

  data() {
    return {
      resultList: {
        empty: [],
        image: ''
      },
      checkAll: false,
      isIndeterminate: true,
      classes: ['大数据2101', '大数据2102', '大数据2103'],
      classItem:'',
      subForm: {
        checkedCities: [],
      },
      undeliveredList: [],
      yd:'',
      sd:'',
      loading: false
    };
  },
  methods: {
    // YingD(s){
    //   if(s == '大数据2101'){
    //     this.yd = '28'
    //   }
    //   else if(s == '大数据2102'){
    //     this.yd = '29'
    //   }
    //   else if(s == '大数据2101'){
    //     this.yd = '27'
    //   }
    // },
    detectError(){
      MessageBox.alert('手机袋编号被遮挡，请重新拍摄', '识别失败', {
        confirmButtonText: '好',
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `action: ${ action }`
        //   });
        // }
      });
    },
    uploadSuccess(response) {
      this.$message({
        message: '上传成功',
        type: 'success'
      });
    },
    uploadError(err) {
      this.$message({
        message: '上传失败',
        type: 'error'
      });
    },
    async detect() {
      console.log('开始识别')
      this.loading = true
      const res1 = await getDetect();
      this.loading = false
      console.log(res1.data[0])
      //识别失败
      if(res1.data[0] == "null"){
        this.detectError();
      }

      else{
        this.resultList.empty = res1.data;
        this.resultList.image = 'http://43.143.220.39:5000/static/exp/sample.jpg';
        this.sd = 30 - this.resultList.empty.length;
      }


      const res2 = await postData({class: this.subForm.checkedCities, aims: res1.data})
      console.log(res2)
      // 获取未交手机名单
      // const res3 = await getUndeliveredList()
      this.undeliveredList = res2.data.data
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.classes : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      this.classItem = value
      // this.YingD(this.classItem);
      if(this.classItem == '大数据2101'){
        this.yd = '28'
      }
      else if(this.classItem == '大数据2102'){
        this.yd = '29'
      }
      else if(this.classItem == '大数据2103'){
        this.yd = '27'
      }
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.classes.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.classes.length;
    }
  }
};
</script>

<style lang="less" scoped>
.button1 {
  padding-top: 20px;
}
.result{
  position: relative;
}
.undelivered-list{
  position: absolute;
  top: 0;
  left: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>