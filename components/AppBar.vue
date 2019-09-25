<template>
  <div class="app-bar">
    <v-toolbar flat>
      <v-toolbar-title>Code Cake</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/" nuxt>
          <v-icon>mdi-home-outline</v-icon>Início
        </v-btn>

        <v-btn text to="/inspire" nuxt>
          <v-icon>mdi-account-card-details-outline</v-icon>Sobre
        </v-btn>

        <v-btn text>
          <v-icon>mdi-storefront</v-icon>Vitrine
        </v-btn>

        <v-btn text>
          <v-icon>mdi-contact-mail-outline</v-icon>Contato
        </v-btn>

        <v-btn text>
          <v-icon>mdi-code-tags</v-icon>Codifique o seu
        </v-btn>

        <v-btn text>
          <v-icon>mdi-door-closed</v-icon>Login
        </v-btn>
        
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {}
</script>

<style>
.v-button span {
  text-transform: capitalize !important;
}

.v-icon {
  margin-right: 5px;
}

.nav-link {
  height: 300px;
}
</style>