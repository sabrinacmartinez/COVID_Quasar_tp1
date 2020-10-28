<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary glossy text-white">
        <q-toolbar-title>
            Estadísticas
        </q-toolbar-title>
      <q-btn type="a" to="/" target="_blank" icon= "arrow_back" label="VOLVER A LA PÁGINA PRINCIPAL" color="green" />
      </q-toolbar>
      <q-card>
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="center"
          narrow-indicator
        >
          <q-tab name="Pacientes" icon= "healing" label="Cantidad de registros en cada estado"/>
          <!-- <q-tab name="Pacientes" icon= "menu_book" label="Total de pacientes registrados"  />
          <q-tab name="Pacientes Fallecidos" icon= "mood_bad" label="Pacientes Fallecidos" /> -->
           </q-tabs>

        <q-separator />

        <q-tab-panels align="center" v-model="tab" animated>
          <q-tab-panel name="Pacientes">
            <div class="text-h6" align="center" >Contador por estado de pacientes</div>
            <Estadisticas/>
          </q-tab-panel>

          <!-- <q-tab-panel name="Pacientes">
            <div class="text-h6">Estadísticas</div>
             <Estadisticas />
          </q-tab-panel>

            <q-tab-panel name="Pacientes Fallecidos">
            <div class="text-h6">Estadísticas</div>
             <Estadisticas />
          </q-tab-panel> -->

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

/* <style>

.centrar {
  align-content: center;
}

</style>
 */
