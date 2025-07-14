// resources.js

const riddles = {
    1: "firewall",
    2: "phishing",
    3: "vpn",
    4: "password",
    5: "rootkit",
    6: "spoofing",
    7: "honeypot",
    8: "backdoor",
    9: "ddos",
    10: "zero day"
  };
  
  const riddleTexts = {
    1: "I stand between you and the flame, keeping the intruders out of the game. What am I?",
    2: "I mimic what you trust the most, to steal your secrets coast to coast. What am I?",
    3: "A tunnel unseen, encrypts your stride, hiding your path as you surf and ride. What am I?",
    4: "I'm your secret, short or long, weak or strong. Guard me well, or things go wrong. What am I?",
    5: "Deep within the system’s core, I hide in code and so much more. What am I?",
    6: "I fake my name to look the same, but trick you is my only aim. What am I?",
    7: "I look like bait to the unaware, but I’m a trap for those who dare. What am I?",
    8: "Once you trust me, I’m hard to ignore. I sneak right in through a hidden door. What am I?",
    9: "I flood with traffic, break your stride, a million bots on every side. What am I?",
    10: "Unknown to all, I sit and wait, till one day I reveal your fate. What am I?"
  };
  
  function checkRiddleAnswer(questionNum) {
    const input = document.getElementById(`riddle-input-${questionNum}`);
    const feedback = document.getElementById(`riddle-feedback-${questionNum}`);
    const hint = document.getElementById(`hint-${questionNum}`);
  
    if (!input || !feedback || !hint) return;
  
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = riddles[questionNum];
  
    if (userAnswer === correctAnswer) {
      hint.style.display = 'block';
      feedback.textContent = "✅ Correct! Hint unlocked below.";
      feedback.style.color = '#00ff88';
      input.disabled = true;
    } else {
      feedback.textContent = "❌ Incorrect. Try again.";
      feedback.style.color = '#ff4d4d';
      hint.style.display = 'none';
    }
  }
  
  function loadRiddles() {
    for (let i = 1; i <= 10; i++) {
      const riddleContainer = document.getElementById(`riddle-question-${i}`);
      if (riddleContainer && riddleTexts[i]) {
        const riddleText = document.createElement("p");
        riddleText.textContent = riddleTexts[i];
        riddleText.className = "riddle-text";
        riddleContainer.prepend(riddleText);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadRiddles);