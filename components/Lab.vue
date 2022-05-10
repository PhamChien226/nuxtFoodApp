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
      <br />

      <canvas id="canvas" width="165px" height="145px">My content of canvas</canvas>
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

    downloadCanvasAsImage(){

    let canvasImage = document.getElementById('canvas').toDataURL('image/png');
    
    // this can be used to download any image from webpage to local disk
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = 'image_name.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
      };
      xhr.open('GET', canvasImage); // This is to download the canvas Image
      xhr.send();
},


    doDownload() {
      //   this.downloadImages(this.imageList, this.item.name);
      this.downloadDescriptionImage();
    },

    downloadDescriptionImage() {
      console.log("description");
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");

      let downloadedImage = new Image();
      downloadedImage.src = "../assets/headerimg.jpg";
      downloadedImage.crossOrigin = "Anonymous";

      //draw image
      downloadedImage.onload = function () {
        ctx.fillStyle = "red";
        // ctx.drawImage(downloadedImage, 0, 0);
        ctx.font = "48px serif";
        ctx.fillText("Hello world", 400, 400);

        // const imageConverted = canvas.toDataURL();
        const imageConverted = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        // let img = document.createElement("img");
        // img.src = imageConverted;
        // a.setAttribute("download", `nameImage_description.jpeg`);
        // a.setAttribute("href", imageConverted);
        window.location.href = imageConverted;
        // console.log("imageConverted", imageConverted);

        // // this.downloadImage(imageConverted, "nameImage");

        // let a = document.createElement("a");
        
        // a.appendChild(img);
        // a.click();
        // a.remove();


      };
    },

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