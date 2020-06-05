<template>
  <section class="notifications">
      <div class="notification-header">
          <input type="text" v-model="notificationDesc" />
          <div class="add">
              <!-- <vue-date-time-picker></vue-date-time-picker> -->
             <button @click="addNotif">
                 <font-awesome-icon class="icons" icon="plus"></font-awesome-icon>
             </button>
          </div>
      </div>
      <ul class="notification-list">
          <li v-for="n in allNotifications" :key="n.id">
              <strong> {{n.title}}} </strong>
              <p> {{n.desc}} </p>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    data: () => ({
        notificationDesc: "",
        
    }),
    props:{
        allNotifications: {
            type: Object,
        }
    },
    computed: {
        notificationData(){
            return this.allNotifications
        }
    },
    methods: {
        addNotif() {
            
        },
    },
}
</script>

<style>

</style>