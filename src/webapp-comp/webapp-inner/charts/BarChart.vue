<template>
  <div class="chart chartAreaWrapper">
    <div class="chart chartAreaWrapper2">
      <canvas id="barchart"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $.getJSON("https://bemoss-e8288.firebaseio.com/Device1.json", function(
      data
    ) {
      var labels = [];
      var chartData = [];
      var myMoment = [];
      var dataSum = 0;

      myMoment[0] = moment.utc(data[0].time).format("MMM YYYY");
      dataSum += data[0].power;

      for (var i = 1; i < data.length; i++) {
        myMoment[i] = moment.utc(data[i].time).format("MMM YYYY");

        if (myMoment[i] === myMoment[i - 1]) {
          dataSum += data[i].power;
        } else {
          chartData.push(Math.round(dataSum * 100) / 100);
          labels.push(myMoment[i - 1]);
          dataSum = 0;
          dataSum += data[i].power;
          var newwidth =
            $(".chartAreaWrapper2").width() + window.screen.width * 0.05;
          $(".chartAreaWrapper2").width(newwidth);
        }
      }
      chartData.push(Math.round(dataSum * 100) / 100);
      labels.push(myMoment[data.length - 1]);

      $(".chartAreaWrapper").animate({ scrollLeft: newwidth });

      var ctx = document.getElementById("barchart").getContext("2d");

      //Global Options
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = "#777";

      var powChart = new Chart(ctx, {
        type: "bar", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
          labels: labels,
          datasets: [
            {
              label: "Power (Watt)",
              data: chartData,
              backgroundColor: "#36a2eb",
              //backgroundColor:['green','red','blue','purple','black','pink'],
              borderWidth: 1,
              borderColor: "blue",
              hoverBorderWidth: 2,
              hoverBorderColor: "black"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: data[0].agent_id + " Total Power Consumption by Month",
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
          tooltip: {
            enabled: true
          }
        }
      });
    });
  }
};
</script>

<style>
</style>