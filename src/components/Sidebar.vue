<template>
  <SlideXLeftTransition>
    <div
      v-show="sidebarIsVisible"
      v-click-outside="closeSidebar"
      class="sidebar">
      <h3>Choose block</h3>

      <BlockPreview
        v-for="(item, i) in allBlocks"
        :key="i"
        :name="item"/>
    </div>
  </SlideXLeftTransition>
</template>

<style scoped lang="scss">
  .sidebar {
    padding: 10px 14px;
    margin: 0;
    top: 0;
    left: 0;
    width: 300px;
    background-color: white;
    position: fixed;
    border-right: 1px solid #dfdfdf;
    height: 100%;
    overflow: auto;
    z-index: 100;
  }
  .block-section {
    margin: 15px 0;
    cursor: pointer;
  }
</style>

<script>
import { SlideXLeftTransition } from 'vue2-transitions'
import { mapState } from 'vuex'
import BlockPreview from '@/components/BlockPreview'

export default {
  name: 'Sidebar',
  components: {
    SlideXLeftTransition,
    BlockPreview
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      sidebarIsVisible: state => state.sidebarIsVisible,
      allBlocks: state => state.blocks
    })
  },
  mounted () {
  },
  methods: {
    closeSidebar () {
      this.$store.commit('SET_SIDEBAR_VISIBILITY', false)
    }
  }
}
</script>
