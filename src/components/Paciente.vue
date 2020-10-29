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
        v-model="paciente.nombre"
        label="Nombre del paciente *"
        hint="Nombre"
        :rules="[ val => val && val.length > 0 || 'Por favor escriba el nombre del paciente']"
      />

       <q-input
        filled
        v-model="paciente.apellido"
        label="Apellido del paciente *"
        hint="Apellido"
        :rules="[ val => val && val.length > 0 || 'Por favor escriba el apellido del paciente']"
      />

      <q-input
        filled
        type=number
        v-model="paciente.edad"
        label="Edad del paciente *"
        :rules="[
          val => val !== null && val !== '' || 'Por favor ingrese la edad del paciente',
          val => val > 0 && val < 120 || 'Por favor ingrese una edad válida. Debe ser mayor a 0 y menor a 120'
        ]"
      />

  <div class="q-pa-md" style="max-width: 300px">
   Ingrese la fecha de ingreso del paciente *
    <q-input
    filled v-model="paciente.fechaDeIngreso"
    mask="date"
      :rules="[
      val => val !== null && val !== '' || 'Por favor seleccione una fecha para el registro.'
      ]">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="paciente.fechaDeIngreso" :options="optionsFn">
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
        Estado * : {{ paciente.estado }}
      </q-badge>

      <q-select
      filled v-model="paciente.estado"
      :options="opcionesDeEstado"
      :rules="[
      val => val !== null && val !== '' || 'Por favor seleccione un estado para el registro.'
      ]"
      label="Estado del paciente *"
      />
    </div>
  </div>

      <q-btn label="Agregar Registro" type="submit" color="primary" @submit="handler()" />
      <q-btn label="Limpiar Registro" type="reset" color="primary" flat class="q-ml-sm" />

    </q-form>
  </div>
</template>
<script>

import { AGREGAR_PACIENTE, AGREGAR_RECUPERADO, AGREGAR_FALLECIDO, CONTAR_RECUPERADO, CONTAR_FALLECIDO, CONTAR_CONTAGIADO } from '../store/Ptes/types'

export default {
  name: 'Paciente',
  data () {
    return {
      opcionesDeEstado: [
        'Contagiado', 'Recuperado', 'Fallecido'],
      paciente: {
        id: 0,
        nombre: '',
        apellido: '',
        edad: '',
        estado: '',
        fechaDeIngreso: ''
      },
      mensaje: this.mensaje
    }
  },
  props: {
    contadorDeRecuperados: Number,
    contadorDeFallecidos: Number,
    contadorDeContagiados: Number,
    ListadoPtesContagiados: [],
    ListadoPtesRecuperados: [],
    ListadoPtesFallecidos: []

  },
  methods: {
    onAgregar: function () {
      const espacio = ' '
      const paciente = {
        nombreCompleto: this.paciente.nombre.concat(espacio, this.paciente.apellido),
        edad: this.paciente.edad,
        fechaDeIngreso: this.paciente.fechaDeIngreso,
        estado: this.paciente.estado
      }
      console.log(paciente)
      if (paciente.estado === 'Contagiado') this.$store.dispatch('Ptes/' + AGREGAR_PACIENTE, paciente)
      else if (paciente.estado === 'Recuperado') this.$store.dispatch('Ptes/' + AGREGAR_RECUPERADO, paciente)
      else this.$store.dispatch('Ptes/' + AGREGAR_FALLECIDO, paciente)
      this.contarPacienteRecuperado()
      this.contarPacienteFallecido()
      this.contarPacienteContagiado()
      alert('Registro realizado correctamente.')
    },
    onResetear: function () {
      this.paciente.nombre = null
      this.paciente.apellido = null
      this.paciente.edad = null
      this.paciente.fechaDeIngreso = null
      this.paciente.estado = null
    },
    contarPacienteRecuperado: function () {
      const contadorDeRecuperados = 1
      if (this.paciente.estado === 'Recuperado') this.$store.dispatch('Ptes/' + CONTAR_RECUPERADO, contadorDeRecuperados)
    },
    contarPacienteFallecido: function () {
      const contadorDeFallecidos = 1
      if (this.paciente.estado === 'Fallecido') this.$store.dispatch('Ptes/' + CONTAR_FALLECIDO, contadorDeFallecidos)
    },
    contarPacienteContagiado: function () {
      const contadorDeContagiados = 1
      if (this.paciente.estado === 'Contagiado') this.$store.dispatch('Ptes/' + CONTAR_CONTAGIADO, contadorDeContagiados)
    },
    optionsFn (date) {
      return date >= '2019/12/01' && date <= '2021/01/01'
    },
    handler () {
      let mensaje = false
      if (this.paciente) {
        mensaje = true
        this.onAgregar()
      }
      return { mensaje }
    }
  }
}
</script>
