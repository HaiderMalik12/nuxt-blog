<template>
  <div>
    <h1>Post List</h1>
    <ol>
      <li v-for="post in posts" :key="post.id">{{post.title}} </li>
    </ol>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
name: 'PostList',
computed: {
  ...mapState({
    posts: state => state.post.posts
  })
}
}
</script>

<style>
</style>
