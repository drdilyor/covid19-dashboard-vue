<template>
  <div class="home">
    <main-stats/>
    <hr>
    <country-stats/>
  </div>
</template>

<script>
import MainStats from "@/components/MainStats.vue"
import CountryStats from "@/components/CountryStats.vue"

export default {
  components: {
    MainStats,
    CountryStats,
  }
}
</script>
