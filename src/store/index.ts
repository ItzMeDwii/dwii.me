/**
 * Welcome to Clovuer
 * The comments in each files will guide you through your very cool journey
 * discovering what Vue can do.
 */
import Vue from 'vue'
/**
 * Vuex stores are reactive. When Vue components retrieve state from it,
 * they will reactively and efficiently update if the store's state changes.
 *
 * Note that you cannot directly mutate the store's state.
 * The only way to change  a store's state is by explicitly commiting mutations.
 * This ensures every state change leaves a track-able record, and enables tooling that helps you better understand
 * your application.
 */
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 * This is the main configuration of your store.
 */
export default new Vuex.Store({
  state: {
    /**
     * Declare a mutable count with value of number.
     */
    count: 0,
    /**
     * Or you can just declare some random variable here
     * for Vue's aesthetics.
     */
    discordTag: "Riichi_Rusdiana#6815"
  },
  mutations: {
    /**
     * Mutate the state we've declared before.
     * you can invoke this using `store.commit('increment')`
     * @param state The state
     */
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
