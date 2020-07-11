<template>
  <section
    class="block-section"
    @click="addBlockToPage(name, $route.params.pageId)"
    @mouseleave="plusIconIsVisible = false"
    @mouseenter="plusIconIsVisible = true">
    <div class="d-flex align-items-center justify-content-center1">
      <h5 class="mb-1">{{ name }}</h5>

      <FadeTransition>
        <plusCircle
          v-if="plusIconIsVisible"
          class="ml-2 text-success"
          width="16px"/>
      </FadeTransition>
    </div>

    <img
      :src="`/blocks-preview/${name}.png`"
      class="img-fluid"
      :alt="name">
  </section>
</template>

<style scoped lang="scss">
</style>

<script>
import plusCircle from '@/assets/svg/plus-circle.svg'
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'BlockPreview',
  components: {
    plusCircle,
    FadeTransition
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      plusIconIsVisible: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    addBlockToPage (blockName, pageId) {
      this.$store.commit('ADD_BLOCK_TO_PAGE', { blockName, pageId })

      setTimeout(() => {
        this.$store.commit('SET_SIDEBAR_VISIBILITY', false)
      }, 250)

      this.$nextTick(function () {
        const blocks = document.getElementsByClassName('block')

        if (blocks[blocks.length - 1] !== undefined) {
          this.$scrollTo(blocks[blocks.length - 1], 800)
        }
      })
    }
  }
}
</script>
