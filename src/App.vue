<template>
  <div id="app">
    <main-top />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import MainTop from '@/components/MainTop'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    Footer,
    MainTop
  }
}
</script>
