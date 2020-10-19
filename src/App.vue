<template>
  <div>
    <v-app>
      <AppBar/>
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" md="8">
          </v-col>
        </v-row>
      </v-container>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',
  components: {
    AppBar
  },
}
</script>


