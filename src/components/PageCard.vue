<template>
  <section class="card mb-3">
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="card-title text-truncate overflow-hidden text-nowrap text-capitalize mb-3">
          {{ pageItem.name }}
        </h5>

        <div
          class="mb-3"
          @click="likePage(pageItem.id)">
          <heart
            :class="{
              'heart-svg-liked': pageItem.liked,
              'animate__heartBeat': animationIsActive
            }"
            class="heart-svg animate__animated"
            width="20px"/>
        </div>
      </div>

      <p class="m-0 font-size-13">
        <b>Id:</b> {{ pageItem.id }}
      </p>

      <p class="m-0 font-size-13">
        <b>Blocks:</b> {{ pageItem.blocks.length }}
      </p>

      <div class="d-flex align-items-center justify-content-between">
        <router-link
          class="btn btn-sm btn-outline-dark mt-3"
          :to="`/page/${pageItem.id}`">
          Go to page
        </router-link>

        <button
          type="button"
          class="btn btn-sm btn-outline-secondary mt-3"
          @click="removePage(pageItem.id, pageIndex)">
          Remove
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .heart-svg {
    color: #68757e;
    &.heart-svg-liked {
      color: var(--red);
    }
  }
</style>

<script>
import heart from '@/assets/svg/heart-circle.svg'

export default {
  name: 'PageCard',
  components: {
    heart
  },
  props: {
    pageIndex: {
      type: Number,
      required: true
    },
    pageItem: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: '',
          blocks: []
        }
      },
      required: true
    }
  },
  data () {
    return {
      animationIsActive: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    likePage (pageId) {
      this.$store.commit('LIKE_PAGE', { pageId })

      if (this.pageItem.liked) {
        this.animationIsActive = true

        setTimeout(() => {
          this.animationIsActive = false
        }, 800)
      }
    },
    removePage (pageId, pageIndex) {
      this.$store.commit('REMOVE_PAGE', { pageId, pageIndex })
    }
  }
}
</script>
