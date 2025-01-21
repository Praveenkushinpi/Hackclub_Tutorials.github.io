const bobaTutorials = {
boba1_html2: {
    text: "hello! adventurer are you new in this jungle and you look confused i knoW that you are stuck in the WHERE TO START FROM JUNGLE",
    choices: [
        { text: "YES MASTER!", next: "boba1_html3" },
        { text: "NO IWANT TO GAIN THE KNOWLEDGE OF THE HTML!", next: "boba1_html3" }
    ],
    background: "https://cloud-beahblnij-hack-club-bot.vercel.app/0screenshot_2024-12-26_at_9.40.05___pm.png",
    sound: "amaze.mp3"
},
boba1_html3: {
    text: "SO adventurer, let's start our adventure to the master of HTML but we have to go through the THE FOREST OF TAGS, THE CASTLE OF ATTRIBUTES, VALLEYS OF THE ???, THEN THE HORIZONS OF THE CODE WHERE HTML CONNECTS TO ANYTHING",
    choices: [
        { text: "YES, BUT I AM AFRAID", next: "boba1_html4" },
        { text: "FEELING POSITIVE, I WANT TO FINISH MY JOURNEY BY DRINKING A BOBA", next: "boba1_html4" }
    ],
    background: "https://cloud-beahblnij-hack-club-bot.vercel.app/0screenshot_2024-12-26_at_9.40.05___pm.png",
    sound: "cabin-sound.mp3"
},
boba1_html4: {
    text: "You face the WIZARD OF HEADINGS! He sneers, 'Prepare to be defeated, amateur coder! Let's duel with tags!'",
    choices: [
        { text: "READY MY SPELLS!", next: "boba1_html5" },
        { text: "TRY TO ESCAPE", next: "boba1_html6" }
    ],
    background: "https://cloud-xyz/hack-club-bot/battle.png",
    sound: "battle-theme.mp3"
},
boba1_html5: {
    text: "The WIZARD casts a spell: '<h7>YOU SHALL FAIL!</h7>'. A weak, unrecognized tag blasts toward you!",
    choices: [
        { text: "CAST <h8>", next: "boba1_html7" },
        { text: "CAST <h6>", next: "boba1_html8" }
    ],
    background: "https://cloud-xyz/hack-club-bot/wizard-attack.png",
    sound: "wizard-spell.mp3"
},
boba1_html6: {
    text: "The forest surrounds you with vines, and the wizard pulls you back. 'No escape from learning!' he declares.",
    choices: [
        { text: "READY MY SPELLS!", next: "boba1_html5" }
    ],
    background: "https://cloud-xyz/hack-club-bot/forest-trap.png",
    sound: "failure.mp3"
},
boba1_html7: {
    text: "You cast '<h8>DEFEND!</h8>', but nothing happens! '<h8>' is not a valid tag. The WIZARD laughs as his spell hits you.",
    choices: [
        { text: "TRY AGAIN", next: "boba1_html5" }
    ],
    background: "https://cloud-xyz/hack-club-bot/spell-fail.png",
    sound: "fail-sound.mp3"
},
boba1_html8: {
    text: "You cast '<h6>STRIKE BACK!</h6>'. The valid tag absorbs the wizard's invalid '<h7>' spell and blasts him with its hierarchy power!",
    choices: [
        { text: "CONTINUE THE BATTLE", next: "boba1_html9" }
    ],
    background: "https://cloud-xyz/hack-club-bot/wizard-defeated.png",
    sound: "victory.mp3"
},
boba1_html9: {
    text: "The WIZARD snarls: 'You may have bested my <h7> spell, but can you handle THIS?' He prepares to unleash '<h3>DOMINANCE!</h3>'.",
    choices: [
        { text: "CAST <h2>", next: "boba1_html10" },
        { text: "CAST <h4>", next: "boba1_html11" }
    ],
    background: "https://cloud-xyz/hack-club-bot/wizard-powerup.png",
    sound: "wizard-spell.mp3"
},
boba1_html10: {
    text: "You cast '<h2>SHIELD!</h2>', but it's too powerful and overrides the wizard's '<h3>'. The power imbalance disrupts the spell, and you take damage!",
    choices: [
        { text: "TRY AGAIN", next: "boba1_html9" }
    ],
    background: "https://cloud-xyz/hack-club-bot/spell-fail.png",
    sound: "fail-sound.mp3"
},
boba1_html11: {
    text: "You cast '<h4>COUNTERSTRIKE!</h4>', and it perfectly counteracts the wizard's '<h3>'. The WIZARD collapses, defeated! As he vanishes into a puff of smoke, he leaves behind a glowing spell scroll.",
    choices: [
        { text: "PICK UP THE SCROLL", next: "boba1_html12" }
    ],
    background: "https://cloud-xyz/hack-club-bot/wizard-defeated.png",
    sound: "victory.mp3"
},
boba1_html12: {
    text: "The scroll glows as you read it: 'You have obtained the `<p>` SPELL! This tag is used to create paragraphs of text, making your content easier to read and well-structured. Example: `<p> you win the against the first wizard</p>`.'",
    choices: [
        { text: "PRACTICE USING THE `<p>` TAG", next: "boba1_html13" },
        { text: "KEEP EXPLORING", next: "boba2_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/spell-scroll.png",
    sound: "magic-spell.mp3"
},
boba1_html13: {
    text: "You sit down and write your first paragraph using the `<p>` tag: '<p>The adventure has just begun, and my knowledge is growing!</p>'. The spell scroll glows brighter, signifying your mastery.",
    choices: [
        { text: "KEEP EXPLORING", next: "boba2_html1" },
        { text: "LETS GO", next: "boba2_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/spell-mastered.png",
    sound: "success.mp3"
},
boba2_html2: {
    text: "You arrive at a peaceful village surrounded by lush greenery. The villagers look worried. The village chief approaches you and says, 'Adventurer, we need your help to organize important information for the village. Can you assist us?'",
    choices: [
        { text: "YES, I'M READY TO HELP!", next: "boba2_html3" },
        { text: "NO, I MUST CONTINUE MY QUEST", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/village.png",
    sound: "village-theme.mp3"
},
boba2_html3: {
    text: "The chief explains: 'We have two tasks for you. First, we need to create an unordered list of chores for the villagers. Second, we need an ordered list to prioritize the most important tasks.'",
    choices: [
        { text: "HELP WITH THE UNORDERED LIST", next: "boba2_html4" },
        { text: "HELP WITH THE ORDERED LIST", next: "boba2_html5" }
    ],
    background: "https://cloud-xyz/hack-club-bot/village-chief.png",
    sound: "helping-theme.mp3"
},
boba2_html4: {
    text: "You gather the villagers and list their chores using the `<ul>` tag, which creates a bulleted list. Example: `<ul><li>Collect firewood</li><li>Feed the animals</li><li>Prepare for the festival</li></ul>`. The villagers cheer as their tasks are now clearly organized!",
    choices: [
        { text: "HELP WITH THE ORDERED LIST", next: "boba2_html5" },
        { text: "CONTINUE YOUR QUEST", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/unordered-list.png",
    sound: "success.mp3"
},
boba2_html5: {
    text: "Next, you prioritize the tasks using the `<ol>` tag, which creates a numbered list. Example: `<ol><li>Repair the village gate</li><li>Fetch water from the well</li><li>Set up the market stalls</li></ol>`. The villagers thank you for your wisdom!",
    choices: [
        { text: "KEEP HELPING THE VILLAGERS", next: "boba2_html6" },
        { text: "CONTINUE YOUR QUEST", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/ordered-list.png",
    sound: "success.mp3"
},
boba2_html6: {
    text: "The villagers present you with a gift: a glowing scroll that teaches the true power of the `<li>` tag. They explain: 'The `<li>` tag is used within `<ul>` and `<ol>` to represent each item in the list. Now, you are a master of lists!'",
    choices: [
        { text: "THANK THE VILLAGERS AND CONTINUE", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/village-thankful.png",
    sound: "farewell.mp3"
},
boba2_html7: {
    text: "After helping the villagers with their lists, the village chief thanks you once again and presents you with a group of pets as a gift. 'These pets will aid you in your journey,' says the chief. 'They each have their own unique personalities, and we'd like you to name them.'",
    choices: [
        { text: "NAME YOUR PETS", next: "boba2_html8" },
        { text: "REFUSE THE PETS AND CONTINUE", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/pets-gifted.png",
    sound: "peaceful-theme.mp3"
},
boba2_html8: {
    text: "You decide to name the pets gifted by the villagers and organize them using the `<div>` tag and unique `class` IDs for each one. You place each pet in their own 'div' container, creating separate sections for each.",
    choices: [
        { text: "GIVE THE PETS NAMES", next: "boba2_html9" },
        { text: "CONTINUE YOUR JOURNEY", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/naming-pets.png",
    sound: "joyful-theme.mp3"
},
boba2_html9: {
    text: "You create a page showcasing your new pets using the `<div>` tag. Each pet is wrapped in a `div` container with a specific `class` for their name. Example: `<div class='pet' id='fluffy'><h2>Fluffy</h2><p>A playful dog.</p></div>` for one pet, and similarly for others. The villagers are delighted by how well you've organized the pets!",
    choices: [
        { text: "SHOW YOUR WORK TO THE VILLAGERS", next: "boba2_html10" },
        { text: "CONTINUE YOUR QUEST", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/div-tag-pets.png",
    sound: "achievement-theme.mp3"
},
boba2_html10: {
    text: "The villagers praise your work, and the village chief tells you: 'You've used the `<div>` tag wisely to organize or name your pets. The `class` and `id` attributes allow you to style and identify each one easily.' The villagers give you another gift—a magical pen to assist you in your future web adventures!",
    choices: [
        { text: "THANK THE VILLAGERS AND CONTINUE", next: "boba3_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/villagers-thankful.png",
    sound: "farewell-theme.mp3"
},
boba3_html1: {
    text: "Armed with newfound knowledge of the `<div>` tag, `class` IDs, and the `li` tag, you continue your journey. Ahead lies the VALLEY OF ???, where new challenges await. Your coding skills will guide you through the trials ahead!",
    choices: [
        { text: "CONTINUE TO THE VALLEY", next: "boba3_html2" }
    ],
    background: "https://cloud-xyz/hack-club-bot/valley.png",
    sound: "adventure-theme.mp3"
},
boba3_html2: {
    text: "You venture deeper into the Valley of ??? when suddenly, a fierce monster appears! It's a massive creature, roaring and charging at you. The villagers' gift, the magical pen, glows brightly in your hand as you prepare to defend yourself. But before the battle begins, you notice the monster has a peculiar weakness. The monster's name is written in the air, and you must emphasize its weak spots using the `<span>` tag.",
    choices: [
        { text: "USE THE SPAN TAG TO EMPHASIZE THE MONSTER'S WEAKNESS", next: "boba3_html3" },
        { text: "RUN AWAY FROM THE MONSTER", next: "boba3_html4" }
    ],
    background: "https://cloud-xyz/hack-club-bot/monster-appears.png",
    sound: "battle-theme.mp3"
},
boba3_html3: {
    text: "You decide to face the monster head-on and use the `<span>` tag to highlight its weak spots. You quickly add `<span style='color: red;'>Weak Point</span>` around the monster's most vulnerable areas. As you do, the monster stumbles and roars in pain, its weakness now clearly visible to all! The villagers cheer for your bravery, and the monster is defeated!",
    choices: [
        { text: "THANK THE VILLAGERS AND CONTINUE", next: "boba3_html5" },
        { text: "EXPLORE THE VALLEY FURTHER", next: "boba3_html6" }
    ],
    background: "https://cloud-xyz/hack-club-bot/monster-defeated.png",
    sound: "victory-theme.mp3"
},
boba3_html4: {
    text: "You decide to run, but the monster quickly catches up to you! It growls as it corners you, forcing you to turn and fight. This time, you must act faster, remembering the lesson of the `<span>` tag to highlight the monster's weaknesses. Will you try again?",
    choices: [
        { text: "USE THE SPAN TAG TO EMPHASIZE THE MONSTER'S WEAKNESS", next: "boba3_html3" },
        { text: "RUN FURTHER INTO THE VALLEY", next: "boba3_html6" }
    ],
    background: "https://cloud-xyz/hack-club-bot/monster-attacks.png",
    sound: "battle-theme.mp3"
},
boba4_html1: {
    text: "You arrive at a dark forest. The trees are thick, and the air is heavy. Suddenly, a loud roar echoes through the forest. A monstrous creature emerges from the shadows. The beast seems angry, but it's not just its appearance that is frightening; it speaks in a deep, booming voice: 'To defeat me, you must show strength and emphasize your words!'.",
    choices: [
        { text: "ACCEPT THE CHALLENGE AND SHOW STRENGTH", next: "boba4_html2" },
        { text: "REFUSE AND FLEE THE FOREST", next: "boba4_html3" }
    ],
    background: "https://cloud-xyz/hack-club-bot/forest.png",
    sound: "mystical-roar.mp3"
},
boba4_html2: {
    text: "The creature explains: 'To defeat me, use the `<strong>` tag to show your strength and the `<em>` tag to emphasize your words. These are your weapons in battle!' With determination, you prepare to face the monster. 'I will show my power! Let’s begin!'",
    choices: [
        { text: "USE THE `<strong>` TAG TO SHOW STRENGTH", next: "boba4_html4" },
        { text: "USE THE `<em>` TAG TO EMPHASIZE YOUR WORDS", next: "boba4_html5" }
    ],
    background: "https://cloud-xyz/hack-club-bot/monster.png",
    sound: "battle-theme.mp3"
},
boba4_html4: {
    text: "You raise your sword and yell, '<strong>I AM STRONG!</strong>' The `<strong>` tag empowers your voice, making your declaration of strength clear and forceful. The monster steps back, surprised by the power in your words. The creature nods, 'You have shown true strength!'",
    choices: [
        { text: "USE THE `<em>` TAG TO EMPHASIZE YOUR NEXT MOVE", next: "boba4_html5" },
        { text: "CONTINUE THE FIGHT", next: "boba4_html6" }
    ],
    background: "https://cloud-xyz/hack-club-bot/battle-strong.png",
    sound: "strength-theme.mp3"
},
boba4_html5: {
    text: "You then speak with great passion, '<em>Fear me, for I will defeat you!</em>' The `<em>` tag emphasizes the emotion in your voice, making your words seem even more intense. The monster recoils, sensing the force of your emotional power. 'You are indeed powerful!'",
    choices: [
        { text: "COMBINE BOTH TAGS TO DEFEAT THE MONSTER", next: "boba4_html6" },
        { text: "CONTINUE THE FIGHT WITH STRENGTH ALONE", next: "boba4_html7" }
    ],
    background: "https://cloud-xyz/hack-club-bot/battle-emphasized.png",
    sound: "emphasis-theme.mp3"
},
boba4_html6: {
    text: "You combine both the `<strong>` and `<em>` tags to deliver a final blow: '<strong><em>YOU WILL FALL BEFORE MY STRENGTH AND COURAGE!</em></strong>' The monster is overwhelmed by the power and intensity of your words. With one last roar, it collapses to the ground, defeated. You stand victorious!",
    choices: [
        { text: "VICTORY! CONTINUE YOUR JOURNEY", next: "boba4_html8" }
    ],
    background: "https://cloud-xyz/hack-club-bot/monster-defeated.png",
    sound: "victory-theme.mp3"
},
boba4_html7: {
    text: "You continue to fight with strength alone, using the `<strong>` tag for emphasis. The monster is powerful, but your unwavering strength gives you an edge. With one final strike, you defeat the monster. You have proven your might!",
    choices: [
        { text: "VICTORY! CONTINUE YOUR JOURNEY", next: "boba4_html8" }
    ],
    background: "https://cloud-xyz/hack-club-bot/battle-victory.png",
    sound: "victory-theme.mp3"
},
boba4_html8: {
    text: "With the monster defeated, you continue your journey through the forest. The knowledge of the `<strong>` and `<em>` tags has proven valuable. You've learned how to show strength and emphasize emotion, making your words more powerful. The path ahead seems clearer now, and new challenges await.",
    choices: [
        { text: "MOVE FORWARD INTO THE UNKNOWN", next: "boba5_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/forest-cleared.png",
    sound: "adventure-theme.mp3"
},
boba4_html3: {
    text: "You decide to flee the forest, but the monster pursues you relentlessly. It seems there’s no escape. Realizing you must face it, you turn around and prepare for battle.",
    choices: [
        { text: "ACCEPT THE CHALLENGE AND SHOW STRENGTH", next: "boba4_html2" }
    ],
    background: "https://cloud-xyz/hack-club-bot/monster-chase.png",
    sound: "chase-theme.mp3"
},
boba5_html1: {
    text: "You arrive at a lively town square where the villagers are busy preparing for the annual festival. The village chief spots you and says, 'Adventurer, we need your help! We want to create a registration form for the festival. Can you assist us?'",
    choices: [
        { text: "YES, I CAN HELP WITH THE FORM!", next: "boba5_html2" },
        { text: "NO, I MUST CONTINUE MY JOURNEY", next: "boba6_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/town-square.png",
    sound: "festival-theme.mp3"
},
boba5_html2: {
    text: "The chief explains: 'We need a form to collect names and special requests from the villagers. Start by creating a <strong>form</strong> element.' You pull out your magical parchment and begin drawing the HTML structure.",
    choices: [
        { text: "CREATE THE `<form>` ELEMENT", next: "boba5_html3" },
        { text: "ASK FOR MORE DETAILS", next: "boba5_html4" }
    ],
    background: "https://cloud-xyz/hack-club-bot/village-chief.png",
    sound: "helping-theme.mp3"
},
boba5_html3: {
    text: "You add the `<form>` tag to the parchment. Inside the form, you need to collect a name. 'Let's create an `<input>` field for the name,' you decide, typing out: `<input type='text' name='villagerName'>`.",
    choices: [
        { text: "ADD A BUTTON TO SUBMIT THE FORM", next: "boba5_html5" },
        { text: "CREATE AN INPUT FIELD FOR SPECIAL REQUESTS", next: "boba5_html6" }
    ],
    background: "https://cloud-xyz/hack-club-bot/form.png",
    sound: "writing-theme.mp3"
},
boba5_html4: {
    text: "The chief explains, 'We need to gather the villager's name and any special requests they have for the festival. Let's start with the name. You can use the `<input>` tag for this.'",
    choices: [
        { text: "CREATE THE `<input>` FIELD FOR THE NAME", next: "boba5_html3" },
        { text: "ASK ABOUT THE SPECIAL REQUESTS FIELD", next: "boba5_html6" }
    ],
    background: "https://cloud-xyz/hack-club-bot/explaining-form.png",
    sound: "explaining-theme.mp3"
},
boba5_html5: {
    text: "You add the `<button>` element beneath the name field to submit the form. You write: `<button type='submit'>Submit</button>`. The chief is impressed, 'This will allow villagers to sign up for the festiva",
    choices: [
        { text: "CREATE A TABLE TO DISPLAY SIGNED-UP VILLAGERS", next: "boba5_html7" },
        { text: "ASK IF THERE'S ANYTHING ELSE TO ADD TO THE FORM", next: "boba5_html6" }
    ],
    background: "https://cloud-xyz/hack-club-bot/button.png",
    sound: "button-theme.mp3"
},
boba5_html6: {
    text: "Next, you create a field for special requests. You use `<input type='text' name='specialRequest'>`. You emphasize the importance of this section with an <em>italicized</em> label: 'Special Requests:'. The chief smiles, 'That looks perfect!'",
    choices: [
        { text: "CREATE A TABLE TO DISPLAY SIGNED-UP VILLAGERS", next: "boba5_html7" },
        { text: "CONTINUE WITH THE FORM", next: "boba5_html5" }
    ],
    background: "https://cloud-xyz/hack-club-bot/inputs.png",
    sound: "input-theme.mp3"
},
boba5_html7: {
    text: "Now that the form is complete, the chief says, 'Let's display the list of villagers who have registered! We'll use a `<table>` to show the names and special requests.' You create a table: `<table><tr><th>Name</th><th>Special Request</th></tr>`.",
    choices: [
        { text: "ADD A ROW TO DISPLAY A VILLAGER'S INFO", next: "boba5_html8" },
        { text: "ASK IF THE TABLE LOOKS GOOD", next: "boba5_html9" }
    ],
    background: "https://cloud-xyz/hack-club-bot/table.png",
    sound: "table-theme.mp3"
},
boba5_html8: {
    text: "You add a row for the first villager: `<tr><td>John Doe</td><td>Needs extra chairs</td></tr>`. The chief is pleased with the result, 'Perfect! Now everyone can see the list of attendees!'",
    choices: [
        { text: "FINISH AND PRESENT THE FINAL FORM", next: "boba5_html10" },
        { text: "ADD MORE VILLAGERS TO THE TABLE", next: "boba5_html7" }
    ],
    background: "https://cloud-xyz/hack-club-bot/row-table.png",
    sound: "adding-row-theme.mp3"
},
boba5_html9: {
    text: "The chief nods and says, 'Now, let's test the form. We should be able to see the villagers' names and special requests in the table.' You finalize the design and make sure everything works perfectly.",
    choices: [
        { text: "PRESENT THE FINAL FORM AND TABLE", next: "boba5_html10" }
    ],
    background: "https://cloud-xyz/hack-club-bot/final-form.png",
    sound: "completion-theme.mp3"
},
boba5_html10: {
    text: "The chief claps his hands in approval. 'Thanks to your help, the festival registrations are all set! Now we can keep track of everyone's details using the form and table. You've truly mastered the art of forms and tables!'",
    choices: [
        { text: "CONTINUE ON YOUR JOURNEY", next: "boba6_html1" }
    ],
    background: "https://cloud-xyz/hack-club-bot/festival-success.png",
    sound: "success-theme.mp3"
},
boba6_html1: {
    text: "With the festival preparations complete, you continue your journey. New challenges await in the distant mountains, but your knowledge of HTML tags will guide you through any obstacles!",
    choices: [
        { text: "Venture forth into the unknown!", next: "boba6_html2" }
    ],
    background: "https://cloud-xyz/hack-club-bot/mountains.png",
    sound: "adventure-theme.mp3"
},
boba6.html2: {
    text: "You begin your climb up the towering Mountain of Code. The path is steep, and the rocks are slippery, but you feel the strength of your knowledge pushing you forward. With each step, you recall the lessons learned about the <header> and <footer> tags. Your determination grows as you move closer to the summit.",
    choices: [
      { text: "Climb further up the mountain!", next: "boba6.html2" },
      { text: "Rest for a moment and reflect on your journey.", next: "boba6.reflect" }
    ],
    background: "https://example.com/mountain-climb.jpg", // Image of mountain climb
    sound: "mountain-climb.mp3" // Sound effect of climbing a mountain
  },
  boba6.html3: {
    text: "After much effort, you finally reach the summit of the Mountain of Code. At the top, you spot a wise master, sitting quietly by the edge, gazing out at the horizon. Exhausted but inspired, you approach the master and ask, 'Master, teach me the final secrets of HTML!'",
    choices: [
      { text: "Master, how can I journey further?", next: "boba6.html3" },
      { text: "I understand now. I will experiment with JavaScript!", next: "boba6.experiment" }
    ],
    background: "https://example.com/mountain-summit.jpg", // Image of the mountain summit
    sound: "summit-theme.mp3" // Sound effect of reaching the summit
  },
  boba6.html4: {
    text: "The master looks at you with a gentle smile and speaks: 'You seek to learn the destination, but it is not the end that matters—it is the journey. HTML, like the path you walked, is just the beginning. At this horizon, you'll see how HTML connects to the world of CSS, JavaScript, Python, and more. Each language complements the other, like instruments in an orchestra, creating a symphony of possibilities. Continue your journey, and you’ll see how they work together, each one unlocking new potential, just like the next step in your adventure.'",
    choices: [
      { text: "Show me how these languages work together!", next: "boba6.html4" },
      { text: "I’m ready to explore more JavaScript!", next: "boba6.experiment" }
    ],
    background: "https://example.com/horizon-view.jpg", // Image of the horizon
    sound: "wise-teacher.mp3" // Sound of the master speaking
  },
  boba6.html5: {
    text: "The master smiles warmly, 'Let me show you the magic of JavaScript, where interactivity begins.' He taps a glowing stone, and with a few lines of code, the stone begins to change color in response to clicks. You’re amazed as the stone pulses with vibrant colors.",
    choices: [
      { text: "I want to try this magic myself!", next: "boba6.experiment" },
      { text: "Tell me more about how HTML and CSS work with JavaScript.", next: "boba6.html5" }
    ],
    background: "https://example.com/magical-stone.jpg", // Image of a glowing stone
    sound: "magic-theme.mp3" // Sound effect of magic
  },
  boba6.html6: {
    text: "You try the magic yourself! Here's your chance to experiment with a button that changes the background color of the page using JavaScript.",
    code: `
      <button onclick="changeColor()">Click me to change color</button>
      <script>
        function changeColor() {
          document.body.style.backgroundColor = 'blue';
        }
      </script>
    `,
    choices: [
      { text: "Experiment with different colors.", next: "boba6.experiment_more" },
      { text: "Ask the master about the connection between HTML, CSS, and JavaScript.", next: "boba6.html5" }
    ],
    background: "https://example.com/code-experiment.jpg", // Image of a code snippet
    sound: "experiment-theme.mp3" // Sound effect for experimentation
  },
  boba6.reflect: {
    text: "You take a moment to reflect on your journey. The climb up the Mountain of Code was difficult, but it brought you closer to the wisdom of the master. With each lesson you’ve learned, your confidence grows. You now know that HTML, CSS, and JavaScript are the building blocks of the web, and there’s so much more to explore.",
    choices: [
      { text: "Climb further up the mountain!", next: "boba6.html2" },
      { text: "I’m ready to learn how these languages work together.", next: "boba6.html3" }
    ],
    background: "https://example.com/mountain-reflection.jpg", // Image of reflecting on the mountain
    sound: "reflective-theme.mp3" // Sound effect for reflecting
  },
}