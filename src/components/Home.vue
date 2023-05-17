<template>
  <el-container class="home-container">
    <!-- 页面头部 -->
    <el-header>
      <div>
        <i class="el-icon-mobile-phone"></i>
        <span>课堂手机袋识别系统</span>
      </div>
    <el-button type="primary" @click="logout">登出</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu text-color="rgb(73, 80, 87)" active-text-color="#000000" router default-active="/detect">
          <!-- 一级菜单 -->
          <el-menu-item :index="'/'+'detect'">
            <template slot="title">
            <i class="el-icon-camera-solid"></i>
            <span>开始识别</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/dataShow">
            <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>数据统计</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
            <i class="el-icon-loading"></i>
            <span>更多功能开发中...</span>
            </template>
          </el-menu-item>
      
        </el-menu>
      </el-aside>
      <!-- 右侧 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    };
  },

  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="less" scoped>
//整体样式
  .home-container {
    height: 100%;
  }
  .el-header {
    background-color: rgb(6, 101, 208);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 18px;
    // font-family: '';
    span{
      margin-left: 15px;
    }
  }
  .el-aside {
    background-color: rgb(255, 255, 255);
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background-color: rgb(240, 243, 248);
  }

//按钮颜色
  .el-button--primary {
  color: #FFF;
  background-color: rgb(5, 83, 171);
  border-color: rgb(5, 83, 171);
}

.el-button--primary:focus, 
.el-button--primary:hover {
  background: rgb(31, 114, 209);
  border-color: rgb(31, 114, 209);
  color: #fff;
}

.el-button--primary.is-active,
.el-button--primary:active {
  background: rgb(5, 83, 171);
  border-color: rgb(5, 83, 171);
  color: #fff;
}



</style>