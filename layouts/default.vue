<template>
  <v-app dark>
    <AppBar></AppBar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar'
export default {
  components: {
    AppBar
  }
}
</script>
