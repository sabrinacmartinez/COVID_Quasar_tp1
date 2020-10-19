<template>
  <div style = "width:500px">
    <ul>
      <li v-for="pacientes in listaDePacientesFallecidos" :key="pacientes.nombreCompleto">
        {{ pacientes.nombreCompleto }}
      </li>
      </ul>
  </div>
</template>
<script>

export default {
  name: 'Paciente',
  data () {
    return {
      listaDePacientesFallecidos: []
    }
  },
  mounted: function () {
    this.listaDePacientesFallecidos = this.$store.state.Ptes.listaDePacientesFallecidos
  }
}

</script>
