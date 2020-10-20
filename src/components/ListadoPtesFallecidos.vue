<template>
  <div style = "width:500px">
    <q-list bordered separator>
  <q-item clickable v-ripple v-for="pacientes in listaDePacientesFallecidos" :key="pacientes.nombreCompleto">
    <q-item-section>
      <q-item-label> {{ pacientes.nombreCompleto }} - Edad: {{ pacientes.edad }} - Fecha de Ingreso: {{ pacientes.fechaDeIngreso }} </q-item-label>
    </q-item-section>
  </q-item>
</q-list>
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
