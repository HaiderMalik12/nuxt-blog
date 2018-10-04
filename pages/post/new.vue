<template>
  <div class="container">
    <el-main>
      <el-form ref="form" :model="form" label-width="120px" :rules="rules">
        <el-form-item label="Title" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">Create</el-button>
          <el-button @click="resetForm('form')">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
export default {
name: 'NewPost',
data(){
  return {
    form: {
    title: '',
    description: ''
    },
    rules: {
      title:  { required: true, message: 'Please provide post title', trigger: 'blur' },
      description:  { required: true, message: 'Please provide post description', trigger: 'blur' },
    }
  }
},
methods:{
  onSubmit(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('savePost', {
              id: Date.now().toString(),
              title: this.form.title,
              description: this.form.description
            });
            this.$router.push({path : '/post/list'})
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

<style>
</style>
