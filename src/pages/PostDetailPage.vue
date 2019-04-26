<template>
  <section class="wthree-row py-5">
    <div class="container py-xl-5 py-lg-3">
      <div class="blog-left-content">
        <post :post="post" />
        <div class="top-cont">
          <h3 class="mt-5 mb-4">
            <a href="blog1.html" class="single-text text-dark font-weight-light">
              {{ post.title }}
            </a>
          </h3>
          <p>
            {{ post.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Post from '@/components/Post'
export default {
  components: {
    Post
  },
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPost () {
      const url = `http://localhost:4000/api/v1/posts/${this.$route.params.id}`
        this.$http.get(url)
          .then(res => {
            if (!res.data) return
            this.post = res.data
          })
          .catch(err => {
            this.$router.push('/error')
          })
    }
  },
  mounted() {
    this.getPost()
  }
};
</script>
