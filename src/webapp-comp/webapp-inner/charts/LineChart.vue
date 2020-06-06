<template>
  <div class="chart chartAreaWrapper">
    <div class="chart chartAreaWrapper2">
      <canvas id="linechart"></canvas>
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
      for (var i = 0; i < data.length; i++) {
        const myMoment = moment.utc(data[i].time).format("H:mm DD/MM/YYYY");
        labels.push(myMoment);
        chartData.push(data[i].power);
        var newwidth =
          $(".chartAreaWrapper2").width() + window.screen.width * 0.05;
        $(".chartAreaWrapper2").width(newwidth);
      }
      $(".chartAreaWrapper").animate({ scrollLeft: newwidth });

      var ctx = document.getElementById("linechart").getContext("2d");

      //Global Options
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = "#777";

      //First Chart
      var powChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Power (Watt)",
              data: chartData,
              backgroundColor: "#36a2eb",
              borderWidth: 1,
              borderColor: "blue",
              hoverBorderWidth: 3,
              hoverBorderColor: "blue"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: data[0].agent_id + " Power Consumption",
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
            enabled: true
          }
        }
      });

      $(function() {
        var dateFormat = "dd/mm/yy",
          from = $("#datepickerFrom")
            .datepicker({
              dateFormat: "dd/mm/yy",
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 2
            })
            .on("change", function() {
              to.datepicker("option", "minDate", getDate(this));
            }),
          to = $("#datepickerTo")
            .datepicker({
              dateFormat: "dd/mm/yy",
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 2
            })
            .on("change", function() {
              from.datepicker("option", "maxDate", getDate(this));
            });

        function getDate(element) {
          var date;
          try {
            date = $.datepicker.parseDate(dateFormat, element.value);
          } catch (error) {
            date = null;
          }

          return date;
        }
      });

      var loadNewCanvas = function(fromDate, toDate) {
        $("#linechart").remove(); // this is my <canvas> element

        $(".chartAreaWrapper2").append('<canvas id="newlinechart"><canvas>');

        var newLabels = [];
        var newChartData = [];
        for (var i = 0; i < data.length; i++) {
          const myMoment = moment.utc(data[i].time);
          if (
            myMoment.isAfter(moment.utc(fromDate)) &&
            myMoment.isBefore(moment.utc(toDate))
          ) {
            newLabels.push(myMoment.format("H:mm DD/MM/YYYY"));
            newChartData.push(data[i].power);
            var newwidth =
              $(".chartAreaWrapper2").width() + window.screen.width * 0.05;
            $(".chartAreaWrapper2").width(newwidth);
          }
        }
        //$('.chartAreaWrapper').animate({scrollLeft:newwidth});

        var newCtx = document.getElementById("newlinechart").getContext("2d");

        //Chart After Button Click
        newPowChart = new Chart(newCtx, {
          type: "line",
          data: {
            labels: newLabels,
            datasets: [
              {
                label: "Power (Watt)",
                data: newChartData,
                backgroundColor: "#36a2eb",
                borderWidth: 1,
                borderColor: "blue",
                hoverBorderWidth: 3,
                hoverBorderColor: "blue"
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: data[0].agent_id + " Power Consumption",
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
              enabled: true
            }
          }
        });
      };
    });
  }
};
</script>

<style>
</style>