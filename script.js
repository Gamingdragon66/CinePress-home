function search() {
    let searchInput = document.getElementById("searchInput").value;
    let videoContainer = document.getElementById("videoContainer");
    let videoTitles = videoContainer.getElementsByClassName("video-title");
    for (let i = 0; i < videoTitles.length; i++) {
      let videoTitle = videoTitles[i];
      if (videoTitle.innerHTML.toUpperCase().indexOf(searchInput.toUpperCase()) > -1) {
        videoTitle.style.display = "block";
      } else {
        videoTitle.style.display = "none";
      }
    }
  }
  