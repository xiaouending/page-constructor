<template>
  <form
    class="input-group"
    @submit.prevent="addNewPage">
    <input
      v-model="pageNameModel"
      type="text"
      placeholder="Type name of new page"
      class="form-control"
      aria-label="Text input with segmented dropdown button">

    <div class="input-group-append">
      <button
        type="submit"
        :disabled="!pageNameModel"
        class="btn btn-outline-secondary px-3">
        Add
      </button>

      <button
        type="button"
        class="position-relative btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        @click.stop="dropdownIsVisible = !dropdownIsVisible">
        <span class="sr-only">Toggle Dropdown</span>
      </button>

      <FadeTransition :duration="150">
        <div
          v-if="dropdownIsVisible"
          v-click-outside="closeDropdown"
          class="dropdown-menu show">
          <a
            class="dropdown-item"
            href="#"
            @click="clearForm">
            Clear form
          </a>

          <div role="separator" class="dropdown-divider"/>

          <a
            class="dropdown-item"
            href="#"
            @click="removeAllPages">
            Remove all pages
          </a>
        </div>
      </FadeTransition>
    </div>
  </form>
</template>

<style scoped lang="scss">
  .input-group {
    max-width: 400px;
  }
  .dropdown-menu {
    left: initial;
    right: 0;
  }
</style>

<script>
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'AddPageForm',
  components: {
    FadeTransition
  },
  props: {
    type: {
      type: String,
      default: 'main'
    }
  },
  data () {
    return {
      pageNameModel: '',
      dropdownIsVisible: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    addNewPage () {
      if (this.pageNameModel) {
        const timestamp = new Date().getTime()

        this.$store.commit('ADD_PAGE', {
          pageName: this.pageNameModel,
          pageId: timestamp,
          liked: false
        })

        this.clearForm()
      }
    },
    removeAllPages () {
      this.$store.commit('SET_PAGES', [])

      this.dropdownIsVisible = false
    },
    clearForm () {
      this.pageNameModel = ''

      this.dropdownIsVisible = false
    },
    closeDropdown () {
      if (this.dropdownIsVisible) {
        this.dropdownIsVisible = false
      }
    }
  }
}
</script>
