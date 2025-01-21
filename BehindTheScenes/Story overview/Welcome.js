// start up page //
const tutorial = {
    mainPage: {
            text: "THIS IS A TUTORIAL MADE BY A MEMBER OF A HACKCLUB",
            choices: [
                { text: "BOBA", next: "boba1.1" },
                { text: "FRAPS", next: "fraps1.1" },
                { text: "SPRIG", next: "sprig1.1" },
                { text: "BLOT", next: "blot1.1" },
                { text: "100$ GRANT FOR PCB", next: "circuit1.1" },
               
            ],
            background: "src=images\welcome.jpeg",
            sound: "sounds/maintheme.mp3"
        }
    }
    //start with the main page//
    let currentTutorial = "mainPage";
      
    const storyText = document.getElementById("tutorial-text");
    const choicesContainer = document.getElementById("choices-container");
    const audio = new Audio();

    
    //sound after evry step//



    function playSound(soundFile) {
      audio.src = soundFile;
      audio.play();
    }
    
    function updateTutorial(TutorialKey) {
      const Tutorials = [TutorialKey];
      current = TutorialKey;
    
      // Update background image
      document.body.style.backgroundImage = `url(${Tutorial.background})`;
    
      // Play the associated sound
      if (story.sound) playSound(story.sound);
    
      // Show text with animation
      storyText.textContent = "";
      let index = 0;
      const typeWriter = setInterval(() => {
       TutorialText.textContent += tutorial.text[index];
        index++;
        if (index === tutorial.text.length) clearInterval(typeWriter);
      }, 50);
    
      // Update choices
      choicesContainer.innerHTML = "";
      story.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.className = "choice-button";
        button.onclick = () => updateTutorial(choice.next);
        choicesContainer.appendChild(button);
      });
    }