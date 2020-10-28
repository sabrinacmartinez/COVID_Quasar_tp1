<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 800">
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
          <q-tab name="Ingresar Nuevo Registro" icon= "person_add" label="Ingresar Nuevo Registro" />
          <q-tab name="Pacientes Contagiados" icon= "healing" label="Contagiados"/>
          <q-tab name="Pacientes Recuperados" icon= "mood" label="Recuperados"  />
          <q-tab name="Pacientes Fallecidos" icon= "mood_bad" label="Pacientes Fallecidos" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Ingresar Nuevo Registro">
            <div class="text-h6">Ingresar Nuevo Registro</div>
            <Paciente />
          </q-tab-panel>

          <q-tab-panel name="Pacientes Contagiados">
            <div class="text-h6">Pacientes Contagiados</div>
            <ListadoPtesContagiados />
          </q-tab-panel>

          <q-tab-panel name="Pacientes Recuperados">
            <div class="text-h6">Pacientes Recuperados</div>
            <ListadoPtesRecuperados />
          </q-tab-panel>

            <q-tab-panel name="Pacientes Fallecidos">
            <div class="text-h6">Pacientes Fallecidos</div>
            <ListadoPtesFallecidos />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>

<script>
import ListadoPtesContagiados from '../components/ListadoPtesContagiados'
import ListadoPtesRecuperados from '../components/ListadoPtesRecuperados'
import ListadoPtesFallecidos from '../components/ListadoPtesFallecidos'
import Paciente from '../components/Paciente'

export default {
  name: 'PageIndex',
  components: {
    ListadoPtesContagiados,
    ListadoPtesRecuperados,
    ListadoPtesFallecidos,
    Paciente
  },
  data () {
    return {
      tab: 'Registro Pacientes'
    }
  }
}
</script>
