<template lang="html">
  <div class="single-gd tech-btm">
    <h4>Top stories of the week</h4>
    <div v-for="(post, index) in posts" :key="post.id" :class="[index > 0 ? 'mt-4' : '' , 'blog-grids']">
      <div class="blog-grid-left">
        <a :href="`/posts/${post.id}`">
          <img :src="post.heading_img" class="img-fluid" alt>
        </a>
      </div>
      <div class="blog-grid-right">
        <h5>
          <a :href="`/posts/${post.id}`">{{ post.title }}</a>
        </h5>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getTopHistories () {
      const url = `${process.env.VUE_APP_BASE_API_URL}/api/v1/posts/top_stories`;
      axios
        .get(url)
        .then(res => {
          this.posts = res.data.posts
        })
        .catch(err => console.log(err));
    }
  },
  created () {
    this.getTopHistories()
  }
}
</script>
