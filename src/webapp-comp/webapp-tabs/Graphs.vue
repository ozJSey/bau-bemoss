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
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
.mw-100 {
  max-width: 100%;
  @include mobile {
    max-width: none;
  }
  canvas,
  .chart {
    max-width: 100%;
    @include mobile {
      max-width: none;
    }
  }
  .chart {
    padding: 20px;
    margin: 20px 0;
    @include mobile {
      padding: 10px;
      margin: 10px 0;
    }
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