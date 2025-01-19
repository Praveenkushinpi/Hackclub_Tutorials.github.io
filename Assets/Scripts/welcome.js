const tutorials = {
  mainPage: {
    text: "WELCOME TO THE INTERACTIVE TUTORIALS! SELECT A TUTORIAL TO BEGIN.",
    choices: [
      { text: "BOBA", next: "boba1_html1", script: "boba.js" },
      { text: "FRAPS", next: "fraps1.1", script: "fraps.js" },
      { text: "SPRIG", next: "sprig1.1", script: "sprig.js" },
      { text: "BLOT", next: "blot1.1", script: "blot.js" },
      { text: "100$ GRANT FOR PCB", next: "circuit1.1", script: "circuit.js" },
    ],
    background: "images/welcome.jpeg",
    sound: "sounds/maintheme.mp3",
  },
};

let currentTutorial = "mainPage";
let audio = new Audio();

function playSound(soundFile) {
  audio.src = soundFile;
  audio.play();
}

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

function updateTutorial(tutorialKey) {
  const tutorial = tutorials[tutorialKey];
  if (!tutorial) {
    console.error(`Tutorial "${tutorialKey}" not found.`);
    return;
  }

  currentTutorial = tutorialKey;
  localStorage.setItem("currentTutorial", tutorialKey);

  // Update background image
  document.body.style.backgroundImage = `url(${tutorial.background || ""})`;

  // Play associated sound
  if (tutorial.sound) playSound(tutorial.sound);

  // Display tutorial text with typing effect
  const tutorialText = document.getElementById("tutorial-text");
  tutorialText.textContent = "";
  let index = 0;
  const typeWriter = setInterval(() => {
    tutorialText.textContent += tutorial.text[index];
    index++;
    if (index === tutorial.text.length) clearInterval(typeWriter);
  }, 50);

  // Update choices
  const choicesContainer = document.getElementById("choices-container");
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

function loadScript(scriptName, callback) {
  const script = document.createElement("script");
  script.src = scriptName;
  script.onload = callback;
  document.body.appendChild(script);
}

window.onload = () => {
  const savedTutorial = localStorage.getItem("currentTutorial") || "mainPage";
  preloadAssets(tutorials);
  updateTutorial(savedTutorial);
};
