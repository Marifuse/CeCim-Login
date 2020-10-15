<template>
  <div class="home home__container">
    <!-- Sección Carousel -->
    <v-carousel
      continuous
      cycle
      class="pt-2"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </v-carousel>
      <!-- Cabecera -->
      <header class="text-center header__container pa-5">
        <v-img class="mx-auto" width=15em src="https://firebasestorage.googleapis.com/v0/b/cecim-a812a.appspot.com/o/logo-cecim.png?alt=media&token=a49e0d9b-ee8d-4737-b93a-3eebc8ac09cd"></v-img>
      </header>
      <!-- Sección botones -->
      <section class="btn__container">
        <div class="text-center btn__sections">
           <v-btn rounded color="black" dark>Nuestros Servicios</v-btn>
        </div>
      </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  data () {
    return {
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/cecim-a812a.appspot.com/o/medicina-1.jpg?alt=media&token=ed9db05b-d434-47dc-9ad7-57fb6b03bf14',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/cecim-a812a.appspot.com/o/medicina-2.jpg?alt=media&token=821ca2c8-ee2f-41e4-9457-12ce1983ca64',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/cecim-a812a.appspot.com/o/medicina-3.jpg?alt=media&token=648b1b35-741b-4a70-86b5-38b667d84f34',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/cecim-a812a.appspot.com/o/medicina-4.jpg?alt=media&token=75adbeff-3ea5-4c75-85d0-f4eeb9bd576e',
        },
      ],
    }
  },
  name: 'Home',
  components: {
    Footer
  },
}
</script>

<style lang="scss">
// Sección principal
.home__container {
  background-color: #FFF;
}
// Sección cabecera
.header__container {
  background-color: #FFF;
} 
// Sección Botones
.btn__container {
  margin: 0;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/cecim-a812a.appspot.com/o/medicina-5.jpg?alt=media&token=ec98e539-f211-4204-a995-4c2a576fc199) !important;
  background-size: cover !important;
}
.btn__sections {
  padding-top: 15em;
  padding-bottom: 15em;
}
</style>
