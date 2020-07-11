<template>
  <div
    class="my-4 d-flex justify-content-center"
    @click.stop>
    <plusCircle
      width="30px"
      class="cursor-pointer"
      @click="openBlocksModal"/>
  </div>
</template>

<style scoped lang="scss">

</style>

<script>
import plusCircle from '@/assets/svg/plus-circle.svg'

export default {
  name: 'SidebarToggler',
  components: {
    plusCircle
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    openBlocksModal () {
      setTimeout(() => {
        this.$store.commit('SET_SIDEBAR_VISIBILITY', true)
      }, 200)
    }
  }
}
</script>
