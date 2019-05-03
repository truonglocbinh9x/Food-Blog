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
import { getPost } from '@/utils/actions'
export default {
  components: {
    Post
  },
  data () {
    return {
      post: {}
    }
  },
  async mounted() {
    const postId = this.$route.params.id
    const postDetail = await getPost(postId)
    if (postDetail) this.post = postDetail
    return this.$router.push('/not-found')
  }
};
</script>
