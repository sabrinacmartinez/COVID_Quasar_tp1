export default {
  estadoDeRecuperados: (state) => {
    let recuperados = 0
    state.listaDePacientesRecuperados.forEach(listaDePacientesRecuperados => {
      if (listaDePacientesRecuperados.estado === 'recuperado') { recuperados++ }
    })
    return { recuperados }
  },
  estadoDeFallecidos: (state) => {
    let fallecidos = 0
    state.listaDePacientesFallecidos.forEach(listaDePacientesFallecidos => {
      if (listaDePacientesFallecidos.estado === 'fallecidos') { fallecidos++ }
    })
    return { fallecidos }
  },
  estadoDeContagiados: (state) => {
    let contagiados = 0
    state.listaDePacientesContagiados.forEach(listaDePacientesContagiados => {
      if (listaDePacientesContagiados.estado === 'contagiados') { contagiados++ }
    })
    return { contagiados }
  }
}
