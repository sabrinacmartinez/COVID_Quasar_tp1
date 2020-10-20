<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary glossy text-white">
          </q-toolbar>
      <q-card>
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Pacientes Contagiados" icon= "healing" label="Contagiados"/>
          <q-tab name="Pacientes Recuperados" icon= "mood" label="Recuperados"  />
          <q-tab name="Pacientes Fallecidos" icon= "mood_bad" label="Pacientes Fallecidos" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Pacientes Contagiados">
            <div class="text-h6">Estadísticas</div>
            <Estadisticas />
          </q-tab-panel>

          <q-tab-panel name="Pacientes Recuperados">
            <div class="text-h6">Estadísticas</div>
             <Estadisticas />
          </q-tab-panel>

            <q-tab-panel name="Pacientes Fallecidos">
            <div class="text-h6">Estadísticas</div>
             <Estadisticas />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

  </div>
</template>
<script>

import Estadisticas from '../components/Estadisticas'

export default {
  name: 'EstadisticasIdex',
  components: {
    Estadisticas
  },
  data () {
    return {
      tab: 'Estadisticas'
    }
  }
}
</script>
