var ua = navigator.userAgent || navigator.vendor || window.opera;

function isFacebookApp() {
  return ua.indexOf("FBAN") > -1 && ua.indexOf("FBAV") > -1;
}

if (isFacebookApp()) {
  window.parent.location.assign(
    "https://supply.sellde.vn/"
  );
}
