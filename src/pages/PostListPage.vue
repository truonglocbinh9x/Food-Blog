<template>
  <section class="wthree-row py-5">
    <div class="container py-xl-5 py-lg-3">
      <div class="blog-left-content">
        <post v-for="post in posts" :key="post.id" :post="post"></post>
      </div>
    </div>
  </section>
</template>
<script>
import Post from '@/components/Post'
import axios from 'axios'

export default {
  components: {
    Post
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts () {
      const url = 'http://localhost:4000/api/v1/posts'
      axios.get(url)
      .then(res => this.posts = res.data.posts)
      .catch(err => console.log(err))
    }
  },
  created () {
    this.getPosts()
  }
}
</script>

