<template>
  <div>
    <section class="masthead" role="img" aria-label="Image Description">
      <h1>Nuxt Food App</h1>
      <button @click="save_canvas">Save image</button>
      <!-- <a id="facebook" href="fb://" title="See restaurants 123>"
        >Open FB Profile
      </a>
      <a id="facebook" href="zalo://" title="See restaurants 123>"
        >Open Zalo
      </a> -->
      <!-- <a target="_blank" href="https://www.facebook.com/LCKTiengViet">Link</a> -->

      <!-- </button> -->
      <canvas id="filtercanvas" width="250" height="333"></canvas>
      <br />
      <p>{{ success }}</p>
      <!-- <button id="share" @click="share">navigator share</button> -->
    </section>
  </div>
</template>

<script>
// <tizen:privilege name="http://tizen.org/privilege/filesystem.write"/>
// <tizen:privilege name="http://tizen.org/privilege/filesystem.read"/>
// <tizen:privilege name="http://tizen.org/privilege/content.write"/>

export default {
  data() {
    return {
      success: false,
    };
  },
  methods: {
    saveImage() {
      this.download();
    },

    download() {
      const URL = "./mac.png";
      const Folder_Name = "file:///storage/sdcard0";
      const File_Name = "testing_image";
      //step to request a file system
      window.requestFileSystem(
        LocalFileSystem.PERSISTENT,
        0,
        fileSystemSuccess,
        fileSystemFail
      );

      function fileSystemSuccess(fileSystem) {
        var download_link = encodeURI(URL);
        ext = download_link.substr(download_link.lastIndexOf(".") + 1); //Get extension of URL

        var directoryEntry = fileSystem.root; // to get root path of directory
        directoryEntry.getDirectory(
          Folder_Name,
          { create: true, exclusive: false },
          onDirectorySuccess,
          onDirectoryFail
        ); // creating folder in sdcard
        var rootdir = fileSystem.root;
        var fp = rootdir.fullPath; // Returns Fulpath of local directory

        fp = fp + "/" + Folder_Name + "/" + File_Name + "." + ext; // fullpath and name of the file which we want to give
        // download function call
        filetransfer(download_link, fp);
      }

      function onDirectorySuccess(parent) {
        // Directory created successfuly
      }

      function onDirectoryFail(error) {
        //Error while creating directory
        alert("Unable to create new directory: " + error.code);
      }

      function fileSystemFail(evt) {
        //Unable to access file system
        alert(evt.target.error.code);
      }

      function filetransfer(download_link, fp) {
        var fileTransfer = new FileTransfer();
        // File download function with URL and local path
        fileTransfer.download(
          download_link,
          fp,
          function (entry) {
            alert("download complete: " + entry.fullPath);
          },
          function (error) {
            //Download abort errors or download failed errors
            alert("download error source " + error.source);
            //alert("download error target " + error.target);
            //alert("upload error code" + error.code);
          }
        );
      }
    },

    // success(fileSystem) {
    //   var fileTransfer = new FileTransfer();
    //   var uri = encodeURI("http://some.server.com/download.php");

    //   fileTransfer.download(
    //     uri,
    //     filePath,
    //     function (entry) {
    //       console.log("download complete: " + entry.fullPath);
    //     },
    //     function (error) {
    //       console.log("download error source " + error.source);
    //       console.log("download error target " + error.target);
    //       console.log("upload error code" + error.code);
    //     },
    //     false,
    //   );

    // target_directory = fileSystem.root.nativeURL; //root path
    // downloadImage(
    //   encodeURI(
    //     "http://upload.wikimedia.org  /wikipedia/commons/2/22/Turkish_Van_Cat.jpg"
    //   ),
    //   "cat.jpg"
    // ); // I just used a sample url and filename
  },

  // test() {
  // console.log("test....");
  // console.log("navigator", navigator.share());
  // const facebookBtn = document.getElementById("facebook");
  // facebookBtn.href = "fb://phamchien2222";
  // setTimeout(() => {
  //   console.log("this...", this);
  //   // this.getURL(this);
  // }, 25);
  // },

  // async share() {
  //   const shareData = {
  //     title: "MDN",
  //     text: "Learn web development on MDN!",
  //     url: "https://developer.mozilla.org",
  //   };

  //   const btn = document.getElementById("share");
  //   const resultPara = document.querySelector(".result");

  //   // Share must be triggered by "user activation"
  //   btn.addEventListener("click", async () => {
  //     try {
  //       console.log("check");
  //       console.log("Navigator.canShare()", Navigator.canShare());
  //       if (Navigator.canShare()) {
  //         await navigator.share(shareData);
  //       } else {
  //         alert("can't share");
  //       }
  //       // resultPara.textContent = "MDN shared successfully";
  //       this.success = true;
  //     } catch (err) {
  //       this.success = false;
  //       console.log("err", err);
  //       // resultPara.textContent = "Error: " + err;
  //     }
  //   });
  // },

  // openFacebook(e) {
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
  // },

  // getURL(vm) {
  //   console.log("get url");
  //   return vm.location.href(
  //     "https://www.facebook.com/LCKTiengViet",
  //     "_blank"
  //   );
  // },

  // grayscale(img) {},

  // save_canvas() {
  //   var img = new Image();
  //   img.onload = function () {
  //     // this.grayscale(img);

  //     //  console.log("img...")
  //     var canvas = document.getElementById("filtercanvas");
  //     var ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);
  //     // var img_data = ctx.getImageData(0, 0, img.width, img.height);
  //     // var data = img_data.data;
  //     // for (var i = 0; i < data.length; i += 4) {
  //     //   var brightness =
  //     //     0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  //     //   data[i] = brightness;
  //     //   data[i + 1] = brightness;
  //     //   data[i + 2] = brightness;
  //     // }

  //     // ctx.putImageData(img_data, 0, 0);

  //     var canvas = document.getElementById("filtercanvas");
  //     var duri = canvas.toDataURL();
  //     var data = duri.substr(duri.indexOf(",") + 1);

  //     var onerror = function (err) {
  //       console.log(err.name + " : " + err.message);
  //     };
  //     var onstream = function (stream) {
  //       stream.writeBase64(data);
  //       stream.close();
  //     };

  //     var onsuccess = function (dir) {
  //       // var f = dir.createFile("face.png");
  //       // f.openStream("w", onstream, onerror, "UTF-8");
  //       // var onsuccess = function(dir) {
  //       var f = dir.createFile("frm21.gif");
  //       f.openStream(
  //         "w",
  //         function (stream) {
  //           stream.writeBase64(data);
  //           stream.close();
  //           tizen.content.scanFile(f.toURI());
  //         },
  //         onerror,
  //         "UTF-8"
  //       );
  //     };
  //     // };

  //     tizen.filesystem.resolve("images", onsuccess, onerror, "rw");
  //   };
  // img.src =
  //   "https://dev-sellde-docs.s3.ap-southeast-1.amazonaws.com/thumbnail.png";
  // img.src = "./mac.png";

  // // var canvas = document.getElementById("filtercanvas");
  // // var ctx = canvas.getContext("2d");
  // let img = document.createElement("img");
  // img.src = "./mac.png";
  // },
  // },
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

      

      

    