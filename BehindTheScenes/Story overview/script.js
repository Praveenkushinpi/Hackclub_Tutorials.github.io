const tutorials = {

  mainPage: {

    text: "WELCOME TO THE HACKCLUB TUTORIALS! SELECT A TUTORIAL TO BEGIN.",

    choices: [

      { text: "BOBA", next: "boba1html1", },

      { text: "FRAPS", next: "frapss1.1", script: "Hackaccino.js" },

      { text: "SPRIG", next: "sprig1.1", script: "sprig.js" },

      { text: "BLOT", next: "blot1.1", script: "blot.js" },

      { text: "100$ GRANT FOR PCB", next: "circuit1.1", script: "circuit.js" },

    ],

    background: "images/welcome.jpeg",

    sound: "sounds/maintheme.mp3",

  },

    boba1html1: {

        text: "is your boba submission is keep rejecting ? so you are at the right place this is very fun revision for you to learn or revise your html",

        choices: [

            { text: "START", next: "boba1html2" },

            { text: "MAIN MENU", next: "mainpage" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/boba1.mp3"

    },

    boba1html2: {

        text: "hello! adventurer are you new in this jungle and you look confused i knoW that you are stuck in the WHERE TO START FROM JUNGLE",

        choices: [

            { text: "YES MASTER!", next: "boba1_html3" },

            { text: "NO IWANT TO GAIN THE KNOWLEDGE OF THE HTML!", next: "boba1_html3" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/boba2.mp3"

    },

    boba1_html3: {

        text: "SO adventurer, let's start our adventure to the master of HTML but we have to go through the THE FOREST OF TAGS, THE CASTLE OF ATTRIBUTES, VALLEYS OF THE ???, THEN THE HORIZONS OF THE CODE WHERE HTML CONNECTS TO ANYTHING",

        choices: [

            { text: "YES, BUT I AM AFRAID", next: "boba1_html4" },

            { text: "FEELING POSITIVE, I WANT TO FINISH MY JOURNEY BY DRINKING A BOBA", next: "boba1_html4" }

        ],


        background: "Assets/images",

        sound: "Assets/Sounds/cabin-sound.mp3"

    },

    boba1_html4: {

        text: "  while passing through the Jungle of tags ,You face the WIZARD OF HEADINGS! He sneers, 'Prepare to be defeated, amatur coder! Let's duel with tags!'",

        choices: [

            { text: "READY MY SPELLS!", next: "boba1_html5" },

            { text: "TRY TO ESCAPE", next: "boba1_html6" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/battle-theme.mp3"

    },

    boba1_html5: {

        text: "The WIZARD casts a spell: '<h7>YOU SHALL FAIL!</h7>'. A weak, unrecognized tag blasts toward you! common fast cast your speel that so easy biggest the number smaller the size of heading",

        choices: [

            { text: "CAST <h8>", next: "boba1_html7" },
            { text: "CAST <h6>", next: "boba1_html8" }
           


        ],

        background: "Assets/image",

        sound: "Assets/Sounds/wizard-spell.mp3"

    },

    boba1_html6: {

        text: "The forest surrounds you with vines, and the wizard pulls you back. 'No escape from learning!' he declares.",

        choices: [ 

            { text: "READY MY SPELLS!", next: "boba1_html5" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/failure.mp3"

    },

    boba1_html7: {

        text: "You cast '<h8>DEFEND!</h8>', but nothing happens! '<h8>' is not a valid tag. The WIZARD laughs as his spell hits you.",

        choices: [

            { text: "TRY AGAIN", next: "boba1_html5" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/fail-sound.mp3"

    },

    boba1_html8: {

        text: "You cast '<h6>STRIKE BACK!</h6>'. The valid tag absorbs the wizard's invalid '<h7>' spell and blasts him with its hierarchy power!",

        choices: [

            { text: "CONTINUE THE BATTLE", next: "boba1_html9" },

            { text: "return to main menu", next: "mainPage"}

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/victory.mp3"

    },

    boba1_html9: {

        text: "The WIZARD snarls: 'You may have bested my <h7> spell, but can you handle THIS?' He prepares to unleash '<h3>DOMINANCE!</h3>'.",

        choices: [

            { text: "CAST <h2>", next: "boba1_html10" },

            { text: "CAST <h4>", next: "boba1_html11" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/wizard-spell.mp3"

    },

    boba1_html10: {

        text: "You cast '<h2>SHIELD!</h2>', but it's too powerful and overrides the wizard's '<h3>'. The power imbalance disruptes the spell, and you take damage!",

        choices: [

            { text: "TRY AGAIN", next: "boba1_html9" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/fail-sound.mp3"

    },

    boba1_html11: {

        text: "You cast '<h4>COUNTERSTRIKE!</h4>', and it perfectly counteracts the wizard's '<h3>'. The WIZARD collapses, defeated! As he VAnishes into a puff of smoke, he leaves behind a glowing spell scroll.",

        choices: [

            { text: "PICK UP THE SCROLL", next: "boba1_html12" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/victory.mp3"

    },
          boba1_html12: {


        text: "The scroll glows as you read it: 'You have obtained the `<p>` SPELL! This tag is used to create paragraphs of text, making your content easier to read and well-structured. Example: `<p> you win the against the first wizard</p>`.'",

        choices: [

            { text: "PRACTICE USING THE `<p>` TAG", next: "boba1_html13" },

            { text: "KEEP EXPLORING", next: "boba2_html1" }

        ],

        background: "Assets/images",

        sound: "Assets//magic-spell.mp3"

    },

    boba1_html13: {

        text: "You sit down and write your first paragraph USIng the `<p>` tag: '<p>The adventure has just begun, and my knowledge is growing!</p>'. The spell scroll glows brighter, signifying your mastery.",

        choices: [

            { text: "KEEP EXPLORING", next: "boba2_html2" },

            { text: "EXPLANATION", next: "boba2_html1" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/success.mp3"

    },

    boba2_html1: {

        text: "welocme to the page",

        choices: [

            { text: "MAIN MENU", next: "mainpage" },

            { text: "LETS GO", next: "boba2_html2" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/success.mp3"

    },


    boba2_html2: {

        text: "You arrive at A peaceful village surrounded by lush greenery. The villagers look worried. The VIllage chief aproaches you and says, 'Adventurer, we need your help to organize important information for the village. Can you assist us?'",

        choices: [

            { text: "YES, I'M READY TO HELP!", next: "boba2_html3" },

            { text: "NO, I MUST CONTINUE MY QUEST", next: "boba3_html1" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/village-theme.mp3"

    },


    boba2_html3: {

        text: "The chief explains: 'We have two tasks for you. First, we need to create an unordered list of chores for the villagers. Second, we need an ordered list to prioreitize the most important tasks.'",

        choices: [

            { text: "HELP WITH THE UNORDERED LIST", next: "boba2_html4" },

            { text: "HELP WITH THE ORDERED LIST", next: "boba2_html5" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/helping-theme.mp3"

    },

    boba2_html4: {

        text: "You gather the villagers and list their cheores using the `<ul>` tag, which create a bulleted list. Example: `<ul><li>Collect firewood</li><li>Feed the animals</li><li>Prepare for the festival</li></ul>`. The villagers cheer as their tasks are now clearly organized!",

        choices: [

            { text: "HELP WITH THE ORDERED LIST", next: "boba2_html5" },

            { text: "CONTINUE YOUR QUEST", next: "boba3_html1" }

        ],
               background: "Assets/images",


        sound: "Assets/Sounds/success.mp3"

    },

    boba2_html5: {

        text: "Next, you PRoritize the tasks using the `<ol>` tag, which creates a numbered list. Example: `<ol><li>Repair the village gate</li><li>Fetch water from the well</li><li>Set up the market stalls</li></ol>`. The villagers thanks for your wisdom!",

        choices: [

            { text: "KEEP HELPING THE VILLAGERS", next: "boba2_html6" },

            { text: "CONTINUE YOUR QUEST", next: "boba3_html1" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/success.mp3"

    },

    boba2_html6: {

        text: "The villagers present you with a gift: a glowing scroll that teaches the true power of the `<li>` tag. They explain: 'The `<li>` tag is used within `<ul>` and `<ol>` to represnt each item in the list. Now, you are a master of lists!'",

        choices: [

            { text: "return to main page", next: "mainpage" },

            { text: "THANK THE VILLAGERS AND CONTINUE", next: "boba2_html7" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/farewell.mp3"

    },

    boba2_html7: {

        text: "After helping the villagers with their lists, the village chief thanks you once again and presents you with a group of pets as a gift. 'These pets will aid you in your journey,' says the chief. 'They each have their own unique personalities, and we'd like you to name them.'",

        choices: [

            { text: "NAME YOUR PETS", next: "boba2_html8" },

            { text: "REFUSE THE PETS AND CONTINUE", next: "boba2_html11" }

        ],

        background: "Assets/images",

        sound: "Assets/Sounds/peaceful-theme.mp3"

    }

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