<template>
  <div>
    <v-card width='400px' class="mx-auto my-auto lighten-5 pa-5 mt-16">
      <v-card-title class="pb-0">
       <v-img class="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/cecim-a812a.appspot.com/o/logo-cecim.png?alt=media&token=a49e0d9b-ee8d-4737-b93a-3eebc8ac09cd"></v-img>
      </v-card-title>
      <v-card-text>
       <h1 class="text-center pa-5">Login</h1>
        <v-form>
          <v-text-field label='Usuario' 
          prepend-icon='mdi-account-circle'
          v-model="user"
          color="#3F51B5"
          />
          <v-text-field label='Contraseña' :type="showPassword ? 'text' : 'password'"
            prepend-icon='mdi-lock'
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
            color="#3F51B5"
            />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <div class="my-5 text-center">
        <v-btn color='black' dark @click="login">Iniciar Sesión</v-btn>
      </div>
    </v-card>
  </div> 
</template>

<script>
import Firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  data: () => ({
    user: '',
    password: '',
    showPassword: false
  }),
  methods: {
    ...mapActions(['setCurrentUser']),
    login() {
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() => {
        this.$router.push('/')
        this.setCurrentUser(this.user)
        alert(`Bienvenid@ ${this.user}`)
      }).catch(() => {
        this.setCurrentUser(null)
        alert('Datos Ingresados no Válidos... Vuelve a Ingresar tus Credenciales')
      })
    }
  },
}
</script>

<style>

</style>