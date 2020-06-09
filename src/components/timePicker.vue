<template>
  <date-pick
    v-model="date"
    :pickTime="true"
    :use12HourClock="true"
    :format="'YYYY-MM-DD HH:mm'"
    :displayFormat="'YYYY.MM.DD H:mm A'"
  ></date-pick>
</template>

<script>
import DatePick from "vue-date-pick";
export default {
  components: { DatePick },
  props: {
    date: {
      type: String
    }
  }
};
</script>

<style>
</style>