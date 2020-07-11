import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['pages']
  })],
  state: {
    pages: [],
    blocks: ['Header', 'Pricing', 'Jumbotron', 'Footer', 'Row', 'Marketing', 'ImageWithTextSection'],
    sidebarIsVisible: false
  },
  mutations: {
    SET_SIDEBAR_VISIBILITY (state, payload) {
      state.sidebarIsVisible = payload
    },
    ADD_PAGE (state, { pageName, pageId, liked }) {
      state.pages.push({
        id: pageId,
        name: pageName,
        liked: liked,
        blocks: []
      })
    },
    ADD_BLOCK_TO_PAGE (state, { pageId, blockName }) {
      const index = state.pages.findIndex(el => el.id === parseInt(pageId))

      if (index !== -1) {
        state.pages[index].blocks.push(blockName)
      }
    },
    REMOVE_BLOCK_FROM_PAGE (state, { pageId, blockIndex }) {
      const index = state.pages.findIndex(el => el.id === parseInt(pageId))

      if (index !== -1) {
        state.pages[index].blocks.splice(blockIndex, 1)
      }
    },
    REMOVE_PAGE (state, { pageId, pageIndex }) {
      const index = state.pages.findIndex(el => el.id === parseInt(pageId))

      if (index !== -1) {
        state.pages.splice(pageIndex, 1)
      }
    },
    LIKE_PAGE (state, { pageId }) {
      const index = state.pages.findIndex(el => el.id === parseInt(pageId))

      if (index !== -1) {
        state.pages[index].liked = !state.pages[index].liked
      }
    },
    MOVE_BLOCK_OF_PAGE (state, { pageId, fromIndex, toIndex, blockName }) {
      const index = state.pages.findIndex(el => el.id === parseInt(pageId))

      if (index !== -1) {
        state.pages[index].blocks.splice(fromIndex, 1)
        state.pages[index].blocks.splice(toIndex, 0, blockName)
      }
    },
    DUPLICATE_BLOCK (state, { pageId, fromIndex, blockName }) {
      const index = state.pages.findIndex(el => el.id === parseInt(pageId))

      if (index !== -1) {
        state.pages[index].blocks.splice(fromIndex, 0, blockName)
      }
    },
    SET_PAGES (state, payload) {
      state.pages = payload
    }
  },
  actions: {},
  modules: {}
})
