<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onAgregar"
      @reset="onResetear"
      class="q-gutter-md"
    >
    Los campos con asterisco (*) son obligatorios
      <q-input
        filled
        v-model="nombre"
        label="Nombre del paciente *"
        hint="Nombre"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor escriba el nombre correctamente']"
      />

       <q-input
        filled
        v-model="apellido"
        label="Apellido del paciente *"
        hint="Apellido"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor escriba el apellido correctamente']"
      />

      <q-input
        filled
        type=number
        v-model="edad"
        label="Edad del paciente *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor ingrese la edad del paciente',
          val => val > 0 && val < 120 || 'Por favor ingrese una edad válida. Debe ser mayor a 0 y menor a 120'
        ]"
      />

  <div class="q-pa-md" style="max-width: 300px">
   Ingrese la fecha de ingreso del paciente *
    <q-input
    filled v-model="fechaDeIngreso"
    mask="date"
    lazy-rules
      :rules="[
      val => val !== null && val !== '' || 'Por favor seleccione un estado para el registro.'
      ]">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="fechaDeIngreso" :options="optionsFn">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>

   <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-badge color="secondary" multi-line>
        Estado * : {{ estado }}
      </q-badge>

      <q-select
      filled v-model="estado"
      :options="opcionesDeEstado"
      lazy-rules
      :rules="[
      val => val !== null && val !== '' || 'Por favor seleccione un estado para el registro.'
      ]"
      label="Estado del paciente *"
      />
    </div>
  </div>

      <q-btn label="Agregar Registro" type="submit" color="primary" @click="small = true" />
      <q-btn label="Resetear Registro" type="reset" color="primary" flat class="q-ml-sm" />

      <q-dialog v-model="small">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Registro realizado correctamente</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Puede hacer click en la pantalla o tocar escape para volver.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    </q-form>
  </div>
</template>
<script>

import { AGREGAR_PACIENTE, AGREGAR_RECUPERADO, AGREGAR_FALLECIDO } from '../store/Ptes/types'

export default {
  name: 'Paciente',
  data () {
    return {
      opcionesDeEstado: [
        'Contagiado', 'Recuperado', 'Fallecido'],
      id: 0,
      nombre: '',
      apellido: '',
      edad: '',
      estado: '',
      fechaDeIngreso: '',
      small: false
    }
  },
  props: {
    personaRegistrada: Text
  },
  methods: {
    onAgregar: function () {
      const espacio = ' '
      const paciente = {
        nombreCompleto: this.nombre.concat(espacio, this.apellido),
        edad: this.edad,
        fechaDeIngreso: this.fechaDeIngreso,
        estado: this.estado
      }
      console.log(paciente)
      if (paciente.estado === 'Contagiado') { this.$store.dispatch('Ptes/' + AGREGAR_PACIENTE, paciente) } else if (paciente.estado === 'Recuperado') { this.$store.dispatch('Ptes/' + AGREGAR_RECUPERADO, paciente) } else { this.$store.dispatch('Ptes/' + AGREGAR_FALLECIDO, paciente) }
    },
    onResetear: function () {
      this.nombre = null
      this.apellido = null
      this.edad = null
      this.fechaDeIngreso = null
      this.estado = null
    },
    contarPacienteRecuperado: function () {
      let contadorDeRecuperados = 0
      if (this.estado === 'Recuperado') { return contadorDeRecuperados++ }
    },
    contarPacienteFallecido: function () {
      let contadorDeFallecidos = 0
      if (this.estado === 'Fallecido') { return contadorDeFallecidos++ }
    },
    contarPacienteContagiado: function () {
      let contadorDeContagiados = 0
      if (this.estado === 'Contagiado') { return contadorDeContagiados++ }
    },
    optionsFn (date) {
      return date >= '2019/12/01' && date <= '2021/01/01'
    }
  }
}
</script>
