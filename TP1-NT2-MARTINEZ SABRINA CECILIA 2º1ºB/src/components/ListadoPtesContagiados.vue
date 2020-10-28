<template>
  <div style = "width:500px">

<q-list bordered separator>
  <q-item clickable v-ripple v-for="pacientes in listaDePacientesContagiados" :key="pacientes.nombreCompleto">
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
      listaDePacientesContagiados: []
    }
  },
  mounted: function () {
    this.listaDePacientesContagiados = this.$store.state.Ptes.listaDePacientesContagiados
  }
}

</script>
