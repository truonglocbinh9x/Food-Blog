<template>
  <div>
    <introduction />
    <people-say />
    <you-also-like />
  </div>
</template>
<script>
import Introduction from '@/components/home/Introduction'
import PeopleSay from '@/components/home/PeopleSay'
import YouAlsoLike from '@/components/home/YouAlsoLike'
export default {
  components: {
    Introduction,
    PeopleSay,
    YouAlsoLike
  }
}
</script>
