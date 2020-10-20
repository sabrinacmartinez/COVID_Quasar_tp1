<template>
  <div style = "width:500px">
    <ul>
      <li v-for="pacientes in listaDePacientesRecuperados" :key="pacientes.nombreCompleto">
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
      listaDePacientesRecuperados: []
    }
  },
  mounted: function () {
    this.listaDePacientesRecuperados = this.$store.state.Ptes.listaDePacientesRecuperados
  }
}

</script>
