<template>
  <section class="application">
    <div
      v-for="app in application"
      class="step-application"
      :key="app.number"
    >
      <div
        class="each-step"
        v-if="app.number == step"
      >
        <div
          class="list-wrapaper"
          v-if="app.devices"
        >
          <ul
            v-for="device in app.devices"
            class="device-list"
            :key="device.id"
          >
            <li>{{device.name}}</li>
          </ul>
          <device-menu></device-menu>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    step: 0,
    required: []
  }),
  props: {
    application: {
      type: Object
    }
  }
};
</script>

<style>
</style>