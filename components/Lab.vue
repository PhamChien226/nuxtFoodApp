<template>
  <div>
    <section class="masthead" role="img" aria-label="Image Description">
      <h1>Nuxt Food App</h1>
      <!-- <button @click="saveWay2">Save image</button> -->
      <button @click="onDeviceReady">do Cavas to image</button>
      <img id="image" src="./mac.png" />
      <canvas id="filtercanvas" width="250" height="333"></canvas>
      <button @click="doDownload">doDownload</button>
      <button @click="downloadCanvasAsImage">canvasAsImage</button>
      <button @click="useSaveBlob">useSaveBlob</button>
      <button @click="saveAs">saveAs</button>
      <button ref="longBtn" @click="longPress">Long Press</button>
      <p>p tag</p>
      <br />

      <canvas id="canvas" width="165px" height="145px"
        >My content of canvas</canvas
      >
      <!-- <button id="share" @click="share">navigator share</button> -->
    </section>
  </div>
</template>

<script>
export default {
  // import { saveAs } from 'file-saver';

  // const imageDownloadURL = (imageURL) => {
  //   if (!imageURL) return noImage;
  //   if (/^https?:\/\//i.test(imageURL)) return imageURL;
  //   // const baseURL = process.env.VUE_APP_IMAGE_DOWNLOAD_DOMAINL;
  //   const baseURL = process.env.VUE_APP_IMAGE_DOWNLOAD_BASE_URL;
  //   return `${baseURL}w_${imageURL}`;
  // };

  methods: {
    longPress() {
      var node = document.getElementsByTagName("p")[0];
      var longpress = false;
      var presstimer = null;
      var longtarget = null;

      var cancel = function (e) {
        if (presstimer !== null) {
          clearTimeout(presstimer);
          presstimer = null;
        }

        this.classList.remove("longpress");
      };

      var click = function (e) {
        if (presstimer !== null) {
          clearTimeout(presstimer);
          presstimer = null;
        }

        this.classList.remove("longpress");

        if (longpress) {
          return false;
        }

        alert("press");
      };

      var start = function (e) {
        console.log(e);

        if (e.type === "click" && e.button !== 0) {
          return;
        }

        longpress = false;

        this.classList.add("longpress");

        presstimer = setTimeout(function () {
          alert("long click");
          longpress = true;
        }, 1000);

        return false;
      };

      node.addEventListener("mousedown", start);
      node.addEventListener("touchstart", start);
      node.addEventListener("click", click);
      node.addEventListener("mouseout", cancel);
      node.addEventListener("touchend", cancel);
      node.addEventListener("touchleave", cancel);
      node.addEventListener("touchcancel", cancel);
    },


    // longPress() {
    //   console.log("this.$refs.",this.$refs)
    //   this.$refs.longBtn.trigger("mousedown");
    // },



    saveAs() {
      document.execCommand("SaveAs", "1", "give img location here");
    },

    downloadCanvasAsImage() {
      let canvasImage = document
        .getElementById("canvas")
        .toDataURL("image/png");

      // this can be used to download any image from webpage to local disk
      let xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function () {
        let a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = "image_name.png";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
      };
      xhr.open("GET", canvasImage); // This is to download the canvas Image
      xhr.send();
    },

    doDownload() {
      //   this.downloadImages(this.imageList, this.item.name);
      this.downloadDescriptionImage();
    },

    useSaveBlob() {
      // const canvas = document.querySelector("canvas");
      // const context = canvas.getContext("2d");
      // const anchor = document.querySelector("a");
      // const rand = (i) => (Math.random() * i) << 0;
      // const fileName = `image${100 + rand(100)}.png`;

      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "red";
      // ctx.drawImage(downloadedImage, 0, 0);
      ctx.font = "48px serif";
      ctx.fillText("Hello world", 400, 400);

      console.log("saveBlob...", window.navigator.msSaveBlob);
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.msToBlob(), "fileName");
        e.preventDefault();
      }
      // else {
      //   anchor.setAttribute("download", "fileName");
      //   anchor.setAttribute("href", canvas.toDataURL());
      // }
    },

    downloadDescriptionImage() {
      console.log("description");
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");

      // let downloadedImage = new Image();
      // downloadedImage.src = "../assets/headerimg.jpg";
      // downloadedImage.crossOrigin = "Anonymous";

      //draw image
      // downloadedImage.onload = function () {
      ctx.fillStyle = "red";
      // ctx.drawImage(downloadedImage, 0, 0);
      ctx.font = "48px serif";
      ctx.fillText("Hello world", 400, 400);

      // const imageConverted = canvas.toDataURL();
      const imageConverted = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let img = document.createElement("img");
      img.src = imageConverted;
      // a.setAttribute("download", `nameImage_description.jpeg`);
      // a.setAttribute("href", imageConverted);
      // window.location = imageConverted;
      console.log("imageConverted", imageConverted);
      window.location.href = img.src.replace("image/png", "image/octet-stream");

      // console.log("imageConverted", imageConverted);

      // // this.downloadImage(imageConverted, "nameImage");

      // let a = document.createElement("a");

      // a.appendChild(img);
      // a.click();
      // a.remove();
      // };
    },

    // onEmbedimage() {
    //   const img = document.getElementById("embedImage");
    //   img.src =
    //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA" +
    //     "AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO" +
    //     "9TXL0Y4OHwAAAABJRU5ErkJggg==";

    //   img.addEventListener("load", () => button.removeAttribute("disabled"));

    //   const button = document.getElementById("saveImage");
    //   button.addEventListener("click", () => {
    //     window.location.href = img.src.replace(
    //       "image/png",
    //       "image/octet-stream"
    //     );
    //   });
    // },

    downloadImage(source, name) {
      let img = document.createElement("img");
      img.src = source;

      let a = document.createElement("a");
      a.setAttribute("download", `${name}_description.jpeg`);
      a.setAttribute("href", source);
      a.appendChild(img);
      a.click();
      a.remove();
    },

    onDeviceReady() {
      window.canvas2ImagePlugin.saveImageDataToLibrary(
        function (msg) {
          console.log(msg);
        },
        function (err) {
          console.log(err);
        },
        document.getElementById("myCanvas")
      );
    },

    // const drawText = (ctx,te) => {
    //   ctx.font = '22px Mulish';
    //   // // color for background
    //   ctx.fillStyle = '#fff';
    //   // draw background
    //   ctx.fillRect(0, 400, canvas.width, canvas.height);
    //   // text color
    //   ctx.fillStyle = '#000';
    //   //draw goodsName
    //   goodsNameLines.forEach((line, index) => {
    //     const y_textNextLine = y_GoodsNameStart + GoodsNameLineHeight * index;
    //     ctx.fillText(line, x_textStart, y_textNextLine);
    //   });
    // };

    // const roundRect = (ctx, x, y, width, height, radius, image) => {
    //   radius = { tl: radius, tr: radius, br: radius, bl: radius };
    //   ctx.beginPath();
    //   ctx.moveTo(x + radius.tl, y);
    //   ctx.lineTo(x + width - radius.tr, y);
    //   ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    //   ctx.lineTo(x + width, y + height - radius.br);
    //   ctx.quadraticCurveTo(
    //     x + width,
    //     y + height,
    //     x + width - radius.br,
    //     y + height
    //   );
    //   ctx.lineTo(x + radius.bl, y + height);
    //   ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    //   ctx.lineTo(x, y + radius.tl);
    //   ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    //   ctx.closePath();

    //   // return draw();
    // };

    //   created(){

    //   }
  },
};
</script>

<style lang="scss" scoped>
</style>