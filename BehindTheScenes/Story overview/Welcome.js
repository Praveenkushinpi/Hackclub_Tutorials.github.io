const tutorialText = document.getElementById("tutorial-text");
const choicesContainer = document.getElementById("choices-container");
const audio = new Audio();

// Sound playback //
function playSound(soundFile) {
  audio.src = soundFile;
  audio.play();
}

// Preload assets //
function preloadAssets(tutorials) {
  for (let key in tutorials) {
    const tutorial = tutorials[key];
    if (tutorial.background) {
      const img = new Image();
      img.src = tutorial.background;
    }
    if (tutorial.sound) {
      const snd = new Audio();
      snd.src = tutorial.sound;
    }
  }
}

// Update tutorial content //
function updateTutorial(tutorialKey) {
  const tutorial = tutorials[tutorialKey];
  if (!tutorial) {
    console.error(`Tutorial "${tutorialKey}" not found.`);
    return;
  }

  currentTutorial = tutorialKey;
  localStorage.setItem("currentTutorial", tutorialKey);

  // Update background image //
  document.body.style.backgroundImage = `url(${tutorial.background || ""})`;

  // Play associated sound //
  if (tutorial.sound) playSound(tutorial.sound);

  // Display tutorial text //
  tutorialText.textContent = "";
  let index = 0;
  const typeWriter = setInterval(() => {
    tutorialText.textContent += tutorial.text[index];
    index++;
    if (index === tutorial.text.length) clearInterval(typeWriter);
  }, 50);

  // Update choices //
  choicesContainer.innerHTML = "";
  tutorial.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.className = "choice-button";
    button.onclick = () => {
      if (choice.script) {
        loadScript(choice.script, () => updateTutorial(choice.next));
      } else {
        updateTutorial(choice.next);
      }
    };
    choicesContainer.appendChild(button);
  });
}

// Load a script dynamically //
function loadScript(scriptName, callback) {
  const script = document.createElement("script");
  script.src = scriptName;
  script.onload = callback;
  document.body.appendChild(script);
}

// Load saved state //
window.onload = () => {
  const savedTutorial = localStorage.getItem("currentTutorial") || "mainPage";
  preloadAssets(tutorials);
  updateTutorial(savedTutorial);
};

// Tutorial data for the main page //
const tutorials = {
  mainPage: {
    text: "THIS IS A TUTORIAL MADE BY A MEMBER OF A HACKCLUB",
    choices: [
      { text: "BOBA", next: "boba1.1", script: "boba.js" },
      { text: "FRAPS", next: "fraps1.1", script: "fraps.js" },
      { text: "SPRIG", next: "sprig1.1", script: "sprig.js" },
      { text: "BLOT", next: "blot1.1", script: "blot.js" },
      { text: "100$ GRANT FOR PCB", next: "circuit1.1", script: "circuit.js" },
    ],
    background: "images/welcome.jpeg",
    sound: "sounds/maintheme.mp3",
  },
};
