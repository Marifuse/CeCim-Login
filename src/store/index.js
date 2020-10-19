import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const baseUrl = 'https://us-central1-hospital-36c8f.cloudfunctions.net/patients'

function emptyPatient() {
  return {
    id: null,
    data: {
      name: '',
      email: ''
    }
  }
}

export default new Vuex.Store({
  state: {
    currentUser: null,
    patients: [],
    currentPatient: emptyPatient(),
  },
  mutations: {
    SET_CURRENT_USER(state, user) { state.currentUser = user },
    SET_PATIENTS(state, data) { state.patients = data },
    UPDATE_NAME(state, name) { state.currentPatient.data.name = name },
    UPDATE_EMAIL(state, email) { state.currentPatient.data.email = email },
    SET_CURRENT_PATIENT(state, patient){ state.currentPatient = patient},
    SET_EMPTY_PATIENT(state) {
      state.currentPatient.id = null;
      const base = emptyPatient()
      Object.keys(base.data).forEach(key => {
        state.currentPatient.data[key] = base.data[key]
      })
    }
  },
  actions: {
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
    setPatients({commit}) {
      axios.get(`${baseUrl}/patients`)
      .then((response) => {
        commit('SET_EMPTY_PATIENT')
        commit('SET_PATIENTS', response.data)
      })
    },
    postPatient({dispatch, state}) {
      axios.post(`${baseUrl}/patient`, state.currentPatient.data)
      .then(() => {
        dispatch('setPatients')
      })
    },
    updateName({commit}, name) {
      commit('UPDATE_NAME', name)
    },
    updateEmail({commit}, email) {
      commit('UPDATE_EMAIL', email)
    },
    deletePatient({dispatch}, id) {
      axios.delete(`${baseUrl}/patient/${id}`)
      .then(() => {
        dispatch('setPatients')
      })
    },
    setCurrentPatient({commit, getters}, id) {
      let targetPatient = getters.searchPatientById(id)
      if (targetPatient) {
        commit('SET_CURRENT_PATIENT', targetPatient)
      } else {
        axios.get(`${baseUrl}/patient/${id}`)
        .then((response) => {
          commit('SET_CURRENT_PATIENT', response.data)
        })
      }  
    },
    updatePatient({dispatch, state}, id) {
      axios.put(`${baseUrl}/patient/${id}`, state.currentPatient.data)
      .then(() => {
        dispatch('setPatients')
      })
    }
  },
  modules: {
  },
  getters: {
    searchPatientById: (state) => (id) => {
      return state.patients.find((patient) => {
        return patient.id == id
      })
    }
  }
})
