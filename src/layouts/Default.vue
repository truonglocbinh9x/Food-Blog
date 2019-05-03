<template>
  <div>
    <main-top />
      <slot />
    <Footer />
  </div>
</template>
<script>
import MainTop from '@/components/MainTop'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Default',
  components: {
    Footer,
    MainTop
  }
}
</script>
