<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">

    </div>
  </div>
</template>

<script>

export default {
  name: 'Estadisticas',
  components: {
  },
  data () {
    return {
      contadorDeRecuperados: Number,
      contadorDeFallecidos: Number,
      contadorDeContagiados: Number
    }
  },
  mounted: function () {
    this.contadorDeRecuperados = this.$store.state.Ptes.contadorDeRecuperados
  },
  function2 () {
    this.contadorDeFallecidos = this.$store.state.Ptes.contadorDeFallecidos
  },
  function3 () {
    this.contadorDeFallecidos = this.$store.state.Ptes.contadorDeFallecidos
  }
}
</script>
