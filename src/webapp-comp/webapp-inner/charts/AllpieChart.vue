<template>
  <div
    id="holder"
    class="chart"
  >
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    $.getJSON("https://bemoss-e8288.firebaseio.com/state.json", function(data) {
      var labels = [];
      var chartData = [];
      var dataSum = 0;
      var realSum = 0;
      var perc = [];

      for (var devices in data) {
        for (var device in data[devices]) {
          realSum +=
            data[devices][device].power == undefined
              ? 0
              : data[devices][device].power;
        }
      }

      for (var devices in data) {
        labels.push(devices);
        //console.log(data[devices])
        for (var device in data[devices]) {
          dataSum +=
            data[devices][device].power == undefined
              ? 0
              : data[devices][device].power;
        }
        perc.push(Math.round((dataSum / realSum) * 100));
        chartData.push(dataSum);
        dataSum = 0;
      }

      var ctx = document.getElementById("myChart").getContext("2d");

      function removeDataset(chart) {
        chart.data.datasets = [];
      }

      //Global Options
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = "#777";

      var powChart = new Chart(myChart, {
        type: "pie", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
          labels: labels,
          datasets: [
            {
              label: "Power (Watt)",
              data: chartData,
              //backgroundColor:'blue',
              backgroundColor: [
                "green",
                "red",
                "blue",
                "purple",
                "yellow",
                "pink"
              ],
              borderWidth: 1,
              borderColor: "blue",
              hoverBorderWidth: 2,
              hoverBorderColor: "black"
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Approximate Power Consumption of All Devices",
            fontSize: 25
          },
          legend: {
            position: "right",
            labels: {
              fontColor: "black"
            }
          },
          layout: {
            padding: {
              left: 50,
              right: 0,
              bottom: 0,
              top: 0
            }
          },
          tooltips: {
            enabled: true,
            callbacks: {
              label: function(tooltipItem, data) {
                var ind = tooltipItem.index;
                return (
                  data.labels[ind] +
                  ": " +
                  data.datasets[0].data[ind] +
                  " Watt /" +
                  " Percent: " +
                  perc[ind] +
                  "%"
                );
              }
            }
          }
        }
      });
    });
  }
};
</script>

<style>
</style>