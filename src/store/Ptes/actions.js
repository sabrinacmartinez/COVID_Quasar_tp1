import * as types from './types'

export default {
  [types.AGREGAR_CONTAGIADO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_CONTAGIADO, data)
  },
  [types.AGREGAR_RECUPERADO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_RECUPERADO, data)
  },
  [types.AGREGAR_FALLECIDO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_FALLECIDO, data)
  },
  [types.CONTAR_FALLECIDO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.CONTAR_FALLECIDO, data)
  },
  [types.CONTAR_RECUPERADO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.CONTAR_RECUPERADO, data)
  },
  [types.CONTAR_CONTAGIADO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.CONTAR_CONTAGIADO, data)
  }
}
