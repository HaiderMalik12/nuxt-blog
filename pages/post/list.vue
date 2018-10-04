<template>
  <div class="container">
    <el-main>
      <el-card class="box-card" v-for="post in posts" :key="post.id" style="margin-bottom:10px">
        <div slot="header" class="clearfix">
          <span>
            <h3>{{post.title}}</h3>
          </span>
          <el-button style="float: right; padding: 3px 0" type="text">View Details</el-button>
        </div>
        <p>{{post.description.substr(0, 120)}}</p>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
name: 'PostList',
async fetch({store, $axios, error}){
 const {data} = await $axios.get('/posts');
 store.dispatch('setPosts', data);
},
computed: {
  ...mapState({
    posts: state => state.post.posts
  })
}
}
</script>

<style>
</style>
