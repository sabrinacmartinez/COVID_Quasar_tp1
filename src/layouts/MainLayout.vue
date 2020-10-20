<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Registro de pacientes con COVID‑19
        <q-btn type="a" to="/pages/EstadisticasIndex" target="_blank" icon= "analytics" label=" VER ESTADISTICAS" color="green" />
        </q-toolbar-title>

        <div>Registro v0.01</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
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
