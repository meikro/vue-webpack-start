<template>
  <el-row :gutter="20">
    <el-col :span="10" :offset="7">
      <el-form :model="formAlignRight" label-width="80px">
        <el-form-item label="帐号">
          <el-input v-model="formAlignRight.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formAlignRight.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="cancel">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        formAlignRight: {
          name: '',
          password: ''
        }
      };
    },
    methods: {
      submit(){
        this.$router.push({ path: '/home' });
      },
      cancel(){

      }
    }
  }
</script>
