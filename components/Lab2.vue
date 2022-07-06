<template>
  <div id="dialog-download-image-mobile">
    <!-- <img ref="image" src="./mac.png" />
    <pre>{{ $data }}</pre> -->
    <button @click="onClickDialog">openDialog</button>
    <a href="https://m.me/sellde.vn">messenger desktop test</a>
    <button @click="onClickDialog">openDialog</button>
    <a href="https://m.facebook.com/messages/compose?ids=sellde.vn">
      messenger mobile test
    </a>

    <a href="https://supply.sellde.vn/" rel="PDF link" target="_blank"
      >Link Text</a
    >
    <pre>{{ userAgent }}</pre>
    <pre>isFAcebook: {{ isFacebook }}</pre>

    <div id="foz" data-href="https://supply.sellde.vn/">Supply Sellde</div>
    <div id="custom" data-href="https://supply.sellde.vn/">Supply Sellde</div>

    <!-- <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false"> Save </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle
                  >Set the content filtering level to restrict apps that can be
                  downloaded</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle
                  >Require password for purchase or use password to restrict
                  purchase</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="notifications"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle
                  >Notify me about updates to apps or games that I
                  downloaded</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle
                  >Auto-update apps at any time. Data charges may
                  apply</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="widgets"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle
                  >Automatically add home screen widgets</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row> -->
    <!-- <v-dialog v-model="isDialog">
      <div @touchstart="onTouchStart(1)" @touchend="onTouchEnd">
        <img class="rounded-lg" src="./mac.png" />
      </div>
      <div @touchstart="onTouchStart(2)" @touchend="onTouchEnd">
        <img class="rounded-lg" src="./mac.png" />
      </div>
      <div @touchstart="onTouchStart(3)" @touchend="onTouchEnd">
        <img class="rounded-lg" src="./mac.png" />
      </div>
      <div>
        <img class="rounded-lg" src="./category.png" />
      </div>
      <div>
        <img class="rounded-lg" src="./category.png" />
      </div>
    </v-dialog> -->

    <!-- <div
        class="imageWrapper"
        v-for="(item, index) in images"
        :key="`images_${index}`"
        :id="index"
      > -->
    <!-- <div class="strollImages">
      <div @touchstart="onTouchStart(1)" @touchend="onTouchEnd">
        <img class="rounded-lg" src="./mac.png" />
      </div>
      <div @touchstart="onTouchStart(2)" @touchend="onTouchEnd">
        <img class="rounded-lg" src="./mac.png" />
      </div>
      <div @touchstart="onTouchStart(3)" @touchend="onTouchEnd">
        <img class="rounded-lg" src="./mac.png" />
      </div>
      <div>
        <img class="rounded-lg" src="./category.png" />
      </div>
      <div>
        <img class="rounded-lg" src="./category.png" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: "",
      changedTouches: "",
      isDialog: false,
      dialog: true,
      userAgent: null,
      isFacebook: false,
    };
  },
  methods: {
    onClickDialog() {
      // console.log("click");
      // if (mobile) {
      //   <a href="https://m.facebook.com/messages/compose?ids=USER_NAME_OR_ID">
      //     messenger mobile test
      //   </a>;
      // } else {
      //  ;
      // }
      // this.isDialog = true;
    },
    // onTouch() {
    //   imgEl.addEventListener("touchforcechange", "onTouchForceChange", false);

    //   function onTouchForceChange(e) {
    //     if (e.changedTouches[0].force > 0.5) {
    //       e.preventDefault();
    //     }
    //   }
    // },

    // onTouchForceChange(e) {
    //   this.event = e;
    //   this.changedTouches = e.changedTouches;
    //   //   console.log('e.',e)
    //   console.log("e");
    //   console.log("e.changedTouches", e.changedTouches);
    //   console.log("e.changedTouches[0]", e.changedTouches[0]);
    //   console.log("e.changedTouches[0].force", e.changedTouches[0].force);
    //   //   alert("run...");
    //   //   if (e.changedTouches[0].force > 0.5) {
    //   //     e.preventDefault();
    //   //   }
    // },

    // handleEnd(e) {
    //   console.log("end...", e);
    // },
    // handleCancel() {
    //   console.log("cancel");
    // },
    // handleMove() {
    //   console.log("handleMove");
    // },
    onTouchStart() {
      alert("touch onTouchStart");
    },
    onTouchEnd() {
      alert("touch end");
    },
  },

  mounted() {
    document.getElementById("foz").addEventListener(
      "click",
      function (evt) {
        console.log("mounted function")
        var a = document.createElement("a");
        a.setAttribute("href", this.getAttribute("data-href"));
        // a.setAttribute("target", "_blank");

        var dispatch = document.createEvent("HTMLEvents");
        dispatch.initEvent("click", true, true);
        // a.dispatchEvent(dispatch);
        a.dispatchEvent(new MouseEvent("click", {'view': window, 'bubbles': true, 'cancelable': true}))
      },
      false
    );

    // document.getElementById("custom").addEventListener(
    //   "click",
    //   function (evt) {
    //     var a = document.createElement("a");
    //     a.setAttribute("href", this.getAttribute("data-href"));
    //     a.setAttribute("target", "_blank");

    //     var dispatch = document.createEvent("HTMLEvents");
    //     dispatch.initEvent("click", true, true);
    //     a.dispatchEvent(dispatch);
    //   },
    //   false
    // );
  },

  created() {
    // const ua = navigator.userAgent || navigator.vendor || window.opera;
    // this.userAgent = ua;
    // if (ua.indexOf("FBAN") > -1 && ua.indexOf("FBAV") > -1) {
    //   this.isFacebook = true;
    // }
  },

  // mounted() {
  //   console.log("this.$refs.image", this.$refs.image.$el);
  //   // this.$refs.image.addEventListener("click", this.onTouchForceChange);
  //   this.$refs.image.addEventListener("touchstart", this.onTouchForceChange);
  //   this.$refs.image.addEventListener("touchend", this.handleEnd);
  //   this.$refs.image.addEventListener("touchcancel", this.handleCancel);
  //   this.$refs.image.addEventListener("touchmove", this.handleMove);

  //   // this.$refs.image.addEventListener(
  //   //   "touchforcechange",
  //   //   this.onTouchForceChange(),
  //   //   false
  //   // );
  // },
};
</script>

