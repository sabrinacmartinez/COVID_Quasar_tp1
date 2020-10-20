<template>
  <div style = "width:500px">
    <ul>
      <li v-for="pacientes in listaDePacientesContagiados" :key="pacientes.nombreCompleto">
        {{ pacientes.nombreCompleto }}
      <q-btn type="a" to="pages/ModificarPaciente" target="_blank" label="MODIFICAR" size="10px" color="primary" />
         <br>
          <br>
      <q-tooltip content-class="bg-accent">Modificar datos del Paciente</q-tooltip>
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
