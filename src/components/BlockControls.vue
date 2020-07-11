<template>
  <div class="block-controls">
    <div
      class="btn-group btn-group-sm"
      role="group"
      aria-label="Controls">
      <button
        type="button"
        class="btn btn-icon btn-light"
        @click="duplicateBlock(name, blockIndex)">
        <copy width="13px"/>
      </button>

      <button
        type="button"
        class="btn btn-icon btn-light"
        @click="removeBlock(blockIndex)">
        <trash width="13px"/>
      </button>
    </div>

    <div
      class="btn-group btn-group-sm ml-3"
      role="group"
      aria-label="Move up/down">
      <button
        type="button"
        :disabled="blockIndex === 0"
        class="btn btn-icon btn-light"
        @click="moveUp(name, blockIndex)">
        <arrowUp width="13px"/>
      </button>

      <button
        type="button"
        :disabled="blockIndex === currentPage.blocks.length - 1"
        class="btn btn-icon btn-light"
        @click="moveDown(name, blockIndex)">
        <arrowDown width="13px"/>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .block-controls {
    position: absolute;
    top: 16px;
    right: 16px;
    display: block;
  }
  .btn-icon {
    line-height: 1;
    svg {
      margin: 2px;
    }
  }
</style>

<script>

import { mapState } from 'vuex'
import arrowDown from '@/assets/svg/arrow-down.svg'
import arrowUp from '@/assets/svg/arrow-up.svg'
import trash from '@/assets/svg/trash.svg'
import copy from '@/assets/svg/copy.svg'

export default {
  name: 'BlockControls',
  components: {
    arrowDown,
    arrowUp,
    trash,
    copy
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    blockIndex: {
      type: Number,
      default: 0,
      required: true
    },
    pageId: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      allPages: state => state.pages
    }),
    currentPage () {
      return this.allPages.find(el => el.id === this.pageId)
    }
  },
  mounted () {
  },
  methods: {
    removeBlock (blockIndex) {
      this.$store.commit('REMOVE_BLOCK_FROM_PAGE', {
        pageId: this.pageId,
        blockIndex
      })
    },
    moveUp (blockName, fromIndex) {
      if (fromIndex !== 0) {
        const toIndex = fromIndex - 1

        this.$store.commit('MOVE_BLOCK_OF_PAGE', {
          pageId: this.pageId,
          fromIndex,
          toIndex,
          blockName
        })
      }
    },
    moveDown (blockName, fromIndex) {
      if ((this.currentPage.blocks.length - 1) !== fromIndex) {
        const toIndex = fromIndex + 1

        this.$store.commit('MOVE_BLOCK_OF_PAGE', {
          pageId: this.pageId,
          fromIndex,
          toIndex,
          blockName
        })
      }
    },
    duplicateBlock (blockName, fromIndex) {
      this.$store.commit('DUPLICATE_BLOCK', {
        blockName,
        pageId: this.pageId,
        fromIndex
      })
    }
  }
}
</script>