<style lang="scss" scoped>
#dialog-download-image-mobile {
  background-color: #ffffff !important;
  padding: 20px 0 !important;
  height: auto;
  width: 100%;

  .strollImages {
    width: 100%;
    max-width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    padding: 1.75rem 0.5rem 1.75rem;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
  }

  .strollImages::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }

  .imageWrapper {
    position: relative;
    display: inline-block;
    width: 17vw;
    margin-right: 22px;
    aspect-ratio: 80/85;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px rgb(43 57 185 / 15%);
    background: #ffffff;

    img {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 0.5rem;
    }

    .selectedIcon {
      position: absolute;
      right: -11px;
      bottom: -9px;
      z-index: 2;
      background-color: white;
      border-radius: 50%;
    }

    :active {
      opacity: 0.5;
    }
  }

  .imageWrapper::before {
    content: "";
    position: absolute;
    top: 70%;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background: linear-gradient(
      179.93deg,
      rgba(46, 58, 89, 0.5) 0.05%,
      rgba(255, 255, 255, 0.0001) 99.92%
    );
    transform: matrix(1, 0, 0, -1, 0, 0);
    z-index: 1;
  }

  .goBackButton {
    display: inherit;
    height: auto !important;
    width: 315px;
    max-width: unset;
    margin: auto;
    padding: 16px 16px !important;
    border-radius: 8px;
  }

  .lineInfoWrapper {
    justify-content: start !important;
  }

  @media only screen and (min-width: 600px) {
    .imageWrapper {
      width: 14vw;
    }
  }
}
</style>