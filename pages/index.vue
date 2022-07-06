<template>
  <main class="container">
    <AppHeader />
    <!-- <Lab /> -->
    <Lab2 />
    <AppRestaurantInfo :datasource="fooddata" />
  </main>
</template>

<script>
// import AppHeader from "@/components/AppHeader.vue";
import Lab2 from "@/components/Lab2.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";
import { mapState } from "vuex";

export default {
  components: {
    Lab2,
    AppRestaurantInfo,
  },
  data() {
    return {
      dialog: true,
    };
  },

  computed: {
    ...mapState(["fooddata"]),
  },

  // created() {
  //   console.log("created")
  //   const ua = navigator.userAgent || navigator.vendor || window.opera;

  //   function isFacebookApp() {
  //     return ua.indexOf("FBAN") > -1 && ua.indexOf("FBAV") > -1;
  //   }

  //   if (isFacebookApp()) {
  //     window.parent.location.assign("https://supply.sellde.vn/");
  //   }
  // },
};
</script>
