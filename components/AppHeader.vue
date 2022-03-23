<template>
  <div>
    <section class="masthead" role="img" aria-label="Image Description">
      <h1>Nuxt Food App</h1>
      <button @click="test">
        <a id="facebook" title="  See restaurants 123>" target="_blank"> </a>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log("test....");
      const facebookBtn = document.getElementById("facebook");
      facebookBtn.href = "fb://profile/phamchien2222";
      setTimeout(() => {
        console.log("this...", this);
        // this.getURL(this);
      }, 25);
    },

    openFacebook(e) {
      // const IS_IOS =
      //   navigator.userAgent.match(/iPad/i) != null ||
      //   navigator.userAgent.match(/iPhone/i) != null ||
      //   navigator.userAgent.match(/iPod/i) != null;
      // const IS_ANDROID =
      //   navigator.userAgent.match(/android/i) != null ||
      //   navigator.userAgent.match(/Android/i) != null;
      // if (IS_IOS) {
      //   setTimeout(function () {
      //     getURL();
      //   }, 25);¡¡™£¢¡™™¡™£¢¡™£¢
      //   this.FacebookBtn.href = "fb://profile/phamchien2222";
      // } else if (IS_ANDROID) {
      //   setTimeout(function () {
      //     getURL();
      //   }, 25);
      //   this.FacebookBtn.href = "fb://profile/phamchien2222";
      // }
      // e.stopPropagation();
    },

    getURL(vm) {
      console.log("get url");
       return vm.location.href("https://www.facebook.com/LCKTiengViet", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.masthead {
  width: 100%;
  height: 80vh;
  padding: 40px;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 49%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(~assets/headerimg.jpg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}

// button {
//   background: #098191;
//   transition: background ease 0.25s;
//   border-radius: 5px;
//   display: inline-block;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   margin: 0;
//   text-decoration: none;
//   color: #ffffff;
//   font-size: 1.2rem;
//   cursor: pointer;
//   text-align: center;
//   -webkit-appearance: none;
//   -moz-appearance: none;
// }
// button:hover {
//   background: #63b6b8;
// }
// button:focus {
//   outline: 1px solid #fff;
//   outline-offset: -4px;
// }
</style>

      

      

    