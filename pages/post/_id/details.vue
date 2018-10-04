<template>
  <div class="container">
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <h3>{{post.title}}</h3>
          </span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="editPost(post.id)">Edit</el-button>
          <el-button style="float: right; padding: 3px 0" type="text" @click="deletePost(post.id)">Delete</el-button>
        </div>
        <p>{{post.description}}</p>
      </el-card>
    </el-main>
  </div>

</template>

<script>
import {mapState} from 'vuex';
export default {
name: 'PostDetails',
async fetch({store, params, error, $axios}){
  const {data} = await $axios.get(`/posts/${params.id}`);
  store.dispatch('setPost', data);
},
computed: {
  ...mapState({
    post : state => state.post.singlePost
  })
}
}
</script>

<style>
</style>
