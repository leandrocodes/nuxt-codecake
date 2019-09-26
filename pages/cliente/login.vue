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
import firebase from 'firebase'
export default {
  data() {
    return {
      user: { password: '', email: '', logged: false },
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
    firebase.auth().onAuthStateChanged(user => {
      //if (user) this.$router.push('/cliente/formulario')
      //console.log(user)
    })
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.go()
      })
  },
  methods: {
    login() {
      //console.log(db)
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          console.log('logou')
          this.$store.commit('increment')
          console.log(this.$store.state)
        })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
