<template>
  <div>
    <section class="wthree-row py-5">
      <div class="container py-xl-5 py-lg-3">
        <div class="row">
          <div class="col-lg-8 blog-left-content">
            <post v-for="post in posts" :key="post.id" :post="post"></post>
            <paginate
              v-if="totalPage > 0"
              :page-count="totalPage"
              :page-range="3"
              :page-class="'page-item'"
              :container-class="'pagination float-left mt-5'"
              :page-link-class="'page-link'"
              :click-handler="changePage"
              :prev-class="'page-item'"
              :next-class="'page-item'"
              :prev-link-class="'page-link'"
              :next-link-class="'page-link'"
            />
          </div>
          <div class="col-lg-4 blog-sldebar-right mt-lg-0 mt-5">
            <div class="single-gd">
              <img src="images/b4.jpg" class="img-fluid" alt>
              <h4>Sign up to our newsletter</h4>
              <form action="#" method="post">
                <input type="email" name="Email" placeholder="Email" required>
                <button type="submit" class="btn">Subscribe</button>
              </form>
            </div>
            <top-history />
            <div class="single-gd">
              <h4>List group</h4>
              <ul class="list-group">
                <li class="list-group-item active">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- more -->
    <section class="blog_w3ls py-5" id="more">
      <div class="container py-xl-5 py-lg-3">
        <h3 class="tittle mb-sm-5 mb-4">You may also like</h3>
        <div class="row">
          <!-- blog grid -->
          <div class="col-lg-4 col-md-6 mt-4">
            <div class="med-blog">
              <div class="blog-header">
                <a href="blog1.html">
                  <img class="img-fluid" src="@/assets/images/blog1.jpg" alt="image">
                </a>
              </div>
              <div class="blog-body bg-wh p-4">
                <span>March 12, 2019 - loremipsum</span>
                <a href="blog1.html" class="blog-title">Dictum porta auris magna umgtdd fos</a>
                <p>
                  Cras ultricies ligula sed magna dictum portaout auris blandita. Nulla viverra pharetra
                  se.
                </p>
              </div>
            </div>
          </div>
          <!-- //blog grid -->
          <!-- blog grid -->
          <div class="col-lg-4 col-md-6 mt-4">
            <div class="med-blog">
              <div class="blog-header">
                <a href="blog3.html">
                  <img class="img-fluid" src="@/assets/images/blog2.jpg" alt="image">
                </a>
              </div>
              <div class="blog-body bg-wh p-4">
                <span>March 14, 2019 - pharetra</span>
                <a href="blog3.html" class="blog-title">Quis autem vel eum iure reprehdd ende</a>
                <p>
                  Cras ultricies ligula sed magna dictum portaout auris blandita. Nulla viverra pharetra
                  se.
                </p>
              </div>
            </div>
          </div>
          <!-- //blog grid -->
          <!-- blog grid -->
          <div class="col-lg-4 col-md-6 mt-4">
            <div class="med-blog">
              <div class="blog-header">
                <a href="blog4.html">
                  <img class="img-fluid" src="@/assets/images/blog3.jpg" alt="image">
                </a>
              </div>
              <div class="blog-body bg-wh p-4">
                <span>March 16, 2019 - portaout</span>
                <a href="blog4.html" class="blog-title">Suscipit labo iosam nisi ut aliquid</a>
                <p>
                  Cras ultricies ligula sed magna dictum portaout auris blandita. Nulla viverra pharetra
                  se.
                </p>
              </div>
            </div>
          </div>
          <!-- //blog grid -->
        </div>
      </div>
    </section>
    <!-- //more -->
  </div>
</template>
<script>
import Post from "@/components/Post"
import Paginate from 'vuejs-paginate'
import TopHistory from '@/components/TopHistory'
// import axios from "axios";
import getPosts from '@/utils/actions'
export default {
  components: {
    TopHistory,
    Post,
    Paginate
  },
  data() {
    return {
      posts: [],
      totalPage: 0
    }
  },
  computed: {
    currentPage () {
      return this.$route.query.page || 1
    }
  },
  methods: {
    // getPosts() {
    //   const url = "http://localhost:4000/api/v1/posts";
    //   axios
    //     .get(url)
    //     .then(res => {
    //       this.posts = res.data.posts
    //       this.totalPage = res.data.total_page
    //     })
    //     .catch(err => console.log(err));
    // },
    changePage (pageNum) {
      this.$router.push(`/posts?page=${pageNum}`)
    }
  },
  async created() {
    const data = await getPosts()
    this.posts = data.posts
    this.totalPage = data.total_page
  }
};
</script>
