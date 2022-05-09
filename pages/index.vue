<template>
  <main class="container">
    <!-- <AppHeader /> -->
    <Lab />
    <AppRestaurantInfo :datasource="fooddata" />
  </main>
</template>

<script>
// import AppHeader from "@/components/AppHeader.vue";
import Lab from "@/components/Lab.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";
import { mapState } from "vuex";

export default {
  components: {
    Lab,
    AppRestaurantInfo,
  },

  computed: {
    ...mapState(["fooddata"]),
  },
};
</script>
