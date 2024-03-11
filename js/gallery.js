/*Name this external file gallery.js*/

function upDate(previewPic) {
  //    In this function you should
  //        1) change the url for the background image of the div with the id = "image"
  //        to the source file of the preview image
  console.log(previewPic.src);
  document.getElementById(
    "image"
  ).style.backgroundImage = `url(${previewPic.src})`;
  //        2) Change the text  of the div with the id = "image"
  //        to the alt text of the preview image
  console.log(document.getElementById("image").innerHTML);
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  //    In this function you should
  //        1) Update the url for the background image of the div with the id = "image"
  //        back to the orginal-image.  You can use the css code to see what that original URL was
  document.getElementById("image").style.backgroundImage = ``;
  document.getElementById("image").style.backgroundColor = "8e68ff";
  //        2) Change the text  of the div with the id = "image"
  //        back to the original text.  You can use the html code to see what that original text was
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here";
}

function focusFunction(previewPic) {
  console.log("focus", previewPic);
  document.getElementById(
    "image"
  ).style.backgroundImage = `url(${previewPic.src})`;
  document.getElementById("image").innerHTML = previewPic.alt;
}

function blurFunction() {
  console.log("blur");
  document.getElementById("image").style.backgroundImage = ``;
  document.getElementById("image").style.backgroundColor = "8e68ff";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here";
}

const onLoadFunction = () => {
  const array = [
    "https://i.pinimg.com/564x/29/09/e4/2909e4774fa494056bd7964fe09041bb.jpg",
    "https://i.pinimg.com/564x/c6/53/79/c65379c7836ad343c364f838f3671128.jpg",
    "https://i.pinimg.com/564x/d5/ad/2e/d5ad2e5cbfc918e838163b8458949f48.jpg",
    "https://i.pinimg.com/564x/72/c2/f9/72c2f9fa1ea07c77ee187c016d30f52b.jpg",
    "https://i.pinimg.com/564x/25/0c/32/250c326ed0da41715e5f58ff89eb32dd.jpg",
    "https://i.pinimg.com/564x/7e/be/f2/7ebef269b795dffbc389545222fb7c37.jpg",
  ];
  document.getElementById(
    "image"
  ).style.backgroundImage = `url(${array[Math.floor(Math.random() * 6)]})`;
  document.getElementById("image").innerHTML = "Tab or hover to present image";
};
