<template>
  <div>
    <v-app-bar
      app
      color="#3F51B5"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <a href="home" class="nav__a"><v-toolbar-title>CeCim ⚕</v-toolbar-title></a>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >

          <v-list-item>
            <v-btn
              text
              @click="logout"
            >
              <span class="mr-1">{{ !!currentUser ? 'Cerrar Sesión' : 'Iniciar Sesión' }}</span>
              <v-icon>mdi-lock</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/calendar"
            >
              <span class="mr-1">Calendario</span>
              <v-icon>mdi-calendar-check</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/home"
            >
              <span class="mr-1">Home</span>
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    ...mapActions(['setCurrentUser']),
    logout() {
      Firebase.auth().signOut().then(() => {
        this.setCurrentUser(this.user)
        this.$router.push('/login')
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }  
}
</script>

<style>
.nav__a {
  text-decoration: none;
  color: #FFF !important;
  transition: .3s;
}
.nav__a:hover {
  color: rgb(179, 177, 255) !important;
}

</style>