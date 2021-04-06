<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="alert alert-info text-center p-3">
          <b>
            <i class="fa fa-bar-chart"></i>
            You can get all info about coronavirus in our website
          </b>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-info text-center">
          <i class="fa fa-clock-o"></i> Last refresh time: {{ lastUpdated | date }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h2>Coronavirus Cases</h2>
        <h1 class="text-warning">{{ totalCases | number }}</h1>
        <h2>Deaths</h2>
        <h1 class="text-danger">{{ totalDeaths | number }}</h1>
        <h2>Recovered</h2>
        <h1 class="text-success">{{ totalRecovered | number }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { return {
    totalCases: 0,
    totalDeaths: 0,
    totalRecovered: 0,
    lastUpdated: 0,
  } },
  created() {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(resp => resp.json())
    .then(data => {
      this.totalCases = data.cases
      this.totalDeaths = data.deaths
      this.totalRecovered = data.recovered
      this.lastUpdated = +data.updated
    })
    .catch(err => console.log(err))
  }
}
</script>
