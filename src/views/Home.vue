<template>
  <div class="home container mt-5 mb-4">
    <h1 class="mb-4">
      List of pages
    </h1>

    <p
      v-if="pages.length === 0"
      class="text-muted">
      Try to add a new page by the form below.
    </p>

    <transition-group
      name="list"
      class="row"
      tag="div">
      <div
        v-for="(item, i) in pages"
        :key="i"
        class="col-12 col-sm-6 col-md-4 col-lg-3">
        <PageCard :page-index="i" :page-item="item"/>
      </div>
    </transition-group>

    <AddPageForm class="my-3"/>
  </div>
</template>

<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>

<script>
import { mapState } from 'vuex'
import PageCard from '@/components/PageCard'
import AddPageForm from '@/components/AddPageForm'

export default {
  name: 'Home',
  metaInfo () {
    return {
      title: 'Home 🏠'
    }
  },
  components: {
    PageCard,
    AddPageForm
  },
  data () {
    return {
      nameOfPage: ''
    }
  },
  computed: {
    ...mapState({
      pages: state => state.pages
    })
  },
  methods: {
    createPage (pageName) {
      const timestamp = new Date().getTime()

      this.$store.commit('ADD_PAGE', {
        pageName,
        pageId: timestamp
      })
    }
  }
}
</script>
