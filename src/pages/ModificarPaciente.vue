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
          <q-tab name="Modificar Registro" icon= "edit" label="Modificar Registro" />
        </q-tabs>

        <q-separator />

           <q-tab-panel name="Modificar Registro">
            <div class="text-h6">Modificar Registro</div>
            <Paciente />
          </q-tab-panel>
      </q-card>

    </div>
  </div>
</template>

<script>
import Paciente from '../components/Paciente'

export default {
  name: 'ModificarPaciente',
  components: {

    Paciente
  },
  data () {
    return {
      tab: 'Registro Pacientes'
    }
  }
}
</script>
