<template>
  <div class="mw-100">
    <bar-chart></bar-chart>
    <line-chart></line-chart>
    <allpie-chart></allpie-chart>
  </div>
</template>

<script>
import AllpieChart from "../webapp-inner/charts/AllpieChart.vue";
import LineChart from "../webapp-inner/charts/LineChart.vue";
import BarChart from "../webapp-inner/charts/BarChart.vue";
export default {
  components: {
    BarChart,
    LineChart,
    AllpieChart
  }
};
</script>

<style lang="scss">
.mw-100 {
  max-width: 100%;
  canvas,
  .chart {
    max-width: 100%;
  }
  .chart {
    padding: 20px;
    margin: 20px 0;
  }
}
.chartAreaWrapper {
  overflow-x: scroll;
  position: relative;
  width: 100%;
}

.chartAreaWrapper2 {
  position: relative;
  height: 530px;
}
</style>