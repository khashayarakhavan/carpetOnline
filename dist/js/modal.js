$(document).ready(function () {
  $("#md-trigger").on("click", function (e) {
    console.log("I am here");
    $("#modal-1").toggleClass("md-show"); //you can list several class names
    e.preventDefault();
  });

  $("#md-close").on("click", function (e) {
    $("#modal-1").toggleClass("md-show"); //you can list several class names
    e.preventDefault();
    document.getElementById("our-store").scrollIntoView();
  });

  $("#md-overlay").on("click", function (e) {
    e.preventDefault();
    $("#modal-1").toggleClass("md-show"); //you can list several class names
  });

  // remove the video overlay when clicking outside the video
  // $("#md-overlay").on("click", function (e) {
  //   if ($(video_container).is(e.target) || $(close_btn).is(e.target)) {
  //     $(video_container).removeClass("show-video");
  //     $(iframe_video).attr("src", "");
  //   }
  // });
});

