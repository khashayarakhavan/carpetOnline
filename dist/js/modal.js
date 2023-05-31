$(document).ready(function () {
  $("#md-trigger").on("click", function (e) {
    // console.log("I am here");
    // console.log("I am here!");

    var iframeSrc1 = "./assets/videos/lowMp4.mp4";
    var iframeSrc2 = "./assets/videos/lowWebm.webm";
    var iframeSrc3 = "./assets/videos/extLowMp4.mp4";
    var iframeSrc4 = "./assets/videos/extLowWebm.webm";
    var videoPopup = document.getElementById("video-popup-file");
    var source1 = document.createElement("source");
    source1.setAttribute("src", iframeSrc1);
    source1.setAttribute("media", "all and (min-width:769px)");
    source1.setAttribute("type", "video/mp4");
    var source2 = document.createElement("source");
    source2.setAttribute("src", iframeSrc2);
    source2.setAttribute("media", "all and (min-width:769px)");
    source2.setAttribute("type", "video/webm");
    var source3 = document.createElement("source");
    source3.setAttribute("src", iframeSrc3);
    source3.setAttribute("media", "all and (min-width:769px)");
    source3.setAttribute("type", "video/webm");
    var source4 = document.createElement("source");
    source4.setAttribute("src", iframeSrc4);
    source4.setAttribute("media", "all and (min-width:769px)");
    source4.setAttribute("type", "video/webm");

    videoPopup.appendChild(source1);
    videoPopup.appendChild(source2);
    videoPopup.appendChild(source3);
    videoPopup.appendChild(source4);
    $("#modal-1").toggleClass("md-show"); //you can list several class names
    videoPopup.load();
    videoPopup.play();
    e.preventDefault();
  });

  $("#md-close").on("click", function (e) {
    $("#modal-1").toggleClass("md-show"); //you can list several class names
    e.preventDefault();
    // videoPopup.pause();
    document.getElementById("our-store").scrollIntoView();
  });

  $("#md-overlay").on("click", function (e) {
    e.preventDefault();
    $("#modal-1").toggleClass("md-show"); //you can list several class names
    // videoPopup.pause();
    document.getElementById("our-store").scrollIntoView();
  });

  // video.pause();
  // videoPopup.load();
  // videoPopup.play();
  console.log("WOWWWW!");
  console.log({
    src: source.getAttribute("src"),
    type: source.getAttribute("type"),
  });

  // setTimeout(function () {
  //   video.pause();

  //   source.setAttribute(
  //     "src",
  //     "http://techslides.com/demos/sample-videos/small.webm"
  //   );
  //   source.setAttribute("type", "video/webm");

  //   video.load();
  //   video.play();
  //   console.log({
  //     src: source.getAttribute("src"),
  //     type: source.getAttribute("type"),
  //   });
  // }, 3000);

  // remove the video overlay when clicking outside the video
  // $("#md-overlay").on("click", function (e) {
  //   if ($(video_container).is(e.target) || $(close_btn).is(e.target)) {
  //     $(video_container).removeClass("show-video");
  //     $(iframe_video).attr("src", "");
  //   }
  // });
});
