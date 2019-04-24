<template>
  <div class="main-top" id="home">
    <Header />
    <home-banner v-if="pageDetector.isHomePage" />
    <about-banner v-if="pageDetector.isAboutPage" />
    <contact-banner v-if="pageDetector.isContactPage" />
    <post-list-banner v-if="pageDetector.isPostListPage" />
  </div>
</template>
<script>
import Header from '@/components/Header'
import HomeBanner from '@/components/banner/HomeBanner'
import AboutBanner from '@/components/banner/AboutBanner'
import ContactBanner from '@/components/banner/ContactBanner'
import PostListBanner from '@/components/banner/PostListBanner'
import PageDetector from '@/utils/PageDetector'

export default {
  name: 'MainTop',
  components: {
    Header,
    HomeBanner,
    AboutBanner,
    ContactBanner,
    PostListBanner
  },
  computed: {
    pageDetector () {
      return new PageDetector(this.$route)
    }
  }
}
</script>

