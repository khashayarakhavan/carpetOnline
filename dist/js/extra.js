    var video_container = $(".video-popup");
    var close_btn = $(".close-video");
    var iframeSrc = $(this).data("url");
    var iframe_video = $("#iframe-video-m");
    iframe_video.attr("src", iframeSrc);

      setTimeout(function () {
        event.target.playVideo();
      }, 100);

// Add fade out effect to video playback loop in the background
// Start and Stop video playback manually.
<video 
  class="transition fading" 
  muted 
  autoplay 
  playsinline 
  onloadedmetadata="this.muted = true" 
  oncanplay="playVideo(this)" 
  onended="playVideo(this)">
    <source src="./sample.mp4">
</video>


function playVideo(e) {
    e.play();
    e.classList.remove('fading');
    setTimeout(() => {
        e.classList.add('fading');
    }, (e.duration / e.playbackRate - 1) * 1000)
}