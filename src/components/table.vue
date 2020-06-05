<template>
  <section class="data-table">
    <h2>{{title}}</h2>
    <table class="table-inner">
      <tr v-for="entries in tableContent" :key="entries.id">
        <th>{{entries.details.title}}</th>
        <td>{{entries.details.value}}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: false
        },
        tableContent:{
            type: Object,
            required: false,
        }
    }
}
</script>

<style lang="scss">
    .data-table{
        table{
            width: 100%;
        }
    }
</style>