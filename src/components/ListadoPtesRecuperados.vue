<template>
  <div style = "width:500px">
    <ul>
      <li v-for="pacientes in listaDePacientesRecuperados" :key="pacientes.nombreCompleto">
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
      listaDePacientesRecuperados: []
    }
  },
  mounted: function () {
    this.listaDePacientesRecuperados = this.$store.state.Ptes.listaDePacientesRecuperados
  }
}

</script>
