<template>
  <div class="wrapper">
    <Header />
    <MainStats />
    <hr>
    <CountryStats />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import MainStats from "./components/MainStats.vue"
import CountryStats from "./components/CountryStats.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    MainStats,
    CountryStats,
    Footer,
  }
}
</script>
