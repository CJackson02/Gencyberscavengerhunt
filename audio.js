document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
  
    // Resume from previous time if stored
    const savedTime = sessionStorage.getItem("bgMusicTime");
    if (savedTime !== null) {
      audio.currentTime = parseFloat(savedTime);
    }
  
    audio.volume = 0.2; // softer background
    audio.play().catch(() => {
      // Handle autoplay restrictions
      console.log("Autoplay blocked — waiting for user interaction.");
    });
  
    // Save time periodically
    setInterval(() => {
      sessionStorage.setItem("bgMusicTime", audio.currentTime);
    }, 1000);
  });