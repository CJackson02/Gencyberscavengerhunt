// script.js

// Acceptable answers per question (case insensitive, trimmed)
const correctAnswers = {
  1: "explore interactive cybersecurity tools",
  2: "operation endgame 2.0",
  3: "cybersecurity specialist",
  4: "youtube",
  5: "pinnacle mountain",
  6: "165.19",
  7: ".xml",
  8: "26.07",
  9: "network solutions", 
  10: "lake hamilton"
};

// Track user attempts (optional for hinting)
const attempts = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0
};
  
  // DOM Elements
  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("questions-container");
  const question1 = document.getElementById("question-1");
  const feedback1 = document.getElementById("feedback-1");
  
startBtn.addEventListener("click", () => {
  window.location.href = "challenge.html"; // Navigate to a new page for questions
});
  
function checkAnswer(qNum) {
  const input = document.getElementById(`answer${qNum}`);
  const feedback = document.getElementById(`feedback${qNum}`);
  const userAnswer = input.value.trim().toLowerCase();

  attempts[qNum] = (attempts[qNum] || 0) + 1;

  if (userAnswer === correctAnswers[qNum].toLowerCase()) {
    feedback.textContent = "Correct!";
    feedback.className = "feedback correct";
    revealNext(qNum);
  } else {
    feedback.textContent = "Incorrect. Try again.";
    feedback.className = "feedback incorrect";
  }
}
  
  function revealNext(currentQ) {
    const nextQ = document.getElementById(`question-${currentQ + 1}`);
    if (nextQ) {
      nextQ.style.display = "block";
    } else {
      const ending = document.createElement("div");
      ending.innerHTML = "<h2>Congratulations!</h2><p>You’ve completed the OSINT challenge and solved the case.</p>";
      questionContainer.appendChild(ending);
    }
  }
  
