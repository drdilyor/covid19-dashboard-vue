<template>
  <div class="container">
    <div class="row pb-2">
      <div class="col text-center text-md-left">
        <h2>Stats by Country</h2>
      </div> 
      <div class="col-12 col-md-4">
        <input class="form-control" type="text" v-model="searchTerm" placeholder="Search countries">
      </div>
    </div>
    <table class="table table-bordered country-stats">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Country</th>
        <th scope="col">Total Cases</th>
        <th scope="col">New Cases</th>
        <th scope="col">Total Deaths</th>
        <th scope="col">New Deaths</th>
        <th scope="col">Total Recovered</th>
        <th scope="col">Active Cases</th>
        <th scope="col">Sirious Cases</th>
        <th scope="col">Tot Cases / 1M pop</th>
        <th scope="col">Deaths / 1M pop</th>
        <th scope="col">Total Tests</th>
        <th scope="col">Tests / 1M pop</th>
        <th scope="col">Population</th>
      </tr>
      </thead>
      <tbody class="text-right">
      <tr v-for="(countryStat, i) in countryStats" :key="i" :class="{'bg-green': countryStat.active == 0}">
        <th class="text-muted font-weight-normal" scope="row">
          {{ i + 1 }}
        </th>
        <td class="text-left">
          <router-link :to="'/country/'+countryStat.countryInfo.iso3">{{ countryStat.country }}</router-link>
        </td>
        <td>{{ countryStat.cases | number }}</td>
        <td :class="{'bg-warning': countryStat.todayCases > 0}">
          {{
            countryStat.todayCases > 0 ? ('+' + countryStat.todayCases): ''
          }}
        </td>
        <td>{{ countryStat.deaths | number }}</td>
        <td class="text-white" :class="{'bg-danger': countryStat.todayDeaths > 0}">
          {{
            countryStat.todayDeaths > 0 ? ('+' + countryStat.todayDeaths): ''
          }}
        </td>
        <td>{{ countryStat.recovered | number }}</td>
        <td>{{ countryStat.active | number }}</td>
        <td>{{ countryStat.critical | number }}</td>
        <td>{{ countryStat.casesPerOneMillion | number }}</td>
        <td>{{ countryStat.deathsPerOneMillion | number }}</td>
        <td>{{ countryStat.tests | number }}</td>
        <td>{{ countryStat.testsPerOneMillion | number }}</td>
        <td class="text-info">{{ countryStat.population | number }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() { return {
    allStats: [],
    searchTerm: '',
  } },
  computed: {
    statsFilterSearch() {
      return this.allStats.filter(
        stat => stat.country.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    },
    countryStats() {
      return this.statsFilterSearch
    }
  },
  created() {
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(resp => resp.json())
    .then(data => t.allStats = data)
  }
}
</script>

<style>
.country-stats thead th {
  position: sticky;
  top: 0;
  background: white;
}
.bg-green {
  background-color: #EAF7D5;
}
</style>
