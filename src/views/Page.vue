<template>
  <div class="container position-relative">
    <router-link class="d-none d-md-block link-back p-1" to="/">
      <angleLeft class="text-secondary" width="14px"/>
    </router-link>

    <Sidebar/>

    <h4
      v-if="currentPage.blocks.length === 0"
      class="text-center font-weight-normal text-secondary mt-5">
      Add block by clicking on the plus icon
    </h4>

    <SidebarToggler/>

    <div
      v-for="(item, i) in currentPage.blocks"
      id="blocks"
      :key="i">
      <BlockSection
        :block-index="i"
        :page-id="currentPageId"
        :name="item"/>
    </div>

    <SidebarToggler v-if="currentPage.blocks.length !== 0"/>
  </div>
</template>

<style scoped lang="scss">
  .link-back {
    position: absolute;
    left: 16px;
    top: -12px;
  }
</style>

<script>

import { mapState } from 'vuex'
import Sidebar from '@/components/Sidebar'
import SidebarToggler from '@/components/SidebarToggler'
import BlockSection from '@/components/BlockSection'
import angleLeft from '@/assets/svg/angle-left.svg'

export default {
  name: 'Page',
  metaInfo () {
    return {
      title: this.metaTitle
    }
  },
  components: {
    Sidebar,
    SidebarToggler,
    BlockSection,
    angleLeft
  },
  props: {
    pageName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      allBlocks: state => state.blocks,
      allPages: state => state.pages
    }),
    metaTitle () {
      return `Page :: ${this.currentPage.name} 🚀`
    },
    currentPage () {
      return this.allPages.find(el => el.id === this.currentPageId)
    },
    currentPageId () {
      return parseInt(this.$route.params.pageId)
    }
  },
  mounted () {},
  methods: {}
}
</script>
