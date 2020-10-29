import * as types from './types'

export default {
  [types.AGREGAR_PACIENTE]: function (state, data) {
    state.listaDePacientesContagiados.push(data)
  },
  /*   [types.ELIMINAR_PTE]: function (state, data) {
    state.listaDePacientesContagiados.pop(data)
  },
  [types.MODIFICAR_PTE]: function (state, id) {
    const i = 0
    state.listaDePacientesContagiados[i] = id
  }, */
  [types.AGREGAR_RECUPERADO]: function (state, data) {
    state.listaDePacientesRecuperados.push(data)
  },
  [types.AGREGAR_FALLECIDO]: function (state, data) {
    state.listaDePacientesFallecidos.push(data)
  },
  [types.CONTAR_FALLECIDO]: function (state, data) {
    state.contadorDeFallecidos += data
  },
  [types.CONTAR_RECUPERADO]: function (state, data) {
    state.contadorDeRecuperados += data
  },
  [types.CONTAR_CONTAGIADO]: function (state, data) {
    state.contadorDeContagiados += data
  }
}
