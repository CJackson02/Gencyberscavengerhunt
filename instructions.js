document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("cipherKey");
    const button = document.querySelector(".unlock-btn");
    const feedback = document.getElementById("unlockFeedback");
    const instructions = document.getElementById("instructions");
  
    if (!input || !button || !feedback || !instructions) return;
  
    const correctKey = "endgame"; // Update to whatever key you choose
  
    button.addEventListener("click", function () {
      const userInput = input.value.trim().toLowerCase();
  
      if (userInput === correctKey) {
        instructions.style.display = "block"; // Show instructions
        feedback.textContent = "✅ Instructions unlocked!";
        feedback.style.color = "#00ff88";
      } else {
        feedback.textContent = "❌ Incorrect key. Try again.";
        feedback.style.color = "#ff4d4d";
      }
    });
  });