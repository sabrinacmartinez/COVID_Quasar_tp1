<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="healing"
        label="Cantidad de pacientes contagiados"
        caption=""
      >
        <q-card>
          <q-card-section>
          <q-item-section>
          <q-item-label> {{ recuperados }}  </q-item-label>
      </q-item-section>
          </q-card-section>
        </q-card>
      </q-expansion-item>

       <q-expansion-item
        expand-separator
        icon="mood"
        label="Cantidad de pacientes recuperados"
      >
       <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="mood_bad"
        label="Cantidad de pacientes fallecidos"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>
</template>
<script>

export default {
  name: 'Estadisticas',
  components: {
  },
  data () {
    return {
      recuperados: this.contadorDeRecuperados,
      fallecidos: this.contadorDeFallecidos,
      contagiados: this.contadorDeContagiados
    }
  },
  mounted: function () {
    this.contadorDeRecuperados = this.$store.state.Ptes.contadorDeRecuperados
    this.contadorDeFallecidos = this.$store.state.Ptes.contadorDeFallecidos
    this.contadorDeContagiados = this.$store.state.Ptes.contadorDeContagiados
  }
}

</script>
