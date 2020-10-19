<template>
  <div style = "width:500px">
    <ul>
      <li v-for="pacientes in listaDePacientesContagiados" :key="pacientes.nombreCompleto">
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
      listaDePacientesContagiados: []
    }
  },
  mounted: function () {
    this.listaDePacientesContagiados = this.$store.state.Ptes.listaDePacientesContagiados
  }
}

</script>
