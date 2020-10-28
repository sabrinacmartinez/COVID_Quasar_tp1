<template>
  <div class="q-pa-md" style="max-width: 350px" >
    <q-list bordered class="rounded-borders" >
      <q-expansion-item
        expand-separator
        icon="healing"
        label="Cantidad de pacientes contagiados"
        caption=""
      >
        <q-card>
          <q-card-section>
          <q-item-section>

          <q-item-label> {{ contadorDeContagiados }}  </q-item-label>
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
          <q-item-section>
          <q-item-label> {{ contadorDeRecuperados }}  </q-item-label>
      </q-item-section>
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
          <q-item-section>
          <q-item-label> {{ contadorDeFallecidos }}  </q-item-label>
      </q-item-section>
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
      contadorDeRecuperados: Number,
      contadorDeFallecidos: Number,
      contadorDeContagiados: Number
    }
  },
  methods: {
    sumarContadores: function () {
      let total = 0
      total = this.contadorDeRecuperados + this.contadorDeFallecidos + this.contadorDeContagiados
      return total
    }
  },
  mounted: function () {
    this.contadorDeRecuperados = this.$store.state.Ptes.contadorDeRecuperados
    this.contadorDeFallecidos = this.$store.state.Ptes.contadorDeFallecidos
    this.contadorDeContagiados = this.$store.state.Ptes.contadorDeContagiados
  }
}

</script>
