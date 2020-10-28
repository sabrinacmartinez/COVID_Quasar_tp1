<template>
  <q-layout view="lHh Lpr ffr">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Registro de pacientes con COVID‑19
        </q-toolbar-title>

        <div><q-btn type="a" to="/pages/EstadisticasIndex" target="_blank" icon= "analytics" label="VER ESTADISTICAS" color="green" /></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
        <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
          </q-avatar>
          Trabajo por Martinez Sabrina Cecilia - 2~1~B
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
      model: 'Estadisticas'
    }
  }
}
</script>
