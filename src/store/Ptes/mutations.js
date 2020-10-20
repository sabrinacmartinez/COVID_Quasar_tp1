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
  [types.AGREGAR_RECUPERADO]: function (state, id) {
    const i = 0
    state.listaDePacientesRecuperados[i] = id
  },
  [types.AGREGAR_FALLECIDO]: function (state, id) {
    const i = 0
    state.listaDePacientesFallecidos[i] = id
  },
  [types.CONTAR_FALLECIDO]: function (state, data) {
    let i = 0
    state.contadorDeFallecidos = i++
  },
  [types.CONTAR_RECUPERADO]: function (state, data) {
    let i = 0
    state.contadorDeRecuperados = i++
  },
  [types.CONTAR_CONTAGIADO]: function (state, data) {
    let i = 0
    state.contadorDeContagiados = i++
  }
}
