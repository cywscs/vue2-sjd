<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/imgs/avatar.jpg" alt="">
      </div>
      <!-- 登录表单 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"
                    placeholder="用户名/邮箱/学号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-s-goods" type="password"
                    placeholder="密码"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button @click="login" type="primary">登录</el-button>
          <el-button @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          {required: true, message: '请输入登录信息', trigger: 'blur'},
          {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        // const {data: res} = await this.$http.post('login', this.loginForm);
        // if (res.status != 200)
        //   return this.$message.error("登录失败...");  //登录失败弹窗
        // this.$message.success("登录成功");
        // window.sessionStorage.setItem('token', res.data.token);
        this.$router.push('/home');
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: rgb(232, 234, 242);
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 0 5px rgb(219, 219, 219);
  border-radius: 5px;
  //将登录框定位到中间
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px rgb(165, 165, 165);
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}

.btns {
  display: flex;
  justify-content: end;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
}

.el-button--primary {
  color: #FFF;
  background-color: rgb(6, 101, 208);
  border-color: rgb(6, 101, 208);
}

.el-button--primary:focus,
.el-button--primary:hover {
  background: rgb(5, 83, 171);
  border-color: rgb(5, 83, 171);
  color: #fff;
}

.el-button--primary.is-active,
.el-button--primary:active {
  background: rgb(6, 101, 208);
  border-color: rgb(6, 101, 208);
  color: #fff;
}
</style>