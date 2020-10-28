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
    const i = 1
    state.contadorDeFallecidos += i
  },
  [types.CONTAR_RECUPERADO]: function (state, data) {
    const i = 1
    state.contadorDeRecuperados += i
  },
  [types.CONTAR_CONTAGIADO]: function (state, data) {
    const i = 1
    state.contadorDeContagiados += i
  }
}
