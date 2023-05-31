$(document).ready(function () {
  //Video JS Code
  // $(".play-button").click(function (e) {
  //   var iframeSrc = $(this).data("url");
  //   $("#youtubevideo").attr("src", iframeSrc);
  // });

  // $("#close-video").click(function (e) {
  //   $("#youtubevideo").attr("src", "");
  // });

  // $(document).on("hidden.bs.modal", "#myModal", function () {
  //   $("#youtubevideo").attr("src", "");
  // });
  // $("#md-trigger").on("click", function (e) {
  //   console.log("I am here");
  //   $("#modal-1").toggleClass("md-show"); //you can list several class names
  //   e.preventDefault();
  // });

  // $("#md-close").on("click", function (e) {
  //   $("#modal-1").toggleClass("md-show"); //you can list several class names
  //   e.preventDefault();
  // });

  //End Video JS Code

  $("#play-button").on("click", function () {
    // get required DOM Elements
    var video_container = $(".video-popup");
    var close_btn = $(".close-video");
    var iframeSrc = $(this).data("url");
    var iframe_video = $("#iframe-video-m");
    iframe_video.attr("src", iframeSrc);
    // var iframe_src = $(this).children("iframe").attr("src"),
    // iframe_src = iframe_src + "?autoplay=1&rel=0"; // for autoplaying the popup video

    // change the video source with the clicked one
    // $(iframe_video).attr("src", iframeSrc);
    // Fade in video container
    //  $(video_container).removeClass("zindex");
    //  $(video_container).removeClass("hidden-m");
    $(video_container).fadeIn().addClass("show-video");

    // remove the video overlay when clicking outside the video
    $(document).on("click", function (e) {
      if ($(video_container).is(e.target) || $(close_btn).is(e.target)) {
        $(video_container).removeClass("show-video");
        $(iframe_video).attr("src", "");
      }
    });
  });

  // const video = document.getElementById("video-popup-m");
  // const playButton = document.getElementById("play-button-m");

  // function togglePlay() {
  // 	if (video.paused || video.ended) {
  // 		video.play();
  //     console.log("Called from togglePlay play");
  // 	} else {
  // 		video.pause();
  //     console.log("Called from togglePlay pause");
  // 	}
  // }

  // playButton.addEventListener("click", togglePlay);
  // video.addEventListener("playing", function () {
  // 	playButton.style.opacity = 0;
  // });
  // video.addEventListener("pause", function () {
  // 	playButton.style.opacity = 1;
  // });

  $(".portfolio-slider").owlCarousel({
    loop: false,
    center: false,
    margin: 100,
    autoplay: true,
    items: 2,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      991: {
        items: 2,
        nav: false,
      },
      1024: {
        items: 2,
        nav: false,
      },
    },
  });

  $(".testimonial").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    items: 1,
    dots: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      991: {
        items: 1,
        nav: false,
      },
      1024: {
        items: 1,
        nav: false,
      },
    },
  });

  $(".trusted-logos").owlCarousel({
    loop: false,
    items: 4,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      991: {
        items: 3,
        nav: false,
      },
      1024: {
        items: 4,
        nav: false,
      },
    },
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
  // copyrights Year Auto-update
  function newDate() {
    return new Date().getFullYear();
  }
  document.onload = document.getElementById("autodate").innerHTML = +newDate();

  // Viewport Observer to track user's scroll on the page in order to de/activate video playback.
  /* force some of these attr */
  document.onload = $("#video-bg-my").attr({ autoplay: false, muted: true });
  /* double ensure that video is muted otherwise chrome won't autostart */
  document.onload = $("#video-bg-my").prop("muted", true);

  // Remove poster whenever video plays.
  /* when video auto plays, Poster fades-out by changing video fades-in to be visible */
  $("#video-bg-my").bind("play", function (e) {
    $("#overlay-poster-m").css("opacity", 0);
    $("#video-bg-my").css("opacity", 0.75);
  });

  //   let myBgVideo = document.getElementById("#video-bg-my");
  //   myBgVideo.onended = function () {
  //     // h1.style.display = "none";
  //     // $("#overlay-poster-m").css("opacity", 1);
  //   };

  const offcanvasMenuContainer = document.querySelector("#offcanvasExample");
  const offcanvasMenu1 = document.querySelector("#menu-offcanvas-1");
  const offcanvasMenu2 = document.querySelector("#menu-offcanvas-2");
  const offcanvasMenu3 = document.querySelector("#menu-offcanvas-3");
  const offcanvasMenu4 = document.querySelector("#menu-offcanvas-4");
  // const offcanvasMenu4 = document.querySelector("#menu-offcanvas-4");
  const offcanvasMenuButton = document.querySelector("#menu-offcanvas-button");

  // offcanvasMenu1.addEventListener("click", function () {
  //   // modal-backdrop fade show
  //   offcanvasMenuContainer.classList.remove("show");
  //   console.log("DID it!!!");
  // });

  document.addEventListener("click", (event) => {
    if (
      event.target === offcanvasMenu1 ||
      event.target === offcanvasMenu2 ||
      event.target === offcanvasMenu3 ||
      event.target === offcanvasMenu4 ||
      event.target === offcanvasMenuButton
    ) {
      offcanvasMenuContainer.classList.remove("show");
      const offcanvasOverlay = document.querySelector(
        ".modal-backdrop.fade.show"
      );
      offcanvasOverlay.classList.remove("show");
      console.log("DID it!!!");
    }
    //handle click
  });

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //   document.getElementById("#overlay-m").style.opacity = "0";
        //   setTimeout(2);
        playVideo(entry.target);
        // entry.target.play();
        // setTimeout(() => {
        //   entry.target.classList.add("fading-m");
        // }, (entry.target.duration / entry.target.playbackRate - 3) * 1000);
      } else {
        entry.target.pause();
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector("#video-bg-my"));
});

