<template>
  <div class="container">
    <el-main>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
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
    }
  }
},
methods:{
  onSubmit(){
    alert('Form submitted')
  }
}
}
</script>

<style>
</style>
