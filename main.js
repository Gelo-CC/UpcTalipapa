function scrollToVideo() {
      var video = document.getElementById("invite");
  
      video.scrollIntoView({ behavior: "smooth" });
  
     if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  