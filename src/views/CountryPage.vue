<template>
  <div class="container">
    <div class="row">
      <div class="col text-center" v-if="countryStat">
        <h1>
          <img :src="countryStat.countryInfo.flag" alt="flag" class="country-flag">
          {{ countryStat.country }}
        </h1>
        <hr>
        <h2>Coronavirus Cases</h2>
        <h1 class="text-warning">{{ countryStat.cases | number }}</h1>
        <h2>Deaths</h2>
        <h1 class="text-danger">{{ countryStat.deaths | number }}</h1>
        <h2>Recovered</h2>
        <h1 class="text-success">{{ countryStat.recovered | number}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { return {
    countryStat: null,
  } },
  created() {
    const country = this.$route.params.code
    console.log(country)
    fetch('https://disease.sh/v3/covid-19/countries/' + country)
    .then(res => res.json())
    .then(data => this.countryStat = data)
  }
}
</script>

<style>
.country-flag {
  width: 64px;
}
</style>