// offcanvasMenu1.on("click", function () {
//   //     $(".video-popup-container-m").fadeIn("slow");
//   console.log("winner!;");
//   //     return false;
// });

// $(document).on("click", function (e) {
//   if (
//     offcanvasMenu1.is(e.target) ||
//     offcanvasMenu2.is(e.target) ||
//     offcanvasMenu3.is(e.target) ||
//     offcanvasMenu3.is(e.target)
//   ) {
//     offcanvasMenuContainer.removeClass("show");
//     console.log("DID it!!!");
//     // $(iframe_video).attr("src", "");
//   }
// });

function playVideo(e) {
  e.play();
  e.classList.remove("fading-m");
  // Fade-out 3s before video ends.
  setTimeout(() => {
    e.classList.add("fading-m");
    // $("#overlay-poster-m").css("opacity", 1);
  }, (e.duration / e.playbackRate - 3) * 1000);
}

entry.target.onended = function () {
  // h1.style.display = "none";
  // $("#overlay-poster-m").css("opacity", 1);
  $("#video-bg-my").css("opacity", 0);
  console.log("World is mine!");
  // setTimeout(() => {
  //   console.log("World is mine!");
  // }, 1000);
  $("#overlay-poster-m").css("opacity", 1);
  //    entry.target.play;
  $("#video-bg-my").play;
  // $("#overlay-poster-m").css('display', 'none');
};

//  document.getElementById("foo").innerHTML =
//    '<img src="img/apple_' + total + '.png" id="imageBox"/>';
// imgsrc1 = "../assets/images/background-images/carpet.png";
// imgsrc2 = "../assets/images/background-images/carpet2.png";
//  document.getElementById("#testChecker").srcset =  imgsrc1 + "  1920w," + imgsrc2 + " 1024w";
//  document.getElementById("#testChecker").innerHTML.srcset =  imgsrc1 + "  1920w," + imgsrc2 + " 1024w";
//  document.getElementById("#testChecker").innerHTML =  imgsrc1 + "  1920w," + imgsrc2 + " 1024w";

//javascript
// document.getElementById('button-m').addEventListner('click', function(){
// 	let video = document.getElementById('video-popup-m');

//   	function showVideo(){
//     video.style.display = "block";
//     console.log('Calling from showVideo!!!');
//     }

//   	function hideVideo(){
//     video.style.display = "none"
//     }

//   showVideo();
//   // hideVideo();
// }

// $(document).ready(function () {
//   $("#popup-btn").on("click", function () {
//     $(".video-popup-container-m").fadeIn("slow");
//     return false;
//   });

//   $(".popup-bg").on("click", function () {
//     $(".video-popup-container-m").slideUp("slow");
//     return false;
//   });

//   $(".close-btn").on("click", function () {
//     $(".video-popup-container-m").fadeOut("slow");
//     return false;
//   });
// });

// //YOUTUBE VIDEO
// $('.play-button').click(function(e){
//     var iframeEl = $('<iframe>', { src: $(this).data('url') });
//     $('#youtubevideo').attr('src', $(this).data('url'));
// })

// $('#close-video').click(function(e){
//     $('#youtubevideo').attr('src', '');
// });

// $(document).on('hidden.bs.modal','#myModal', function () {
//     $('#youtubevideo').attr('src', '');
// });
