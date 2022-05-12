<template>
  <div>
    <img ref="image" src="./mac.png" />
  </div>
</template>

<script>
export default {
  methods: {
    onTouch() {
      imgEl.addEventListener("touchforcechange", "onTouchForceChange", false);

      function onTouchForceChange(e) {
        if (e.changedTouches[0].force > 0.5) {
          e.preventDefault();
        }
      }
    },

    onTouchForceChange(e) {
      console.log("e", e);
      console.log("e.changedTouches", e.changedTouches);
      console.log("e.changedTouches[0]", e.changedTouches[0]);
      console.log("e.changedTouches[0].force", e.changedTouches[0].force);
      console.log("run...");
      if (e.changedTouches[0].force > 0.5) {
        e.preventDefault();
      }
    },
  },

  mounted() {
    console.log("this.$refs.image", this.$refs.image.$el);
    // this.$refs.image.addEventListener('click', this.onTouchForceChange);
    this.$refs.image.addEventListener("ontouchstart", this.onTouchForceChange);
    // this.$refs.image.addEventListener(
    //   "touchforcechange",
    //   this.onTouchForceChange(),
    //   false
    // );
  },
};
</script>

<style lang="scss" scoped>
</style>