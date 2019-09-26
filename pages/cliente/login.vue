<template>
  <div class="login">
    <v-container>
      <v-form v-model="valid">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="4">
              <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="4">
              <v-text-field password v-model="user.password" :rules="passRules" label="Senha" required></v-text-field>
            </v-col>
            <v-btn @click="login">teste</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { password: '', email: '', logged: false},
      valid: false,
      passRules: [
        v => !!v || 'Digitar a senha é obrigatório',
        v => v.length > 6 || 'Senha deve conter ao menos 6 caracteres'
      ],
      emailRules: [
        v => !!v || 'Digitar o E-mail é obrigatório',
        v => /.+@.+/.test(v) || 'Digite um endereço de E-mail válido'
      ]
    }
  },
  created() {
    console.log(this.$store.state)
  },
  methods: {
    login() {
      this.$store.commit('loggin')
      console.log(this.$store.state)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
