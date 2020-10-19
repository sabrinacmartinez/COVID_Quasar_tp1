import * as types from './types'

export default {
  [types.AGREGAR_PACIENTE]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_PACIENTE, data)
  },
  [types.ELIMINAR_PTE]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.ELIMINAR_PTE, data)
  },
  [types.MODIFICAR_PTE]: function ({ commit, state }, id) {
    console.log(state)
    commit(types.MODIFICAR_PTE, id)
  },
  [types.AGREGAR_RECUPERADO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_RECUPERADO, data)
  },
  [types.AGREGAR_FALLECIDO]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_FALLECIDO, data)
  }
}
