<template>
  <div
    :id="`${name}_${blockIndex}`"
    class="block py-1"
    @mouseleave="blockControlsIsVisible = false"
    @mouseenter="blockControlsIsVisible = true">
    <component :is="name"/>

    <FadeTransition :duration="200">
      <BlockControls
        v-show="blockControlsIsVisible"
        :name="name"
        :block-index="blockIndex"
        :page-id="pageId"/>
    </FadeTransition>
  </div>
</template>

<style scoped lang="scss">
  .block {
    position: relative;
    box-sizing: initial;
    border-top: 1px dashed transparent;
    border-bottom: 1px dashed transparent;
    transition: border 200ms ease-out;
    &:hover {
      border-top: 1px dashed #CCC;
      border-bottom: 1px dashed #CCC;
    }
  }
</style>

<script>

import { FadeTransition } from 'vue2-transitions'
import Jumbotron from '@/components/blocks/Jumbotron'
import Header from '@/components/blocks/Header'
import Pricing from '@/components/blocks/Pricing'
import Footer from '@/components/blocks/Footer'
import Row from '@/components/blocks/Row'
import Marketing from '@/components/blocks/Marketing'
import BlockControls from '@/components/BlockControls'
import ImageWithTextSection from '@/components/blocks/ImageWithTextSection'

export default {
  name: 'BlockSection',
  components: {
    Jumbotron,
    Header,
    Pricing,
    Footer,
    Row,
    Marketing,
    BlockControls,
    FadeTransition,
    ImageWithTextSection
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    pageId: {
      type: Number,
      default: 0,
      required: true
    },
    blockIndex: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data () {
    return {
      blockControlsIsVisible: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {}
}
</script>
