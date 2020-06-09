import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiData: {},
    bulbs: [
      { id: 1, name: "Hall", status: true },
      { id: 2, name: "Kitchen", status: false },
      { id: 3, name: "Bedroom#1", status: false },
      { id: 4, name: "Bedroom#2", status: true }],
    sockets: [
      { id: 1, name: "Hall#1", status: true },
      { id: 2, name: "Hall#2", status: true },
      { id: 3, name: "Hall#3", status: true },
      { id: 4, name: "LivingRoom#1", status: true },
      { id: 5, name: "LivingRoom#2", status: true },
      { id: 6, name: "LivingRoom#3", status: true },
      { id: 7, name: "Kitchen#1", status: false },
      { id: 8, name: "Kitchen#2", status: false },
      { id: 9, name: "Bedroom#1.1", status: true },
      { id: 10, name: "Bedroom#1.2", status: true },
      { id: 11, name: "Bedroom#1.3", status: true },
      { id: 12, name: "Bedroom#2.1", status: true },
      { id: 13, name: "Bedroom#2.2", status: true }
    ],
    pcs: [
      { id: 1, name: "Bedroom#1", status: true },
      { id: 2, name: "Bedroom#2", status: true },
    ],
    acs: [
      { id: 1, name: "Bedroom#1", status: true },
      { id: 2, name: "Bedroom#2", status: true },
      { id: 3, name: "Hall", status: false }
    ],
    cameras: [
      { id: 1, name: "Enterence", status: true },
      { id: 2, name: "Hall", status: false },
      { id: 3, name: "Coridor#1", status: false },
      { id: 4, name: "Coridor#2", status: true },
      { id: 5, name: "Living Room", status: true },
      { id: 6, name: "HomeOffice", status: true }
    ],
    electronic: []
  },
  mutations: {
    apiData(state, payload) {
      this.state.apiData = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
