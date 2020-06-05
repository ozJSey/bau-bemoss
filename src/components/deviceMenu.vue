<template>
  <div class="device">
      <img :src="devicePic ? devicePic : '../assets/device_and_hardware.png'">
      <p>{{deviceName}}</p>
      <vue-range-swiper :min="deviceMin"
                        :max="deviceMax"
                        :step="10"
                        v-model="sliderValue">
    </vue-range-swiper>
    <button @click="closeAndSave">Ready!</button>
  </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
    data : () => ({
        sliderValue,
    }),
    computed: {
        deviceValueAdjustments: {
            get: function () {
                return this.deviceValue
            },
            set: function (newValue) {
              this.sliderValue = this.deviceValue
            }
        }
    },
    props:{
        visible:{
            type: Boolean,
            default: false,
        },  
        deviceName: {
            type: String,
        },
        deviceValue:{
            type: Number,
        },
        deviceMin: {
            type: Number
        },
        deviceMax:{
            type: Number
        },
        turnedOn:{
            type: Boolean,
        }
    },
    components: {
        RangeSlider
    },
    methods:{
        closeAndSave(){
            this.$emit('closed');
            return this.deviceValue;
        }
    }
}
</script>

<style lang="scss">
    .device{
        display: block;
        max-width: 50%;
        padding: 10px; 
        box-shadow: 2px 1px 5px 2px rgba(0,0,0,0.1), 2px 3px 10px 5px rgba(0,0,0,0.1);
    }
</style>