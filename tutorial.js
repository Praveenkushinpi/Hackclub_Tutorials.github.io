const tutorials = {
  mainPage: {
    text: "WELCOME TO THE HACKCLUB TUTORIALS! SELECT A TUTORIAL TO BEGIN.",
    choices: [
      { text: "BOBA", next: "boba1html1", script: "boba.js" },
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
            { text: "return to main menu", next: "mainmenu"}
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
    },
    boba2_html8: {
        text: "You decide to name the pets gifted by the villagers and organize them using the `<div>` tag and unique `class` IDs for each one. You place each pet in their own 'div' container, creating separate sections for each.",
        choices: [
            { text: "name the pets ,james,", next: "boba2_html9" }, 
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/joyful-theme.mp3"
    },
    boba2_html9: {
        text: "You create a page showcasing your new pets using the `<div>` tag. Each pet is wrapped in a `div` container with a specific `class` for their name. Example: `<div class='pet' id='fluffy'><h2>Fluffy</h2><p>A playful dog.</p></div>` for one pet, and similarly for others. The villagers are delighted by how well you've organized the pets!",
        choices: [
            { text: "SHOW YOUR WORK TO THE VILLAGERS", next: "boba2_html10" },
            { text: "MAIN MENU", next: "mainpage" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/achievement-theme.mp3"
    },
    boba2_html10: {
        text: "The villagers praise your work, and the village chief tells you: 'You've used the `<div>` tag wisely to organize or name your pets. The `class` and `id` attributes allow you to style and identify each one easily.' The villagers give you another gift—a magical pen to assist you in your future web adventures!",
        choices: [
            { text: "THANK THE VILLAGERS AND CONTINUE", next: "boba3_html1" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/farewell-theme.mp3"
    },
    boba2_html11: {
        text: "pets are to sad and this is very difficult to call them and keep care of them",
        choices: [
            { text: "name the pets", next: "boba2_html8" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/farewell-theme.mp3"
    },
    boba3_html1: {
        text: "Armed with newfound knowledge of the `<div>` tag, `class` IDs, and the `li` tag, you continue your journey. Ahead lies the VALLEY OF ???, where new challenges await. Your coding skills will guide you through the trials ahead!",
        choices: [
            { text: "CONTINUE TO THE VALLEY", next: "boba3_html2" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/adventure-theme.mp3"
    },
    boba3_html2: {
        text: "You venture deeper into the Valley of ??? when suddenly, a fierce mo vnster apppears! It's a massive creature, roaring and charging at you. The villagers' gift, the magical pen, glows brightly in your hand as you prepare to defend yourself. But before the battle begins, you notice the monster has a peculiar weakness. The monster's name is written in the air, and you must emphasize its weak spots using the `<span>` tag.",
        choices: [
            { text: "USE THE SPAN TAG TO EMPHASIZE THE MONSTER'S WEAKNESS", next: "boba3_html3" },
            { text: "RUN AWAY FROM THE MONSTER", next: "boba3_html4" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/battle-theme.mp3"
    },
    boba3_html3: {
        text: "You decide to face the monster head-on and use the `<span>` tag to highlight its weak spots. You quickly add `<span style='color: red;'>Weak Point</span>` around the monster's most vulnerable areas. As you do, the monster stumbles and roars in pain, its weakness now clearly visible to all! The villagers cheer for your bravery, and the monster is defeated!",
        choices: [
            { text: "THANK THE VILLAGERS AND CONTINUE", next: "boba3_html5" },
            { text: "EXPLORE THE VALLEY FURTHER", next: "boba3_html6" }
        ],
        background: "Assets/images",
        sound: "Assets/sound/victory-theme.mp3"
    },
    boba3_html4: {
        text: "You decide to run, but the monster is very angry at you! It growls as it corners you, forcing you to turn and fight. This time, you must act faster, remembering the lesson of the `<span>` tag to highlight the monster's weaknesses. Will you try again?",
        choices: [
            { text: "USE THE SPAN TAG TO EMPHASIZE THE MONSTER'S WEAKNESS", next: "boba3_html3" },
            { text: "RUN FURTHER INTO THE VALLEY", next: "boba3_html6" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/battle-theme.mp3"
    },
boba3_html5: {
    text: "The villagers surround you with cheers and gratittude for defeating the monster. They reveal that the Valley of Knowledge has more treasures for those brave enough to explore. They hand you an ancient scroll containing the secrets of the `<span>` tag, including how to combine it with CSS for even greater power.",
    choices: [
        { text: "READ THE SCROLL TO LEARN ADVANCED STYLING", next: "boba3_html7" },
        { text: "THANK THE VILLAGERS AND MOVE ON", next: "boba3_html6" }
    ],
    background: "Assets/images",
    sound: "Assets/Sounds/cheering.mp3"
},
boba3_html6: {
    text: "You decide to explore further into the Valley of Knowledge. As you VEnture deeper, you find a shimmering pool of wisdom. It whispers secrets of HTML and CSS, promising unparalleled power to those who master its depths. But first, you must complete a challenge: creating a well-structured webpage with `<div>`, `<span>`, and proper styling.",
    choices: [
        { text: "ACCEPT THE CHALLENGE AND MASTER YOUR SKILLS", next: "boba3_html7" },
        { text: "LEAVE THE POOL AND CONTINUE YOUR JOURNEY", next: "boba3_html8" }
    ],
    background: "Assets/images",
    sound: "Assets/Sounds/mystical-theme.mp3"
},
boba3_html7: {
    text: "The scroll in hand and the pool's challenge accepted, you craft an exquisite webpage. By combining `<div>` containers, `<span>` tags, and inline styles, you create a masterpiece. The pool glowws brightly, acknowledging your triumph. You feel your coding abilities surging as you master the basics of styling and structure!",
    choices: [
        { text: "CONTINUE TO THE NEXT CHAPTER", next: "boba4_html1" }
    ],
    background: "Assets/images",
    sound: "Assets/Sounds/level-up.mp3"
},
boba3_html8: {
    text: "You decide not to take on the challenge, but you carry the knowledge you've gained so far. The journey ahead remains mysterious, filled with promises of greater challenges and discoveries. You leave the Valley of Knowledge, your skills sharper than ever.",
    choices: [
        { text: "CONTINUE TO THE NEXT CHAPTER", next: "boba4_html1" }
    ],
    background: "Assets/images",
    sound: "Assets/Sounds/adventure-theme.mp3"
},
    boba4_html1: {
        text: "You arrive at a dark forest. The trees are thick, and the air is heawvy. Suddenly, a very loud roar echoes through Behind you. A monstrous creature suddenly Rushes! The beast seems angry, but it's not just its apppearance that is frightening; it speaks in a deep, booming voice: 'To defeat me, you must show strength and emphasize your words!'.",
        choices: [
            { text: "ACCEPT THE CHALLENGE AGAIN AND SHOW STRENGTH", next: "boba4_html2" },
            { text: "REFUSE AND FLEE THE FOREST", next: "boba4_html3" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/mystical-roar.mp3"
    },
    boba4_html2: {
        text: "The creature explains: 'To defeat me, use the `<strong>` tag to show your strength and the `<em>` tag to emphasize your words. These are your weapons in battle!' With determination, you prepare to face the monster. 'I will show my power! Let’s begin!'",
        choices: [
            { text: "USE THE `<strong>` TAG TO SHOW STRENGTH", next: "boba4_html4" },
            { text: "USE THE `<em>` TAG TO EMPHASIZE YOUR WORDS", next: "boba4_html5" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/battle-theme.mp3"
    },
    boba4_html4: {
        text: "You raise your sword and yell, '<strong>I AM STRONG!</strong>' The `<strong>` tag empowers your voice, making your DECLaration of strength clear and forceful. The monster steps back, surprised by the power in your words. The creature nods, 'You have shown true strength!'",
        choices: [
            { text: "USE THE `<em>` TAG TO EMPHASIZE YOUR NEXT MOVE", next: "boba4_html5" },
            { text: "CONTINUE THE FIGHT", next: "boba4_html6" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/strength-theme.mp3"
    },
    boba4_html5: {
        text: "You then speak with great passion, '<em>Fear me, for I will defeat you!</em>' The `<em>` tag emphasizzes the emotion in your Voice! making your words seem even more FOrced. The monster recoils, sensing the force of your emotional power. 'You are indeed powerful!'",
        choices: [
            { text: "COMBINE BOTH TAGS TO DEFEAT THE MONSTER", next: "boba4_html6" },
            { text: "CONTINUE THE FIGHT WITH STRENGTH ALONE", next: "boba4_html7" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/emphasis-theme.mp3"
    },
    boba4_html6: {
        text: "You combine both the `<strong>` and `<em>` tags to deliver a final blow: '<strong><em>YOU WILL FALL BEFORE MY STRENGTH AND COURAGE!</em></strong>' The monster is cloge by the power and Force of your words. With one last roar, it collapses to the ground, defeated. You stand victorious!",
        choices: [
            { text: "VICTORY! CONTINUE YOUR JOURNEY", next: "boba4_html8" },
            { text: "forgive him", next: "boba4_html9" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/victory-theme.mp3"
    },
    boba4_html7: {
        text: "You continue to fight with strength alone, using the `<strong>` tag for emphasis. The monster is powerful, but your firm strength gives you an edge. With one final strike, you beat the monster!,and the monster ended up as a queen  . You have show your might!",
        choices: [
            { text: "VICTORY! CONTINUE YOUR JOURNEY", next: "boba4_html8" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/victory-theme.mp3"
    },
    boba4_html8: {
        text: "With the monster defeated, you continue your journey through the forest. The knowledge of the `<strong>` and `<em>` tags has proven valuable. You've learned how to show strength and EMPhasize emotion, making your words more powerful. The path ahead seems clearer now, and new challenges await.",
        choices: [
            { text: "MOVE FORWARD INTO THE UNKNOWN", next: "boba5_html1" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/adventure-theme.mp3"
    },
    boba4_html9: {
        text: "you think why the monster told you how to deffeat him but monster told you that she is in curse of a wizard whom you defeated so she is waiting for you to broke her  curse ",
        choices: [
            { text: "help her ", next: "boba4_html6" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/chase-theme.mp3"
    },
    boba5_html1: {
        text: "You arrive at a lively town square where the villagers are busy preparing for the annual festival. The village chief spots you and says, 'Adventurer, we need your help! We want to create a regiistration form for the festival. Can you assist us?'",
        choices: [
            { text: "YES, I CAN HELP WITH THE FORM!", next: "boba5_html2" },//
            { text: "NO, I MUST CONTINUE MY JOURNEY", next: "boba5_html11" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/festival-theme.mp3"
    },
    boba5_html2: {
        text: "The chief explains: 'We need a form to collect names and special requests from the villagers. Start by creating a <strong>form</strong> elements.' You pull out your magical PARCHhment and begin Drawing the HTML structure.",
        choices: [
            { text: "CREATE THE `<form>` ELEMENT", next: "boba5_html3" },
            { text: "ASK FOR MORE DETAILS", next: "boba5_html4" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/helping-theme.mp3"
    },
    boba5_html3: {
        text: "You add the `<form>` tag to the paarchment. Inside the form, you need to collect a name. 'Let's create an `<input>` field for the name,' you decide, typing out: `<input type='text' name='villagerName'>`.",
        choices: [
            { text: "ADD A BUTTON TO SUBMIT THE FORM", next: "boba5_html5" },
            { text: "CREATE AN INPUT FIELD FOR SPECIAL REQUESTS", next: "boba5_html6" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/writing-theme.mp3"
    },
    boba5_html4: {
        text: "The chief explains, 'We need to gather the villager's name and any spikecial requests they have for the festival. Let's start with the name. You can use the `<input>` tag for this.'",
        choices: [
            { text: "CREATE THE `<input>` FIELD FOR THE NAME", next: "boba5_html3" },
            { text: "ASK ABOUT THE SPECIAL REQUESTS FIELD", next: "boba5_html6" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/explaining-theme.mp3"
    },
    boba5_html5: {
        text: "You add the `<button>` element Below the name field to submit the form. You write: `<button type='submit'>Submit</button>`. The chief is impressed, 'This will allow Villagers to sign up for the festiva",
        choices: [
            { text: "CREATE A TABLE TO DISPLAY SIGNED-UP VILLAGERS", next: "boba5_html7" },
            { text: "ASK IF THERE'S ANYTHING ELSE TO ADD TO THE FORM", next: "boba5_html6" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/button-theme.mp3"
    },
    boba5_html6: {
        text: "Next, you create a field for special requests. You use `<input type='text' name='specialRequest'>`. You emphasize the ortance of this section with an <em>emphasize</em> label: 'Special Requests:'. The chief smiles, 'That looks perfect!'",
        choices: [
            { text: "CREATE A TABLE TO DISPLAY SIGNED-UP VILLAGERS", next: "boba5_html7" },
            { text: "CONTINUE WITH THE FORM", next: "boba5_html5" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/input-theme.mp3"
    },
    boba5_html7: {
        text: "Now that the form is complete, the chief says, 'Let's ddisplay the list of villagers who have registered! We'll use a `<table>` to show the names and special requests.' You create a table: `<table><tr><th>Name</th><th>Special Request</th></tr>`.",
        choices: [
            { text: "ADD A ROW TO DISPLAY A VILLAGER'S INFO", next: "boba5_html8" },
            { text: "ASK IF THE TABLE LOOKS GOOD", next: "boba5_html9" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/table-theme.mp3"
    },
    boba5_html8: {
        text: "You add a row for the first villager: `<tr><td>John Doe</td><td>Needs extra chairs</td></tr>`. The chief is pleased with the result, 'Perfect! Now everyone can see the list of attendees!'",
        choices: [
            { text: "FINISH AND PRESENT THE FINAL FORM", next: "boba5_html10" },
            { text: "ADD MORE VILLAGERS TO THE TABLE", next: "boba5_html7" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/adding-row-theme.mp3"
    },
    boba5_html9: {
        text: "The chief nods and says, 'Now, let's test the form. We should be able to see the villagers' names and special requests in the table.' You finalize the design and make sure evecrything works perfectly.",
        choices: [
            { text: "PRESENT THE FINAL FORM AND TABLE", next: "boba5_html10" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/completion-theme.mp3"
    },
    boba5_html10: {
        text: "The chief claps his hands in approval. 'Thanks to your help, the festival registrations are all set! Now we can keep track of everyone's details using the form and table. You've truly mastered the art of forms and tables!'",
        choices: [
            { text: "CONTINUE ON YOUR JOURNEY", next: "boba6_html1" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/success-theme.mp3"
    },
    boba5_html11: {
        text: "town's elders tell about the story of a great warrior who will go at the journey of infinite learning and the town's kids and mens are requesting you to stay        ",
        choices: [
            { text: "ACCEPT THE REQUEST", next: "boba5_html2" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/chase-theme.mp3"
    },
    boba6_html1: {
        text: "With the festival preparations complete, you continue your journey. New challenges await in the distant mountains, but your knowledge of HTML tags will guide you through any obstacles!",
        choices: [
            { text: "Venture forth into the unknown!", next: "boba6_html2" }
        ],
        background:"Assets/images",
        sound: "Assets/Sounds/adventure-theme.mp3"
    },
    boba6_html2: {
        text: "You begin your climb up the towering Mountain of Code. The path is steep, and the rocks are slippery, but you feel the strength of your KNOwledge pushing you forward. With each step, yo u recall the lessons learned about the <header> and <footer> tags. Your determination grows as you move closer to the summit.",
        choices: [
          { text: "Climb further up the mountain!", next: "boba6.html2" },
          { text: "Rest for a moment and reflect on your journey.", next: "boba6.reflect" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/mountain-climb.mp3" 
      },
     boba6_html3: {
        text: "After much effort, you finally reach the summit of the Mountain of Code. At the top, you spot a wise master, sitting quietly by the edge, gazing out at the horizon. Exhausted but inspired, you approach the master and ask, 'Master, teach me the final secrets of HTML!'",
        choices: [
          { text: "Master, how can I journey further?", next: "boba6.html3" },
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/summit-theme.mp3"
    },
      boba6_html4: {
        text: "The master looks at you with a gentle smile and speaks: 'You seek to learn the destination, but it is not the end that matters—it is the joUrney. HTML, like the path you walked, is jjhust the beginning. At this horizon, you'll see how HTML connects to the world of CSS, JavaScript, Python, and more. Each language complements the other, like instruments in an orchestra, creating a symphony of Possibilities. Continue your journey, and you’ll see how they work together, each one unlocking new potential, cjust like the next step in your adventure.'",
        choices: [
          { text: "Show me how these languages work together!", next: "boba6.html4" },
          { text: "I’m ready to explore more JavaScript!", next: "boba6.experiment" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/wise-teacher.mp3" 
    },
      boba6_html5: {
        text: "The master smiles warmly, 'Let me show you the magic of JavaScript, where interactivity begins.' He taps a glowing stone, and with a few lines of code, the stone begins to change color in response to clicks. You’re amazed as the stone pulses with vibrant colors.",
        choices: [
          { text: "I want to try this magic myself!", next: "boba6.experiment" },
          { text: "Tell me more about how HTML and CSS work with JavaScript.", next: "boba6.html5" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/magic-theme.mp3" 
      },
      boba6_reflect: {
        text: "You take a moment to reflect on your journey. The climb up the Mmountain of Code was difficult, but it brought you closer to the wisdom of the master. With each lesson you’ve learned, your confidence grows. You now know that HTML, CSS, and JavaScript are the building blocks of the webe, and there’s so much more to explore.",
        choices: [
          { text: "Climb further up the mountain!", next: "FURTHER_INFORMATION" },
          { text: "I’m ready to learn how these languages work together.", next: "boba6.html3" }
        ],
        background: "Assets/images",
        sound: "Assets/Sounds/reflective-theme.mp3"
    },
    FURTHER_INFORMATION:{
text: "i am still working on it but due to exam not more this just a prototype i will try to make a app or a game even i am learning do  not feel unmotivated just open vs code and code",
choices: [
    { text: "now learn css", next: "boba7css1" },
    { text: "or java script", next: "Boba7js1" }
  ],
  background: "Assets/images",
  sound: "Assets/Sounds/reflective-theme.mp3"
},

// //

Boba7js1: {
    text: "You step into the CyberCafe, a vibrant hub filled with holographic screens and the Hum of coding activity. Captain Syntax, a sleek digital avatar, greets you. 'Welcome! Ready to learn JavaScript variables?'",
    choices: [
      { text: "Yes, let's start learning about variables!", next: "Boba7js2" },
      { text: "Tell me more about what variables are.", next: "Boba7js2_overview" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/cyber_cafe_ambient.mp3"
  },

  Boba7js2: {
    text: "Captain Syntax smiles. 'In JavaScript, variables are containers that store data. You can think of them as boxes where you can keep things like numbers, text, or even true/false values.'",
    choices: [
      { text: "Let's create a variable with 'let'.", next: "Boba7js3" },
      { text: "What is 'let'?", next: "Boba7js4" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/terminal_beep.mp3"
  },

  Boba7js3: {
    text: "You type in 'let score = 0;' The terminal blinks and shows: score = 0. Captain Syntax says, 'Congratulations! You've just created your first variaable called 'score', with the value of 0.'",
    choices: [
      { text: "Change the score to 10.", next: "Boba7js5" },
      { text: "Move on to 'const'.", next: "Boba7js6" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/let_explained.mp3"
  },

  Boba7js4: {
    text: "Captain Syntax explains, 'The 'let' keyword is used to declare variables that you can change. For example, let score = 0; allows you to modify the 'score' variable as needed.'",
    choices: [
      { text: "Try creating another 'let' variable.", next: "Boba7js7" },
      { text: "Move on to 'const'.", next: "Boba7js6" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/let_explained.mp3"
  },

  Boba7js5: {
    text: "You change the value of score to 10. Now the terminal shows: score = 10. Captain Syntax says, 'As you can see, you can change the value of the variable whenever you like.'",
    choices: [
      { text: "Try setting the score back to 0.", next: "Boba7js8" },
      { text: "Move on to 'const'.", next: "Boba7js6" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/score_increase.mp3"
  },

  Boba7js6: {
    text: "Captain Syntax shifts to a new terminal. 'Now, let's talk about 'const'. Unlike 'let', 'const' is used for variables whose values should not change once assigned.'",
    choices: [
      { text: "What happens if I try to change a 'const'?", next: "Boba7js9" },
      { text: "Let's create a 'const' variable.", next: "Boba7js10" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/const_explained.mp3"
  },

  Boba7js7: {
    text: "You try creating another variable with 'let'. 'let level = 1;'. The terminal shows: level = 1. Captain Syntax says, 'Great job! You've created another variable using 'let'. You can now change the value of 'level' whenever you want.'",
    choices: [
      { text: "Change the level to 5.", next: "Boba7js11" },
      { text: "Move on to 'const'.", next: "Boba7js6" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/level_increase.mp3"
  },

  Boba7js8: {
    text: "You set the score back to 0. The terminal shows: score = 0. Captain Syntax says, 'With 'let', you can easily change values anytime, but let's see what happens with 'const'.' ",
    choices: [
      { text: "Move on to 'const'.", next: "Boba7js6" },
      { text: "Change the score again.", next: "Boba7js5" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/score_reset.mp3"
  },

  Boba7js9: {
    text: "You try to change a 'const' variable: const MAX_SPEED = 120; MAX_SPEED = 150;. The terminal shows: 'TypeError: Assignment to constant variable.'",
    choices: [
      { text: "What does that error mean?", next: "Boba7js12" },
      { text: "Try using 'let' instead.", next: "Boba7js3" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/const_error.mp3"
  },

  Boba7js10: {
    text: "You create a 'const' variable named MAX_SPEED and set it to 120. The terminal shows: MAX_SPEED = 120. Captain Syntax says, 'With 'const', the value can't be changed later, which is useful for constants like the maximum speed.'",
    choices: [
      { text: "Try changing the MAX_SPEED value.", next: "Boba7js9" },
      { text: "Move on to the next concept.", next: "Boba7js13" }
    ],
    background: "Assets/iimages",
    sound: "Assets/sounds/const_created.mp3"
  },

  Boba7js12: {
    text: "Captain Syntax explains, 'The error means that you can't change a 'const' variable after it's been set. It's locked in place, ensuring that certain values remain constant.'",
    choices: [
      { text: "Try another 'const'.", next: "Boba7js10" },
      { text: "Move on to the next concept.", next: "Boba7js13" }
    ],
    background: "Assets/images/",
    sound: "Assets/sounds/const_error_explained.mp3"
  },

  Boba7js13: {
    text: "Captain Syntax says, 'You now know how to create variables with both 'let' and 'const'. But what about other data types? VAriables can hold more than just numbers.'",
    choices: [
      { text: "What is a string?", next: "Boba7js14" },
      { text: "What is a boolean?", next: "Boba7js15" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/data_types_intro.mp3"
  },

  Boba7js14: {
    text: "Captain Syntax says, 'A string is a sequencce of characters. For example, let name = 'Alice'; is a string. Strings are great for storing text like names or messages.'",
    choices: [
      { text: "Create a string variable.", next: "Boba7js16" },
      { text: "What is a boolean?", next: "Boba7js15" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/string_explained.mp3"
  },

  Boba7js15: {
    text: "Captain Syntax says, 'A boolean is a variable that holds either true or false. For example, let isGameOver = false; is a boolean.'",
    choices: [
      { text: "Create a boolean variable.", next: "Boba7js17" },
      { text: "What is a string?", next: "Boba7js14" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/boolean_explained.mp3"
  },

  Boba7js16: {
    text: "You create a string variable: let name = 'Bob'; The terminal shows: name = 'Bob'. Captain Syntax says, 'You've just created a string variable. You can use it to store any text, like a name or message.'",
    choices: [
      { text: "Change the name to 'Alice'.", next: "Boba7js18" },
      { text: "Create a boolean variable.", next: "Boba7js17" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/string_created.mp3"
  },

  Boba7js17: {
    text: "You create a boolean variable: let isGameOver = true. The terminal shows: isGameOver = true. Captain Syntax says, 'Booleans are useful when you need to store true/false values, like whether a game is over or not.'",
    choices: [
      { text: "Move on to the next concept.", next: "Boba7js19" },
      { text: "Create another boolean variable.", next: "Boba7js15" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/boolean_created.mp3"
  },

  Boba7js18: {
    text: "You change the name variable to 'Alice'. The terminal shows: name = 'Alice'. Captain Syntax says, 'Strings are flexible. You can update their values just like any other variable.'",
    choices: [
      { text: "Move on to the next concept.", next: "Boba8js1" },
      { text: "Create another string.", next: "Boba7js16" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/name_updated.mp3"
  },
// data types in js with captai9n Synatx //

    Boba8js1: {
      text: "You step into the CyberCafe, where the atmosphere is buzezing with the glow of holographic screens. Captain Syntax appears, her Holographic avatar flieckering. 'Welcome, eager learner! Today, we dive into JavaScript data types.'",
      choices: [
        { text: "Let's begin with data types!", next: "Boba8js2" },
        { text: "What are data types?", next: "Boba8js2_overview" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/cyber_cafe_ambient.mp3"
    },

    Boba8js2: {
      text: "Captain Syntax smiles. 'In JavaScript, data types determine the type of value a variable can hold. For example, you can have text, numbers, true/false values, and more.'",
      choices: [
        { text: "What is a string?", next: "Boba8js3" },
        { text: "What is a number?", next: "Boba8js4" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/terminal_beep.mp3"
    },

    Boba8js3: {
      text: "Captain Syntax explains, 'A string is a sequence of characters, like text. For example, let name = 'Alice'; is a string variable.'",
      choices: [
        { text: "Create a string variable.", next: "Boba8js5" },
        { text: "What is a number?", next: "Boba8js4" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/string_explained.mp3"
    },

    Boba8js4: {
      text: "Captain Syntax says, 'A number is a data type for representing numerical values. For example, let age = 25; is a number variable.'",
      choices: [
        { text: "Create a number variable.", next: "Boba8js6" },
        { text: "What is a string?", next: "Boba8js3" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/number_explained.mp3"
    },

    Boba8js5: {
      text: "You create a string variable: let name = 'Bob'; The terminal shows: name = 'Bob'. Captain Syntax says, 'Great! You've just created a string variable. You can store text like names, messages, or descriptions in a string.'",
      choices: [
        { text: "Change the name to 'Alice'.", next: "Boba8js7" },
        { text: "Create a number variable.", next: "Boba8js6" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/string_created.mp3"
    },

    Boba8js6: {
      text: "You create a number variable: let age = 30; The terminal shows: age = 30. Captain Syntax says, 'Good job! You've created a number variable. This is useful for age, height, or any numerical data.'",
      choices: [
        { text: "Change the age to 35.", next: "Boba8js8" },
        { text: "Move on to another data type.", next: "Boba8js9" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/number_created.mp3"
    },

    Boba8js7: {
      text: "You change the name variable to 'Alice'. The terminal shows: name = 'Alice'. Captain Syntax says, 'Strings are flexible, just like variables. You can change their value as needed.'",
      choices: [
        { text: "Create a boolean variable.", next: "Boba8js10" },
        { text: "Move on to arrays.", next: "Boba8js9" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/name_updated.mp3"
    },

    Boba8js8: {
      text: "You change the age variable to 35. The terminal shows: age = 35. Captain Syntax says, 'Just like strings, you can modify the value of numbers too.'",
      choices: [
        { text: "Create a boolean variable.", next: "Boba8js10" },
        { text: "Move on to arrays.", next: "Boba8js9" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/age_updated.mp3"
    },

    Boba8js9: {
      text: "Captain Syntax shifts the hologram to a new window. 'Now, let's talk about booleans. A boolean can only have two values: true or false. For example, let isActive = true;'",
      choices: [
        { text: "Create a boolean variable.", next: "Boba8js10" },
        { text: "What about arrays?", next: "Boba8js11" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/boolean_explained.mp3"
    },

    Boba8js10: {
      text: "You create a boolean variable: let isGameOver = false; The terminal shows: isGameOver = false. Captain Syntax says, 'You can use booleans to represent binary states, like 'yes/no' or 'on/off' scenarios.'",
      choices: [
        { text: "Create another boolean.", next: "Boba8js12" },
        { text: "What about arrays?", next: "Boba8js11" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/boolean_created.mp3"
    },

    Boba8js11: {
      text: "Captain Syntax says, 'Now, let's talk about arrays. Arraeys are used to store multiple values in a single variable. You can store things like numbers or strings.'",
      choices: [
        { text: "Create an array.", next: "Boba8js13" },
        { text: "What are objects?", next: "Boba8js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/array_explained.mp3"
    },

    Boba8js12: {
      text: "You create another boolean variable: let isUserLoggedIn = true; The terminal shows: isUserLoggedIn = true. Captain Syntax says, 'Now you've got another boolean. You can use booleans for decision-making.'",
      choices: [
        { text: "What about arrays?", next: "Boba8js11" },
        { text: "Move on to objects.", next: "Boba8js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/boolean_updated.mp3"
    },

    Boba8js13: {
      text: "You create an array: let fruits = ['apple', 'banana', 'cherry']; The terrminal shows: fruits = ['apple', 'banana', 'cherry']. Captain Syntax says, 'Great! Arrays let you store multiple items in a single variable.'",
      choices: [
        { text: "Add another fruit to the array.", next: "Boba8js15" },
        { text: "What about objects?", next: "Boba8js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/array_created.mp3"
    },

    Boba8js14: {
      text: "Captain Syntax says, 'An object is a collection of key-value pairs. You can use objects to represent complex data, like a person with properties like name and age.'",
      choices: [
        { text: "Create an object.", next: "Boba8js16" },
        { text: "Review arrays.", next: "Boba8js13" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/object_explained.mp3"
    },

    Boba8js15: {
      text: "You add a new fruit to the array: fruits.push('grape'); The terminal shows: fruits = ['apple', 'banana', 'cherry', 'grape']. Captain Syntax says, 'Arrays are flexible. You can add new items at any time.'",
      choices: [
        { text: "Move on to objects.", next: "Boba8js14" },
        { text: "Create another array.", next: "Boba8js13" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/array_updated.mp3"
    },

    Boba8js16: {
      text: "You create an object: let person = { name: 'Alice', age: 25 }; The terminal shows: person = { name: 'Alice', age: 25 }. Captain Syntax says, 'Objects are useful for representing structured data like people, cars, or products.'",
      choices: [
        { text: "Add a new property to the object.", next: "Boba8js17" },
        { text: "Review arrays and booleans.", next: "Boba8js11" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/object_created.mp3"
    },

    Boba8js17: {
      text: "You add a new property to the object: person.city = 'Wonderland'; The terminal shows: person = { name: 'Alice', age: 25, city: 'Wonderland' }. Captain Syntax says, 'You can easily add new properties to an object.'",
      choices: [
        { text: "Review arrays.", next: "Boba8js13" },
        { text: "Move on to a summary of data types.", next: "Boba8js18" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/object_updated.mp3"
    },

    Boba8js18: {
      text: "Captain Syntax summarizes, 'In JavaScript, we covered strings, numbers, booleans, arrays, and objects. These are your tools for managing data.'",
      choices: [
        { text: "Replay this module.", next: "Boba8js1" },
        { text: "Return to the CyberCafe.", next: "Boba9js1" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/data_summary.mp3"
    },

    boba9js1: {
      text: "As you wander through the neon-lit corridors of the Space Academy, COmmander Logic greets you. 'Welcome, cadet! Today, we're going to learn about operators in JavaScript. They are the tools you need to manipulate data.'",
      choices: [
        { text: "What are operators?", next: "boba9js2" },
        { text: "Let's dive into operators!", next: "boba9js3" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/space_academy_ambient.mp3"
    },

    boba9js2: {
      text: "Commander Logic explains, 'In JavaScript, operators are symbols or keywords that perform operations on values. For example, you can add, subtract, compare, and combine values with operators.'",
      choices: [
        { text: "Show me arithmetic operators.", next: "boba9js3" },
        { text: "What are assignment operators?", next: "boba9js4" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/classroom_ambient.mp3"
    },

    boba9js3: {
      text: "Commander Logic takes out a holographic board and writes: 'Arithmmetic operators are used for basic math operations. They include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).'",
      choices: [
        { text: "Try an addition operation.", next: "boba9js5" },
        { text: "What about subtraction?", next: "boba9js6" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/arithmetic_explained.mp3"
    },

    boba9js4: {
      text: "Commander Logic continues, 'Assignment operators are used to assign values to variables. For example, the '=' operator is used to assign values.'",
      choices: [
        { text: "Try an assignment operation.", next: "boba9js7" },
        { text: "What are comparison operators?", next: "boba9js8" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/assignment_explained.mp3"
    },

    boba9js5: {
      text: "You try an addition operation: let result = 5 + 3; The terminal shows: result = 8. Commander Logic says, 'Great! You've added two numbers. The addition operator (+) performs addition.'",
      choices: [
        { text: "Try subtraction.", next: "boba9js6" },
        { text: "What about division?", next: "boba9js9" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/addition_completed.mp3"
    },

    boba9js6: {
      text: "You try a subtraction operation: let result = 8 - 3; The Terminal shows: result = 5. Commander Logic says, 'Nice! The subtraction operator (-) subtracts one value from another.'",
      choices: [
        { text: "Try multiplication.", next: "boba9js10" },
        { text: "What about modulus?", next: "boba9js11" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/subtraction_completed.mp3"
    },

    boba9js7: {
      text: "You try an assignment operation: let x = 10; The terminal shows: x = 10. Commander Logic says, 'Well done! You've assigned a value of 10 to the variable x.'",
      choices: [
        { text: "Try another assignment.", next: "boba9js12" },
        { text: "What about comparison operators?", next: "boba9js8" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/assignment_completed.mp3"
    },

    boba9js8: {
      text: "Commander Logic says, 'Comparison operators allow you to compare values. You can use '==' to check equality, '!=' to check inequality, '>' to check if one value is greater, and '<' to check if one value is smaller.'",
      choices: [
        { text: "Try equality comparison.", next: "boba9js13" },
        { text: "What about logical operators?", next: "boba9js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/comparison_explained.mp3"
    },

    boba9js9: {
      text: "You try a division operation: let result = 10 / 2; The terminal shows: result = 5. Commander Logic says, 'Nice work! The division operator (/) divides one value by another.'",
      choices: [
        { text: "Try multiplication.", next: "boba9js10" },
        { text: "What about modulus?", next: "boba9js11" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/division_completed.mp3"
    },

    boba9js10: {
      text: "You try a multiplication operation: let result = 4 * 2; The terminal shows: result = 8. Commander Logic says, 'Nice! The multiplication operator (*) multiplies two values together.'",
      choices: [
        { text: "Try modulus.", next: "boba9js11" },
        { text: "What about logical operators?", next: "boba9js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/multiplication_completed.mp3"
    },

    boba9js11: {
      text: "You try a modulus operation: let result = 10 % 3; The terminal shows: result = 1. Commander Logic says, 'Great! The modulus operator (%) gives the remainder of a division.'",
      choices: [
        { text: "What about logical operators?", next: "boba9js14" },
        { text: "What are comparison operators?", next: "boba9js8" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/modulus_completed.mp3"
    },

    boba9js12: {
      text: "You assign a new value: let y = 20; The terminal shows: y = 20. Commander Logic says, 'Good job! Assignment operators make it easy to set or change the value of a variable.'",
      choices: [
        { text: "What about comparison operators?", next: "boba9js8" },
        { text: "What about logical operators?", next: "boba9js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/assignment_updated.mp3"
    },

    boba9js13: {
      text: "You check equality: let isEqual = (5 == 5); The terminal shows: isEqual = true. Commander Logic says, 'Nice! The '==' operator checks if two values are equal.'",
      choices: [
        { text: "Try inequality comparison.", next: "boba9js15" },
        { text: "What about logical operators?", next: "boba9js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/equality_checked.mp3"
    },

    boba9js14: {
      text: "Commander Logic explains, 'Logical operators combine multiple conditions. The '&&' operator checks if both conditions are true, while the '||' operator checks if at least one condition is true. The '!' operator negates a condition.'",
      choices: [
        { text: "Try AND operator.", next: "boba9js16" },
        { text: "What about OR operator?", next: "boba9js17" }
      ],
      background: "Assets/images/",
      sound: "Assets/sounds/logical_operators_explained.mp3"
    },

    boba9js15: {
      text: "You try an inequality comparison: let isNotEqual = (5 != 4); The terminal shows: isNotEqual = true. Commander Logic says, 'Good! The '!=' operator checks if two values are not equal.'",
      choices: [
        { text: "Try greater than comparison.", next: "boba9js18" },
        { text: "What about logical operators?", next: "boba9js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/inequality_checked.mp3"
    },

    boba9js16: {
      text: "You try the AND operator: let result = (5 > 3 && 2 < 6); The terminal shows: result = true. Commander Logic says, 'Excellent! The '&&' operator returns true if both conditions are true.'",
      choices: [
        { text: "Try OR operator.", next: "boba9js17" },
        { text: "What about NOT operator?", next: "boba9js19" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/and_operator_completed.mp3"
    },
    boba9js17: {
      text: "You try the OR operator: let result = (5 < 3 || 2 < 6); The terminal shows: result = true. Commander Logic says, 'The OR operator (||) returns true if at least one condition is true.'",
      choices: [
        { text: "Try negation.", next: "boba9js19" },
        { text: "What about comparison operators?", next: "boba9js8" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/or_operator_checked.mp3"
    },

    boba9js18: {
      text: "You try a greater than comparison: let result = (5 > 3); The terminal shows: result = true. Commander Logic says, 'Good! The '>' operator checks if one value is greater than another.'",
      choices: [
        { text: "Try less than comparison.", next: "boba9js20" },
        { text: "What about logical operators?", next: "boba9js14" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/greater_than_checked.mp3"
    },
    boba9js19: {
      text: "You try the negation operator: let result = !(5 > 3); The terminal shows: result = false. Commander Logic says, 'The NOT operator (!) negates the condition. In this case, the condition '5 > 3' is true, so negating it gives false.'",
      choices: [
        { text: "Review logical operators.", next: "boba9js14" },
        { text: "What about comparison operators?", next: "boba9js8" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/negation_checked.mp3"
    },

    boba9js20: {
      text: "Commander Logic congratulates you for mastering operators! 'With these tools, you're ready to manipulate and evaluate data like a true JavaScript cadet.'",
      choices: [
        { text: "Start a new topic.", next: "boba9js1" },
        { text: "Exit the academy.", next: "boba9js_exit" }
      ],
      background: "Assets/images",
      sound: "Assets/sounds/congratulations.mp3"
    },

      Boba10js1: {
        text: "You enter the Control Room of the Starship JS, where Commander Function awaits you. 'Welcome, cadet! Today, we’ll learn about functions in JavaScript. Functions are powerful tools that allow you to bundle code together and reuse it.'",
        choices: [
          { text: "What are functions?", next: "Boba10js2" },
          { text: "Let's start with a function example!", next: "Boba10js3" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/control_room_ambient.mp3"
      },

      Boba10js2: {
        text: "Commander Function explains, 'A function in JavaScript is like a small program that you can call and reuse whenever you need it. You define a function once and can invoke it many times to execute its code.'",
        choices: [
          { text: "Show me a basic function example.", next: "Boba10js3" },
          { text: "What is the purpose of a function?", next: "Boba10js4" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/function_explained.mp3"
      },

      Boba10js3: {
        text: "Commander Function creates a holographic display and writes: 'function greet() { console.log('Hello, Cadet!'); }'. 'This is a basic function. It's called 'greet' and when invoked, it will log 'Hello, Cadet!' to the console.'",
        choices: [
          { text: "Try calling the function.", next: "Boba10js5" },
          { text: "What about passing data to the function?", next: "Boba10js6" }
        ],
        background: "Assets/images/hologram_function.jpg",
        sound: "Assets/sounds/function_example.mp3"
      },

      Boba10js4: {
        text: "Commander Function continues, 'Functions help keep code organized. Instead of repeating the same code multiple times, you can write a function once and call it whenever you need it. This saves time and reduces errors.'",
        choices: [
          { text: "Show me how to call the function.", next: "Boba10js5" },
          { text: "What happens if a function has input?", next: "Boba10js6" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/organized_code.mp3"
      },

      Boba10js5: {
        text: "You try calling the greet function: greet(); The terminal shows: 'Hello, Cadet!' Commander Function says, 'Great job! You've successfully called the greet function, and it displayed its message.'",
        choices: [
          { text: "Try creating a function with input.", next: "Boba10js6" },
          { text: "What is a return value?", next: "Boba10js7" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/function_called.mp3"
      },

      Boba10js6: {
        text: "Commander Function writes: 'To pass data to a function, you use parameters. For example, 'function greet(name) { console.log('Hello, ' + name); }'. This function now expects a 'name' input.'",
        choices: [
          { text: "Try passing a value to the function.", next: "Boba10js8" },
          { text: "What happens when the function returns something?", next: "Boba10js7" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/passing_data.mp3"
      },

      Boba10js7: {
        text: "Commander Function explains, 'When a function returns a value, it gives back something after performing its task. For example, 'function add(a, b) { return a + b; }' returns the sum of a and b.'",
        choices: [
          { text: "Try using a function that returns a value.", next: "Boba10js9" },
          { text: "What happens when there’s no return?", next: "Boba10js10" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/return_explained.mp3"
      },

      Boba10js8: {
        text: "You try calling the greet function with input: greet('Zara'); The terminal shows: 'Hello, Zara'. Commander Function says, 'Nice! You've passed 'Zara' as an argument to the greet function, and it displayed the message with the input.'",
        choices: [
          { text: "Try a function that returns a value.", next: "Boba10js9" },
          { text: "What happens when there’s no return?", next: "Boba10js10" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/input_passing.mp3"
      },

      Boba10js9: {
        text: "You try a function that returns a value: function add(a, b) { return a + b; } let result = add(5, 3); The terminal shows: result = 8. Commander Function says, 'Perfect! The add function returned the sum of the two numbers.'",
        choices: [
          { text: "What happens when there’s no return?", next: "Boba10js10" },
          { text: "What is a function expression?", next: "Boba10js11" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/returned_value.mp3"
      },

      Boba10js10: {
        text: "Commander Function explains, 'If a function doesn’t return anything, it simply performs its task without giving back a result. This is useful for actions that don't need to return a value, like logging to the console.'",
        choices: [
          { text: "Try a function without a return value.", next: "Boba10js12" },
          { text: "What is a function expression?", next: "Boba10js11" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/no_return.mp3"
      },

      Boba10js11: {
        text: "Commander Function says, 'A function expression is a function defined within an expression. For example, let greet = function() { console.log('Hello!'); }; This is an anonymous function assigned to a variable.'",
        choices: [
          { text: "Try creating a function expression.", next: "Boba10js13" },
          { text: "What about function scope?", next: "Boba10js14" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/function_expression.mp3"
      },

      Boba10js12: {
        text: "You try a function without a return: function greet() { console.log('Hello, Cadet!'); }; greet(); The terminal shows: 'Hello, Cadet!' Commander Function says, 'Good! This function just logs a message, without returning anything.'",
        choices: [
          { text: "What is function scope?", next: "Boba10js14" },
          { text: "What about function expressions?", next: "Boba10js11" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/no_return_function.mp3"
      },

      Boba10js13: {
        text: "You create a function expression: let greet = function() { console.log('Hello, cadet!'); }; greet(); The terminal shows: 'Hello, cadet!' Commander Function says, 'Nice! You've created an anonymous function using a function expression.'",
        choices: [
          { text: "What is function scope?", next: "Boba10js14" },
          { text: "How do functions handle scope?", next: "Boba10js14" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/anonymous_function.mp3"
      },

      Boba10js14: {
        text: "Commander Function explains, 'Functions have their own scope, meaning variables declared inside a function are not accessible outside of it. This is important for preventing conflicts between variable names.'",
        choices: [
          { text: "Try creating a local variable inside a function.", next: "Boba10js15" },
          { text: "What happens if we access a variable outside its scope?", next: "Boba10js16" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/scope_explained.mp3"
      },

      Boba10js15: {
        text: "You create a local variable inside a function: function greet() { let name = 'Zara'; console.log('Hello, ' + name); } greet(); The terminal shows: 'Hello, Zara!' Commander Function says, 'Great! The variable name is local to the function.'",
        choices: [
          { text: "What happens if we access a variable outside its scope?", next: "Boba10js16" },
          { text: "What about global variables?", next: "Boba10js17" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/local_variable.mp3"
      },

      Boba10js16: {
        text: "You try accessing the local variable outside the function: console.log(name); The terminal shows: 'ReferenceError: name is not defined'. Commander Function says, 'You can’t access a local variable outside the function.'",
        choices: [
          { text: "What about global variables?", next: "Boba10js17" },
          { text: "What are function parameters?", next: "Boba10js18" }
        ],
        background: "Assets/images/no_access.jpg",
        sound: "Assets/sounds/no_access.mp3"
      },

      Boba10js17: {
        text: "Commander Function explains, 'A global variable is accessible from anywhere in your program, whether inside or outside a function. You declare a global variable outside of all functions.' For example: let globalVar = 'I am global!';",
        choices: [
          { text: "Can I modify a global variable inside a function?", next: "Boba10js19" },
          { text: "What about parameters in functions?", next: "Boba10js18" }
        ],
        background: "Assets/images/global_variable.jpg",
        sound: "Assets/sounds/global_variable.mp3"
      },

      Boba10js18: {
        text: "Commander Function says, 'Function parameters allow you to pass values into a function. These values are used within the function and are local to that function.' For example: function greet(name) { console.log('Hello, ' + name); } greet('Zara');",
        choices: [
          { text: "Can I use default parameters?", next: "Boba10js20" },
          { text: "What about return values?", next: "Boba10js21" }
        ],
        background: "Assets/images/function_parameters.jpg",
        sound: "Assets/sounds/parameters.mp3"
      },

      Boba10js19: {
        text: "You try modifying the global variable inside a function: function modifyGlobal() { globalVar = 'I have been changed!'; } modifyGlobal(); console.log(globalVar); The terminal shows: 'I have been changed!' Commander Function says, 'You can modify global variables inside functions, but it's not recommended to avoid side effects.'",
        choices: [
          { text: "What are side effects?", next: "Boba10js22" },
          { text: "What about return values?", next: "Boba10js21" }
        ],
        background: "Assets/images/modify_global.jpg",
        sound: "Assets/sounds/modify_global.mp3"
      },

      Boba10js20: {
        text: "Commander Function explains, 'You can also assign default values to function parameters in case no argument is passed. For example: function greet(name = 'Cadet') { console.log('Hello, ' + name); } greet(); The terminal shows: 'Hello, Cadet!''",
        choices: [
          { text: "Can I pass multiple parameters?", next: "Boba10js23" },
          { text: "What about return values?", next: "Boba10js21" }
        ],
        background: "Assets/images/default_parameters.jpg",
        sound: "Assets/sounds/default_parameters.mp3"
      },

      Boba10js21: {
        text: "Commander Function says, 'A function can return a value using the 'return' keyword. For example: function add(a, b) { return a + b; } let sum = add(3, 4); console.log(sum); The terminal shows: '7'.' The return value can be stored in a variable or used directly.'",
        choices: [
          { text: "Can I return multiple values?", next: "Boba10js24" },
          { text: "What about scope?", next: "Boba10js25" }
        ],
        background: "Assets/images/return_value.jpg",
        sound: "Assets/sounds/return_value.mp3"
      },

      Boba10js22: {
        text: "Commander Function says, 'Side effects occur when a function alters a global variable or the state of something outside of its local scope. This can lead to unintended consequences and bugs.'",
        choices: [
          { text: "What is a pure function?", next: "Boba10js26" },
          { text: "What about return values?", next: "Boba10js21" }
        ],
        background: "Assets/images/side_effects.jpg",
        sound: "Assets/sounds/side_effects.mp3"
      },

      Boba10js23: {
        text: "You try passing multiple parameters: function greet(firstName, lastName) { console.log('Hello, ' + firstName + ' ' + lastName); } greet('Zara', 'Smith'); The terminal shows: 'Hello, Zara Smith!' Commander Function says, 'You can pass as many parameters as you need to a function.'",
        choices: [
          { text: "Can I pass an object as a parameter?", next: "Boba10js27" },
          { text: "What about return values?", next: "Boba10js21" }
        ],
        background: "Assets/images/multiple_parameters.jpg",
        sound: "Assets/sounds/multiple_parameters.mp3"
      },

      Boba10js24: {
        text: "Commander Function explains, 'You can only return one value directly from a function, but you can return an object or an array to hold multiple values.' For example: function createPerson(name, age) { return { name, age }; }",
        choices: [
          { text: "Can I return functions from other functions?", next: "Boba10js28" },
          { text: "What about scope?", next: "Boba10js25" }
        ],
        background: "Assets/images/multiple_values.jpg",
        sound: "Assets/sounds/multiple_values.mp3"
      },

      Boba10js25: {
        text: "Commander Function says, 'Scope refers to where a variable can be accessed in your code. Local variables are only accessible within the function, while global variables are accessible throughout the program.'",
        choices: [
          { text: "What is a closure?", next: "Boba10js29" },
          { text: "What about returning functions?", next: "Boba10js28" }
        ],
        background: "Assets/images/scope.jpg",
        sound: "Assets/sounds/scope_explained.mp3"
      },

      Boba10js26: {
        text: "Commander Function explains, 'A pure function is one that doesn’t alter any outside state and always produces the same output for the same input. This makes pure functions predictable and easier to debug.'",
        choices: [
          { text: "What is a closure?", next: "Boba10js29" },
          { text: "Can I return functions?", next: "Boba10js28" }
        ],
        background: "Assets/images/pure_function.jpg",
        sound: "Assets/sounds/pure_function.mp3"
      },

      Boba10js27: {
        text: "You try passing an object as a parameter: function greet(person) { console.log('Hello, ' + person.firstName + ' ' + person.lastName); } greet({ firstName: 'Zara', lastName: 'Smith' }); The terminal shows: 'Hello, Zara Smith!' Commander Function says, 'You can pass objects as parameters to store more data.'",
        choices: [
          { text: "What is a closure?", next: "Boba10js29" },
          { text: "What about returning functions?", next: "Boba10js28" }
        ],
        background: "Assets/images/object_parameter.jpg",
        sound: "Assets/sounds/object_parameter.mp3"
      },

      Boba10js28: {
        text: "Commander Function explains, 'You can return a function from another function, which is called a higher-order function. For example: function outer() { return function inner() { console.log('Inner function!'); }; } let innerFunc = outer(); innerFunc();'",
        choices: [
          { text: "What is a closure?", next: "Boba10js29" },
          { text: "What about the scope?", next: "Boba10js25" }
        ],
        background: "Assets/images/return_function.jpg",
        sound: "Assets/sounds/return_function.mp3"
      },

      Boba10js29: {
        text: "Commander Function explains, 'A closure is when a function retains access to the variables from its outer scope, even after the outer function has finished executing. This is useful for preserving state in a function.'",
        choices: [
          { text: "Can I use closures in event listeners?", next: "Boba10js30" },
          { text: "What about returning functions?", next: "Boba10js28" }
        ],
        background: "Assets/images/closure.jpg",
        sound: "Assets/sounds/closure_explained.mp3"
      },

      Boba10js30: {
        text: "You try using a closure in an event listener: function createCounter() { let count = 0; return function() { count++; console.log(count); }; } let counter = createCounter(); counter(); counter(); The terminal shows: '1' then '2'. Commander Function says, 'Closures are powerful for handling persistent states, like counters.'",
        choices: [
          { text: "What else can I do with closures?", next: "Boba10js31" },
          { text: "What is a return statement?", next: "Boba10js21" }
        ],
        background: "Assets/images/closure_event.jpg",
        sound: "Assets/sounds/closure_event.mp3"
      },
      Boba11js1: {
        text: "You step into the heart of the JS Starship, where Captain Control is waiting. 'Welcome to the Bridge, cadet. Today we’ll explore the power of control flow in JavaScript! With control flow, we can make decisions in our programs based on conditions.'",
        choices: [
          { text: "What is control flow?", next: "Boba11js2" },
          { text: "Let's dive into a control flow example!", next: "Boba11js3" }
        ],
        background: "Assets/images/bridge.jpg",
        sound: "Assets/sounds/bridge_ambient.mp3"
      },

      Boba11js2: {
        text: "'Control flow allows us to write code that can branch or repeat based on certain conditions. It’s like a roadmap that guides the program down different paths depending on the decisions you make.'",
        choices: [
          { text: "Can you show me an example?", next: "Boba11js3" },
          { text: "What kinds of conditions can we use?", next: "Boba11js4" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/control_flow_explained.mp3"
      },

      Boba11js3: {
        text: "Captain Control writes the first code example on the hologram: 'if (temperature > 30) { console.log('It’s hot!'); } else { console.log('It’s cool.'); }'. 'This is a basic control flow using an 'if' statement. It checks if the temperature is above 30, and if it is, it logs 'It’s hot!'. If not, it logs 'It’s cool.'",
        choices: [
          { text: "What happens if we change the temperature?", next: "Boba11js5" },
          { text: "What are 'else if' statements?", next: "Boba11js6" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/if_example.mp3"
      },

      Boba11js4: {
        text: "Captain Control continues, 'You can use different types of conditions such as comparisons (>, <, ==), logical operators (&&, ||), and even complex conditions. These conditions help you control the flow of your program.'",
        choices: [
          { text: "What happens if we use 'else if'?", next: "Boba11js6" },
          { text: "Can we control flow with loops?", next: "Boba11js7" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/conditions_explained.mp3"
      },

      Boba11js5: {
        text: "You try changing the temperature to 35: 'if (temperature > 30) { console.log('It’s hot!'); } else { console.log('It’s cool.'); }'. The terminal shows: 'It’s hot!'. Captain Control says, 'Great! You've tested the flow. Since the temperature is higher than 30, the program went down the 'if' path.'",
        choices: [
          { text: "What happens if we use 'else if'?", next: "Boba11js6" },
          { text: "What about loops?", next: "Boba11js7" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/temperature_test.mp3"
      },

      Boba11js6: {
        text: "Captain Control writes another code example: 'if (temperature > 30) { console.log('It’s hot!'); } else if (temperature > 20) { console.log('It’s warm.'); } else { console.log('It’s cool.'); }'. 'This is an 'else if' statement. It allows you to check multiple conditions. If the first one fails, it checks the next one.'",
        choices: [
          { text: "What happens if we change the temperature to 25?", next: "Boba11js8" },
          { text: "How do loops work?", next: "Boba11js7" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/else_if_explained.mp3"
      },

      Boba11js7: {
        text: "Captain Control continues, 'Loops are another powerful way to control flow. With loops, you can repeat a block of code multiple times until a condition is met. There are different types of loops in JavaScript, such as 'for', 'while', and 'do while'.'",
        choices: [
          { text: "What is a 'for' loop?", next: "Boba11js9" },
          { text: "What about the 'while' loop?", next: "Boba11js10" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/loops_explained.mp3"
      },

      Boba11js8: {
        text: "You change the temperature to 25 and run the code: 'if (temperature > 30) { console.log('It’s hot!'); } else if (temperature > 20) { console.log('It’s warm.'); } else { console.log('It’s cool.'); }'. The terminal shows: 'It’s warm.' Captain Control says, 'Well done! The 'else if' condition was true, so it logged 'It’s warm.''",
        choices: [
          { text: "What is a 'for' loop?", next: "Boba11js9" },
          { text: "What is a 'while' loop?", next: "Boba11js10" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/temperature_warm.mp3"
      },

      Boba11js9: {
        text: "Captain Control writes: 'for (let i = 0; i < 5; i++) { console.log(i); }'. 'This is a 'for' loop. It starts at 0, checks the condition 'i < 5', and if true, it runs the code inside the loop. After each iteration, 'i' is incremented by 1.'",
        choices: [
          { text: "Try the 'for' loop yourself.", next: "Boba11js11" },
          { text: "What about the 'while' loop?", next: "Boba11js10" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/for_loop_example.mp3"
      },

      Boba11js10: {
        text: "Captain Control writes: 'let i = 0; while (i < 5) { console.log(i); i++; }'. 'This is a 'while' loop. It checks the condition 'i < 5' before running the code. If true, it runs the code inside and increments 'i'. The loop continues until the condition is false.'",
        choices: [
          { text: "Try the 'while' loop yourself.", next: "Boba11js12" },
          { text: "What about a 'do while' loop?", next: "Boba11js13" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/while_loop_example.mp3"
      },

      Boba11js11: {
        text: "You try the 'for' loop: for (let i = 0; i < 5; i++) { console.log(i); } The terminal shows: 0 1 2 3 4. Captain Control says, 'Well done! The 'for' loop ran 5 times, printing the numbers 0 through 4.'",
        choices: [
          { text: "What is a 'do while' loop?", next: "Boba11js13" },
          { text: "What about breaking loops?", next: "Boba11js14" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/for_loop_result.mp3"
      },

      Boba11js12: {
        text: "You try the 'while' loop: let i = 0; while (i < 5) { console.log(i); i++; } The terminal shows: 0 1 2 3 4. Captain Control says, 'Nice! The 'while' loop also ran 5 times and printed the numbers from 0 to 4.'",
        choices: [
          { text: "What is a 'do while' loop?", next: "Boba11js13" },
          { text: "What about breaking loops?", next: "Boba11js14" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/while_loop_result.mp3"
      },

      Boba11js13: {
        text: "Captain Control explains, 'A 'do while' loop runs at least once, even if the condition is false. For example: do { console.log('Running!'); i++; } while (i < 5);'. This ensures that the code inside the loop is executed at least once.'",
        choices: [
          { text: "Try the 'do while' loop yourself.", next: "Boba11js15" },
          { text: "What about breaking loops?", next: "Boba11js14" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/do_while_example.mp3"
      },

      Boba11js14: {
        text: "Captain Control adds, 'You can use 'break' to exit a loop early. For example, 'for (let i = 0; i < 5; i++) { if (i === 3) { break; } console.log(i); }'. This will stop the loop once 'i' equals 3.'",
        choices: [
          { text: "Try using 'break' in a loop.", next: "Boba11js16" },
          { text: "What about looping with conditions?", next: "Boba11js17" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/loop_break.mp3"
      },

      Boba11js15: {
        text: "You try the 'do while' loop: let i = 0; do { console.log('Running!'); i++; } while (i < 5); The terminal shows: 'Running!' five times. Captain Control says, 'Well done! The 'do while' loop ran at least once and printed 'Running!' 5 times.'",
        choices: [
          { text: "What about breaking loops?", next: "Boba11js14" },
          { text: "How do loops work with conditions?", next: "Boba11js17" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/do_while_result.mp3"
      },

      Boba11js16: {
        text: "You try using 'break' in a loop: for (let i = 0; i < 5; i++) { if (i === 3) { break; } console.log(i); } The terminal shows: 0 1 2. Captain Control says, 'Great! The loop stopped when 'i' reached 3, thanks to the 'break' statement.'",
        choices: [
          { text: "What about looping with conditions?", next: "Boba11js17" },
          { text: "How do we use loops with arrays?", next: "Boba11js18" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/loop_break_result.mp3"
      },

      Boba11js17: {
        text: "Captain Control explains, 'You can combine loops with conditions to make your code more powerful. For example, you can check if a number is even and print it only if true.'",
        choices: [
          { text: "Try combining loops with conditions.", next: "Boba11js18" },
          { text: "Can we use loops with arrays?", next: "Boba11js19" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/loop_condition.mp3"
      },

      Boba11js18: {
        text: "You try combining loops with conditions: for (let i = 0; i < 10; i++) { if (i % 2 === 0) { console.log(i); } } The terminal shows: 0 2 4 6 8. Captain Control says, 'Well done! You've combined a loop with a condition to print even numbers.'",
        choices: [
          { text: "Can we use loops with arrays?", next: "Boba11js19" },
          { text: "What's next?", next: "Boba11js20" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/loop_condition_result.mp3"
      },

      Boba11js19: {
        text: "Captain Control writes: 'let arr = [1, 2, 3, 4, 5]; for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }'. 'This loop goes through each element in the array and prints it.'",
        choices: [
          { text: "Try using loops with arrays.", next: "Boba11js20" },
          { text: "What's next?", next: "Boba11js20" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/array_loop_example.mp3"
      },

      Boba11js20: {
        text: "You try using a loop with an array: let arr = [1, 2, 3, 4, 5]; for (let i = 0; i < arr.length; i++) { console.log(arr[i]); } The terminal shows: 1 2 3 4 5. Captain Control says, 'Nice! You've successfully used a loop to iterate through an array.'",
        choices: [
          { text: "I'm ready for the next adventure!", next: "Boba12js1" }
        ],
        background: "Assets/images",
        sound: "Assets/sounds/array_loop_result.mp3"
      },

        boba12js1: {
          text: "You arrive at the Data Vault, where Captain Structure is waiting for you. 'Welcome to the Data Vault, cadet. Today, we’ll be learning about objects and arrays—two fundamental ways to store and manage data in JavaScript.'",
          choices: [
            { text: "What are objects and arrays?", next: "boba12js2" },
            { text: "I’ve heard about them before. Let’s dive in!", next: "boba12js3" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/vault_ambient.mp3"
        },

        boba12js2: {
          text: "'Objects in JavaScript are like containers for key-value pairs. They allow you to store multiple pieces of data in one place, using a key (or property) to refer to each value. Arrays, on the other hand, are ordered lists of values that you can access by index.'",
          choices: [
            { text: "Can you show me an example of an object?", next: "boba12js4" },
            { text: "What about arrays?", next: "boba12js5" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/data_explained.mp3"
        },

        boba12js3: {
          text: "Captain Structure pulls up a hologram: 'Here’s an object: const spaceship = { name: 'Explorer', type: 'Scout', crew: 5 };'. 'This is an object that holds three properties: name, type, and crew, each with their respective values.'",
          choices: [
            { text: "How do we access the values in this object?", next: "boba12js4" },
            { text: "What is an array?", next: "boba12js5" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/object_explained.mp3"
        },

        boba12js4: {
          text: "Captain Structure continues, 'To access the values in an object, you use dot notation. For example, spaceship.name will give you 'Explorer'. You can also use bracket notation, like spaceship['type'], to get 'Scout'.'",
          choices: [
            { text: "Can we change the values in the object?", next: "boba12js6" },
            { text: "What about arrays?", next: "boba12js5" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/object_access.mp3"
        },

        boba12js5: {
          text: "Captain Structure writes an array example on the screen: 'const planets = ['Earth', 'Mars', 'Jupiter'];'. 'This is an array that contains a list of planets. You can access them using their index. For example, planets[0] will give you 'Earth'.'",
          choices: [
            { text: "What happens if we change the array?", next: "boba12js7" },
            { text: "How can we loop through arrays?", next: "boba12js8" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/array_explained.mp3"
        },

        boba12js6: {
          text: "Captain Structure writes: 'spaceship.crew = 6;'. 'This changes the value of the crew property to 6. Objects are mutable, which means you can change their values after they’ve been created.'",
          choices: [
            { text: "Can we add new properties to objects?", next: "boba12js9" },
            { text: "What happens if we try to change an array?", next: "boba12js7" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/change_object.mp3"
        },

        boba12js7: {
          text: "You change the array: planets.push('Saturn');. 'This adds a new value, 'Saturn', to the end of the array. Arrays are also mutable, and you can add, remove, or change elements at any time.'",
          choices: [
            { text: "Can we loop through arrays?", next: "boba12js8" },
            { text: "What happens if we add an object to an array?", next: "boba12js10" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/array_changed.mp3"
        },

        boba12js8: {
          text: "Captain Structure pulls up a loop: 'for (let i = 0; i < planets.length; i++) { console.log(planets[i]); }'. 'This loop goes through the array and prints each planet. You can loop through arrays using a 'for' loop or the 'forEach' method.'",
          choices: [
            { text: "Can we use 'forEach'?", next: "boba12js11" },
            { text: "What if we add an object to an array?", next: "boba12js10" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/loop_array.mp3"
        },

        boba12js9: {
          text: "You add a new property to the object: 'spaceship.color = 'Silver';'. Captain Structure says, 'Well done! You’ve added a new property to the spaceship object. Objects are flexible—you can add new properties as needed.'",
          choices: [
            { text: "What happens if we try to add an object to an array?", next: "boba12js10" },
            { text: "How can we use 'forEach' to loop through arrays?", next: "boba12js11" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/add_property.mp3"
        },

        boba12js10: {
          text: "You add an object to the array: 'planets.push({ name: 'Pluto', type: 'Dwarf Planet' });'. Captain Structure says, 'Nice! You’ve added an object to the array. This can be useful when you want to store more complex data in your arrays.'",
          choices: [
            { text: "How can we use 'forEach' to loop through arrays?", next: "boba12js11" },
            { text: "What are methods we can use on arrays?", next: "boba12js12" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/array_object.mp3"
        },

        boba12js11: {
          text: "Captain Structure writes: 'planets.forEach(function(planet) { console.log(planet); });'. 'The 'forEach' method is an easy way to loop through arrays. It takes a function that runs for each element in the array.'",
          choices: [
            { text: "Can we use other methods on arrays?", next: "boba12js12" },
            { text: "How about looping through objects?", next: "boba12js13" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/forEach_method.mp3"
        },

        boba12js12: {
          text: "Captain Structure explains, 'There are many useful methods for arrays, such as 'map', 'filter', 'reduce', and 'slice'. These allow you to manipulate the data in various ways. For example, 'map' creates a new array with the results of calling a function on every element.'",
          choices: [
            { text: "Can you show me a 'map' example?", next: "boba12js14" },
            { text: "How can we loop through objects?", next: "boba12js13" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/array_methods.mp3"
        },

        boba12js13: {
          text: "Captain Structure writes: 'for (let key in spaceship) { console.log(key + ': ' + spaceship[key]); }'. 'This is a loop to iterate through the properties of an object. It prints each key and its corresponding value.'",
          choices: [
            { text: "Can we use 'for...of' with objects?", next: "boba12js15" },
            { text: "What are other ways to access object properties?", next: "boba12js16" }
          ],
          background: "Assets/images",
          sound: "sounds/object_loop.mp3"
        },

        boba12js14: {
          text: "You try the 'map' method: 'const lengths = planets.map(function(planet) { return planet.length; });'. The terminal shows an array of planet name lengths. Captain Structure says, 'Nice! The 'map' method allows you to transform the elements of the array.'",
          choices: [
            { text: "What other array methods can we use?", next: "boba12js12" },
            { text: "What about objects?", next: "boba12js13" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/map_example.mp3"
        },

        boba12js15: {
          text: "Captain Structure explains, 'The 'for...of' loop is great for iterating over iterable objects like arrays, but it doesn’t work with objects. You need to use 'for...in' to iterate over the keys of an object.'",
          choices: [
            { text: "What if we want to access a specific property?", next: "boba12js16" },
            { text: "Let’s try an object example.", next: "boba12js13" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/for_of_example.mp3"
        },

        boba12js16: {
          text: "You access a property using bracket notation: spaceship['color']. 'This is useful when you don’t know the key ahead of time or when the key has special characters.'",
          choices: [
            { text: "What other techniques can we use with objects?", next: "boba12js17" },
            { text: "What happens if we delete a property?", next: "boba12js18" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/access_property.mp3"
        },

        boba12js17: {
          text: "Captain Structure shares, 'You can also delete properties using the 'delete' operator. For example, 'delete spaceship.color;' will remove the 'color' property from the object.'",
          choices: [
            { text: "What happens if we delete an array element?", next: "boba12js19" },
            { text: "Can we nest objects and arrays?", next: "boba12js20" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/delete_property.mp3"
        },

        boba12js18: {
          text: "You try deleting the 'color' property: 'delete spaceship.color;'. 'The property is removed from the object. Be cautious when using 'delete', as it permanently removes properties.'",
          choices: [
            { text: "What happens if we delete an array element?", next: "boba12js19" },
            { text: "Can we nest objects and arrays?", next: "boba12js20" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/deleted_property.mp3"
        },

        boba12js19: {
          text: "Captain Structure demonstrates: 'planets.splice(1, 1);'. 'This removes the element at index 1. The 'splice' method allows you to add, remove, or replace elements in an array.'",
          choices: [
            { text: "Can we use 'slice' to remove elements?", next: "boba12js21" },
            { text: "What about nested arrays?", next: "boba12js20" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/splice_example.mp3"
        },

        boba12js20: {
          text: "You try nesting an array in an object: spaceship.planets = ['Earth', 'Mars', 'Jupiter'];. Captain Structure says, 'Nice work! You can nest arrays inside objects and vice versa. This allows for more complex data structures.'",
          choices: [
            { text: "How do we loop through a nested array?", next: "boba12js22" },
            { text: "What are other uses of nested arrays and objects?", next: "boba12js23" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/nested_example.mp3"
        },

        boba12js21: {
          text: "You try using 'slice': 'planets.slice(0, 2);'. 'The slice method returns a shallow copy of a portion of an array, without modifying the original array.'",
          choices: [
            { text: "Can we use 'map' with 'slice'?", next: "boba12js24" },
            { text: "What happens if we slice an object?", next: "boba12js25" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/slice_example.mp3"
        },

        boba12js22: {
          text: "You loop through the nested array: 'spaceship.planets.forEach(function(planet) { console.log(planet); });'. 'You can loop through nested arrays the same way you loop through regular arrays.'",
          choices: [
            { text: "What about looping through an object inside an array?", next: "boba12js25" },
            { text: "What are other things we can do with nested arrays?", next: "boba12js23" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/nested_loop.mp3"
        },

        boba12js23: {
          text: "Captain Structure explains, 'Nested arrays and objects are useful when you have more complex data to manage, like lists of items that contain additional details. You can organize and access the data in various ways.'",
          choices: [
            { text: "Can we loop through objects inside arrays?", next: "boba12js25" },
            { text: "What happens if we modify nested arrays?", next: "boba12js25" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/nested_usage.mp3"
        },

        boba12js24: {
          text: "You use 'map' with 'slice': 'planets.slice(0, 2).map(function(planet) { return planet.toUpperCase(); });'. 'This creates a new array with uppercase planet names.'",
          choices: [
            { text: "Can we map over an object?", next: "boba12js25" },
            { text: "What happens when we modify a nested array?", next: "boba12js25" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/map_slice_example.mp3"
        },

        boba12js25: {
          text: "Captain Structure congratulates you: 'You've mastered objects, arrays, and how to work with them. Keep experimenting, and soon you’ll be able to create powerful structures for your applications!'",
          choices: [
            { text: "Thanks, Captain! I feel ready for the next challenge.", next: "boba13js1" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/congratulations.mp3"
        },
        boba13js1: {
          text: "You step into the Control Center of the spaceship. Captain Interact is standing near a large screen, monitoring the ship's systems. 'Welcome, cadet. Today we’re going to learn how to interact with the controls of our spaceship using events and DOM manipulation.'",
          choices: [
            { text: "What are events and DOM manipulation?", next: "boba13js2" },
            { text: "Let’s dive into the action!", next: "boba13js3" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/space_control.mp3"
        },

        boba13js2: {
          text: "'Events are actions or occurrences that happen in the system. These can be anything from a click, keypress, or mouse movement. DOM manipulation is the ability to change the structure or content of the HTML document, like adding or removing elements, or updating the content.'",
          choices: [
            { text: "Can you show me an example of an event?", next: "boba13js4" },
            { text: "What about DOM manipulation?", next: "boba13js5" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/space_event.mp3"
        },

        boba13js3: {
          text: "Captain Interact taps on a glowing panel: 'Here’s how you can listen for an event, such as a button click:'. 'const button = document.getElementById('startButton'); button.addEventListener('click', function() { console.log('Button clicked!'); });'. 'This code listens for a click on the button and logs a message.'",
          choices: [
            { text: "How does the button get selected?", next: "boba13js4" },
            { text: "What other events can we listen for?", next: "boba13js6" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/button_event.mp3"
        },

        boba13js4: {
          text: "'In this case, 'document.getElementById('startButton')' is how you select an element by its ID. Once you have a reference to the element, you can use the 'addEventListener' method to listen for specific events like 'click', 'keypress', or 'mouseover'.'",
          choices: [
            { text: "What other events can we handle?", next: "boba13js6" },
            { text: "How can we manipulate the DOM?", next: "boba13js5" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/button_press.mp3"
        },

        boba13js5: {
          text: "'Now, let's talk about DOM manipulation. You can change the content, attributes, and structure of elements. For example, you can change the text of a button with: 'button.textContent = 'Start Mission';'. This changes the text inside the button.'",
          choices: [
            { text: "Can we add new elements to the DOM?", next: "boba13js7" },
            { text: "How about removing elements?", next: "boba13js8" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/dom_change.mp3"
        },

        boba13js6: {
          text: "Captain Interact explains, 'You can also listen for other events like 'mouseover', which detects when the mouse hovers over an element, or 'keydown', which detects when a key is pressed on the keyboard.'",
          choices: [
            { text: "What happens if we listen for multiple events?", next: "boba13js9" },
            { text: "Can we add new elements to the DOM?", next: "boba13js7" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/mouseover_event.mp3"
        },

        boba13js7: {
          text: "Captain Interact demonstrates: 'To create a new element and add it to the DOM, you can use 'document.createElement('div')' to create the element and 'document.body.appendChild(newDiv)' to add it to the body of the document.'",
          choices: [
            { text: "How do we set attributes on elements?", next: "boba13js10" },
            { text: "Can we remove elements?", next: "boba13js8" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/create_element.mp3"
        },

        boba13js8: {
          text: "You try removing an element: 'document.body.removeChild(newDiv);'. Captain Interact explains, 'To remove an element, you can use the 'removeChild' method on the parent element.'",
          choices: [
            { text: "Can we set attributes on elements?", next: "boba13js10" },
            { text: "How can we change element styles?", next: "boba13js11" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/remove_element.mp3"
        },

        boba13js9: {
          text: "Captain Interact shows how to listen for multiple events: 'button.addEventListener('click', doSomething); button.addEventListener('mouseover', doSomethingElse);'. 'This way, the button can respond to both click and hover events.'",
          choices: [
            { text: "How do we set attributes on elements?", next: "boba13js10" },
            { text: "Can we manipulate styles?", next: "boba13js11" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/multiple_events.mp3"
        },

        boba13js10: {
          text: "'To set attributes on elements, you can use the 'setAttribute' method. For example: 'button.setAttribute('class', 'active');'. This adds a 'class' attribute to the button with the value 'active'.'",
          choices: [
            { text: "How do we manipulate element styles?", next: "boba13js11" },
            { text: "Can we listen for custom events?", next: "boba13js12" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/set_attribute.mp3"
        },

        boba13js11: {
          text: "'You can manipulate styles using 'element.style.property'. For example, 'button.style.backgroundColor = 'blue';' changes the button's background color to blue.'",
          choices: [
            { text: "Can we add animations?", next: "boba13js13" },
            { text: "What are custom events?", next: "boba13js12" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/style_change.mp3"
        },

        boba13js12: {
          text: "Captain Interact introduces custom events: 'Custom events can be created using the 'CustomEvent' constructor. For example, 'const event = new CustomEvent('missionComplete');'. You can then dispatch this event using 'element.dispatchEvent(event);'.'",
          choices: [
            { text: "Can we add animations?", next: "boba13js13" },
            { text: "What’s next?", next: "boba13js14" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/custom_event.mp3"
        },

        boba13js13: {
          text: "You try adding an animation to the button: 'button.style.transition = 'background-color 0.5s ease';'. Captain Interact explains, 'Using CSS transitions, you can animate changes in properties like colors, sizes, and positions.'",
          choices: [
            { text: "What are other ways to animate?", next: "boba13js15" },
            { text: "What’s next?", next: "boba13js14" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/button_animation.mp3"
        },

        boba13js14: {
          text: "Captain Interact smiles, 'You’ve now learned the basics of events and DOM manipulation. Keep practicing to master the controls of the spaceship!'",
          choices: [
            { text: "Thanks, Captain! I'm ready for the next adventure.", next: "End" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/mission_complete.mp3"
        },

        boba13js15: {
          text: "Captain Interact shows you other ways to animate: 'You can use keyframes with CSS animations to create more complex animations. For example, '@keyframes moveButton { from { left: 0px; } to { left: 100px; }}'.'",
          choices: [
            { text: "What’s next?", next: "boba13js14" }
          ],
          background: "Assets/images",
          sound: "Assets/sounds/animation_experiment.mp3"
        },

          boba14js1: {
            text: "The lights flicker as you enter the Galactic Code Lab. Commander Syntax stands in front of a massive holographic screen displaying alien code. 'Welcome, cadet! Today, you’re going to learn about the most advanced features in JavaScript: ES6 and beyond.'",
            choices: [
              { text: "What’s ES6? Tell me more!", next: "boba13js2" },
              { text: "Let’s get started with the new features!", next: "boba13js3" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/lab_entrance.mp3"
          },

          boba13js2: {
            text: "'ES6, also known as ECMAScript 6, is a major update to JavaScript that introduced several new features to make the language more powerful and efficient. It’s the foundation for many features you'll use in modern JavaScript.'",
            choices: [
              { text: "What are the first features we should know?", next: "boba13js4" },
              { text: "Can we dive straight into arrow functions?", next: "boba13js5" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/es6_intro.mp3"
          },

          boba13js3: {
            text: "Commander Syntax taps a button, and a holographic panel opens. 'Let's start with one of the first ES6 features: let and const. These allow you to define variables with block scope, unlike var, which has function scope.'",
            choices: [
              { text: "What’s the difference between let and const?", next: "boba13js4" },
              { text: "Can you show an example?", next: "boba13js6" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/variable_scope.mp3"
          },

          boba13js4: {
            text: "'With 'let', you can define a variable that can be reassigned, but with 'const', the variable cannot be reassigned. Example: let x = 10; const y = 20; x = 15; // This works. y = 25; // This throws an error.'",
            choices: [
              { text: "What’s next?", next: "boba13js7" },
              { text: "Can we try an example?", next: "boba13js6" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/let_const.mp3"
          },

          boba13js5: {
            text: "Commander Syntax grins, 'Next up, we have arrow functions. These allow you to write shorter, more concise functions. Here’s an example: const add = (a, b) => a + b;'. 'Arrow functions also bind the 'this' keyword differently than regular functions.'",
            choices: [
              { text: "What do you mean by 'this'?", next: "boba13js8" },
              { text: "What’s the difference between a regular function and an arrow function?", next: "boba13js9" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/arrow_function.mp3"
          },

          boba13js6: {
            text: "You try using 'let' and 'const': 'let a = 5; const b = 10; a = 7; // This works, b = 12; // This throws an error.' Commander Syntax nods, 'Great! Now, let’s move on to arrow functions.'",
            choices: [
              { text: "What’s next?", next: "boba13js7" },
              { text: "How do arrow functions work?", next: "boba13js5" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/example_test.mp3"
          },

          boba13js7: {
            text: "'Let’s talk about template literals. With ES6, we got backticks (`) which allow us to embed variables and expressions directly into strings. Example: const name = 'Alice'; console.log(`Hello, ${name}!`); // 'Hello, Alice!'.'",
            choices: [
              { text: "Can we use expressions in template literals?", next: "boba13js10" },
              { text: "What’s next?", next: "boba13js11" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/template_literal.mp3"
          },

          boba13js8: {
            text: "'In an arrow function, 'this' refers to the context in which the function was created. In a regular function, 'this' refers to the object that called the function. Arrow functions are useful when you want to retain the 'this' value from the surrounding context.'",
            choices: [
              { text: "Got it! What’s next?", next: "boba13js11" },
              { text: "Let’s go back and try an example!", next: "boba13js6" }
            ],
            background: "Assets/images/this_keyword.jpg",
            sound: "Assets/sounds/this_explanation.mp3"
          },

          boba13js9: {
            text: "'A regular function would look like this: functifunctiiion add(a, b) { return a + b; }. An arrow function is much more concise: const add = (a, b) => a + b;'. The main difference is in how 'this' works in these functions.'",
            choices: [
              { text: "Can we move on?", next: "boba13js7" },
              { text: "Let’s try an arrow function!", next: "boba13js6" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/regular_arrow.mp3"
          },

          boba13js10: {
            text: "'Yes! You can embed complex expressions within template literals. For example: const a = 5; const b = 10; console.log(`The sum of ${a} and ${b} is ${a + b}.`); // 'The sum of 5 and 10 is 15.'",
            choices: [
              { text: "What’s next?", next: "boba13js11" },
              { text: "Can we try this out?", next: "boba13js6" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/expression_example.mp3"
          },

          boba13js11: {
            text: "'Now, let’s talk about destructuring. This feature allows you to extract values from arrays or objects and assign them to variables. For example: const [x, y] = [1, 2]; const { name, age } = { name: 'Alice', age: 25 };'",
            choices: [
              { text: "Can we try destructuring with an object?", next: "boba13js12" },
              { text: "How do arrays work with destructuring?", next: "boba13js13" }
            ],
            background: "images",
            sound: "sounds/destructuring.mp3"
          },

          boba13js12: {
            text: "You try destructuring an object: 'const { name, age } = { name: 'Bob', age: 30 }; console.log(name, age);'. Commander Syntax says, 'Good job! This allows you to directly extract values from objects.'",
            choices: [
              { text: "How do arrays work?", next: "boba13js13" },
              { text: "What’s next?", next: "boba13js14" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/object_destructuring.mp3"
          },

          boba13js13: {
            text: "'With arrays, destructuring works like this: const [first, second] = [1, 2]; console.log(first, second);. This extracts the first and second elements from the array into separate variables.'",
            choices: [
              { text: "What’s next?", next: "boba13js14" },
              { text: "Can we try array destructuring?", next: "boba13js6" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/array_destructuring.mp3"
          },

          boba13js14: {
            text: "'Next, let’s talk about the spread and rest operators. The spread operator (...) allows you to expand elements of an array or object. The rest operator (...) allows you to gather elements into an array or object.'",
            choices: [
              { text: "What’s the difference between spread and rest?", next: "boba13js15" },
              { text: "Can we try an example?", next: "boba13js16" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/spread_rest.mp3"
          },

          boba13js15: {
            text: "'The spread operator is used to expand an array or object. Example: const arr = [1, 2, 3]; const newArr = [...arr, 4, 5];. The rest operator is used in function arguments to gather multiple elements into a single array: function sum(...numbers) { return numbers.reduce((a, b) => a + b); }'.",
            choices: [
              { text: "Can we try an example?", next: "boba13js16" },
              { text: "What’s next?", next: "boba13js17" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/spread_operator.mp3"
          },

          boba13js16: {
            text: "You try using the spread operator: 'const arr = [1, 2, 3]; const newArr = [...arr, 4, 5];'. Commander Syntax says, 'Great! Now, let’s move on to async/await!'",
            choices: [
              { text: "What’s async/await?", next: "boba13js17" },
              { text: "What’s next?", next: "boba13js18" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/spread_example.mp3"
          },

          boba13js17: {
            text: "'Async/await allows you to work with asynchronous code more easily. The 'async' keyword is used to define a function that will return a promise, and 'await' is used to wait for the promise to resolve before continuing.'",
            choices: [
              { text: "Can we see an example?", next: "boba13js18" },
              { text: "Let’s try async/await!", next: "boba13js19" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/async_await.mp3"
          },

          boba13js18: {
            text: "Commander Syntax explains: 'Here’s an example: async function getData() { let response = await fetch('https://api.example.com/data'); let data = await response.json(); return data; }'. The 'await' ensures the code waits for the response before continuing.'",
            choices: [
              { text: "What’s next?", next: "boba13js19" },
              { text: "Can we try it?", next: "boba13js6" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/await_example.mp3"
          },

          boba13js19: {
            text: "You try using async/await: 'async function fetchData() { let data = await fetch('https://api.example.com'); console.log(data); }'. Commander Syntax nods, 'Nice work! You’re getting the hang of it.'",
            choices: [
              { text: "What’s next?", next: "boba13js20" },
              { text: "Let’s review what we’ve learned!", next: "boba13js20" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/async_try.mp3"
          },

          boba13js20: {
            text: "Commander Syntax smiles, 'You’ve completed your first advanced JavaScript training session! You’ve learned about ES6 features, destructuring, spread/rest operators, and async/await. Great job!'",
            choices: [
              { text: "Thanks! Let’s continue the adventure!", next: "boba14js1" },
              { text: "Review the concepts one more time", next: "boba13js1" }
            ],
            background: "Assets/images",
            sound: "Assets/sounds/victory.mp3"
          },

            Boba14js1: {
              text: "The dimly lit Galactic Data Hub buzzes with energy. You’re standing in front of the Console of Concurrency, a device said to make asynchronous tasks easier to manage. Commander Syntax says, 'Today, cadet, you’ll learn about Promises and async/await, essential tools for managing asynchronous code in JavaScript.'",
              choices: [
                { text: "What’s a Promise?", next: "Boba14js2" },
                { text: "What’s async/await?", next: "Boba14js12" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/galactic_hum.mp3"
            },

            Boba14js2: {
              text: "'A Promise,' Syntax begins, 'is like a contract. It represents a value that might be available now, later, or never. For example, you might request data from an alien server—it takes time, and that’s where Promises shine.'",
              choices: [
                { text: "Can you show an example?", next: "Boba14js3" },
                { text: "What states can a Promise have?", next: "Boba14js4" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/promise_explanation.mp3"
            },

            Boba14js3: {
              text: "Commander Syntax types on the console: 'const promise = new Promise((resolve, reject) => { let success = true; if (success) { resolve('Data received!'); } else { reject('Data fetch failed!'); } });'.",
              choices: [
                { text: "What happens next?", next: "Boba14js5" },
                { text: "Can I try to resolve and reject?", next: "Boba14js6" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/keyboard_clicks.mp3"
            },

            Boba14js4: {
              text: "'A Promise can be in one of three states: pending, fulfilled, or rejected. Pending means the task isn’t finished. Fulfilled means it succeeded. Rejected means it failed.'",
              choices: [
                { text: "Can you show an example?", next: "Boba14js3" },
                { text: "What’s next?", next: "Boba14js5" }
              ],
              background: "Assets/images/promise_states.jpg",
              sound: "Assets/sounds/state_explanation.mp3"
            },

            Boba14js5: {
              text: "'Once a Promise is fulfilled or rejected, you can handle it using `.then()` for success and `.catch()` for errors,' Syntax explains. Example: 'promise.then(data => console.log(data)).catch(error => console.error(error));'.",
              choices: [
                { text: "Can we see it in action?", next: "Boba14js6" },
                { text: "What’s async/await?", next: "Boba14js12" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/data_received.mp3"
            },

            Boba14js6: {
              text: "You write your first Promise: 'const myPromise = new Promise((resolve, reject) => { setTimeout(() => resolve('Task completed!'), 2000); }); myPromise.then(console.log).catch(console.error);'. A message appears: 'Task completed!'",
              choices: [
                { text: "Let’s move on to async/await.", next: "Boba14js12" },
                { text: "What if I want to reject the promise?", next: "Boba14js7" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/success_tone.mp3"
            },

            Boba14js7: {
              text: "You modify the code to reject: 'const myPromise = new Promise((resolve, reject) => { setTimeout(() => reject('Task failed!'), 2000); }); myPromise.then(console.log).catch(console.error);'. The console flashes: 'Task failed!'.",
              choices: [
                { text: "What’s next?", next: "Boba14js8" },
                { text: "Let’s move to async/await.", next: "Boba14js12" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/error_tone.mp3"
            },

            Boba14js8: {
              text: "'Now, let’s talk about chaining Promises. You can chain `.then()` calls to perform a sequence of tasks. Example: 'promise.then(step1).then(step2).catch(errorHandler);'. Each step processes the result of the previous one.'",
              choices: [
                { text: "Show me an example.", next: "Boba14js9" },
                { text: "What’s async/await?", next: "Boba14js12" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/chain_explanation.mp3"
            },

            Boba14js9: {
              text: "Commander Syntax types: 'fetch(url).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));'. 'This fetches data, converts it to JSON, and logs it.'",
              choices: [
                { text: "Let’s move on.", next: "Boba14js12" },
                { text: "What’s next with Promises?", next: "Boba14js10" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/api_call.mp3"
            },

            Boba14js10: {
              text: "'Sometimes, you need to run multiple Promises at the same time. For that, you use `Promise.all()` or `Promise.race()`. Example: 'Promise.all([promise1, promise2]).then(results => console.log(results));'.",
              choices: [
                { text: "What’s the difference between all and race?", next: "Boba14js11" },
                { text: "Let’s move on to async/await.", next: "Boba14js12" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/promise_all.mp3"
            },

            Boba14js11: {
              text: "'With `Promise.all()`, all Promises must succeed for it to resolve. With `Promise.race()`, it resolves or rejects as soon as one Promise is settled.' Example: 'Promise.race([promise1, promise2]);'.",
              choices: [
                { text: "Got it! What’s async/await?", next: "Boba14js12" },
                { text: "Can we try this out?", next: "Boba14js6" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/race_example.mp3"
            },

            Boba14js12: {
              text: "Commander Syntax says, 'Async/await is built on Promises but makes your code look synchronous and easier to read. You use `async` to declare a function and `await` to pause execution until a Promise is resolved.'",
              choices: [
                { text: "Can we see an example?", next: "Boba14js13" },
                { text: "What are the advantages of async/await?", next: "Boba14js14" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/async_explanation.mp3"
            },

            Boba14js13: {
              text: "Example: 'async function fetchData() { try { const response = await fetch(url); const data = await response.json(); console.log(data); } catch (error) { console.error(error); } } fetchData();'.",
              choices: [
                { text: "What’s next?", next: "Boba14js15" },
                { text: "Can I try async/await?", next: "Boba14js6" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/async_code.mp3"
            },

            Boba14js14: {
              text: "'Async/await makes code easier to understand by avoiding `.then()` chains. It also integrates better with try/catch for error handling, unlike Promises which use `.catch()`.'",
              choices: [
                { text: "What’s next?", next: "Boba14js15" },
                { text: "Can we see an example?", next: "Boba14js13" }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/async_benefits.mp3"
            },

            Boba14js15: {
              text: "Commander Syntax concludes: 'Master Promises and async/await, and you’ll tame the complexities of asynchronous programming. You’re now ready to face real-world challenges, cadet!'",
              choices: [
                { text: "Thank you! Time for my next mission!", next: null }
              ],
              background: "Assets/images",
              sound: "Assets/sounds/mission_success.mp3"
            },

              Boba15js_1: {
                text: "The Starship Debugger glides through the Void of Syntax. Commander Syntax approaches you. 'Cadet, today's mission is critical. You'll learn the art of error handling—a skill that separates amateurs from true codemasters.'",
                choices: [
                  { text: "What’s error handling?", next: "Boba15js_2" },
                  { text: "Why is it important?", next: "Boba15js_3" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/starship_hum.mp3"
              },

              Boba15js_2: {
                text: "'Error handling ensures your code gracefully handles unexpected issues. Instead of crashing the system, you can respond intelligently to problems.'",
                choices: [
                  { text: "Can you show an example?", next: "Boba15js_4" },
                  { text: "What causes errors?", next: "Boba15js_5" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/error_intro.mp3"
              },

              Boba15js_3: {
                text: "'In a galaxy of infinite variables, errors are inevitable. Without handling them, your programs could crash, leaving users stranded.'",
                choices: [
                  { text: "How do I handle errors?", next: "Boba15js_4" },
                  { text: "What causes errors?", next: "Boba15js_5" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/important_mission.mp3"
              },

              Boba15js_4: {
                text: "Commander Syntax types: 'try { console.log(unknownVar); } catch (error) { console.error('An error occurred:', error.message); }'. 'The try block tests code; the catch block handles errors.'",
                choices: [
                  { text: "What happens if there’s no error?", next: "Boba15js_6" },
                  { text: "What else can I do in catch?", next: "Boba15js_7" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/code_typing.mp3"
              },

              Boba15js_5: {
                text: "'Errors can be syntax errors, runtime errors, or logical errors. Syntax errors occur when code doesn’t follow language rules. Runtime errors happen during execution. Logical errors are bugs in your logic.'",
                choices: [
                  { text: "How do I catch them?", next: "Boba15js_4" },
                  { text: "Can I prevent errors?", next: "Boba15js_8" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/error_types.mp3"
              },

              Boba15js_6: {
                text: "'If no error occurs, the try block executes normally, and the catch block is skipped. For example: 'try { console.log('Hello, World!'); } catch (error) { console.error(error); }'.'",
                choices: [
                  { text: "What’s next?", next: "Boba15js_7" },
                  { text: "Can I prevent errors?", next: "Boba15js_8" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/success_tone.mp3"
              },

              Boba15js_7: {
                text: "'In the catch block, you can log errors, show user-friendly messages, or retry operations. For example: 'catch (error) { alert('Something went wrong! Please try again.'); }'.'",
                choices: [
                  { text: "Can I throw my own errors?", next: "Boba15js_9" },
                  { text: "What’s next?", next: "Boba15js_8" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/catch_explanation.mp3"
              },

              Boba15js_8: {
                text: "'You can prevent many errors by writing defensive code. For example, check if variables exist before accessing them: 'if (typeof someVar !== 'undefined') { console.log(someVar); }'.'",
                choices: [
                  { text: "Can I throw my own errors?", next: "Boba15js_9" },
                  { text: "What’s next?", next: "Boba15js_10" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/prevention.mp3"
              },

              Boba15js_9: {
                text: "Commander Syntax explains: 'You can throw your own errors using the `throw` statement. For example: 'if (age < 0) { throw new Error('Age cannot be negative'); }'.'",
                choices: [
                  { text: "Can I catch these errors?", next: "Boba15js_10" },
                  { text: "Why would I throw errors?", next: "Boba15js_11" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/throw_explanation.mp3"
              },

              Boba15js_10: {
                text: "'Yes, you can catch thrown errors using try-catch. This allows you to handle specific scenarios gracefully. Example: 'try { throw new Error('Custom error'); } catch (error) { console.log(error.message); }'.'",
                choices: [
                  { text: "What’s next?", next: "Boba15js_12" },
                  { text: "Why would I throw errors?", next: "Boba15js_11" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/handle_custom.mp3"
              },

              Boba15js_11: {
                text: "'Throwing errors helps ensure your code fails early and meaningfully. It’s useful for invalid inputs, unexpected states, or enforcing rules.'",
                choices: [
                  { text: "What’s next?", next: "Boba15js_12" },
                  { text: "Can I try these examples?", next: "Boba15js_4" }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/throw_reason.mp3"
              },

              Boba15js_12: {
                text: "Commander Syntax concludes: 'Error handling is vital for robust, user-friendly programs. With try-catch, throw, and defensive coding, you’re ready to tackle the chaos of the galaxy!'",
                choices: [
                  { text: "Thank you, Commander! On to the next mission.", next: null }
                ],
                background: "Assets/images",
                sound: "Assets/sounds/mission_success.mp3"
              },

                Boba16js1: {
                  text: "The Starship 'Class Builder' arrives at the Orbital Academy. Commander Syntax greets you: 'Welcome, Cadet! Today, you’ll master the art of creating blueprints for objects—JavaScript Classes. Ready to start?'",
                  choices: [
                    { text: "Yes, tell me about classes!", next: "Boba16js2" },
                    { text: "Why are classes important?", next: "Boba16js3" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/starship_arrival.mp3"
                },

                Boba16js2: {
                  text: "Commander Syntax explains: 'A class is a blueprint for creating objects. Instead of defining each object manually, you define a template and instantiate it as needed.'",
                  choices: [
                    { text: "Can you show me an example?", next: "Boba16js4" },
                    { text: "How do I define a class?", next: "Boba16js5" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/class_intro.mp3"
                },

                Boba16js3: {
                  text: "'Classes make your code organized and reusable. Imagine you’re building spaceships. Instead of designing each one from scratch, you create a template and replicate it.'",
                  choices: [
                    { text: "How do I define a class?", next: "Boba16js5" },
                    { text: "Show me an example.", next: "Boba16js4" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/spaceship_fleet.mp3"
                },

                Boba16js4: {
                  text: "Commander Syntax types: 'class Spaceship { constructor(name, speed) { this.name = name; this.speed = speed; } }'. 'This is a class definition with a constructor.'",
                  choices: [
                    { text: "What’s a constructor?", next: "Boba16js6" },
                    { text: "How do I use this class?", next: "Boba16js7" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/typing_example.mp3"
                },

                Boba16js5: {
                  text: "'You define a class using the `class` keyword, followed by a name and curly braces. Inside, you define properties and methods. For example: 'class Spaceship {}'.'",
                  choices: [
                    { text: "What’s next?", next: "Boba16js6" },
                    { text: "Show me an example.", next: "Boba16js4" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/class_definition.mp3"
                },

                Boba16js6: {
                  text: "'A constructor is a special method in a class. It initializes properties when a new object is created. For example: 'constructor(name) { this.name = name; }'.'",
                  choices: [
                    { text: "How do I create objects?", next: "Boba16js7" },
                    { text: "What else can I do with classes?", next: "Boba16js8" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/constructor_explanation.mp3"
                },

                Boba16js7: {
                  text: "'To create an object, use the `new` keyword with the class name: 'const falcon = new Spaceship('Falcon', 900);'. Now 'falcon' is an object with name and speed.'",
                  choices: [
                    { text: "What’s next?", next: "Boba16js8" },
                    { text: "Can classes have methods?", next: "Boba16js9" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/object_creation.mp3"
                },

                Boba16js8: {
                  text: "'Classes can also have methods, which are functions defined inside a class. For example: 'fly() { console.log(`${this.name} is flying!`); }'.'",
                  choices: [
                    { text: "Can I try it?", next: "Boba16js9" },
                    { text: "Can I inherit from another class?", next: "Boba16js10" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/methods_intro.mp3"
                },

                Boba16js9: {
                  text: "Commander Syntax demonstrates: 'falcon.fly();' This calls the 'fly' method of the 'Spaceship' class. 'Methods let your objects perform actions.'",
                  choices: [
                    { text: "Can I inherit methods?", next: "Boba16js10" },
                    { text: "What’s next?", next: "Boba16js11" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/method_call.mp3"
                },

                Boba16js10: {
                  text: "'Yes, classes can inherit from other classes using the `extends` keyword. For example: 'class BattleShip extends Spaceship {}'. Inheritance allows reusability and extension.'",
                  choices: [
                    { text: "Show me an example.", next: "Boba16js11" },
                    { text: "What’s next?", next: "Boba16js12" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/inheritance_intro.mp3"
                },

                Boba16js11: {
                  text: "'Here’s an example of inheritance: 'class BattleShip extends Spaceship { attack() { console.log(`${this.name} is attacking!`); } }'. 'BattleShip' now inherits from 'Spaceship'.'",
                  choices: [
                    { text: "What’s next?", next: "Boba16js12" },
                    { text: "Can I override methods?", next: "Boba16js13" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/inheritance_code.mp3"
                },

                Boba16js12: {
                  text: "'You can override methods by redefining them in the subclass. Use 'super' to access the parent class’s method. For example: 'fly() { super.fly(); console.log(`at warp speed!`); }'.'",
                  choices: [
                    { text: "How can I apply this?", next: "Boba16js14" },
                    { text: "What’s next?", next: "Boba16js15" }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/override_intro.mp3"
                },

                Boba16js13: {
                  text: "Commander Syntax concludes: 'With classes, you can create structured, reusable code. You’ve mastered constructors, methods, inheritance, and overriding. Well done, Cadet!'",
                  choices: [
                    { text: "Thank you, Commander! I’m ready for the next challenge.", next: null }
                  ],
                  background: "Assets/images",
                  sound: "Assets/sounds/mission_complete.mp3"
                },

                  Boba17js1: {
                    text: "You arrive at the Galactic Module Station, where engineers manage the massive data flow across star systems. Captain Import greets you: 'Welcome, Cadet! Today, you'll learn about JavaScript Modules, the backbone of intergalactic code organization.'",
                    choices: [
                      { text: "What are modules?", next: "Boba17js2" },
                      { text: "Why are modules important?", next: "Boba17js3" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/station_intro.mp3"
                  },

                  Boba17js2: {
                    text: "Captain Impport explains: 'Modules allow you to divide your code into reusable pieces. Each module contains specific functionality and can be imported or exported as needed.'",
                    choices: [
                      { text: "How do I create a module?", next: "Boba17js4" },
                      { text: "Why do we use them?", next: "Boba17js3" }
                    ],
                    background: "Assets/images/",
                    sound: "Assets/sounds/module_intro.mp3"
                  },

                  Boba17js3: {
                    text: "'Without modules, all your code would be in one file, like storing the entire galaxy’s data in one spaceship! Modules keep things organized, scalable, and maintainable.'",
                    choices: [
                      { text: "How do I create a module?", next: "Boba17js4" },
                      { text: "Show me an example.", next: "Boba17js5" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/organization_explained.mp3"
                  },

                  Boba17js4: {
                    text: "Captain Import: 'To create a module, use the `export` keyword to make parts of your code available to other files. For example: 'export const fuelLevel = 100;'.'",
                    choices: [
                      { text: "What’s next?", next: "Boba17js5" },
                      { text: "How do I use this module?", next: "Boba17js6" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/export_intro.mp3"
                  },

                  Boba17js5: {
                    text: "'Here’s a full example: Create a file `spaceship.js` with this code: 'export const speed = 900; export function fly() { console.log('Flying at', speed, 'mph'); }'.'",
                    choices: [
                      { text: "How do I use this module?", next: "Boba17js6" },
                      { text: "Can I export more than one thing?", next: "Boba17js7" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/example_code.mp3"
                  },

                  Boba17js6: {
                    text: "Captain Import shows you how to import: 'In another file, use 'import { speed, fly } from './spaceship.js';' Now you can use the `speed` constant and `fly` function.'",
                    choices: [
                      { text: "What if I want to import everything?", next: "Boba17js8" },
                      { text: "What’s next?", next: "Boba17js9" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/import_intro.mp3"
                  },

                  Boba17js7: {
                    text: "'Yes! You can export multiple variables, functions, or classes from a file. Use named exports like 'export { a, b, c }' or default exports for a single export.'",
                    choices: [
                      { text: "Show me default export.", next: "Boba17js10" },
                      { text: "What’s next?", next: "Boba17js9" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/multiple_exports.mp3"
                  },

                  Boba17js8: {
                    text: "'To import everything, use the `*` syntax: 'import * as spaceship from './spaceship.js';' You can now access `spaceship.speed` or `spaceship.fly()'.'",
                    choices: [
                      { text: "What’s next?", next: "Boba17js9" },
                      { text: "Can I use default export?", next: "Boba17js10" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/import_all.mp3"
                  },

                  Boba17js9: {
                    text: "'Modules can also export default values. A default export doesn’t need curly braces when importing. For example, 'export default Spaceship;' and 'import Spaceship from './spaceship.js';'.'",
                    choices: [
                      { text: "What’s next?", next: "Boba17js11" },
                      { text: "Can I mix default and named exports?", next: "Boba17js12" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/default_export.mp3"
                  },

                  Boba17js10: {
                    text: "'Yes, you can mix them. Just remember: a file can have only one default export but multiple named exports. For example: 'export default fly;' and 'export const speed = 900;'.'",
                    choices: [
                      { text: "How do I apply this?", next: "Boba17js13" },
                      { text: "What’s next?", next: "Boba17js14" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/mixed_exports.mp3"
                  },

                  Boba17js11: {
                    text: "Captain Import: 'Modules can also dynamically load using 'import()'. For example, 'import('./spaceship.js').then(module => module.fly());' This is great for large apps!'",
                    choices: [
                      { text: "Can I try this?", next: "Boba17js14" },
                      { text: "What’s next?", next: "Boba17js15" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/dynamic_import.mp3"
                  },

                  Boba17js12: {
                    text: "'Mixing exports can organize your code efficiently. For example: 'export default Spaceship;' and 'export { speed, fly }'. Import as needed with 'import Spaceship, { speed, fly }'.'",
                    choices: [
                      { text: "What’s next?", next: "Boba17js15" },
                      { text: "Can I apply this now?", next: "Boba17js13" }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/mixed_imports.mp3"
                  },

                  Boba17js13: {
                    text: "Captain Import: 'With modules, your code becomes modular, reusable, and scalable. You've mastered exporting, importing, and organizing efficiently. Great work, Cadet!'",
                    choices: [
                      { text: "Thanks, Captain! Ready for the next mission.", next: null }
                    ],
                    background: "Assets/images",
                    sound: "Assets/sounds/mission_complete.mp3"
                  },
                Boba18js1: {
                      text: "Welcome to the Echo Station, a hidden data center orbiting the Binary Star Cluster. Here, time loops and echoes of the past hold secrets to infinite memory. Captain Scope greets you: 'Cadet, today you'll learn about **Closures**, one of the most powerful concepts in JavaScript.'",
                      choices: [
                        { text: "What are closures?", next: "Boba18js2" },
                        { text: "Why do we need closures?", next: "Boba18js3" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/closure_intro.mp3"
                    },

                  Boba18js2: {
                      text: "Captain Scope explains: 'Closures are functions that can remember the variables from their outer scope even after that scope has finished executing.'",
                      choices: [
                        { text: "Can you explain more?", next: "Boba18js4" },
                        { text: "Why is this useful?", next: "Boba18js3" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/Assets/sounds/closure_explained.mp3"
                    },

                    Boba18js3: {
                      text: "'Imagine a space drone carrying a map of the galaxy. Even after leaving Echo Station, the drone remembers the map because of closures. They allow functions to carry their context wherever they go.'",
                      choices: [
                        { text: "Show me an example.", next: "Boba18js5" },
                        { text: "What’s next?", next: "Boba18js4" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/usefulness.mp3"
                    },

                    Boba18js4: {
                      text: "Captain Scope gestures to a glowing console: 'Here’s a simple example: \n\n```javascript\nfunction outerFunction() {\n  let outerVariable = 'I remember this';\n  return function innerFunction() {\n    console.log(outerVariable);\n  };\n}\nconst closure = outerFunction();\nclosure(); // Logs: I remember this\n```'",
                      choices: [
                        { text: "Can I see a real-world use case?", next: "Boba18js6" },
                        { text: "How does this work?", next: "Boba18js7" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/example_code.mp3"
                    },

                    Boba18js5: {
                      text: "Captain Scope: 'In a closure, the **inner function** retains access to variables declared in its **outer function**, even after the outer function has executed and returned.'",
                      choices: [
                        { text: "What’s next?", next: "Boba18js6" },
                        { text: "Show me a deeper explanation.", next: "Boba18js7" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/mechanics.mp3"
                    },

                    Boba18js6: {
                      text: "'Real-world example: Closures can help create private variables in JavaScript. For instance:\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```'",
                      choices: [
                        { text: "Why use closures here?", next: "Boba18js8" },
                        { text: "How does this work?", next: "Boba18js7" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/private_variables.mp3"
                    },

                    Boba18js7: {
                      text: "'When `outerFunction` runs, its scope is preserved. The `innerFunction` retains a reference to the variables inside the outer function, even after the outer function is done executing.'",
                      choices: [
                        { text: "What’s next?", next: "Boba18js8" },
                        { text: "Show me another use case.", next: "Boba18js9" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/scope_explained.mp3"
                    },

                    Boba18js8: {
                      text: "'Closures are powerful for data encapsulation. In the counter example, `count` is not directly accessible. It’s protected inside the function scope, and only accessible through the closure.'",
                      choices: [
                        { text: "What’s next?", next: "Boba18js9" },
                        { text: "Show me a use case in event handling.", next: "Boba18js10" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/encapsulation.mp3"
                    },

                    Boba18js9: {
                      text: "'Closures also help in asynchronous code. Example:\n\n```javascript\nfunction fetchData(url) {\n  const cache = {};\n  return async function() {\n    if (!cache[url]) {\n      cache[url] = await fetch(url).then(res => res.json());\n    }\n    return cache[url];\n  };\n}\nconst getData = fetchData('https://api.example.com/data');\ngetData().then(console.log);\n```'",
                      choices: [
                        { text: "What’s next?", next: "Boba18js10" },
                        { text: "I want to explore more use cases.", next: "Boba18js11" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/async_closures.mp3"
                    },

                    Boba18js10: {
                      text: "'Closures in event handling:\n\n```javascript\nfunction createButton(label) {\n  const button = document.createElement('button');\n  button.innerText = label;\n  button.addEventListener('click', () => {\n    console.log(`Button ${label} clicked!`);\n  });\n  return button;\n}\ndocument.body.appendChild(createButton('Launch')); \n```'",
                      choices: [
                        { text: "What’s next?", next: "Boba18js11" },
                        { text: "I want to revisit the basics.", next: "Boba18js2" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/event_handling.mp3"
                    },

                    Boba18js11: {
                      text: "'Congratulations, Cadet! You’ve mastered closures! From private variables to asynchronous programming, closures are your tool for managing complex code. Use them wisely!'",
                      choices: [
                        { text: "Thanks, Captain! Ready for the next mission.", next: null }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/mission_complete.mp3"
                    },
                    Boba19js1: {
                      text: "Welcome to Nova Core, a futuristic programming hub orbiting Jupiter’s red storm. Captain Lambda greets you: 'Welcome, Cadet! Today, we’ll explore the power of **Higher-Order Functions (HOFs)**. These are functions that take other functions as arguments or return functions. Ready to unlock their potential?'",
                      choices: [
                        { text: "Yes, Captain! Tell me more.", next: "Boba19js2" },
                        { text: "Why are they important?", next: "Boba19js3" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/intro_hof.mp3"
                    },

                    Boba19js2: {
                      text: "Captain Lambda explains: 'HOFs are like command modules that control other functions. They enable flexibility, reusability, and abstraction in your code. Let’s dive in!'",
                      choices: [
                        { text: "Show me an example.", next: "Boba19js4" },
                        { text: "Why do we need HOFs?", next: "Boba19js3" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/explanation.mp3"
                    },

                    Boba19js3: {
                      text: "'Imagine you have to process a fleet of drones, each with different tasks. Instead of hardcoding each one, you can use HOFs to assign tasks dynamically. This makes your code scalable and efficient!'",
                      choices: [
                        { text: "Interesting. Show me how!", next: "Boba19js4" },
                        { text: "What’s next?", next: "Boba19js5" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/importance.mp3"
                    },

                    Boba19js4: {
                      text: "Captain Lambda: 'Here’s a simple example of a higher-order function:\n\n```javascript\nfunction greet(callback) {\n  console.log('Hello!');\n  callback();\n}\nfunction sayGoodbye() {\n  console.log('Goodbye!');\n}\ngreet(sayGoodbye);\n```'",
                      choices: [
                        { text: "How does this work?", next: "Boba19js6" },
                        { text: "What’s next?", next: "Boba19js5" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/code_example.mp3"
                    },

                    Boba19js5: {
                      text: "'HOFs are commonly used in array methods like `map`, `filter`, and `reduce`. For example:\n\n```javascript\nconst numbers = [1, 2, 3, 4];\nconst squares = numbers.map(num => num * num);\nconsole.log(squares); // [1, 4, 9, 16]\n```'",
                      choices: [
                        { text: "Why use `map`?", next: "Boba19js7" },
                        { text: "Show me another example.", next: "Boba19js8" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/array_methods.mp3"
                    },

                    Boba19js6: {
                      text: "'In the `greet` example, the function `sayGoodbye` is passed as an argument to `greet`. This demonstrates how HOFs can accept other functions and execute them.'",
                      choices: [
                        { text: "What’s next?", next: "Boba19js5" },
                        { text: "Can you explain `reduce`?", next: "Boba19js9" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/callback.mp3"
                    },

                    Boba19js7: {
                      text: "'Using `map` simplifies applying operations to an entire array. Instead of writing a loop, you focus on the operation (e.g., squaring numbers).'",
                      choices: [
                        { text: "What’s next?", next: "Boba19js8" },
                        { text: "Can you explain `reduce`?", next: "Boba19js9" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/map.mp3"
                    },

                    Boba19js8: {
                      text: "'Another example: Using `filter` to select specific items from an array:\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst even = numbers.filter(num => num % 2 === 0);\nconsole.log(even); // [2, 4]\n```'",
                      choices: [
                        { text: "What’s next?", next: "Boba19js9" },
                        { text: "Can you explain `reduce`?", next: "Boba19js9" }
                      ],
                      background: "Assets/images",
                      sound: "Assets/sounds/filter.mp3"
                    },
Boba19js9: {
  text: "'Let’s dive into `reduce`, a versatile HOF for reducing an array to a single value:\n\n```javascript\nconst numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\nconsole.log(sum); // 10\n```'",
  choices: [
    { text: "How does it work?", next: "Boba19js10" },
    { text: "Show me more use cases.", next: "Boba19js11" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/reduce.mp3"
},

Boba19js10: {
  text: "'In `reduce`, the callback takes two arguments: `acc` (accumulator) and `num` (current value). The initial value is `0`. Each iteration updates the accumulator.'",
  choices: [
    { text: "What’s next?", next: "Boba19js11" },
    { text: "Show me advanced use cases.", next: "Boba19js12" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/reduce_working.mp3"
},

Boba19js11: {
  text: "'HOFs are also used in function composition:\n\n```javascript\nconst add = x => x + 1;\nconst multiply = x => x * 2;\nconst compose = (f, g) => x => f(g(x));\nconst addThenMultiply = compose(multiply, add);\nconsole.log(addThenMultiply(2)); // 6\n```'",
  choices: [
    { text: "What’s next?", next: "Boba19js12" },
    { text: "Let’s review from the start.", next: "Boba19js2" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/composition.mp3"
},

Boba19js12: {
  text: "'Congratulations, Cadet! You’ve unlocked the secrets of HOFs. Use them to simplify, modularize, and power up your code!'",
  choices: [
    { text: "Thanks, Captain! Ready for the next mission.", next: null }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/mission_complete.mp3"
},

boba20js1: {
  text: "Welcome to the Galactic Code Academy! In the heart of the Andromeda galaxy, Commander Proto invites you to explore the secret of **Prototypes and Inheritance**. 'Cadet, today you'll unlock the power of prototypes and learn how objects in JavaScript share their abilities!'",
  choices: [
    { text: "I'm ready, Commander!", next: "boba20js2" },
    { text: "What are prototypes?", next: "boba20js3" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/prototype_intro.mp3"
},

boba20js2: {
  text: "Commander Proto explains: 'In JavaScript, every object has a hidden link to another object called a **prototype**. It’s how objects inherit properties and methods from each other.'",
  choices: [
    { text: "Show me an example!", next: "boba20js4" },
    { text: "Why is inheritance important?", next: "boba20js5" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/prototype_explained.mp3"
},

boba20js3: {
  text: "'Prototypes are like blueprints. Imagine you're building a fleet of starships. Instead of designing each one from scratch, you can inherit features from a base starship blueprint!'",
  choices: [
    { text: "Interesting! Show me how it works.", next: "boba20js4" },
    { text: "I still don’t understand. More details, please.", next: "boba20js6" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/prototype_blueprint.mp3"
},

boba20js4: {
  text: "Commander Proto shows you a simple example:\n\n```javascript\nconst ship = {\n  type: 'Starship',\n  fly: function() {\n    console.log('Flying through space!');\n  }\n};\n\nconst falcon = Object.create(ship);\nconsole.log(falcon.type); // 'Starship'\nfalcon.fly();\n```",
  choices: [
    { text: "How does `Object.create` work?", next: "boba20js7" },
    { text: "What happens under the hood?", next: "boba20js8" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/prototype_code.mp3"
},

boba20js5: {
  text: "'Inheritance lets you avoid duplicating code. For example, if all starships share the ability to fly, you only need to define it once in the prototype!'",
  choices: [
    { text: "Show me an example.", next: "boba20js4" },
    { text: "What’s next?", next: "boba20js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/inheritance.mp3"
},

boba20js6: {
  text: "'Alright, let’s simplify it. Prototypes let objects borrow methods or properties. Think of it as passing down family traits in a galactic dynasty!'",
  choices: [
    { text: "Got it! Show me an example.", next: "boba20js4" },
    { text: "What’s next?", next: "boba20js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/prototype_family.mp3"
},

boba20js7: {
  text: "'`Object.create` creates a new object and sets its prototype to the object passed as the argument. It’s how the falcon inherits properties from the ship!'",
  choices: [
    { text: "What happens under the hood?", next: "boba20js8" },
    { text: "What’s next?", next: "boba20js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/object_create.mp3"
},

boba20js8: {
  text: "'Under the hood, JavaScript uses a **prototype chain**. If a property isn’t found in the current object, it searches the prototype and continues up the chain until it finds the property or hits null.'",
  choices: [
    { text: "Show me the prototype chain.", next: "boba20js10" },
    { text: "What’s next?", next: "boba20js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/prototype_chain.mp3"
},

boba20js9: {
  text: "Commander Proto continues: 'Let’s explore **constructor functions**. They’re a way to create objects and set their prototype in one step.'",
  choices: [
    { text: "Show me an example.", next: "boba20js11" },
    { text: "What are the benefits?", next: "boba20js12" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/constructor_intro.mp3"
},

boba20js10: {
  text: "'The prototype chain in our starship example looks like this:\n\nfalcon → ship → Object.prototype → null\n\nThis chain ensures all objects share basic properties like `toString()`.'",
  choices: [
    { text: "What’s next?", next: "boba20js9" },
    { text: "Let’s explore inheritance further.", next: "boba20js13" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/prototype_chain_explained.mp3"
},

boba20js11: {
  text: "Commander Proto shows a constructor function:\n\n```javascript\nfunction Starship(name) {\n  this.name = name;\n}\nStarship.prototype.fly = function() {\n  console.log(this.name + ' is flying!');\n};\n\nconst enterprise = new Starship('Enterprise');\nenterprise.fly();\n```",
  choices: [
    { text: "How does this work?", next: "boba20js14" },
    { text: "What’s next?", next: "boba20js13" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/constructor_code.mp3"
},

boba20js12: {
  text: "'Constructor functions simplify creating multiple similar objects. They set the prototype automatically, saving you from manual steps.'",
  choices: [
    { text: "Show me an example.", next: "boba20js11" },
    { text: "What’s next?", next: "boba20js13" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/constructor_benefits.mp3"
},

boba20js13: {
  text: "'You’ve now learned about prototypes, inheritance, and constructor functions. Ready to level up with **class syntax**?'",
  choices: [
    { text: "Yes, Commander!", next: "boba20js15" },
    { text: "Let’s review prototypes again.", next: "boba20js1" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/level_up.mp3"
},

boba20js15: {
  text: "Congratulations, Cadet! You’ve completed the mission on prototypes and inheritance. Apply these concepts to build scalable and efficient code. Onward to new challenges!",
  choices: [
    { text: "Thanks, Commander! Ready for the next mission.", next: null }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/mission_complete.mp3"
},
boba21js1: {
  text: "Welcome to the Time Nexus, a place where JavaScript processes events and tasks. Chronos, the Guardian of the Event Loop, greets you. 'Traveler, today you’ll learn how the Event Loop orchestrates JavaScript’s execution flow. Ready to dive in?'",
  choices: [
    { text: "Yes, let’s start the journey!", next: "boba21js2" },
    { text: "What is the Event Loop?", next: "boba21js3" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/event_loop_intro.mp3"
},
boba21js2: {
  text: "Chronos explains: 'The Event Loop is like the conductor of an orchestra, managing the execution of synchronous and asynchronous tasks in JavaScript.'",
  choices: [
    { text: "How does it work?", next: "boba21js4" },
    { text: "What’s the role of asynchronous tasks?", next: "boba21js5" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/conductor.mp3"
},
boba21js3: {
  text: "'The Event Loop is what allows JavaScript to handle tasks efficiently, even with a single thread. It ensures tasks are executed in the right order, without blocking the main thread.'",
  choices: [
    { text: "Tell me more about the main thread.", next: "boba21js6" },
    { text: "How does it process tasks?", next: "boba21js4" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/event_loop_explained.mp3"
},
boba21js4: {
  text: "Chronos sketches a flowchart: 'JavaScript starts with the **Call Stack**, where synchronous code is executed. If a task takes too long or is asynchronous, it goes to the **Task Queue** or **Microtask Queue**, depending on its type.'",
  choices: [
    { text: "What’s the difference between these queues?", next: "boba21js7" },
    { text: "What happens next?", next: "boba21js8" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/task_queue.mp3"
},
boba21js5: {
  text: "'Asynchronous tasks like `setTimeout`, Promises, and event listeners allow JavaScript to wait for external events without blocking other tasks. These tasks are crucial for responsive applications!'",
  choices: [
    { text: "Show me an example.", next: "boba21js9" },
    { text: "What’s the role of the Event Loop here?", next: "boba21js10" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/async_intro.mp3"
},
boba21js6: {
  text: "'The main thread is where all the JavaScript execution happens. Tasks like rendering the UI and running code are done here, one step at a time.'",
  choices: [
    { text: "What happens when there are delays?", next: "boba21js11" },
    { text: "How does the Event Loop help?", next: "boba21js4" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/main_thread.mp3"
},
boba21js7: {
  text: "'The **Task Queue** handles callbacks like `setTimeout` or `setInterval`, while the **Microtask Queue** handles Promises and `MutationObserver` callbacks. Microtasks have priority!'",
  choices: [
    { text: "Why do Microtasks have priority?", next: "boba21js12" },
    { text: "What happens when both queues have tasks?", next: "boba21js13" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/queue_priority.mp3"
},
boba21js8: {
  text: "'The Event Loop continuously checks the Call Stack. If it’s empty, it picks tasks from the Microtask Queue first, then from the Task Queue.'",
  choices: [
    { text: "What’s a real-life analogy?", next: "boba21js14" },
    { text: "How does this affect performance?", next: "boba21js15" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/event_loop_cycle.mp3"
},
boba21js9: {
  text: "Chronos demonstrates:\n\n```javascript\nconsole.log('Start');\n\nsetTimeout(() => {\n  console.log('Timeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise');\n});\n\nconsole.log('End');\n```\n\n'What will be the output?' he asks.",
  choices: [
    { text: "Start, End, Promise, Timeout", next: "boba21js16" },
    { text: "Start, Promise, Timeout, End", next: "boba21js17" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/code_example.mp3"
},
boba21js10: {
  text: "'The Event Loop ensures that asynchronous tasks don’t block synchronous ones. It schedules them efficiently for seamless execution.'",
  choices: [
    { text: "Show me an example.", next: "boba21js9" },
    { text: "What’s next?", next: "boba21js18" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/scheduling.mp3"
},
boba21js11: {
  text: "'When there are delays, the Call Stack gets blocked, making the UI unresponsive. The Event Loop ensures such delays don’t freeze everything.'",
  choices: [
    { text: "How does it manage this?", next: "boba21js8" },
    { text: "What’s next?", next: "boba21js18" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/blocking.mp3"
},
boba21js12: {
  text: "'Microtasks are prioritized to handle urgent updates, such as resolving Promises quickly. This keeps applications smooth and responsive!'",
  choices: [
    { text: "What’s next?", next: "boba21js13" },
    { text: "Let’s see the Event Loop in action.", next: "boba21js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/microtasks.mp3"
},
boba21js13: {
  text: "'When both queues have tasks, the Event Loop finishes all Microtasks before moving to the Task Queue. This ensures high-priority updates happen first.'",
  choices: [
    { text: "What’s a real-life analogy?", next: "boba21js14" },
    { text: "How does this affect performance?", next: "boba21js15" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/task_priority.mp3"
},
boba21js14: {
  text: "'Imagine a chef cooking. The Microtask Queue is like finishing urgent garnishes before starting the next dish in the Task Queue. It keeps everything running smoothly!'",
  choices: [
    { text: "That makes sense. What’s next?", next: "boba21js18" },
    { text: "Let’s see another example.", next: "boba21js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/chef_analogy.mp3"
},
boba21js15: {
  text: "'Efficient task handling ensures better performance and responsiveness. Without it, applications could freeze or lag.'",
  choices: [
    { text: "Got it. What’s next?", next: "boba21js18" },
    { text: "Show me another example.", next: "boba21js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/performance.mp3"
},
boba21js16: {
  text: "'Correct! Microtasks (Promise) run beftfore tasks (setTimeout), so the output is: Start, End, Promise, Timeout.'",
  choices: [
    { text: "What’s next?", next: "boba21js18" },
    { text: "Let’s review the flow again.", next: "boba21js1" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/correct.mp3"
},
boba21js17: {
  text: "'Not quite. Remember, Microtasks have priority over Tasks. Try again!'",
  choices: [
    { text: "Start, End, Promise, Timeout", next: "boba21js16" },
    { text: "Explain again, please.", next: "boba21js4" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/incorrect.mp3"
},
boba21js18: {
  text: "Chronos congratulates you: 'You’ve mastered the Event Loop! This knowledge will help you debug and write efficient asynchronous code. Great work, traveler!'",
  choices: [
    { text: "Thanks, Chronos! On to the next mission.", next: null }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/mission_complete.mp3"
},
boba22js1: {
  text: "You enter the Chamber of Destiny, where Keeper Byte stands beside a glowing orb. 'Welcome to the world of Promises,' Byte says. 'Here, you'll learn to tame asynchronous operations.'",
  choices: [
    { text: "What’s a Promise?", next: "boba22js2" },
    { text: "Why do I need Promises?", next: "boba22js3" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/promise_intro.mp3"
},
boba22js2: {
  text: "'A Promise,' Byte explains, 'is a special object in JavaScript that represents a value that may be available now, later, or never. Think of it as a magical contract!'",
  choices: [
    { text: "Show me an example of a Promise.", next: "boba22js4" },
    { text: "How do Promises work?", next: "boba22js5" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/promise_explained.mp3"
},
boba22js3: {
  text: "'Promises are essential for managing asynchronous operations,' Byte says. 'They let you write cleaner and more readable code than traditional callbacks.'",
  choices: [
    { text: "What’s an example of a Promise?", next: "boba22js4" },
    { text: "How do Promises work?", next: "boba22js5" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/promise_need.mp3"
},
boba22js4: {
  text: "Byte summons the Orb of Code:\n\n```javascript\nlet promise = new Promise((resolve, reject) => {\n  let success = true;\n\n  if (success) {\n    resolve('Operation successful!');\n  } else {\n    reject('Operation failed.');\n  }\n});\n\npromise\n  .then(result => console.log(result)) // If resolved\n  .catch(error => console.log(error)); // If rejected\n```",
  choices: [
    { text: "Explain resolve and reject.", next: "boba22js6" },
    { text: "What does .then() do?", next: "boba22js7" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/code_example.mp3"
},
boba22js5: {
  text: "'Promises have three states: **Pending**, **Fulfilled**, and **Rejected**. They start in pending, and then either resolve (fulfilled) or reject (rejected).' Byte gestures to a diagram showing the states.",
  choices: [
    { text: "What happens after a Promise resolves?", next: "boba22js7" },
    { text: "Can you show an example?", next: "boba22js4" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/promise_states.mp3"
},
boba22js6: {
  text: "'**Resolve** and **reject** are functions you use to move the Promise from its **Pending** state. Resolve fulfills the Promise, while reject marks it as failed.'",
  choices: [
    { text: "What does .then() do?", next: "boba22js7" },
    { text: "What does .catch() do?", next: "boba22js8" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/resolve_reject.mp3"
},
boba22js7: {
  text: "'The **.then()** method runs after a Promise is resolved. It takes a callback function as an argument and executes it with the resolved value.'",
  choices: [
    { text: "What does .catch() do?", next: "boba22js8" },
    { text: "How do I handle multiple Promises?", next: "boba22js9" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/then_explained.mp3"
},
boba22js8: {
  text: "'The **.catch()** method handles errors. It’s triggered when a Promise is rejected. This helps in managing failures gracefully.'",
  choices: [
    { text: "How do I handle multiple Promises?", next: "boba22js9" },
    { text: "What’s .finally()?", next: "boba22js10" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/catch_explained.mp3"
},
boba22js9: {
  text: "'You can manage multiple Promises using **Promise.all()**, which runs all Promises in parallel and resolves when all are fulfilled. Or use **Promise.race()**, which resolves as soon as one Promise resolves.'",
  choices: [
    { text: "Show me an example of Promise.all().", next: "boba22js11" },
    { text: "What’s .finally()?", next: "boba22js10" }
  ],
  background: "Assets/images/multiple_promises.jpg",
  sound: "Assets/sounds/multiple_promises.mp3"
},
boba22js10: {
  text: "'The **.finally()** method runs after a Promise is settled, regardless of whether it was resolved or rejected. It’s great for cleanup tasks!'",
  choices: [
    { text: "Show me a complete example.", next: "boba22js11" },
    { text: "Can we use Promises with async/await?", next: "boba22js12" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/finally_explained.mp3"
},
boba22js11: {
  text: "Byte conjures another Orb:\n\n```javascript\nlet promise1 = Promise.resolve('First!');\nlet promise2 = Promise.resolve('Second!');\n\nPromise.all([promise1, promise2])\n  .then(results => console.log(results)) // Output: ['First!', 'Second!']\n  .catch(error => console.log(error));\n```",
  choices: [
    { text: "Can we use Promises with async/await?", next: "boba22js12" },
    { text: "I think I’m ready for the next quest.", next: boba}
  ],
  background: "Assets/images",
  sound: "Assets/sounds/code_example.mp3"
},
boba22js12: {
  text: "'Yes, async/await is built on Promises. It makes asynchronous code look synchronous, improving readability. But that’s a story for another time!'",
  choices: [
    { text: "I think I’m ready for the next quest.", next: null }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/async_await.mp3"
},
boba23js1: {
  text: "'In this part, we’ll dive into **Promises**. Promises represent the eventual completion or failure of an asynchronous operation.'",
  choices: [
    { text: "What is a Promise?", next: "boba23js2" },
    { text: "How do we create a Promise?", next: "boba23js3" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/promise_intro.mp3"
},
boba23js2: {
  text: "'A **Promise** is like a guarantee. It’s a PLACEholder for a value that may not be available yet, but will be at some point in the future.'",
  choices: [
    { text: "How do we create a Promise?", next: "boba23js3" },
    { text: "What happens if a Promise fails?", next: "boba23js4" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/promise_example.mp3"
},
boba23js3: {
  text: "'To create a Promise, use the **new Promise()** constructor. It takes a function with two parameters: resolve and reject.'",
  choices: [
    { text: "What happens if a Promise fails?", next: "boba23js4" },
    { text: "What is response.json()?", next: "boba23js5" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/promise_creation.mp3"
},
boba23js4: {
  text: "'If a Promise fails, we use the **reject()** function to handle the error. You can catch errors later using **.catch()**.'",
  choices: [
    { text: "What is response.json()?", next: "boba23js5" },
    { text: "Can we handle errors?", next: "boba23js6" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/fetch_explained.mp3"
},
boba23js5: {
  text: "'**response.json()** parses the response body as JSON. This allows you to work with the data in a more readable format, like an object or array.'",
  choices: [
    { text: "What is the .catch() method?", next: "boba23js6" },
    { text: "Can we handle multiple requests?", next: "boba23js7" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/response_json.mp3"
},
boba23js6: {
  text:"2e **.catch()** method is used to handle errors that occur during the fetch process. It will catch any errors in the Promise chain and execute the code inside the callback.'",
  choices: [
    { text: "Can we handle multiple requests?", next: "boba23js7" },
    { text: "What’s a real-life API example?", next: "boba23js8" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/catch_method.mp3"
},
boba23js7: {
  text: "'You can handle multiple requests using **Promise.all()**, just like with Promises. It waits for all the fetch calls to resolve before continuing.'",
  choices: [
    { text: "Show me an example of Promise.all().", next: "boba23js9" },

    { text: "What’s a real-life API example?", next: "boba23js8" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/multiple_fetch.mp3"
},
boba23js8: {
  text: "'A popular API is the **OpenWeatherMap API**. You can use it to fetch current weather data for any location.'",
  choices: [
    { text: "Show me a working example.", next: "boba23js9" },
    { text: "Can we use this in our code?", next: "boba23js10" }
  ],
  background: "Assets/images/weather_api.jpg",
  sound: "Assets/sounds/weather_api.mp3"
},
boba23js9: {
  text: "Byte conjures an example:\n\n```javascript\nfetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.log(error));\n```",
  choices: [
    { text: "Can we use this in our code?", next: "boba23js10" },
    { text: "I feel confident with APIs now!", next: null }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/weather_example.mp3"
},
boba23js10: {
  text: "'Yes, you can plug in your **API Key** from OpenWeatherMap into the URL to get the current weather data for your city. But remember to keep your API Key secure!'",
  choices: [
    { text: "I feel confident with APIs now!", next: null }
  ],
  background: "Assets/images",
   sound: "Assets/sounds/api_key.mp3"
},
 boba24css1: {
    text: "Welcome to the CSS Bakery! Today, you'll help our bakers arrange their items while learning about alignment properties. Ready?",
    choices: [
      { text: "Yes, let's start!", next: "boba24css2" },
      { text: "No, I need a coffee break.", next: "boba24css3" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/bakery_intro.mp3"
  },
  oba24css2: {
    text: "Baker Lily needs help arranging pastries on a tray. Use `align-content` to space them. Should they be evenly spaced or grouped in the center?",
    choices: [
      { text: "Evenly spaced (`space-between`)", next: "boba24css4" },
      { text: "Grouped in the center (`center`)", next: "boba24css5" }
    ],
    background:  "Assets/images",
    sound: "Assets/sounds/task.mp3"
  },
  boba24css3: {
    text: "The coffee machine is broken! Time to start the tutorial instead.",
    choices: [
      { text: "Alright, let's bake!", next: "boba24css2" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/coffee_fail.mp3"
  },
  boba24css4: {
    text: "Great job! The pastries look perfect with `align-content: space-between;`. Lily is impressed!",
    choices: [
      { text: "Learn about `align-self` next.", next: "boba24css6" },
      { text: "Help another baker.", next: "boba24css1" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/success.mp3"
  },
  boba24css5: {
    text: "Hmm, the pastries are clumped in the center. Lily suggests using `align-content: space-between;`. Try again!",
    choices: [
      { text: "Retry with `space-between`.", next: "boba24css2" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/fail.mp3"
  },
  boba24css6: {
    text: "Baker Tom needs help aligning a cake topper. Should it be at the top or bottom of the cake? Use `align-self` to decide.",
    choices: [
      { text: "Align it to the top (`flex-start`)", next: "boba24css7" },
      { text: "Align it to the bottom (`flex-end`)", next: "boba24css8" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/task.mp3"
  },
  boba24css7: {
    text: "Fantastic! The topper is perfectly aligned with `align-self: flex-start;`. Tom claps in appreciation!",
    choices: [
      { text: "Learn about `align-items` next.", next: "boba24css9" },
      { text: "Return to the main page.", next: "boba24css1" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/success.mp3"
  },
  boba24css8: {
    text: "Oh no! The topper slid to the bottom of the cake. Tom suggests using `align-self: flex-start;`. Try again!",
    choices: [
      { text: "Retry aligning to the top.", next: "boba24css6" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/fail.mp3"
  },
  boba24css9: {
    text: "Baker Sam needs help aligning cupcakes in a box. Should they stretch to fill the box or stay centered? Use `align-items`.",
    choices: [
      { text: "Stretch to fill the box (`stretch`)", next: "boba24css10" },
      { text: "Stay centered (`center`)", next: "boba24css11" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/task.mp3"
  },
  boba24css10: {
    text: "Amazing! The cupcakes fill the box perfectly with `align-items: stretch;`. You're a CSS alignment pro!",
    choices: [
      { text: "Return to the main page.", next: "boba24css1" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/success.mp3"
  },
boba24css11: {
    text: "Hmm, the cupcakes are centered, but there's too much empty space. Try using `align-items: stretch;`.",
    choices: [
      { text: "Retry with `stretch`.", next: "boba24css9" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/fail.mp3"
  },
  boba24css12: {
    text: "Welcome to the Animation Bakery! Today, we will learn how to make things move using CSS animations. Ready to bake some animated magic?",
    choices: [
      { text: "Yes, let's start!", next: "boba24css13" },
      { text: "Maybe later, I need a coffee break.", next: "boba24css14" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/animation_intro.mp3"
  },
  boba24css13: {
    text: "Our first task is to make a cupcake bounce up and down! To do this, we need to use the `@keyframes` rule. Let's make the cupcake jump!",
    choices: [
      { text: "Use `@keyframes` to animate the cupcake", next: "boba24css15" },
      { text: "What is `@keyframes`? Show me the basics!", next: "boba24css16" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/cupcake_bounce.mp3"
  },
  boba24css14: {
    text: "You take a break while we prepare the cupcake animation. Ready when you are!",
    choices: [
      { text: "Alright, let's bake!", next: "boba24css13" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/coffee_sound.mp3"
  },
  boba24css15: {
    text: "Awesome! Now, let's define the bounce animation using `@keyframes`. Here's an example:",
    choices: [
      { text: "Apply `@keyframes bounce` to the cupcake", next: "boba24css17" },
      { text: "Add some animation delay", next: "boba24css18" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/success_bounce.mp3"
  },
  boba24css16: {
    text: "The `@keyframes` rule allows you to create animations by specifying the start and end points of the animation, along with any intermediate steps. Let’s create a simple bounce animation:",
    choices: [
      { text: "Now, let's animate the cupcake!", next: "boba24css17" }
    ],
    background: "Assets/images",
    sound: "Assets/sounds/explanation.mp3"
  },
  boba24css17: {
    text: "The cupcake is bouncing! Great job. Now, let's add a bit more flair. How about we add an animation delay? This will make the animation start after a short delay.",
   choices :[
    { text: "Apply the code!", next: "boba24css17" },
    { text: "Can we try something else?", next: "boba24css18" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/coding_typing.mp3"
},

boba24css16: {
  text: "Alright, let’s move on! We can skip the background color part. How about learning how to change the text color instead?",
  choices: [
    { text: "Yes, show me how to change text color!", next: "boba24css19" },
    { text: "I'm good with backgrounds for now.", next: "boba24css20" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/color_change.mp3"
},

boba24css17: {
  text: "Great! Your website noow has a fresh new background color. Let’s try changing the text color. This will make the text stand out against your background. Here’s how:\n\n`h1 { color: #d32f2f; }`\n\nNow, your heading will have a red color. Want to try this out?",
  choices: [
    { text: "Change the text color!", next: "boba24css21" },
    { text: "Let’s move to another topic.", next: "boba24css22" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/color_text.mp3"
},

boba24css18: {
  text: "No worries! You can always come back to the background color later. Let’s move on to something else. How about learning how to style text size?",
  choices: [
    { text: "Yes, let's change the text size!", next: "boba24css23" },
    { text: "I’m fine with the size as is.", next: "boba24css24" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/size_change.mp3"
},

boba24css19: {
  text: "To change the color of text, we use the CSS `color` property. Here’s an example:\n\n`p { color: #2c3e50; }`\n\nNow, all paragraphs will have a cool, dark blue color. Ready to apply this?",
  choices: [
    { text: "Change the text color!", next: "boba24css21" },
    { text: "Skip the text color change.", next: "boba24css22" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/text_color.mp3"
},

boba24css20: {
  text: "You’re doing great! Feel free to come back later if you want to learn more about changing text colors. Shall we move on to text size?",
  choices: [
    { text: "Yes, let's change the text size!", next: "boba24css23" },
    { text: "I’m good with the current size.", next: "boba24css24" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/relaxing_size.mp3"
},

boba24css21: {
  text: "Fantastic! You’ve changed the text color. Now, let’s learn how to adjust text size. This will help make your content easier to read. Here’s how you can do it:\n\n`h1 { font-size: 36px; }`\n\nThis will make your heading bigger. Ready to try this one out?",
  choices: [
    { text: "Try changing the text size!", next: "boba24css25" },
    { text: "I think I’m good with this lesson.", next: "boba24css26" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/size_typing.mp3"
},

boba24css22: {
  text: "No worries! You can always experiment with the text color later. For now, let’s try something else. How about adding some padding?",
  choices: [
    { text: "Yes, let’s add some padding!", next: "boba24css27" },
    { text: "I’m good with my cake right now.", next: "boba24css28" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/padding_change.mp3"
},

boba24css23: {
  text: "To change the size of your text, we use the `font-size` property. Here’s an example:\n\n`p { font-size: 18px; }`\n\nThis will make the paragraphs easier to read. Want to try it out?",
  choices: [
    { text: "Adjust the text size!", next: "boba24css25" },
    { text: "I’ll skip this step.", next: "boba24css26" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/font_size.mp3"
},

boba24css24: {
  text: "No worries! Text size can always be adjusted later. How about learning how to add padding to your elements?",
  choices: [
    { text: "Let’s add some padding!", next: "boba24css27" },
    { text: "I’m happy with my content’s current look.", next: "boba24css28" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/padding_change.mp3"
},

boba24css25: {
  text: "Amazing! You’ve changed the text size. Now, let’s move on to adding some pAding to give some space around our elements. Here’s how:\n\n`div { padding: 20px; }`\n\nThis will create space inside the element, making it look less cramped. Want to try it out?",
  choices: [
    { text: "Add padding to the div!", next: "boba24css29" },
    { text: "I think I’m done with padding for now.", next: "boba24css30" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/padding.mp3"
},

boba24css26: {
  text: "Great work! You’ve learned the basics of CSS: background colors, text colors, text sizes, and padding. Ready to bake more styles in the future? Come back anytime for more lessons!",
  choices: [
    { text: "Yes, I’ll be back for more!", next: "boba24css1" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/final_bake.mp3"
},

boba24css27: {
  text: "Great! To add padding, we use the `padding` property. Here’s an example:\n\n`p { padding: 15px; }`\n\nThis will add padding inside your element. Want to try this one out?",
  choices: [
    { text: "Add the padding!", next: "boba24css29" },
    { text: "Skip this step.", next: "boba24css30" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/adding_padding.mp3"
},

boba24css28: {
  text: "Padding is optional, but it's great for making things look neat. You can always come back and try it later. How about learning how to align text?",
  choices: [
    { text: "Yes, teach me text alignment!", next: "boba24css31" },
    { text: "I’m happy with my current layout.", next: "boba24css32" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/align.mp3"
},

boba24css29: {
  text: "Look at that! You’ve added padding successfully. The element looks much better now. Ready to try aligning your text?",
  choices: [
    { text: "Align my text!", next: "boba24css31" },
    { text: "I think I'm done for today.", next: "boba24css26" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/alignment_success.mp3"
},

boba24css30: {
  text: "That's okay! You can always come back to try adding padding later. For now, would you like to learn text alignment?",
  choices: [
    { text: "Yes, let's align text!", next: "boba24css31" },
    { text: "I'm good with my current design.", next: "boba24css32" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/no_padding.mp3"
} ,
boba24css31: {
  text: "Welcome back! Now that we've covered the basiccs of CSS, it’s time to dive into sselectors! Selectors are essential tools for picking out the elements you want to style. In our bakery, selectors are like the ingredients you need to create different recipes.",
  choices: [
    { text: "Let’s start with element selectors!", next: "boba24css32" },
    { text: "Can we take a break first?", next: "boba24css33" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/selectors_intro.mp3"
},

boba24css32: {
  text: "The element selector targets all elements of a certain type, like `<p>` tags or `<h1>` tags. For example, if you want to style all paragraphs on your page, you can use:\n\n`p { color: #333; }`\n\nThis will change the color of every paragraph! Ready to try it?",
  choices: [
    { text: "Yes, show me how to do it!", next: "boba24css34" },
    { text: "Let’s learn about class selectors first.", next: "boba24css35" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/element_selector.mp3"
},

boba24css33: {
  text: "Let’s take a coffee break! Relax, and when you're ready, come back to explore selectors in CSS. I’ll be waiting to dive in when you're ready.",
  choices: [
    { text: "I’m ready to continue!", next: "boba24css31" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/coffee_time.mp3"
},

boba24css34: {
  text: "Now, let's apply the element selector to style all `<p>` tags. Add this code to your stylesheet:\n\n`p { color: #333; }`\n\nThis will change the text color of all paragraphs to dark gray. Go ahead and try it out!",
  choices: [
    { text: "I tried the element selector!", next: "boba24css36" },
    { text: "Let’s move on to class selectors.", next: "boba24css35" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/color_change.mp3"
},

boba24css35: {
  text: "Class selectors allow you to target multiple elements that share the same class. For example, if you have multiple elements with the class `cake`, you can style them all at once using:\n\n`.cake { font-size: 20px; }`\n\nWould you like to give the class selector a try?",
  choices: [
    { text: "Yes, let's style the cakes!", next: "boba24css37" },
    { text: "Show me how to use ID selectors.", next: "boba24css38" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/class_selector.mp3"
},

boba24css36: {
  text: "Great job! You’ve used the element selector to change the color of your paragraphs. Now, let’s move on and explore how to use class selectors for multiple elements.",
  choices: [
    { text: "Let's try the class selector!", next: "boba24css37" },
    { text: "Can we jump to ID selectors?", next: "boba24css38" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/class_selector_usage.mp3"
},

boba24css37: {
  text: "Perfect! The class selector is useful when you want to style many elements with the same class. For example, if you want to change the font size of all elements with the class `cake`, use:\n\n`.cake { font-size: 20px; }`\n\nTry it out and see the results!",
  choices: [
    { text: "I styled the cakes!", next: "boba24css39" },
    { text: "Can we move on to ID selectors?", next: "boba24css38" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/class_cakes.mp3"
},

boba24css38: {
  text: "ID selectors target unique elements on the page. For example, if you have a special cake with the ID `birthdayCake`, you can style it like this:\n\n`#birthdayCake { color: red; }`\n\nThis will only change the color of the element with the `id='birthdayCake'`. Ready to try it out?",
  choices: [
    { text: "I want to try the ID selector!", next: "boba24css40" },
    { text: "Let’s learn about grouping selectors!", next: "boba24css41" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/id_selector.mp3"
},

boba24css39: {
  text: "Well done! Your cakes now have a stylish font size. Now, let’s move on to ID selectors, which are perfect for unique, one-of-a-kind elements like a special birthday cake.",
  choices: [
    { text: "Let's use the ID selector!", next: "boba24css40" },
    { text: "Can we move on to grouping selectors?", next: "boba24css41" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/unique_cake.mp3"
},

boba24css40: {
  text: "Now, let’s style that special birthday cake with the ID selectore! Add this code to your stylesheet:\n\n`#birthdayCake { color: red; }`\n\nThis will change the color of the birthday cake. Give it a try!",
  choices: [
    { text: "I styled the birthday cake!", next: "boba24css42" },
    { text: "Let’s learn about grouping selectors!", next: "boba24css41" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/styled_birthday_cake.mp3"
},

boba24css41: {
  text: "Grouping selectors allow you to style multiple elements at once. For example:\n\n`h1, h2, p { color: #333; }`\n\nThis will apply the same style to all `<h1>`, `<h2>`, and `<p>` elements. Ready to try it out?",
  choices: [
    { text: "I want to try grouping selectors!", next: "boba24css43" },
    { text: "I think I'm done for today.", next: "boba24css44" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/grouping_selectors.mp3"
},

boba24css42: {
  text: "You’ve mastered selectors, and now it’s time to learn how to position your bakery treats using the Box Model! The Box Model will help you control the layout by adjusting the size and spacing of your bakery boxes. Ready to start decorating your boxes?",
  choices: [
    { text: "Yes, let’s learn about the Box Model!", next: "boba24css43" },
    { text: "I think I need a short break before continuing.", next: "boba24css45" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/box_model_intro.mp3"
},

boba24css43: {
  text: "Let’s dive into the Box Model! In CSS, every elemenet is consiidered a box, and it consists of four parts: content, padding, border, and margin. Imagine a cake inside a box: the cake is the content, the frosting is the padding, the box around the cake is the border, and the space outside the box is the margin. Now, let's break these down and see how to control each one.",
  choices: [
    { text: "Tell me more about content and padding!", next: "boba24css44" },
    { text: "I want to start with borders!", next: "boba24css47" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/box_model_breakdown.mp3"
},

boba24css44: {
  text: "Content is the actual content of the box, like the cake itself. Padding is the space around the content. For example, if you have a box with padding, it will give some space around the cake, making sure it doesn’t touch the border. To add padding, you use the `padding` property in CSS, like this:\n\n`div { padding: 20px; }`\n\nThis will add 20px of space inside the box around the content. Would you like to try adding padding to your bakery box?",
  choices: [
    { text: "I added some padding!", next: "boba24css45" },
    { text: "Let's check out borders first.", next: "boba24css47" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/padding_example.mp3"
},

boba24css45: {
  text: "Great work! Padding helps make your box look less cramped. Now, let’s talk about borders, which define the edge of your bakery box. A border can be solid, dotted, dashed, and more. Here's how you can add a border to your box:\n\n`div { border: 2px solid #333; }`\n\nThis gives your box a 2px solid border. Want to add a border to your box?",
  choices: [
    { text: "I added a border!", next: "boba24css46" },
    { text: "Let's check out margins first.", next: "boba24css50" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/border_example.mp3"
},

boba24css46: {
  text: "Awesome! Now your box has a nice border around it. Borders are great for making the content stand out. Next up, let's learn about margins. Margins are the space outside the box. They control how far apart elements are from one another.",
  choices: [
    { text: "Let’s learn about margins!", next: "boba24css50" },
    { text: "I think I’m done for now.", next: "boba24css51" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/border_added.mp3"
},

boba24css50: {
  text: "Margins are the space outside the element, and they help you create space between your box and others. To add margin, you would use the `margin` property in CSS, like this:\n\n`div { margin: 20px; }`\n\nThis will create 20px of space outside your box, separating it from other elements. Would you like to try adding some margin to your bakery box?",
  choices: [
    { text: "I added a margin!", next: "boba24css51" },
    { text: "I’m done for now.", next: "boba24css51" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/margin_example.mp3"
},

boba24css51: {
  text: "Well done! You’ve now learned about padding, borders, and margins. With these, you can create beautifully spaced and styled elements on your website. The Box Model is the key to laying out your bakery treats in the perfect way. Ready to move on to the next CSS topic?",
  choices: [
    { text: "Let’s learn about more advanced layouts!", next: "boba24css52" },
    { text: "I need a break after all this box work.", next: "boba24css53" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/box_model_complete.mp3"
},

boba24css52: {
  text: "Awesome job mastering the Box Model! Now, let’s level up your bakery creations with positioning and layout in CSS. Positioning helps you control where elements go, and layout lets you arrange them perfectly on the page. Ready to take charge of your bakery space?",
  choices: [
    { text: "Tell me about positioning first!", next: "boba24css53" },
    { text: "I’m excited for layout techniques!", next: "boba24css58" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/positioning_intro.mp3"
},

boba24css53: {
  text: "Positioning in CSS allows you to contterol where elements are placed on the page. There are four types: `static`, `relative`, `absolute`, and `fixed`. Let’s break them down with a bakery analogy!\n\n- **Static**: Elements are placed according to the normnal flow of the page. Just like how your bakery counter items are lined up.\n- **Relative**: Move elements from their default position. Like shifting a bakery box to the right while it stays in the same place.\n- **Absolute**: Position relative to the nearest ancestor with `position: relative;`. Think of placing a cake on a specific display stand.\n- **Fixed**: This type doesn’t move when the page scrolls. Like a bakery sign that stays in the same spot no matter what.\n\nWhat would you like to try first?",
  choices: [
    { text: "Let’s try relative positioning!", next: "boba24css54" },
    { text: "I’m curious about absolute positioning.", next: "boba24css55" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/positioning_example.mp3"
},

boba24css54: {
  text: "Great choice! Relative positioning moves an element relative to its original position. By adding `position: relative;` to an element, you can then use `top`, `right`, `bottom`, or `left` to adjust its position. For example:\n\n`div { position: relative; left: 20px; }`\n\nThis would move your bakery box 20px to the right.\n\nTry it yourself and move the bakery box around!",
  choices: [
    { text: "I moved the box!", next: "boba24css56" },
    { text: "I want to try absolute positioning now.", next: "boba24css55" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/relative_positioning.mp3"
},

boba24css55: {
  text: "Now, let’s talk about absolute positioning. This positions an element relative to its nearest ancestor that has a `position` other than `static`. You’ll first set an ancestor to `position: relative;` and then position the child element with `position: absolute;`. For example:\n\n`div { position: absolute; top: 50px; left: 30px; }`\n\nThis places the element 50px from the top and 30px from the left of its positioned ancestor. Try adding absolute positioning and placing your bakery box where you want!",
  choices: [
    { text: "I placed it absolutely!", next: "boba24css56" },
    { text: "Let’s try fixed positioning instead.", next: "boba24css57" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/absolute_positioning.mp3"
},

boba24css56: {
  text: "Great job! You've explored both relative and absolute positioning. Let’s now look at fixed positioning. This is a fun one because it keeps an element in the same spot even when you scroll the page! It’s like a sign that always stays visible outside your bakery.\n\nTry adding fixed positioning to your bakery sign.",
  choices: [
    { text: "Let’s try fixed positioning!", next: "boba24css57" },
    { text: "I’m done with positioning for now.", next: "boba24css58" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/fixed_positioning.mp3"
},

boba24css57: {
  text: "Fixed positioning keeps an element in place on the page, even when scrolling. To use it, set `position: fixed;` and adjust the position with `top`, `left`, `right`, or `bottom`. For example:\n\n`div { position: fixed; top: 0; left: 0; }`\n\nThis will place the bakery sign at the top-left corner of the screen, no matter how much you scroll.\n\nGo ahead and try it out!",
  choices: [
    { text: "I fixed the position!", next: "boba24css58" },
    { text: "I need a break after all this positioning.", next: "boba24css59" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/fixed_positioning_example.mp3"
},

boba24css58: {
  text: "Well done with positioning! Now it’s time to learn layout techniques like Flexbox and Grid. These tools will allow you to organize your bakery items in neat, flexible ways. Flexbox lets you arrange items in a row or column, while Grid is perfect for more complex designs.\n\nWhich one would you like to explore first?",
  choices: [
    { text: "Tell me about Flexbox!", next: "boba24css60" },
    { text: "I want to learn about Grid.", next: "boba24css61" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/layout_intro.mp3"
},

boba24css59: {
  text: "Take a break, you’ve earned it! You’ve already learned so much about positioning, and when you’re ready, we’ll dive into Flexbox and Grid. Let me know when you're ready to continue, and we can get back to arranging those delicious bakery items!",
  choices: [
    { text: "I’m ready to continue!", next: "boba24css58" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/coffee_break.mp3"
},

boba24css60: {
  text: "Fantastic! You’ve mastered positioning and layout. Now, let’s talk typography! Typography is essential in making your bakery website readable and inviting. CSS allows you to control font size, style, line height, letter spacing, and more. Ready to make your text look as tasty as your baked goods?",
  choices: [
    { text: "Tell me more about fonts and typography!", next: "boba24css62" },
    { text: "I want to adjust text sizes and spacing first!", next: "boba24css63" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/typography_intro.mp3"
},

boba24css62: {
  text: "Great! CSS lets you choose from diffferent fonts to make your bakery stand out. There are two main ways to define fonts: **Web-safe fonts** and **Web Fonts**.\n\n- **Web-safe fonts**: These are fonts that are generally available on all devices, like Arial, Times New Roman, or Courier. You can define them easily with `font-family: Arial, sans-serif;`.\n- **Web Fonts**: These are fonts you can load from external sources like Google Fonts. For example, `font-family: 'Roboto', sans-serif;` loads the Roboto font from GOogle Fonts.\n\nWould you like to experiment with a web font for your bakery sign?",
  choices: [
    { text: "I want to use a web font!", next: "boba24css64" },
    { text: "I’ll stick with a web-safe font.", next: "boba24css65" }
  ],
  background: "Assets/images/",
  sound: "Assets/sounds/font_example.mp3"
},
boba24css63: {
  text: "Let’s dive into sizing and spacing your text. CSS gives you full control over font size and spacing with the `font-size`, `line-height`, and `letter-spacing` properties. Here’s an example of how you can adjust text in your bakery sign:\n\n`h1 { font-size: 36px; line-height: 1.5; letter-spacing: 2px; }`\n\nYou can make your text bigger or smaller, adjust the space between lines, and even control how far apart letters are. Go ahead and try adjusting these properties to see how your bakery sign changes!",
  choices: [
    { text: "I made the text look perfect!", next: "boba24css64" },
    { text: "I want to learn about text decoration.", next: "boba24css66" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/text_adjustment.mp3"
},

boba24css64: {
  text: "Nice job! Now let’s add some extra flair to your bakery sign with text decorations. CSS allows you to underline, strike-through, or add other effects to your text. Here’s how:\n\n- **Text decoration**: You can underline or strike through text using `text-decoration: underline;` or `text-decoration: line-through;`.\n- **Text transform**: Use `text-transform: uppercase;` or `text-transform: capitalize;` to change the case of your text.\n\nWould you like to add some decoration to your bakery sign?",
  choices: [
    { text: "I want to underline my bakery sign!", next: "boba24css67" },
    { text: "I’ll use text transform to make it uppercase.", next: "boba24css68" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/text_decoration.mp3"
},

boba24css65: {
  text: "You’ve chosen to use a web-safe font! Let’s set it to your bakery sign. Here’s an example:\n\n`h1 { font-family: 'Courier New', Courier, monospace; }`\n\nThis sets the font to Courier New, and if that’s not available, it will fall back to Courier, and finally to a generic monospace font. This makes sure your text looks consistent across all devices.\n\nTry setting your bakery sign to a web-safe font now!",
  choices: [
    { text: "I set the font!", next: "boba24css66" },
    { text: "I want to try a web font now.", next: "boba24css64" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/web_safe_font.mp3"
},

boba24css66: {
  text: "Perfect! Now let’s look at **text alignment**. You can conttrol where your text appears on the page, whether centered, to the left, or to the right.\n\nFor example:\n\n- `text-align: left;`\n- `text-align: center;`\n- `text-align: right;`\n\nYou can also align your text vertically with `vertical-align: middle;` for inline elements.\n\nTry experimenting with text alignment on your bakery sign!",
  choices: [
    { text: "I aligned the text!", next: "boba24css67" },
    { text: "I want to adjust the line height instead.", next: "boba24css69" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/align_text.mp3"
},

boba24css67: {
  text: "Awesome! Now that you’ve added some decoration, let’s look at **font weight**. This property allows you to control how thick or thin the characters are. You can set it to `normal`, `bold`, or even a specific number like `font-weight: 700;` for a heavier weight.\n\nWould you like to make your bakery sign bold or change its weight?",
  choices: [
    { text: "Let’s make it bold!", next: "boba24css70" },
    { text: "I want to change the font size again.", next: "boba24css63" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/font_weight.mp3"
},

boba24css68: {
  text: "Good choice! You’ve made your text uppercase. Now let’s try adding some letter spacing to give your bakery sign more personality. The `letter-spacing` property controls the space between characters.\n\nHere’s how you can adjust the letter spacing:\n\n`h1 { letter-spacing: 4px; }`\n\nYou can also use negative values to bring letters closer together.\n\nGive it a try and see how the text looks on your bakery sign!",
  choices: [
    { text: "I added some letter spacing!", next: "boba24css69" },
    { text: "I want to learn more about text effects.", next: "boba24css71" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/letter_spacing.mp3"
},

boba24css69: {
  text: "You're doing great! Now let’s explore **line height**. This property controls the amount of space between lines of text. A higher value will increase the space, making it more readable, while a smaller value will bring the lines closer together.\n\nFor example:\n\n`h1 { line-height: 1.5; }`\n\nGive it a try and adjust the line height for your bakery sign!",
  choices: [
    { text: "I adjusted the line height!", next: "boba24css70" },
    { text: "I want to try text shadow effects.", next: "boba24css72" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/line_height.mp3"
},

boba24css70: {
  text: "Bold choice! Now let’s add a little more magic to your bakery sign with **text shadows**. You can add a shadow to your text using `text-shadow: h-shadow v-shadow blur-radius color;`.\n\nFor example:\n\n`h1 { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }`\n\nThis will add a subtle shadow effect to your text, making it pop off the page.\n\nTry it out and see how it looks!",
  choices: [
    { text: "I added a shadow!", next: "boba24css71" },
    { text: "I’m happy with my typography now.", next: "boba24css73" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/text_shadow.mp3"
},

boba24css71: {
  text: "Excellent! Now that you’ve experimented with text shadow and other properties, you can combine everything to create the perfect typography for your bakery. Remember, typography sets the mood for your site. Play with fonts, weights, sizes, and decorations to make your text as irresistible as your baked goods!\n\nReady to wrap up and take a look at your amazing bakery sign?",
  choices: [
    { text: "I’m ready to see my bakery sign!", next: "boba24css73" },
    { text: "I want to adjust a few more things.", next: "boba24css74" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/final_typography.mp3"
},

boba24css73: {
  text: "Congratulations! You’ve learned how to style your bakery sign with perfect typography. From font choices to text shadows, you’ve made your text both readable and stylish. Now your bakery website is ready to impress!\n\nWhat’s next? Do you want to work on layout techniques, animations, or something else?",
  choices: [
    { text: "I want to learn more about animations!", next: "boba24css75" },
    { text: "Let’s go back to layout techniques.", next: "boba24css58" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/celebration.mp3"
},

boba24css74: {
  text: "No worries! Take your time and adjust the typography to match the vibe you want for your bakery. Whether it’s adding more decoration, adjusting spacing, or playing with colors, you have complete control over how it all comes together.\n\nWhenever you’re ready to move on, just let me know!",
  choices: [
    { text: "I’m ready to continue!", next: "boba24css75" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/typography_adjustment.mp3"
},

boba24css75: {
  text: "Amazing job with the typography! Now let’s focus on one of the most fun parts of CSS: **backgrounds**! Adding background colors, images, or even gradients can make your bakery website feel fresh and inviting. Are you ready to give your bakery background a makeover?",
  choices: [
    { text: "Yes, let's add a colorful background!", next: "boba24css77" },
    { text: "I want to use a background image for the bakery!", next: "boba24css79" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/background_intro.mp3"
},

boba24css77: {
  text: "Great! You can set a solid background color using the `background-color` property. For example, to give your bakery a warm and inviting feel, try:\n\n`body { background-color: #f7c8c8; }`\n\nThis will set a light pink background color for your whole page. You can experiment with other colors as well. Want to try a different background color for your bakery?",
  choices: [
    { text: "I changed the background color!", next: "boba24css78" },
    { text: "I want to try a background gradient.", next: "boba24css80" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/colorful_background.mp3"
},

boba24css78: {
  text: "Nice work! Now let’s adsd ssome extra flair with **background gradients**. CSS allows you to create smooth transitions between colors. For example, you can create a gradient like this:\n\n`body { background: linear-gradient(to right, #f7c8c8, #ffebcd); }`\n\nThis will create a smooth pink-to-cream gradient background. Experiment with different colors to find the perfect combo for your bakery’s mood!",
  choices: [
    { text: "I added a gradient background!", next: "boba24css79" },
    { text: "I want to learn about using background images.", next: "boba24css81" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/gradient_background.mp3"
},

boba24css79: {
  text: "Great choice! Now let’s make your bakery website even more appealing by adding a **background image**. You can add an image with the `background-image` property:\n\n`body { background-image: url('Assets/images/bakery_wallpaper.jpg'); }`\n\nThis will set your background image to the bakery wallpaper you have. You can also adjust its positioning and size. Want to try that out?",
  choices: [
    { text: "I added a background image!", next: "boba24css81" },
    { text: "I want to learn about background image properties.", next: "boba24css82" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/background_image.mp3"
},

boba24css80: {
  text: "Awesome! Now let’s get a little more creative with **background images**. You can combine images with gradients. For example:\n\n`body { background: linear-gradient(to right, rgba(247, 200, 200, 0.5), rgba(255, 235, 205, 0.5)), url('Assets/images/bakery_wallpaper.jpg'); }`\n\nThis will overlay a semi-transparent gradient on top of the background image. You can experiment with different combinations to create a unique look for your bakery website!",
  choices: [
    { text: "I made a creative background!", next: "boba24css81" },
    { text: "I want to adjust the background position.", next: "boba24css83" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/creative_background.mp3"
},

boba24css81: {
  text: "You’re doing ffantastieec! Now that you’ve added a background image, let’s look at some **background image properties**. You can control how your image behaves with the `background-size`, `background-repeat`, and `background-position` properties.\n\nFor example:\n\n- `background-size: cover;` will make the image cover the entire background.\n- `background-repeat: no-repeat;` prevents the image from repeating.\n- `background-position: center;` centers the image on the page.\n\nWant to try adjusting these properties?",
  choices: [
    { text: "I adjusted the background properties!", next: "boba24css82" },
    { text: "I want to add a parallax effect to the background.", next: "boba24css84" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/image_properties.mp3"
},

boba24css82: {
  text: "Great! You can now fine-tune your bakery’s background. Play with `background-size`, `background-position`, and `background-repeat` to create exactly the look you want. Whether it’s making your bakery sign stand out with a custom image or choosing a soft gradient, CSS gives you complete control.\n\nIf you’re happy with your background, let’s move on to **background animation**!",
  choices: [
    { text: "I’m happy with my background!", next: "boba24css85" },
    { text: "I want to try background animation.", next: "boba24css84" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/final_background.mp3"
},

boba24css83: {
  text: "Nice choice! You can control how your background image is positioned using the `background-position` property. For example:\n\n`body { background-position: top left; }`\n\nThis will place the image at the top-left corner of the screen. You can also use values like `center`, `bottom right`, or percentages like `50% 50%` to adjust its position.\n\nGive it a try!",
  choices: [
    { text: "I adjusted the background position!", next: "boba24css84" },
    { text: "I want to learn about the parallax effect.", next: "boba24css85" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/background_position.mp3"
},

boba24css84: {
  text: "Cool! Let’s add a little more magic to your bakery website with a **parallax effect**. This effect makes your background move at a different speed than the foreground content, creating a 3D-like experience. You can achieve this using the `background-attachment: fixed;` property:\n\n`body { background-image: url('Assets/images/bakery_wallpaper.jpg'); background-attachment: fixed; }`\n\nThis will make the background stay in place while the content scrolls over it. Try it out and see the effect in action!",
  choices: [
    { text: "I added a parallax effect!", next: "boba24css85" },
    { text: "I want to change the background image.", next: "boba24css79" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/parallax_effect.mp3"
},

boba24css85: {
  text: "Congratulations! You’ve just learned how to create BEutiful backgrounds for your bakery website, using solid colors, gradients, images, and even animations like parallax! You now have full creative control over how the background sets the mood for your site.\n\nWhat’s next on your journey? Would you like to explore more about animations, layout, or something else?",
  choices: [
    { text: "I want to learn about animations!", next: "boba24css86" },
    { text: "Let’s work on layout techniques.", next: "boba24css58" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/background_celebration.mp3"
},
boba24css86: {
  text: "Excellent! Now that your bakery website looks stunning, let’s add some **effects** to make it even more engaging! CSS effects can help you bring your content to life with transitions, animations, and hover effects. Are you ready to add some magic to your website?",
  choices: [
    { text: "Yes, let’s add some transitions!", next: "boba24css88" },
    { text: "I want to add hover effects!", next: "boba24css90" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/effects_intro.mp3"
},

boba24css88: {
  text: "Great choice! **Transitions** in CSS allow you to smoothly change from one style to another. For example, let’s say you want to smoothly change the background color of your bakery’s buttons when you hover over them:\n\n`button { transition: background-color 0.3s ease; }`\n\nThis will make the button background color transition over 0.3 seconds when the user hovers. Want to try it out on your bakery’s buttons?",
  choices: [
    { text: "I added the transition effect!", next: "boba24css89" },
    { text: "I want to learn about animations.", next: "boba24css92" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/button_transition.mp3"
},

boba24css89: {
  text: "Nice work! Now let’s get creative with **CSS animations**. Animations let you create complex effects by changing styles over time. For example, you can make a bakery item image bounce up and down with this animation:\n\n`@keyframes bounce { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }`\n\n`img { animation: bounce 1s ease infinite; }`\n\nThis will make your images bounce endlessly. Ready to try it on your bakery images?",
  choices: [
    { text: "I made the image bounce!", next: "boba24css90" },
    { text: "I want to try a different animation.", next: "boba24css93" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/bouncing_image.mp3"
},

boba24css90: {
  text: "Awesome! Hover efffects are a fun way to make your website interactive. Let’s add a hover effect on the bakery’s buttons so they scale up when the user hovers over them:\n\n`button:hover { transform: scale(1.1); }`\n\nThis will make the button grow 10% bigger when hovered. You can also add other effects, like changing the color or adding shadows. Want to give it a try?",
  choices: [
    { text: "I added the hover effect!", next: "boba24css91" },
    { text: "I want to try adding shadows to my elements.", next: "boba24css94" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/button_hover.mp3"
},

boba24css91: {
  text: "Great job! You can make your bakery’s buttons and images more interactive by adding various hover effects. Try experimenting with different transforms like rotate, translate, or skew to see how they change your elements.\n\nIf you’re ready to take your animations further, you can even create **keyframe animations** to animate multiple properties at once, such as fading in an image while scaling it up.",
  choices: [
    { text: "Let’s try more advanced animations!", next: "boba24css92" },
    { text: "I want to add a shadow effect.", next: "boba24css94" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/hover_effects.mp3"
},

boba24css92: {
  text: "Amazing! Now let’s explore **keyframe animations**. You can animate an element by defining keyframes, which specify the styles at certain points during the animation. For example, to make a bakery sign move from left to right:\n\n`@keyframes move { 0% { left: 0; } 100% { left: 100%; } }`\n\n`#bakery-sign { position: relative; animation: move 5s infinite; }`\n\nThis will move your bakery sign from left to right across the screen. Want to try this out for your bakery sign?",
  choices: [
    { text: "I made the sign move!", next: "boba24css93" },
    { text: "I want to learn about adding shadows.", next: "boba24css94" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/sign_moving.mp3"
},

boba24css93: {
  text: "Awesome! Keyframe animations can be used to create really unique effects. You can animate multiple properties, like changing the size, position, or even opacity. Try combining different animations to see what kind of effects you can come up with for your bakery website!\n\nYou can also control the timing of your animations using the `animation-duration`, `animation-timing-function`, and `animation-delay` properties.",
  choices: [
    { text: "I created an awesome animation!", next: "boba24css94" },
    { text: "I want to add shadow effects.", next: "boba24css95" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/creative_animation.mp3"
},

boba24css94: {
  text: "Great! Adding **shadow effects** can make your elements stand out. You can add a shadow to your bakery button with the `box-shadow` property:\n\n`button { box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); }`\n\nThis will add a soft shadow below the button. You can adjust the size, spread, and color of the shadow to fit your bakery’s style. Want to try this out?",
  choices: [
    { text: "I added the shadow effect!", next: "boba24css95" },
    { text: "I want to add a glowing effect.", next: "boba24css96" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/button_shadow.mp3"
},

boba24css95: {
  text: "Well done! Shadows add depth and make your bakerey website feel more interactive. You can also try adding a **glow effect** with `text-shadow` for text or `box-shadow` for other elements:\n\n`h1 { text-shadow: 2px 2px 5px rgba(255, 0, 0, 0.5); }`\n\nThis will give your text a red glowing effect. You can experiment with different colors and sizes. Want to try it on your bakery header?",
  choices: [
    { text: "I added the glow effect!", next: "boba24css96" },
    { text: "I want to learn about animations and transitions together.", next: "boba24css97" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/glow_effect.mp3"
},

boba24css96: {
  text: "Awesome! The glow effect is perfect for your bakery’s text or buttons, adding a bit of sparkle to the page. You can also add **hover animations** and **transition effects** to make the experience smoother for your users.\n\nWith animations, hover effects, and transitions, you can create a more dynamic and interactive experience. The sky’s the limit!",
  choices: [
    { text: "Let’s try combining all the effects!", next: "boba24css97" },
    { text: "I want to try more animations.", next: "boba24css92" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/final_effects.mp3"
},

boba24css97: {
  text: "Fantastic! You’ve now mastered CSS effects, including transitions, animations, hover effects, and shadows. Your bakery website is looking amazing with all these interactive features. If you want to dive deeper into these effects, you can start combining them to create unique user experiences.\n\nReady to take your bakery to the next level with layout techniques or something else?",
  choices: [
    { text: "Let’s work on layout techniques!", next: "boba24css58" },
    { text: "I want to explore more advanced effects.", next: "boba24css98" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/effects_celebration.mp3"
},
boba24css86: {
  text: "Fantastic! Now that your bakery’s visuals are looking delicious, let’s spice them up with some **transitions** and **animations**. Transitions let you smoothly change between two states, while animations allow for more complex, multi-step changes. Ready to add some magic to your website?",
  choices: [
    { text: "Yes, let’s start with transitions!", next: "boba24css88" },
    { text: "I want to try animations first.", next: "boba24css90" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/transitions_intro.mp3"
},

boba24css88: {
  text: "Great choice! **Transitions** allow you to smoothly change the style of an element over time. Let’s say you want your bakery’s button to change color smoothly when hovered. Here’s how you can do that:\n\n`button { transition: background-color 0.5s ease; }`\n\nThis makes the background color of the button smoothly transition over 0.5 seconds when hovered. Want to give it a try on your bakery’s buttons?",
  choices: [
    { text: "I added the color transition!", next: "boba24css89" },
    { text: "I want to learn more about animations.", next: "boba24css90" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/button_transition.mp3"
},

boba24css89: {
  text: "Nice work! Transitions are awesome for making simple, smooth changes. You can also transition other properties like `width`, `height`, `opacity`, and `transform`. For example, try adding this to your bakery’s button:\n\n`button:hover { transform: scale(1.1); }`\n\nThis will make the button grow when hovered, creating a neat, interactive effect. Want to try adding this to your bakery’s buttons?",
  choices: [
    { text: "I made the button grow on hover!", next: "boba24css90" },
    { text: "I want to try adding more properties to my transition.", next: "boba24css91" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/growing_button.mp3"
},

boba24css90: {
  text: "Amazing! Now that your bakery’s buttons are interhactive, let’s dive into **animations**. Unlike transitions, animations let you define multiple steps. For example, you can make a bakery item image rotate or bounce. Let’s start with this simple bounce animation:\n\n`@keyframees bounce { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }`\n\n`img { animation: bounce 1s ease infinite; }`\n\nThis will make the image bounce endlessly. Ready to add some bounce to your bakery images?",
  choices: [
    { text: "I added the bounce animation!", next: "boba24css91" },
    { text: "I want to try a different animation effect.", next: "boba24css92" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/bouncing_image.mp3"
},

boba24css91: {
  text: "Nice job! Animations are very versatile. You can control things like **duration**, **timing**, and **iteration** of an animation. For example, you can make your image bounce faster or slower by changing the duration:\n\n`animation: bounce 0.5s ease infinite;`\n\nYou can also control the number of times the animation runs by changing `infinite` to a number (like `3` to make it run three times). Want to experiment with these values?",
  choices: [
    { text: "I made the bounce faster!", next: "boba24css92" },
    { text: "I want to try a rotation animation.", next: "boba24css93" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/animation_control.mp3"
},

boba24css92: {
  text: "Excellent! Let’s try a **rotation animation** now. This will make an element rotate endlessly, like turning a bakery sign:\n\n`@keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`\n\n`#bakery-sign { animation: rotate 2s linear infinite; }`\n\nThis will make the sign rotate smoothly. Want to try this on your bakery sign?",
  choices: [
    { text: "I made the bakery sign rotate!", next: "boba24css93" },
    { text: "I want to explore more keyframe animations.", next: "boba24css94" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/rotating_sign.mp3"
},

boba24css93: {
  text: "Awesome! Animations can get even more creative. You can combine multiple keyframes to create complex animations. For example, let’s create a baking dough animation where the dough rises and falls:\n\n`@keyframes dough { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }`\n\n`#dough { animation: dough 2s ease-in-out infinite; }`\n\nThis will make the dough rise and fall, giving it a fun, dynamic feel. Ready to try it?",
  choices: [
    { text: "I created the dough animation!", next: "boba24css94" },
    { text: "I want to experiment with more animations.", next: "boba24css95" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/dough_animation.mp3"
},

boba24css94: {
  text: "Great! The sky’s the limit with animations. You can create all sorts of cool effects, like bouncing, rotating, and scaling. Try combining these animations with transitions for a smooth and engaging user experience.\n\nYou can even create a chain of animations using `animation-delay`, so that one animation starts after another. Want to try linking some animations together?",
  choices: [
    { text: "I combined animations!", next: "boba24css95" },
    { text: "I want to learn more about transitions.", next: "boba24css96" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/combined_animations.mp3"
},

boba24css95: {
  text: "Fantastic! Combining animations with transitions can create truly seamless experiences. For instance, you can make a bakery logo grow, rotate, and change color all at once with a simple combination of keyframes and transitions.\n\nPlay around with these different effects, and soon your bakery website will feel like a magical place!\n\nFeeling confident? Let’s move on to more advanced animation techniques!",
  choices: [
    { text: "Let’s move on to advanced techniques!", next: "boba24css97" },
    { text: "I want to try more transitions.", next: "boba24css88" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/advanced_animations.mp3"
},

boba24css96: {
  text: "Great! Transitions and animations are two of the most powerful tools in CSS. With transitions, you can make subtle, smooth changes, while animations give you the freedom to create dynamic, complex movements. You can combine both to make your bakery site interactive and engaging.\n\nIf you want to learn more, there are plenty of advanced animation techniques to explore, like **motion paths**, **keyframe timing** and **delays**.",
  choices: [
    { text: "Let’s learn more advanced animation techniques!", next: "boba24css97" },
    { text: "I want to explore other CSS properties.", next: "boba24css98" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/transition_animation_combined.mp3"
},

boba24css97: {
  text: "Incredible! You’ve mastered both **transitions** and **animations** in CSS. Now, your bakery website is more interactive than ever, with smooth transitions and exciting animations. Keep experimenting with these effects to make your site stand out even more!\n\nReady to explore more CSS properties or techniques to take your website even further?",
  choices: [
    { text: "Let’s explore layout techniques!", next: "boba24css58" },
    { text: "I want to try more advanced animations.", next: "boba24css98" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/effects_celebration.mp3"
},
boba24css98: {
  text: "Awesome! Your bakery website looks amazing with all the transitions and animations, but now it's time to ensure it’s **responsive**. Responsive design makes sure your website adapts to different screen sizes. Whether your users are on a mobile, tablet, or desktop, they’ll always have a pleasant experience. Ready to make your bakery site fully responsive?",
  choices: [
    { text: "Yes, let’s start with media queries!", next: "boba24css100" },
    { text: "I want to learn about flexible layouts first.", next: "boba24css102" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/responsive_intro.mp3"
},

boba24css100: {
  text: "Perfect! **Media queries** are a key part of rresponsive design. They allow you to apply different styles based on the device’s screen size, orientation, and other factors. Let’s start by making sure your bakery’s navigation bar is mobile-friendly. Add this media query to make the nav items stack on smaller screens:\n\n`@media (max-width: 768px) { .navbar { display: flex; flex-direction: column; } }`\n\nThis will stack the nav items vertically on screens smaller than 768px wide. Want to try this on your bakery’s navigation?",
  choices: [
    { text: "I made the nav items stack on smaller screens!", next: "boba24css101" },
    { text: "I want to try something else with media queries.", next: "boba24css103" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/navbar_mobile.mp3"
},

boba24css101: {
  text: "Great job! Now that your Navigation is more mobile-friendly, let’s make sure the bakery images adjust to different screen sizes. Use a **fluid layout** by setting the width of your images to `100%`:\n\n`img { width: 100%; height: auto; }`\n\nThis makes your images resize to fit their container while maintaining their aspect ratio. Ready to make your bakery images responsive?",
  choices: [
    { text: "I made the images responsive!", next: "boba24css102" },
    { text: "I want to learn more about media queries.", next: "boba24css103" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/responsive_images.mp3"
},

boba24css102: {
  text: "Well done! Fluid layouts and media queries work hand in hand to make your bakery site responsive. Next, let’s look at **responsive typography**. You can make your font sizes adjust based on the screen size using the `vw` (viewport width) unit. For example, use:\n\n`h1 { font-size: 10vw; }`\n\nThis makes the font size 10% of the viewport width. Want to try applying this to the headings on your bakery site?",
  choices: [
    { text: "I applied responsive typography!", next: "boba24css104" },
    { text: "I want to try a different approach to typography.", next: "boba24css105" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/responsive_typography.mp3"
},

boba24css103: {
  text: "No worries! Let’s explore more about **media queries**. You can target different screen widths, like small (mobile), medium (tablet), and large (desktop) screens. For example, let’s style the footer differently for small screens:\n\n`@media (max-width: 480px) { .footer { font-size: 14px; padding: 20px; } }`\n\nThis adjusts the footer’s font size and padding for small screens. Want to apply this to your bakery site’s footer?",
  choices: [
    { text: "I adjusted the footer for small screens!", next: "boba24css104" },
    { text: "I want to try media queries for tablet screens.", next: "boba24css106" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/footer_mobile.mp3"
},

boba24css104: {
  text: "Nice work! Now your bakery website is looking great on mobile and tablet. To make it even more responsive, you can add breakpoints for **larger screens**. For example, if you want the layout to have two columns on desktops, add this media query:\n\n`@media (min-width: 1024px) { .container { display: grid; grid-template-columns: 1fr 1fr; } }`\n\nThis will display your content in two columns when the screen is larger than 1024px. Ready to try this on your bakery layout?",
  choices: [
    { text: "I made the layout responsive on larger screens!", next: "boba24css105" },
    { text: "I want to adjust the layout for different devices.", next: "boba24css106" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/responsive_layout.mp3"
},

boba24css105: {
  text: "Awesome! Now that your bakery site is fully responsive, you’ve made it adaptable for all screen sizes. With media queries, flexible layouts, and responsive typography, your site looks great on mobile, tablet, and desktop.\n\nYou can now add more customizations for specific devices, like adjusting the size of images or changing the layout to optimize the user experience. Feeling confident with responsive design?",
  choices: [
    { text: "Yes, I’m ready for more advanced techniques!", next: "boba24css107" },
    { text: "I want to revisit fluid layouts and media queries.", next: "boba24css100" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/responsive_celebration.mp3"
},

boba24css106: {
  text: "Good choice! When designing for different devices, it’s important to adjust the layout at multiple breakpoints. For tablets, you might want to make sure the bakery images are displayed in one row:\n\n`@media (max-width: 768px) { .image-container { display: flex; flex-direction: row; } }`\n\nThis ensures that your bakery images are displayed properly on tablets. Want to try it?",
  choices: [
    { text: "I adjusted the layout for tablets!", next: "boba24css107" },
    { text: "I want to explore desktop designs next.", next: "boba24css108" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/tablet_layout.mp3"
},

boba24css107: {
  text: "You’ve done a great job! Now your bakery website looks fantastic on all devices. By using **media queries**, **fluid layouts**, and **responsive typography**, your site will adapt to any screen size.\n\nFeel free to experiment with more advanced techniques, like **flexbox** or **CSS Grid**, for even more control over your responsive design.",
  choices: [
    { text: "Let’s explore advanced layout techniques!", next: "boba24css58" },
    { text: "I want to try more media queries.", next: "boba24css100" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/responsive_final.mp3"
},

boba24css108: {
  text: "Excellent! With responsive design, your bakery website is ready for any screen size. You can further refine your design by adding custom breakpoints, fluid layouts, and responsive typography to fine-tune the user experience.\n\nWant to dive deeper into CSS Grid or Flexbox to improve your layout even more?",
  choices: [
    { text: "Yes, let’s dive into Flexbox!", next: "boba24css58" },
    { text: "I want to revisit mobile-first design.", next: "boba24css100" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/final_responsive.mp3"
},
boba24css109: {
  text: "Fantastic job so far! Your bakery website is responsive and visually appealing. Now, let’s enhance your content organization. It's time to work with **lists** and **tables**. For example, you can display your bakery’s menu items or special offers using styled lists and tables. Ready to make your lists look better?",
  choices: [
    { text: "Yes, let’s start with lists!", next: "boba24css110" },
    { text: "I want to work on tables first.", next: "boba24css112" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/lists_intro.mp3"
},

boba24css110: {
  text: "Great! Lists are a great way to organize content. You can style both **ordered** (`<ol>`) and **unordered** (`<ul>`) lists. Let’s say you want to show a list of baekery items in a clean and beautiful way. First, remove the default list styling and add custom bullets for a more personalized touch. Add this CSS:\n\n`ul { list-style-type: none; padding: 0; }\nul li { padding-left: 20px; position: relative; }\nul li::before { content: '🍰'; position: absolute; left: 0; }`\n\nThis removes the default bullets and adds a cupcake emoji as a bullet. Want to try this on your bakery’s menu list?",
  choices: [
    { text: "I styled the menu list!", next: "boba24css111" },
    { text: "I want to explore ordered lists.", next: "boba24css113" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/ul_list.mp3"
},

boba24css111: {
  text: "Awesome work! Now that the list is looking sweet, let’s enhance it even further. You can also add hover effects to the list items to make them interactive. Try this CSS for a subtle hover effect:\n\n`ul li:hover { background-color: #f8d7da; cursor: pointer; transition: background-color 0.3s ease; }`\n\nThis will change the background color of the list items when you hover over them. Want to give it a try?",
  choices: [
    { text: "I added the hover effect to the menu!", next: "boba24css112" },
    { text: "I want to style ordered lists first.", next: "boba24css113" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/hover_effect.mp3"
},

boba24css112: {
  text: "Nice work! Now, let’s look at **tables**. Tables are perfect for displaying structured data, like your bakery’s prices or nutritional info. First, let’s make sure your table has a clean design. Apply this CSS to remove borders and add padding for a more professional look:\n\n`table { width: 100%; border-collapse: collapse; }\ntd, th { padding: 12px; text-align: left; border: 1px solid #ddd; }`\n\nThis will give your table a neat appearance with consistent spacing. Ready to try it on your bakery’s price list?",
  choices: [
    { text: "I styled the price list table!", next: "boba24css114" },
    { text: "I want to add more customization to the list.", next: "boba24css110" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/table_price.mp3"
},

boba24css113: {
  text: "Ordered lists can also be enhanced. Try adding custom numbers or icons instead of the default numbering. For example, let’s use a circle and number your bakery items:\n\n`ol { list-style-type: none; padding: 0; }\nol li { counter-increment: item; }\nol li::before { content: counter(item) '. '; position: absolute; left: 0; }`\n\nThis CSS will replace the default numbers with a custom list style. Want to try it out on your bakery menu?",
  choices: [
    { text: "I made the ordered list custom!", next: "boba24css114" },
    { text: "I want to stick with unordered lists for now.", next: "boba24css110" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/ol_list.mp3"
},

boba24css114: {
  text: "Nice job! Now, let’s add some flair to the table. You can highlight the header row to make it stand out. Try this CSS for a **bold header** with a background color:\n\n`th { background-color: #f8d7da; font-weight: bold; color: #333; }`\n\nThis will make the header row of your table pop! Would you like to apply this to the bakery’s pricing table?",
  choices: [
    { text: "I highlighted the table header!", next: "boba24css115" },
    { text: "I want to work more on list customization.", next: "boba24css110" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/table_header.mp3"
},

boba24css115: {
  text: "Great! Your table now looks professional with a highlighted header. Finally, let’s add some **zebra striping** to the table rows for better readability. Use this CSS to alternate row colors:\n\n`tr:nth-child(odd) { background-color: #f9f9f9; }\ntr:nth-child(even) { background-color: #ffffff; }`\n\nThis will alternate the background colors of the table rows. Want to give it a go?",
  choices: [
    { text: "I added zebra striping to the table!", next: "boba24css116" },
    { text: "I want to try adding more interactivity to the list.", next: "boba24css110" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/zebra_stripe.mp3"
},

boba24css116: {
  text: "Amazing! Your bakery website’s lists and tables are looking fantastic now. You’ve applied **custom bullets**, **hover effects**, **table styling**, and even **zebra striping**. You can now showcase your bakery items or prices in a beautifully organized way.\n\nWould you like to explore more complex table layouts or perhaps add animations to your lists?",
  choices: [
    { text: "Yes, let’s add animations to the list and table!", next: "boba24css117" },
    { text: "I want to improve table layouts even more.", next: "boba24css118" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/final_lists_tables.mp3"
},

boba24css117: {
  text: "Perfect! Adding animations to your lists and tables can bring your website to life. For example, you can animate list items to fade in when the page loads:\n\n`ul li { opacity: 0; animation: fadeIn 1s forwards; }\n@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`\n\nThis will make the list items appear one by one with a fade-in effect. Want to apply this to your bakery menu list?",
  choices: [
    { text: "I added animation to the list!", next: "boba24css119" },
    { text: "I want to animate the table rows instead.", next: "boba24css120" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/animated_list.mp3"
},

boba24css118: {
  text: "No problem! You can further enhance your table layout by using **CSS Grid** or **Flexbox** for more complex designs. For instance, you could create a **responsive pricing table** with multiple columns and adjust its layout based on the screen size. Want to dive deeper into that?",
  choices: [
    { text: "Let’s explore CSS Grid for tables!", next: "boba24css121" },
    { text: "I prefer sticking with traditional tables.", next: "boba24css116" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/complex_table.mp3"
},

boba24css121: {
  text: "You're doing amaezing! Now let’s get into some **advanced CSS** topics that will make your website even more stunning. Let’s start with **CSS Grid**. This layout system allows you to create complex designs with ease. For example, you can organize your bakery’s content into different sections like menu, offers, and testimonials using a grid system. Here’s how you can start with a simple layout:\n\n`* { box-sizing: border-box; }\n.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }`\n\nThis will divide your layout into three equal columns. Want to try this to organize your bakery content?",
  choices: [
    { text: "I applied the CSS Grid layout!", next: "boba24css122" },
    { text: "I want to learn about Flexbox first.", next: "boba24css123" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/grid_layout.mp3"
},

boba24css122: {
  text: "Awesome! You've successfully implemented **CSS Grid**. Now, let's enhance it by using **named grid areas**. This allows you to label each section of your layout. For example, to name the areas of your grid, you can modify the CSS like this:\n\n`.container { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-areas: 'header header header' 'menu content offers' 'footer footer footer'; }`\n\nThis makes it easier to position each section. Want to label your sections this way?",
  choices: [
    { text: "I labeled the grid sections!", next: "boba24css124" },
    { text: "I want to try using Flexbox for layout.", next: "boba24css123" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/named_grid_areas.mp3"
},

boba24css123: {
  text: "Good choice! **Flexbox** is another powerful layout tool, especially for simpler designs and alignments. Flexbox makes it easier to align items horizontally and vertically within a container. Let’s start with a simple exeample to center your bakery content:\n\n`* { box-sizing: border-box; }\n.container { display: flex; justify-content: center; align-items: center; height: 100vh; }`\n\nThis will center the content of your container both vertically and horizontally. Want to give this a try?",
  choices: [
    { text: "I centered the content with Flexbox!", next: "boba24css125" },
    { text: "I want to use Grid with named areas.", next: "boba24css122" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/flexbox_center.mp3"
},

boba24css124: {
  text: "Great! Now that you’ve set up **named grid areas**, you can position content more precisely. For example, you can add specific content to each area in the grid by using these names in the CSS. Try this for a section:\n\n`.menu { grid-area: menu; }`\n\nThis will place your menu content into the grid area you labeled `menu`. Want to try adding your bakery sections this way?",
  choices: [
    { text: "I added the content to the grid areas!", next: "boba24css125" },
    { text: "I prefer using Flexbox for layout.", next: "boba24css123" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/grid_with_content.mp3"
},

boba24css125: {
  text: "Perfect! Now let’s talk about **CSS Variables**. This feature allows you to reuse values throughout your stylesheet. For example, you can define colors and font sizes in one place and use them everywhere. Here’s how you can set up a variable for your primary color:\n\n`:root { --primary-color: #f8d7da; }\nbody { background-color: var(--primary-color); }`\n\nThis way, if you want to change the color later, you only need to update the variable in one place. Want to apply this for your bakery's theme colors?",
  choices: [
    { text: "I added CSS variables!", next: "boba24css126" },
    { text: "I want to learn about CSS transitions.", next: "boba24css127" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/css_variables.mp3"
},

boba24css126: {
  text: "Great job with the **CSS Variables**! Now let's dive into **CSS Transitions**. TRAnsitions allow you to animate changes between states smoothly. For example, you can animate the background color of a button when the user hovers over it. Here's a simple transition effect for a button:\n\n`button { background-color: #f8d7da; transition: background-color 0.3s ease; }\nbutton:hover { background-color: #f1b0b7; }`\n\nThis will smoothly transition the background color when the user hovers over the button. Want to give it a try on your bakery’s ",
  choices: [
    { text: "I added the button transition!", next: "boba24css127" },
    { text: "I want to explore CSS animations.", next: "boba24css128" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/transition_button.mp3"
},

boba24css127: {
  text: "Well done! Now, let’s talk about **CSS Animations**. Animations allow you to create more complex effects compared to transitions. For example, you can animate the bakery’s logo to spin when the page loads. Here's a simple spinning animation:\n\n`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n.logo { animation: spin 4s infinite; }`\n\nThis will make your logo spin infinitely. Want to add this animation to your bakery logo?",
  choices: [
    { text: "I made the logo spin!", next: "boba24css128" },
    { text: "I want to explore more about transitions.", next: "boba24css126" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/animated_logo.mp3"
},

boba24css128: {
  text: "Fantastic! Your bakery website is now full of **advanced CSS techniques** like **CSS Grid**, **Flexbox**, **CSS Variables**, **Transitions**, and **Animations**. You’ve created a dynamic and visually engaging website that’s both functional and fun. Would you like tto explore **media queries** to make it even more responsive, or maybe experiment with more **CSS properties**?",
  choices: [
    { text: "Yes, let’s explore media queries!", next: "boba24css129" },
    { text: "I want to try more CSS effects.", next: "boba24css130" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/advanced_css.mp3"
},

boba24css129: {
  text: "Great! Now let’s add some **media queries** to ensure your BAkeery website looks good on all devices. Media queries allow you to apply different styles depending on the device's screen size. For example, you can create a more compact layout for mobile devices:\n\n`@media (max-width: 768px) {\n.container { grid-template-columns: 1fr; }\n}`\n\nThis will make your layout adjust to a single column on smaller screens. Want to try this on your bakery website?",
  choices: [
    { text: "I applied the media queries!", next: "boba24css130" },
    { text: "I want to continue exploring advanced CSS effects.", next: "boba24css130" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/media_queries.mp3"
},

boba24css130: {
  text: "Fantastic! You’ve now mastered **advanced CSS** techhniques. Your bakery website is responsive, dynamic, and ready for any device. Whether it’s using **CSS Grid**, **Flexbox**, **CSS Variables**, **Transitions**, **Animations**, or **Media Queries**, you’ve got all the tools to make it shine. Ready to start a new project or dive deeper into any specific CSS topic?",
  choices: [
    { text: "MAINMENU.",next:"mainPage"},
    { text: "I want to explore some 3d.", next: "fraps1A1" }
  ],
  background: "Assets/images",
  sound: "Assets/sounds/final_advanced_css.mp3"
},
fraps1A1: {
          text: "You awaken in a small cave, the morning sun casting long shadows on the walls. The air is thick with the scent of smoke and earth. Suddenly, a large stone door opens, revealing a wise elder from the Stone Age. He speaks: 'Welcome, young adventurer. You have entered the world of A-Frame. It is a place where you can shape your own virtual world, much like we shape the stone tools of our time. Do you wish to learn the ancient art of creating virtual worlds?'",
          choices: [
              { text: "YES, I AM READY TO LEARN!", next: "fraps1A2" },
              { text: "I'M NOT SURE, TELL ME MORE.", next: "fraps1A3" }
          ],
          background: "Assets/images/cave.jpg",
          sound: "Assets/sounds/cave-sounds.mp3"
      },
      fraps1A2: {
          text: "'Excellent!' the elder exclaims. 'To build a virtual world, you need to know its core elements: the **scene**, the **entities**, and the **assets**. Each part works together to create the world you see. Now, adventurer, tell me, which core concept shall we explore first?'",
          choices: [
              { text: "THE SCENE!", next: "fraps1A4" },
              { text: "THE ENTITIES!", next: "fraps1A5" },
              { text: "THE ASSETS!", next: "fraps1A6" }
          ],
          background: "Assets/images/elder.jpg",
          sound: "Assets/sounds/elder-voice.mp3"
      },
      fraps1A3: {
          text: "The elder nods solemnly, understanding your hesitation. 'Creating virtual worlds is a journey of discovery. It starts with understanding the basics: a **scene** to hold your world, **entities** to shape it, and **assets** to bring it to life. When you're ready, we shall explore these ancient secrets together.'",
          choices: [
              { text: "I'M READY TO BEGIN.", next: "fraps1A2" },
              { text: "I NEED MORE TIME TO THINK.", next: "fraps1A7" }
          ],
          background: "Assets/images/cave2.jpg",
          sound: "Assets/sounds/gentle-wind.mp3"
      },
      fraps1A4: {
          text: "'The **scene** is the foundation of your world,' the elder explains. 'It is where everything begins. Without it, there can be no world. Think of it as the canvas on which you paint your reality.' As he speaks, he reveals a glowing symbol on the wall: '<a-scene></a-scene>'.",
          choices: [
              { text: "UNDERSTOOD, WHAT'S NEXT?", next: "fraps1A8" }
          ],
          background: "Assets/images/scene.jpg",
          sound: "Assets/sounds/mystic-chime.mp3"
      },
      fraps1A5: {
          text: "'The **entities** are the building blocks of your world,' the elder continues. 'They can be anything: a rock, a tree, or even a creature. Each entity is defined by its shape and properties. For example, a simple box is written as '<a-box></a-box>.' The possibilities are endless.'",
          choices: [
              { text: "AMAZING, TELL ME MORE!", next: "fraps1A9" }
          ],
          background: "Assets/images/entities.jpg",
          sound: "Assets/sounds/stone-carving.mp3"
      },
  fraps1A6: {
            text: "'The **assets** are what make your world unique,' the elder explains. 'They are the images, sounds, and models that give life to your creation. Assets are stored separately and referenced to keep your world efficient and organized.' He shows you the glowing script: '<a-assets><img id=\"sky\" src=\"sky.jpg\"></a-assets>'.",
            choices: [
                { text: "I SEE, LET'S CONTINUE!", next: "fraps1A10" }
            ],
            background: "Assets/images/assets.jpg",
            sound: "Assets/sounds/ancient-scroll.mp3"
        },
        fraps1A7: {
            text: "The elder gives you a kind smile and says, 'Take your time, adventurer. The world of A-Frame awaits whenever you are ready. Remember, it is not only a journey of learning but also one of creation and joy.' You sit back, contemplating the exciting adventure ahead.",
            choices: [
                { text: "I AM READY NOW!", next: "fraps1A2" }
            ],
            background: "Assets/images/resting.jpg",
            sound: "Assets/sounds/soft-flute.mp3"
        },
        fraps1A8: {
            text: "'Now that you understand the **scene**, it is time to add depth to it,' the elder says. 'We begin with the **sky**, which sets the mood of your world. Whether it’s a bright blue day or a starry night, the sky is where your journey begins.'",
            choices: [
                { text: "HOW DO I CREATE A SKY?", next: "fraps1A11" }
            ],
            background: "Assets/images/sky.jpg",
            sound: "Assets/sounds/breeze.mp3"
        },
        fraps1A9: {
            text: "'Entities can take many forms,' the elder says. 'They can be boxes, spheres, or even custom models. Each entity can be styled with attributes like position, rotation, and color. Let me show you an example: '<a-box position=\"1 1 -3\" color=\"red\"></a-box>'.' As he finishes, a red box appears in the cave.",
            choices: [
                { text: "THIS IS FASCINATING! SHOW ME MORE.", next: "fraps1A12" }
            ],
            background: "Assets/images/entity-example.jpg",
            sound: "Assets/sounds/chisel.mp3"
        },
        fraps1A10: {
            text: "The elder gestures towards a glowing pool of water. 'The **assets** you use can include textures for objects, soundscapes for immersion, or even 3D models. By storing them efficiently, your world will load faster and run smoothly. Here is an example of asset usage: '<a-assets><audio id=\"ocean\" src=\"ocean.mp3\"></audio></a-assets>'.'",
            choices: [
                { text: "LET'S START USING ASSETS!", next: "fraps1A13" }
            ],
            background: "Assets/images/asset-pool.jpg",
            sound: "Assets/sounds/flowing-water.mp3"
        },
    fraps1A11: {
              text: "'To create a sky, you use the '<a-sky>' entity,' the elder explains. 'You can set its color, texture, or even use an image to create a realistic backdrop. For example: '<a-sky color=\"#87CEEB\"></a-sky>' creates a clear blue sky. Now, try it yourself!'",
              choices: [
                  { text: "I WILL CREATE A SKY NOW!", next: "fraps1A14" }
              ],
              background: "Assets/images/create-sky.jpg",
              sound: "Assets/sounds/sky-chime.mp3"
          },
          fraps1A12: {
              text: "'Entities can also have animations,' the elder continues. 'Adding motion to your objects makes your world dynamic. For example: '<a-animation attribute=\"rotation\" to=\"0 360 0\" dur=\"5000\" repeat=\"indefinite\"></a-animation>' makes an object rotate endlessly. What shall we animate first?'",
              choices: [
                  { text: "LET'S MAKE A SPINNING BOX!", next: "fraps1A15" },
                  { text: "CAN WE ANIMATE A SPHERE?", next: "fraps1A16" }
              ],
              background: "Assets/images/animated-entity.jpg",
              sound: "Assets/sounds/soft-drums.mp3"
          },
          fraps1A13: {
              text: "'Excellent,' the elder says with pride. 'Now that you know how to use **assets**, it is time to create a more immersive world. Let’s use a texture for the ground and a sound for the ambiance. Combine these assets into your scene to see the magic unfold!'",
              choices: [
                  { text: "LET'S DO IT!", next: "fraps1A17" }
              ],
              background: "Assets/images/immersive-world.jpg",
              sound: "Assets/sounds/ambient-world.mp3"
          },
          fraps1A14: {
              text: "As you write your first sky code, the cave transforms. Above, a vast expanse of blue appears, dotted with soft clouds. The elder claps his hands. 'Well done! You’ve just created the sky. Now, let’s move to the ground.'",
              choices: [
                  { text: "I'M READY FOR THE NEXT STEP.", next: "fraps1A18" }
              ],
              background: "Assets/images/sky-success.jpg",
              sound: "Assets/sounds/sky-creation.mp3"
          },
          fraps1A15: {
              text: "You create a spinning box by adding this code: '<a-box position=\"0 1.5 -3\" color=\"blue\"><a-animation attribute=\"rotation\" to=\"0 360 0\" dur=\"3000\" repeat=\"indefinite\"></a-animation></a-box>'. The box begins to spin gracefully in the air. 'Marvelous!' the elder says.",
              choices: [
                  { text: "WHAT ELSE CAN WE ANIMATE?", next: "fraps1A19" }
              ],
              background: "Assets/images/spinning-box.jpg",
              sound: "Assets/sounds/box-spin.mp3"
          },
      fraps1A16: {
                text: "You animate a sphere by using the code: '<a-sphere position=\"0 2 -3\" radius=\"1\" color=\"yellow\"><a-animation attribute=\"scale\" to=\"2 2 2\" dur=\"2000\" direction=\"alternate\" repeat=\"indefinite\"></a-animation></a-sphere>'. The sphere starts pulsating rhythmically.",
                choices: [
                    { text: "I WANT TO ADD MORE ELEMENTS!", next: "fraps1A20" }
                ],
                background: "Assets/images/pulsating-sphere.jpg",
                sound: "Assets/sounds/sphere-pulse.mp3"
            },
           fraps1A17: {
            text: "Using the asset pool, you create a textured ground and ambient sound: '<a-plane src=\"#grass-texture\" rotation=\"-90 0 0\" width=\"50\" height=\"50\"></a-plane>'. A grassy field spreads beneath your feet, accompanied by the sound of chirping birds. 'A beautiful start!' the elder says.",
            choices: [
                { text: "LET'S EXPAND THE WORLD!", next: "fraps1A18" }
            ],
            background: "Assets/images/grass-field.jpg",
            sound: "Assets/sounds/birds-chirping.mp3"
        },
        fraps1A18: {
            text: "As you expand your creation, the elder waves their hand toward the horizon. 'Your world must grow,' they say. You see distant shapes materializing, forming ancient ruins shrouded in mist. 'Follow me, there is much to learn,' the elder beckons.",
            choices: [
                { text: "FOLLOW THE ELDER", next: "fraps1A19" },
                { text: "PAUSE TO EXPLORE THE FIELD", next: "fraps1A20" }
            ],
            background: "Assets/images/forming-ruins.jpg",
            sound: "Assets/sounds/ethereal-woosh.mp3"
        },
        fraps1A19: {
            text: "The ruins stand tall, weathered by time yet brimming with power. At the center lies a glowing stone tablet, its inscriptions pulsing faintly. The elder turns to you with a serious expression. 'This artifact holds the key to true creation. Are you ready to unlock its secrets?'",
            choices: [
                { text: "STEP TOWARD THE TABLET", next: "fraps1A21" },
                { text: "ASK ABOUT THE TABLET", next: "fraps1A20" }
            ],
            background: "Assets/images/ancient-ruins.jpg",
            sound: "Assets/sounds/low-rumble.mp3"
        },
        fraps1A20: {
            text: "The elder pauses, sensing your hesitation. 'These ruins are remnants of the first creators, beings who shaped worlds with their minds. Their knowledge is stored within the tablet, but its power is not without cost.' They wait for your decision.",
            choices: [
                { text: "CONTINUE TO THE TABLET", next: "fraps1A21" },
                { text: "STAY BACK AND REFLECT", next: "fraps1A17" }
            ],
            background: "Assets/images/elder-explains.jpg",
            sound: "Assets/sounds/mystic-chime.mp3"
        },
        fraps1A21: {
              text: "The elder nods approvingly. 'Now, observe,' they say, as they gesture toward the tablet. The inscriptions shift and glow brighter, illuminating the ruins around you. 'These symbols guide you to shape your virtual world with purpose.'",
              choices: [
                  { text: "TOUCH THE TABLET", next: "fraps1A22" },
                  { text: "STUDY THE SYMBOLS FIRST", next: "fraps1A23" }
              ],
              background: "Assets/images/tablet-glowing.jpg",
              sound: "Assets/sounds/stone-hum.mp3"
          },
          fraps1A22: {
              text: "The elder beckons you closer to the ancient stone tablet. As your fingers graze its surface, a surge of energy courses through you, filling your mind with visions of creation. 'This is the beginning,' the elder whispers. 'With this knowledge, you can bring your virtual world to life.'",
              choices: [
                  { text: "EMBRACE THE POWER", next: "fraps1A24" },
                  { text: "STEP BACK AND PROCESS", next: "fraps1A20" }
              ],
              background: "Assets/images/tablet-power.jpg",
              sound: "Assets/sounds/mystic-surge.mp3"
          },
              fraps1A23: {
                  text: "'A component is an individual piece of functionality that can be added to an entity. For example, a component might change the color of an object or make it rotate automatically. Here’s a simple example: '<a-box color=\"red\" rotation=\"0 45 0\"></a-box>'. The rotation component will spin the box.'",
                  choices: [
                      { text: "HOW CAN I CREATE MY OWN COMPONENT?", next: "fraps1A24" }
                  ],
                  background: "Assets/images/box-rotation.jpg",
                  sound: "Assets/sounds/box-spin.mp3"
              },
              fraps1A24: {
                  text: "'To create a custom component, you must first define it in JavaScript. Here’s how we can create a component that changes an entity’s position over time: '<a-entity position=\"0 2 -5\" my-move></a-entity>' with the component code: '<script>AFRAME.registerComponent('my-move', { tick: function () { this.el.setAttribute('position', {x: 0, y: Math.sin(Date.now() / 1000) * 2, z: -5}); } });</script>' The entity will float up and down over time.'",
                  choices: [
                      { text: "LET'S TRY CREATING A COMPONENT!", next: "fraps1A25" }
                  ],
                  background: "Assets/images/custom-component.jpg",
                  sound: "Assets/sounds/creative-work.mp3"
              },
              fraps1A25: {
                  text: "You begin to write your first component. After defining it, you place the entity in the world: '<a-entity my-move></a-entity>'. The entity starts floating, moving up and down. The elder watches with pride. 'Excellent! You’ve created your own movement component. Now you can add more behaviors to your world using similar components.'",
                  choices: [
                      { text: "I'M READY TO LEARN MORE COMPONENTS!", next: "fraps1A26" }
                  ],
                  background: "Assets/images/floating-entity.jpg",
                  sound: "Assets/sounds/moving-entity.mp3"
              },
          fraps1A26: {
                    text: "'Next, let’s dive into more advanced components. A-Frame allows you to manipulate many aspects of an entity, like its material or its interactions with the user. For example, the **cursor** component can detect when a user points at an object, and trigger an event like changing the color of an object. You can add this behavior with: '<a-box color=\"blue\" cursor></a-box>' and the box will change color when clicked.'",
                    choices: [
                        { text: "I WANT TO MAKE INTERACTIVE OBJECTS!", next: "fraps1A27" }
                    ],
                    background: "Assets/images/cursor-interaction.jpg",
                    sound: "Assets/sounds/click.mp3"
                },
                fraps1A27: {
                    text: "'Let’s enhance your interactive world. You can use the **animation** component to bring objects to life. For example, adding animation to the box with: '<a-box color=\"green\"><a-animation attribute=\"rotation\" to=\"0 360 0\" dur=\"2000\" repeat=\"indefinite\"></a-animation></a-box>' will make it rotate endlessly, turning into an interactive, dynamic part of your world.'",
                    choices: [
                        { text: "LET'S ADD ANIMATION!", next: "fraps1A28" }
                    ],
                    background: "Assets/images/rotating-box.jpg",
                    sound: "Assets/sounds/rotation-sound.mp3"
                },
                fraps1A28: {
                    text: "'Great work! Now, let’s explore how to combine multiple components for greater complexity. For example, you could add a **sound** component to the rotating box. The sound could play when the box starts rotating, like this: '<a-box color=\"purple\" rotation=\"0 0 0\"><a-animation attribute=\"rotation\" to=\"0 360 0\" dur=\"2000\" repeat=\"indefinite\"></a-animation><a-sound src=\"#click-sound\"></a-sound></a-box>'. When the box rotates, the sound will play as well.'",
                    choices: [
                        { text: "THIS IS AMAZING! LET’S COMBINE MORE COMPONENTS.", next: "fraps1A29" }
                    ],
                    background: "Assets/images/animated-sound-box.jpg",
                    sound: "Assets/sounds/ambient-sound.mp3"
                },
                fraps1A29: {
                    text: "You successfully combine the components to create a dynamic, interactive world where entities rotate, move, and make sounds. The elder nods approvingly. 'You are now learning the true power of A-Frame components. By combining them, you can create infinite possibilities for your virtual worlds.'",
                    choices: [
                        { text: "WHAT ELSE CAN I CREATE WITH COMPONENTS?", next: "fraps1A30" }
                    ],
                    background: "Assets/images/combo-entity.jpg",
                    sound: "Assets/sounds/ambient-background.mp3"
                },
                fraps1A30: {
                    text: "'You can create complex systems using multiple components. For example, adding a **physics** component allows objects to interact with each other, simulating gravity and collisions. Let’s add a simple physics behavior: '<a-box dynamic-body></a-box>'. This box will now fall and bounce, just like a physical object.'",
                    choices: [
                        { text: "LET’S ADD PHYSICS TO AN OBJECT!", next: "fraps1A31" }
                    ],
                    background: "Assets/images/physics-object.jpg",
                    sound: "Assets/sounds/impact-sound.mp3"
                },
  fraps1A31: {
            text: "You add the `dynamic-body` component to an entity. It starts falling and bouncing as if affected by gravity. The elder smiles. 'You have now unlocked the ability to bring true interactivity and realism to your world using A-Frame components.'",
            choices: [
                { text: "I’M READY TO CREATE MY WORLD!", next: "fraps1A32" }
            ],
            background: "Assets/images/physics-entity.jpg",
            sound: "Assets/sounds/bounce.mp3"
        },
   
        fraps1A32: {
            text: "'Now that you've mastered components, it’s time to learn about the fundamental building blocks of A-Frame – **primitive shapes**. These are the basic shapes that you can create and manipulate in your virtual world. From a simple box to complex geometries, primitives are the foundation of every virtual object.'",
            choices: [
                { text: "WHAT ARE PRIMITIVE SHAPES?", next: "fraps1A33" }
            ],
            background: "Assets/images/primitive-shapes.jpg",
            sound: "Assets/sounds/mystic-chimes.mp3"
        },
        fraps1A33: {
            text: "'In A-Frame, there are several types of primitive shapes: the **box**, **sphere**, **cylinder**, **cone**, and **plane**. These shapes are incredibly versatile and can be customized to create almost anything in your world. For example, you can create a box using '<a-box color=\"blue\"></a-box>' or a sphere using '<a-sphere color=\"green\"></a-sphere>'.'",
            choices: [
                { text: "HOW DO I CUSTOMIZE THESE SHAPES?", next: "fraps1A34" }
            ],
            background: "Assets/images/box-sphere.jpg",
            sound: "Assets/sounds/shape-sounds.mp3"
        },
        fraps1A34: {
            text: "'To customize these shapes, you can modify their properties like size, position, and rotation. For instance, you can change the size of a box with the `width`, `height`, and `depth` attributes: '<a-box width=\"2\" height=\"3\" depth=\"1\" color=\"red\"></a-box>'. Similarly, you can rotate and move shapes with `rotation` and `position` attributes.'",
            choices: [
                { text: "CAN I COMBINE PRIMITIVE SHAPES?", next: "fraps1A35" }
            ],
            background: "Assets/images/combined-shapes.jpg",
            sound: "Assets/sounds/shapes-blend.mp3"
        },
        fraps1A35: {
            text: "'Yes, you can! By combining multiple primitives, you can create complex structures. For example, combining a box and a sphere will create a basic object like a robot’s body or a building’s window. To place two objects side by side, you just modify their `position` attributes: '<a-box position=\"0 1 0\"></a-box><a-sphere position=\"2 1 0\"></a-sphere>'.'",
            choices: [
                { text: "I WANT TO TRY CREATING MY OWN SHAPE COMBINATION.", next: "fraps1A36" }
            ],
            background: "Assets/images/robot-creation.jpg",
            sound: "Assets/sounds/robot-build.mp3"
        },
        fraps1A36: {
            text: "You begin to experiment with combining different primitive shapes. By adjusting their positions, sizes, and colors, you create a new object. The elder looks on with approval. 'Well done! You’ve now built your own creation using primitive shapes. This is the first step to crafting more complex worlds.'",
            choices: [
                { text: "I WANT TO EXPLORE MORE SHAPES.", next: "fraps1A37" }
            ],
            background: "Assets/images/complex-shapes.jpg",
            sound: "Assets/sounds/creative-building.mp3"
        },
        fraps1A37: {
            text: "'There are many other primitives to explore. The **cylinder** is perfect for creating things like trees, pillars, or pipes. Use '<a-cylinder color=\"brown\" radius=\"0.5\" height=\"4\"></a-cylinder>' to create a tree trunk. The **cone** is ideal for creating objects like cones, traffic cones, or even rocket ships. Use '<a-cone color=\"orange\" radius-bottom=\"1\" height=\"3\"></a-cone>' to create a cone-shaped object.'",
            choices: [
                { text: "I WANT TO CREATE A TREE USING A CYLINDER.", next: "fraps1A38" }
            ],
            background: "Assets/images/cylinder-tree.jpg",
            sound: "Assets/sounds/tree-sounds.mp3"
        },
        fraps1A38: {
            text: "You place a cylinder in your world and adjust its size and color to resemble a tree trunk. Then, you use another primitive — a sphere — to create the tree's leaves. You place the sphere on top of the cylinder and scale it to look like a crown of leaves. The elder nods in approval. 'Excellent! You have brought nature into your world using simple shapes.'",
            choices: [
                { text: "CAN I MAKE A BUILDING USING PRIMITIVES?", next: "fraps1A39" }
            ],
            background: "Assets/images/tree-building.jpg",
            sound: "Assets/sounds/nature-sounds.mp3"
        },
        fraps1A39: {
            text: "'Of course! You can create a building using the **plane** for the ground and **boxes** for walls. Start by creating a large plane for the ground: '<a-plane width=\"10\" height=\"10\" color=\"gray\"></a-plane>'. Then, build the walls using boxes, adjusting their size and position to form a structure. You can even create windows and doors by adding smaller boxes with different sizes.'",
            choices: [
                { text: "LET’S CREATE A SIMPLE BUILDING.", next: "fraps1A40" }
            ],
            background: "Assets/images/building-creation.jpg",
            sound: "Assets/sounds/constructing.mp3"
        },
        fraps1A40: {
            text: "You begin to build a simple house by combining boxes for walls and a plane for the floor. You add windows and a door by resizing and positioning smaller boxes. The elder smiles proudly. 'You’ve now created a basic structure! Remember, with primitive shapes, you can create anything — from houses to entire cities!'",
            choices: [
                { text: "I CAN CREATE ANYTHING NOW!", next: "fraps1A41" }
            ],
            background: "Assets/images/house-complete.jpg",
            sound: "Assets/sounds/building-complete.mp3"
        },
    fraps1A41: {
              text: "'Indeed, you can. Keep experimenting and combining shapes to create more complex objects and worlds. The possibilities are endless, and with the power of primitives, you can start building anything your imagination dreams up.'",
              choices: [
                  { text: "I'M READY TO EXPLORE MORE ADVANCED TOPICS!", next: "fraps1A42" }
              ],
              background: "Assets/images/advanced-structures.jpg",
              sound: "Assets/sounds/next-step.mp3"
          },
     
          fraps1A42: {
              text: "'As you explore the world you’ve created, you realize that you need a way to **see** everything clearly. In A-Frame, the **camera** is your eyes in the virtual world. It defines the viewpoint from which you observe the scene. Just like how you move through the real world, you can control the camera’s position and movement in your virtual world.'",
              choices: [
                  { text: "TELL ME MORE ABOUT THE CAMERA!", next: "fraps1A43" }
              ],
              background: "Assets/images/camera-view.jpg",
              sound: "Assets/sounds/echo.mp3"
          },
          fraps1A43: {
              text: "'In A-Frame, the camera is an entity just like any other object. It’s placed in the scene, and you can use it to look around. By default, A-Frame provides a camera that you can move using the mouse or keyboard. But you can customize the camera’s position and other settings by changing the `position`, `rotation`, and `fov` attributes.'",
              choices: [
                  { text: "HOW CAN I CUSTOMIZE THE CAMERA?", next: "fraps1A44" }
              ],
              background: "Assets/images/camera-settings.jpg",
              sound: "Assets/sounds/camera-adjust.mp3"
          },
          fraps1A44: {
              text: "'To customize the camera, you can adjust its `position` attribute to set where the camera is in the world. For example, `<a-camera position=\"0 1.6 5\"></a-camera>` places the camera 5 units forward along the Z-axis. You can also change the camera's `rotation` to control which direction it faces. For example, `<a-camera rotation=\"0 90 0\"></a-camera>` will make the camera look to the right.'",
              choices: [
                  { text: "CAN I CONTROL THE CAMERA WITH KEYBOARD?", next: "fraps1A45" }
              ],
              background: "Assets/images/moving-camera.jpg",
              sound: "Assets/sounds/movement.mp3"
          },
          fraps1A45: {
              text: "'Yes! You can use the **wasd** keys to move the camera forward, backward, left, and right. By adding the `<a-camera wasd-controls></a-camera>` component to the camera entity, you give it the ability to move through the world using the keyboard. You can also change the **look-controls** component to enable mouse or touch control.'",
              choices: [
                  { text: "WHAT ABOUT THE FIELD OF VIEW?", next: "fraps1A46" }
              ],
              background: "Assets/images/field-of-view.jpg",
              sound: "Assets/sounds/fov-adjust.mp3"
          },
          fraps1A46: {
              text: "'The **field of view** (FOV) controls how wide the camera's view is. A higher FOV allows the camera to see more of the scene at once, while a lower FOV makes the world appear zoomed in. You can change the FOV by adjusting the `fov` attribute: `<a-camera fov=\"75\"></a-camera>`. A common setting is 75 degrees, but you can experiment with other values.'",
              choices: [
                  { text: "CAN I ADD A CAMERA EFFECT, LIKE A SHAKE?", next: "fraps1A47" }
              ],
              background: "Assets/images/camera-effect.jpg",
              sound: "Assets/sounds/camera-shake.mp3"
          },
          fraps1A47: {
              text: "'Yes! You can add special effects to the camera, such as a camera shake or a smooth transition between different views. There are various components in A-Frame, such as **aframe-effects**, that allow you to add visual effects to the camera. You can also use **animation** to smoothly move the camera from one point to another.'",
              choices: [
                  { text: "I WANT TO TRY MOVING THE CAMERA!", next: "fraps1A48" }
              ],
              background: "Assets/images/camera-animation.jpg",
              sound: "Assets/sounds/transition.mp3"
          },
          fraps1A48: {
              text: "You decide to test your newfound camera skills by creating a smooth camera animation. You adjust the camera’s position and rotation over time to smoothly transition to a new viewpoint in the world. The elder smiles and nods in approval. 'Good work! You've now mastered how to control the viewpoint of your world.'",
              choices: [
                  { text: "I'M READY TO EXPLORE MORE CAMERA OPTIONS.", next: "fraps1A49" }
              ],
              background: "Assets/images/smooth-transition.jpg",
              sound: "Assets/sounds/smooth-move.mp3"
          },
          fraps1A49: {
              text: "'There are many more camera effects you can explore. For example, you can create a **first-person perspective** camera by combining the camera with a **cursor**. You can even create a **third-person perspective** where the camera follows an object. The possibilities are endless, and as you progress, you’ll discover new ways to use the camera in A-Frame.'",
              choices: [
                  { text: "I’M READY TO MOVE ON TO MORE ADVANCED TOPICS!", next: "fraps1A50" }
              ],
              background: "Assets/images/advanced-camera.jpg",
              sound: "Assets/sounds/next-steps.mp3"
          },
          fraps1A50: {
              text: "'Fantastic! You now have the basic understanding of the camera and how to use it to navigate your world. In the next steps, we’ll dive into more advanced topics, such as adding lighting and shadows to your world, which will enhance the realism and depth of your scenes.'",
              choices: [
                  { text: "LET’S BEGIN EXPLORING LIGHTING AND SHADOWS.", next: "fraps1A51" }
              ],
              background: "Assets/images/lighting-effects.jpg",
              sound: "Assets/sounds/lighting.mp3"
          },
    
            fraps1A51: {
                text: "'Now that you’ve learned how to control the camera, it’s time to shed some light on your virtual world. In A-Frame, **lights** are essential for illuminating your scene. They help bring life to the environment, allowing the colors and textures to shine. Without light, the world remains dark and mysterious, just like a cave.'",
                choices: [
                    { text: "TELL ME MORE ABOUT LIGHTING!", next: "fraps1A52" }
                ],
                background: "Assets/images/lighting-intro.jpg",
                sound: "Assets/sounds/lighting-mysterious.mp3"
            },
            fraps1A52: {
                text: "'In A-Frame, you can add several types of lights to your scene. The most common types are **ambient light**, **directional light**, and **point light**. Each type has different uses and effects on how your scene is illuminated.'",
                choices: [
                    { text: "WHAT IS AMBIENT LIGHT?", next: "fraps1A53" }
                ],
                background: "Assets/images/ambient-light.jpg",
                sound: "Assets/sounds/ambient-light.mp3"
            },
            fraps1A53: {
                text: "'**Ambient light** is the most basic form of lighting. It provides a soft, even light that illuminates all objects equally, without casting any shadows. This light helps remove the dark shadows in areas where there’s no direct light. You can adjust its brightness using the `intensity` attribute, for example: `<a-light type=\"ambient\" intensity=\"0.5\"></a-light>`.'",
                choices: [
                    { text: "WHAT ABOUT DIRECTIONAL LIGHT?", next: "fraps1A54" }
                ],
                background: "Assets/images/directional-light.jpg",
                sound: "Assets/sounds/directional-light.mp3"
            },
            fraps1A54: {
                text: "'**Directional light** simulates sunlight. It shines in a single direction and casts shadows on objects. The light is **parallel**, so it’s great for simulating sunlight or moonlight. You can control the direction of the light using the `rotation` attribute: `<a-light type=\"directional\" rotation=\"-90 0 0\"></a-light>`.'",
                choices: [
                    { text: "CAN POINT LIGHT BE DIFFERENT?", next: "fraps1A55" }
                ],
                background: "Assets/images/point-light.jpg",
                sound: "Assets/sounds/point-light.mp3"
            },
            fraps1A55: {
                text: "'**Point light** is like a light bulb. It radiates light in all directions from a single point. It’s great for simulating small light sources like lamps or fireflies. You can control the intensity and radius of the light to make it more realistic: `<a-light type=\"point\" intensity=\"1\" distance=\"10\"></a-light>`.'",
                choices: [
                    { text: "HOW CAN I ADD SHADOWS TO THE LIGHT?", next: "fraps1A56" }
                ],
                background: "Assets/images/lighting-with-shadow.jpg",
                sound: "Assets/sounds/shadows.mp3"
            },
            fraps1A56: {
                text: "'Shadows add depth to your scene and make it look more realistic. You can add shadows by enabling the `castShadow` and `receiveShadow` attributes. For example, to make a light cast shadows, you would add `castShadow` to the light: `<a-light type=\"directional\" castShadow=\"true\"></a-light>`. You also need to enable `receiveShadow` for the objects you want to cast shadows onto: `<a-box receiveShadow=\"true\"></a-box>`.'",
                choices: [
                    { text: "I WANT TO TRY ADDING LIGHT AND SHADOW!", next: "fraps1A57" }
                ],
                background: "Assets/images/lighting-experiment.jpg",
                sound: "Assets/sounds/lighting-test.mp3"
            },
            fraps1A57: {
                text: "You decide to experiment with different lighting settings. You place an ambient light for soft illumination, a directional light for the sun, and a point light to simulate a glowing lantern. Then, you adjust the shadows to create a more realistic effect. The world now looks more alive, with soft shadows falling around the objects.",
                choices: [
                    { text: "THIS LOOKS AMAZING! WHAT’S NEXT?", next: "fraps1A58" }
                ],
                background: "Assets/images/lighting-finished.jpg",
                sound: "Assets/sounds/lighting-finish.mp3"
            },
            fraps1A58: {
                text: "'Great job! You’ve mastered the basics of lighting. The next step in your journey is to learn how to manipulate materials and textures to make your world even more interesting. Lights work hand-in-hand with materials, so understanding both will allow you to create truly dynamic scenes.'",
                choices: [
                    { text: "I'M EXCITED TO LEARN ABOUT MATERIALS!", next: "fraps1A59" }
                ],
                background: "Assets/images/materials.jpg",
                sound: "Assets/sounds/materials-intro.mp3"
            },
        
            fraps1A59: {
                text: "'Now that you've learned how to light up your world, it's time to add some movement! **Animations** bring your world to life, making it more dynamic and interactive. In A-Frame, you can animate objects, lights, cameras, and even the entire scene. Animations make it feel like the world is constantly changing and evolving.'",
                choices: [
                    { text: "TELL ME HOW TO ANIMATE OBJECTS!", next: "fraps1A60" }
                ],
                background: "Assets/images/animation-intro.jpg",
                sound: "Assets/sounds/animation-magic.mp3"
            },
            fraps1A60: {
                text: "'Animating objects in A-Frame is easy. You can use the `animation` component to define a series of properties such as position, rotation, scale, and more. The animation will be applied over a set period of time. For example, you can animate a cube to move up and down using: `<a-box animation=\"property: position; to: 0 2 0; dur: 2000; loop: true\"></a-box>`.'",
                choices: [
                    { text: "CAN I ADD MULTIPLE ANIMATIONS TO ONE OBJECT?", next: "fraps1A61" }
                ],
                background: "Assets/images/animate-move.jpg",
                sound: "Assets/sounds/move-animation.mp3"
            },
        fraps1A61: {
                  text: "'Yes, you can add multiple animations to a single object. For example, you can animate the position, rotation, and scale of an object simultaneously. To do so, you simply add multiple `animation` components to the same object. Here’s how you might animate a cube rotating and moving at the same time: `<a-box animation=\"property: position; to: 0 2 0; dur: 2000; loop: true\" animation__rotate=\"property: rotation; to: 0 360 0; dur: 4000; loop: true\"></a-box>`.'",
                  choices: [
                      { text: "WHAT OTHER ANIMATIONS CAN I CREATE?", next: "fraps1A62" }
                  ],
                  background: "Assets/images/animate-rotate.jpg",
                  sound: "Assets/sounds/rotate-animation.mp3"
              },
              fraps1A62: {
                  text: "'There are a variety of animation types you can use in A-Frame. For example, you can animate a light to change its color, make objects scale up and down, or even move through the scene. Some of the most popular animations include: **color animation**, **scaling animation**, and **position animation**. Here’s how you could animate the color of an object: `<a-box animation=\"property: material.color; to: red; dur: 1000; loop: true\"></a-box>`.'",
                  choices: [
                      { text: "CAN I ANIMATE THE CAMERA TOO?", next: "fraps1A63" }
                  ],
                  background: "Assets/images/animate-color.jpg",
                  sound: "Assets/sounds/color-animation.mp3"
              },
              fraps1A63: {
                  text: "'Yes! You can animate the camera just like any other object. For example, you can animate the camera to move smoothly across the scene, providing a cinematic feel. To animate the camera, you can use a similar syntax as with other objects. Here’s an example of a camera moving: `<a-camera animation=\"property: position; to: 0 5 10; dur: 3000; easing: easeInOutQuad\"></a-camera>`.'",
                  choices: [
                      { text: "CAN I ANIMATE THE ENTIRE SCENE?", next: "fraps1A64" }
                  ],
                  background: "Assets/images/animate-camera.jpg",
                  sound: "Assets/sounds/camera-animation.mp3"
              },
              fraps1A64: {
                  text: "'Yes, the entire scene can be animated! You can animate the camera, lights, and objects all at once. You can also create more complex animations like **timelines** and **delays** using the `animation__` property for multiple objects. You can synchronize them to create dramatic effects, like a slow-moving camera with fading lights and objects flying by.'",
                  choices: [
                      { text: "I WANT TO TRY ANIMATION NOW!", next: "fraps1A65" }
                  ],
                  background: "Assets/images/animation-scene.jpg",
                  sound: "Assets/sounds/scene-animation.mp3"
              },
              fraps1A65: {
                  text: "You decide to create a moving world. You animate a cube that moves up and down while rotating, a light that changes color, and the camera that smoothly moves through the scene. The world now feels alive with motion and energy, as if it’s always in motion.",
                  choices: [
                      { text: "IT LOOKS AWESOME! WHAT'S NEXT?", next: "fraps1A66" }
                  ],
                  background: "Assets/images/animation-done.jpg",
                  sound: "Assets/sounds/animation-complete.mp3"
              },
              fraps1A66: {
                  text: "'Great work! You’ve mastered basic animations. With this knowledge, you can now create a dynamic, interactive world. The next step is to learn how to use **events** to trigger animations and interactions. This will allow you to create even more engaging experiences for your users.'",
                  choices: [
                      { text: "I CAN'T WAIT TO LEARN ABOUT EVENTS!", next: "fraps1A67" }
                  ],
                  background: "Assets/images/events.jpg",
                  sound: "Assets/sounds/events-intro.mp3"
              },
       
              fraps1A67: {
                  text: "'Now that your world is alive with animation, it’s time to make it interactive! **Interactivity** allows users to engage with your world, triggering actions when they click, hover, or press keys. In A-Frame, you can use **events** to make objects react to user actions.'",
                  choices: [
                      { text: "TELL ME MORE ABOUT INTERACTIVITY!", next: "fraps1A68" }
                  ],
                  background: "Assets/images/interactivity-intro.jpg",
                  sound: "Assets/sounds/interactivity-intro.mp3"
              },
              fraps1A68: {
                  text: "'In A-Frame, interactivity is mostly handled through **event listeners**. These events can be triggered by user actions, such as **clicking**, **hovering**, or **key presses**. You can attach events to any object in the scene. For example, if you want an object to respond when clicked, you would use the `event-listener` component like this: `<a-box event-listener=\"click: changeColor\"></a-box>`.'",
                  choices: [
                      { text: "CAN I CHANGE THE OBJECT'S PROPERTIES ON CLICK?", next: "fraps1A69" }
                  ],
                  background: "Assets/images/click-interaction.jpg",
                  sound: "Assets/sounds/click-interaction.mp3"
              },
              fraps1A69: {
                  text: "'Yes, absolutely! You can change an object's properties when it is clicked. For example, you can change its color, position, or even trigger an animation. Here's how you can change the color of a box when clicked: `<a-box event-listener=\"click: changeColor\" material=\"color: blue\"></a-box>`. This will make the box turn blue when clicked.'",
                  choices: [
                      { text: "WHAT ABOUT HOVER EFFECTS?", next: "fraps1A70" }
                  ],
                  background: "Assets/images/hover-interaction.jpg",
                  sound: "Assets/sounds/hover-interaction.mp3"
              },
              fraps1A70: {
                  text: "'Hover effects are also very popular for interactivity. You can change an object's properties when the user hovers over it, such as scaling up or changing color. Here’s an example of an object scaling when hovered: `<a-box event-listener=\"mouseenter: scaleUp; mouseleave: scaleDown\"></a-box>`. This makes the object scale up when the mouse enters and scale down when the mouse leaves.'",
                  choices: [
                      { text: "CAN I ADD KEYBOARD INTERACTIVITY?", next: "fraps1A71" }
                  ],
                  background: "Assets/images/keyboard-interaction.jpg",
                  sound: "Assets/sounds/keyboard-interaction.mp3"
              },
          fraps1A71: {
                    text: "'Yes, A-Frame allows you to add keyboard interactivity as well. You can listen for specific keys being pressed using the `keyboard` event. For example, you can move an object using the keyboard by detecting key presses like this: `<a-box event-listener=\"keydown: moveObject\"></a-box>`. You would then define the `moveObject` action in your code to respond to specific key presses.'",
                    choices: [
                        { text: "WHAT IF I WANT TO TRIGGER ANIMATION WITH INTERACTIONS?", next: "fraps1A72" }
                    ],
                    background: "Assets/images/animation-interaction.jpg",
                    sound: "Assets/sounds/animation-interaction.mp3"
                },
                fraps1A72: {
                    text: "'You can trigger animations based on interactions too! For example, you can make an object animate when clicked by using events and animations together. Here’s how you might animate an object to move and rotate when clicked: `<a-box event-listener=\"click: animateObject\" animation__move=\"property: position; to: 0 5 0; dur: 1000\" animation__rotate=\"property: rotation; to: 0 360 0; dur: 2000\"></a-box>`. This will animate the object to move and rotate when clicked.'",
                    choices: [
                        { text: "CAN I COMBINE SEVERAL INTERACTIONS?", next: "fraps1A73" }
                    ],
                    background: "Assets/images/multiple-interactions.jpg",
                    sound: "Assets/sounds/multiple-interactions.mp3"
                },
                fraps1A73: {
                    text: "'Yes! You can combine multiple interactions to create complex, multi-step responses. For instance, you can create an interaction that involves moving an object, changing its color, and triggering an animation all at once. You can also use `mixins` to group and apply several interactions to multiple objects at once, making your world even more interactive.'",
                    choices: [
                        { text: "I'M READY TO MAKE MY WORLD INTERACTIVE!", next: "fraps1A74" }
                    ],
                    background: "Assets/images/world-interactive.jpg",
                    sound: "Assets/sounds/world-interactive.mp3"
                },
                fraps1A74: {
                    text: "Excited to begin, you start adding interactivity to your world. You create clickable objects that change color, hoverable objects that scale, and interactive animations triggered by clicks and key presses. Your world is now full of life and interaction, offering a personalized experience for each user.",
                    choices: [
                        { text: "WHAT'S NEXT ON MY JOURNEY?", next: "fraps1A75" }
                    ],
                    background: "Assets/images/interactive-world.jpg",
                    sound: "Assets/sounds/interactive-complete.mp3"
                },
                fraps1A75: {
                    text: "'Now that your world is interactive, you can add even more features, like **user interfaces** or **VR interactions**. There’s always more to explore in A-Frame, and your journey is far from over. The next step is learning how to integrate your world with external data and making it truly dynamic.'",
                    choices: [
                        { text: "LET'S EXPLORE EXTERNAL DATA INTEGRATION!", next: "fraps1A76" }
                    ],
                    background: "Assets/images/external-data.jpg",
                    sound: "Assets/sounds/external-data.mp3"
                },
              fraps1A76: {
                    text: "'Your world is now interactive, but what’s a world without sound? Let’s explore **audio** in A-Frame! Audio can add a lot of atmosphere to your world. You can play background music, sound effects for interactions, or even spatialize sounds to make them feel more immersive.'",
                    choices: [
                        { text: "TELL ME MORE ABOUT AUDIO IN A-FRAME!", next: "fraps1A77" }
                    ],
                    background: "Assets/images/audio-intro.jpg",
                    sound: "Assets/sounds/audio-intro.mp3"
                },
                fraps1A77: {
                    text: "'A-Frame allows you to add audio in two main ways: by embedding audio files in the scene or using the `sound` component to play sounds when certain events occur. Let’s start by adding a simple background audio that plays continuously as soon as the scene loads. You can do this like this: `<a-sound src=\"#background-sound\" loop=\"true\" autoplay=\"true\"></a-sound>`.'",
                    choices: [
                        { text: "CAN I USE MULTIPLE SOUNDS?", next: "fraps1A78" }
                    ],
                    background: "Assets/images/background-audio.jpg",
                    sound: "Assets/sounds/background-audio.mp3"
                },
                fraps1A78: {
                    text: "'Yes, you can use multiple sounds in your scene! You can add several `<a-sound>` elements to your world, each with a unique audio source. For example, you can have one sound that plays when an object is clicked and another when the user enters a certain area. Here’s how you might add sound to an object: `<a-box position=\"0 2 -5\" sound=\"src: url(#click-sound)\"></a-box>`.'",
                    choices: [
                        { text: "HOW CAN I CONTROL AUDIO VOLUME?", next: "fraps1A79" }
                    ],
                    background: "Assets/images/sound-control.jpg",
                    sound: "Assets/sounds/sound-control.mp3"
                },
                fraps1A79: {
                    text: "'You can control the volume of each sound individually. The `sound` component allows you to adjust the volume with the `volume` attribute. For example, to lower the volume of a sound, you can use: `<a-sound src=\"#sound-source\" volume=\"0.5\"></a-sound>`. This will set the sound's volume to 50% of the original level.'",
                    choices: [
                        { text: "CAN I SPATIALIZE AUDIO?", next: "fraps1A80" }
                    ],
                    background: "Assets/images/spatial-sound.jpg",
                    sound: "Assets/sounds/spatial-sound.mp3"
                },
                fraps1A80: {
                    text: "'Absolutely! A-Frame supports **spatial audio**, which means sounds can be placed in 3D space and heard from different positions in the world. For example, you can place a sound at a specific location and have it only audible when the user is close. Here’s how you can do it: `<a-sound position=\"0 2 -5\" src=\"#spatial-sound\" distanceModel=\"linear\" maxDistance=\"10\"></a-sound>`. This sound will be heard only within a 10-meter radius.'",
                    choices: [
                        { text: "WHAT ABOUT SOUND EVENTS?", next: "fraps1A81" }
                    ],
                    background: "Assets/images/sound-events.jpg",
                    sound: "Assets/sounds/sound-events.mp3"
                },
            fraps1A81: {
                      text: "'You can trigger sounds in response to **events** in A-Frame, just like with interactivity. For example, you can play a sound when an object is clicked by adding the `sound` component to an event listener: `<a-box event-listener=\"click: playSound\" sound=\"src: url(#click-sound)\"></a-box>`. This will trigger the sound every time the box is clicked.'",
                      choices: [
                          { text: "CAN I COMBINE AUDIO AND ANIMATIONS?", next: "fraps1A82" }
                      ],
                      background: "Assets/images/audio-animation.jpg",
                      sound: "Assets/sounds/audio-animation.mp3"
                  },
                  fraps1A82: {
                      text: "'Yes, you can combine audio with animations to create more dynamic experiences! You can have sounds play during specific points in an animation, like having footsteps sound as an object moves. Here's an example: `<a-box animation__move=\"property: position; to: 0 5 -5; dur: 1000\" sound=\"src: url(#footsteps)\"></a-box>`. This will play the footsteps sound while the box moves.'",
                      choices: [
                          { text: "CAN I CREATE A REACTIVE AUDIO EXPERIENCE?", next: "fraps1A83" }
                      ],
                      background: "Assets/images/reactive-audio.jpg",
                      sound: "Assets/sounds/reactive-audio.mp3"
                  },
                  fraps1A83: {
                      text: "'You can create a reactive audio experience by using the `sound` component in combination with other elements like **user input** or **object states**. For example, you can change the volume of a sound depending on how far the user is from an object or change the sound when a particular event occurs. Here’s an example: `<a-sound src=\"#reactive-sound\" volume=\"${userDistance}\" loop=\"true\"></a-sound>`. This will adjust the volume based on the distance between the user and the sound source.'",
                      choices: [
                          { text: "I'M READY TO ADD AUDIO TO MY WORLD!", next: "fraps1A84" }
                      ],
                      background: "Assets/images/audio-ready.jpg",
                      sound: "Assets/sounds/audio-ready.mp3"
                  },
                  fraps1A84: {
                      text: "'Now that you know how to add audio to your world, you can start experimenting with background music, sound effects, spatial audio, and even interactive sounds that respond to user actions. Your world is now not only interactive, but also full of life and sound! What will you create next?'",
                      choices: [
                          { text: "LET'S MAKE IT EVEN MORE IMMERSIVE!", next: "fraps1A85" }
                      ],
                      background: "Assets/images/immersive-world.jpg",
                      sound: "Assets/sounds/immersive-world.mp3"
                  },
                  fraps1A85: {
                      text: "'There’s always more to explore in A-Frame! You can continue to add more features, like integrating **music** or creating complex interactive audio systems that change based on user input or the environment. The possibilities are endless.'",
                      choices: [
                          { text: "WHAT ELSE CAN I LEARN?", next: "fraps1A86" }
                      ],
                      background: "Assets/images/exploration.jpg",
                      sound: "Assets/sounds/exploration.mp3"
                  },
              
                  fraps1A86: {
                      text: "'Your world is interactive and filled with sound, but something still feels missing. Let's dive into **textures** and **materials** to give your world a more realistic and immersive appearance. In A-Frame, materials and textures allow you to change the look and feel of your objects. Let’s see how we can enhance your scene visually.'",
                      choices: [
                          { text: "TELL ME ABOUT TEXTURES AND MATERIALS!", next: "fraps1A87" }
                      ],
                      background: "Assets/images/textures-intro.jpg",
                      sound: "Assets/sounds/textures-intro.mp3"
                  },
                  fraps1A87: {
                      text: "'In A-Frame, materials define the appearance of objects, while textures provide the details. For instance, you can apply a **color** to an object using the `color` property or use an **image texture** to give the object a detailed surface. To change an object’s material, you can use this syntax: `<a-box material=\"color: #4CC3D9\"></a-box>`, which applies a solid color to the box.'",
                      choices: [
                          { text: "CAN I USE IMAGES AS TEXTURES?", next: "fraps1A88" }
                      ],
                      background: "Assets/images/materials-colors.jpg",
                      sound: "Assets/sounds/materials-colors.mp3"
                  },
                  fraps1A88: {
                      text: "'Yes, you can use images as textures in A-Frame! Textures add realistic detail to your objects. For example, you can apply a wood texture to a box like this: `<a-box src=\"#wood-texture\" material=\"src: url(#wood-texture)\"></a-box>`. The `src` attribute points to the texture you want to apply.'",
                      choices: [
                          { text: "HOW DO I CREATE A REFLECTIVE SURFACE?", next: "fraps1A89" }
                      ],
                      background: "Assets/images/wood-texture.jpg",
                      sound: "Assets/sounds/wood-texture.mp3"
                  },
                  fraps1A89: {
                      text: "'To create a reflective surface, you can use the **reflectivity** property of the material. You can make an object shiny and reflective by using: `<a-sphere material=\"color: silver; roughness: 0; metalness: 1\"></a-sphere>`. This will give your object a metallic, reflective look.'",
                      choices: [
                          { text: "CAN I ADD TEXTURE TO MORE COMPLEX SHAPES?", next: "fraps1A90" }
                      ],
                      background: "Assets/images/reflective-sphere.jpg",
                      sound: "Assets/sounds/reflective-sphere.mp3"
                  },
                  fraps1A90: {
                      text: "'Absolutely! You can apply textures and materials to more complex shapes like **curved** or **3D objects**. For example, you can apply a texture to a sphere or a cylinder in the same way you would a box: `<a-sphere src=\"#texture\" material=\"src: url(#texture)\"></a-sphere>`. A-Frame will map the texture to the object based on its geometry.'",
                      choices: [
                          { text: "WHAT ABOUT CUSTOM MATERIALS?", next: "fraps1A91" }
                      ],
                      background: "Assets/images/custom-materials.jpg",
                      sound: "Assets/sounds/custom-materials.mp3"
                  },
              fraps1A91: {
                        text: "'A-Frame also allows you to create **custom materials** using shaders. Shaders are scripts that define how objects appear on the screen. By using the `shader` property, you can create unique effects, such as glowing or animated materials. For example: `<a-box material=\"shader: standard; color: blue\"></a-box>` will apply a standard material with a blue color to the box.'",
                        choices: [
                            { text: "CAN I MAKE TEXTURES ANIMATED?", next: "fraps1A92" }
                        ],
                        background: "Assets/images/animated-textures.jpg",
                        sound: "Assets/sounds/animated-textures.mp3"
                    },
                    fraps1A92: {
                        text: "'Yes! You can animate textures by changing the texture’s source over time or by using **animated textures**. For instance, you can have a texture change periodically like this: `<a-box material=\"src: url(#texture1); animation__texture: property: src; to: url(#texture2); dur: 1000; loop: true\"></a-box>`. This will animate the texture change between two different images.'",
                        choices: [
                            { text: "CAN I COMBINE TEXTURES WITH LIGHTING?", next: "fraps1A93" }
                        ],
                        background: "Assets/images/texture-lighting.jpg",
                        sound: "Assets/sounds/texture-lighting.mp3"
                    },
                    fraps1A93: {
                        text: "'Textures work beautifully with **lighting**! The way light interacts with textures can enhance the realism of your scene. You can add shadows, highlights, and reflections that make the textures appear more three-dimensional. For example, using a light source in combination with reflective materials: `<a-light type=\"directional\" position=\"1 3 -3\"></a-light>` will illuminate your objects and show how textures react to light.'",
                        choices: [
                            { text: "HOW DO I ADD TRANSPARENT TEXTURES?", next: "fraps1A94" }
                        ],
                        background: "Assets/images/transparent-textures.jpg",
                        sound: "Assets/sounds/transparent-textures.mp3"
                    },
                    fraps1A94: {
                        text: "'If you want to make textures **transparent** or **partially transparent**, you can adjust the `opacity` or `transparent` property of the material. For example: `<a-box material=\"transparent: true; opacity: 0.5\"></a-box>`. This will make the box semi-transparent, allowing you to see the objects behind it.'",
                        choices: [
                            { text: "I'M READY TO ADD TEXTURES AND MATERIALS TO MY WORLD!", next: "fraps1A95" }
                        ],
                        background: "Assets/images/ready-textures.jpg",
                        sound: "Assets/sounds/ready-textures.mp3"
                    },
                    fraps1A95: {
                        text: "'Now that you know how to use textures and materials, you can start enhancing your world’s appearance. You can combine colors, textures, reflective surfaces, and even animated materials to create a visually stunning environment. Your world is shaping up beautifully!'",
                        choices: [
                            { text: "LET'S MAKE IT EVEN MORE DYNAMIC!", next: "fraps1A96" }
                        ],
                        background: "Assets/images/dynamic-world.jpg",
                        sound: "Assets/sounds/dynamic-world.mp3"
                    },
                    fraps1A96: {
                        text: "'There’s always more to explore! You can keep playing with different materials, textures, and shaders to create even more unique and immersive experiences in your A-Frame world. What will you build next?'",
                        choices: [
                            { text: "WHAT ELSE CAN I LEARN?", next: "fraps1A97" }
                        ],
                        background: "Assets/images/exploration-textures.jpg",
                        sound: "Assets/sounds/exploration-textures.mp3"
                    },
              
                    fraps1A97: {
                        text: "'You’ve learned the basics, and now it’s time to delve into the **advanced features** of A-Frame. These features will help you push the limits of what you can create in your VR world. Let’s get started with more powerful tools that A-Frame offers!'",
                        choices: [
                            { text: "SHOW ME THE ADVANCED FEATURES!", next: "fraps1A98" }
                        ],
                        background: "Assets/images/advanced-features-intro.jpg",
                        sound: "Assets/sounds/advanced-features-intro.mp3"
                    },
                    fraps1A98: {
                        text: "'A-Frame provides several advanced features such as **animations**, **physics**, **components**, and **interactivity**. These tools allow you to create highly dynamic and interactive experiences. Let’s begin with **physics**. By adding physics to your world, you can simulate real-world forces, like gravity and collisions, to make objects react naturally.'",
                        choices: [
                            { text: "WHAT IS PHYSICS IN A-FRAME?", next: "fraps1A99" }
                        ],
                        background: "Assets/images/physics-intro.jpg",
                        sound: "Assets/sounds/physics-intro.mp3"
                    },
                    fraps1A99: {
                        text: "'Physics in A-Frame can be enabled using the `aframe-physics-system`. This component adds real-world physics to the objects in your scene, allowing them to fall, bounce, or collide. For example, to make a box fall, simply add a `dynamic-body` component: `<a-box position=\"0 3 0\" dynamic-body></a-box>`. This makes the box affected by gravity.'",
                        choices: [
                            { text: "HOW DO I HANDLE COLLISIONS?", next: "fraps1A100" }
                        ],
                        background: "Assets/images/physics-collision.jpg",
                        sound: "Assets/sounds/physics-collision.mp3"
                    },
                    fraps1A100: {
                        text: "'To handle collisions in A-Frame, you need to use the `collider` component, which helps detect when objects collide with each other. You can set up collision detection like this: `<a-box position=\"0 3 0\" collider=\"objects: .collidable\"></a-box>`. This way, any object marked with the class `.collidable` will interact with this box when it falls.'",
                        choices: [
                            { text: "WHAT ABOUT **ANIMATIONS**?", next: "fraps1A101" }
                        ],
                        background: "Assets/images/physics-collision-box.jpg",
                        sound: "Assets/sounds/physics-collision-box.mp3"
                    },
                fraps1A101: {
                          text: "'Animations in A-Frame bring your objects to life! You can animate any object with the `animation` component. For example, you can make a box move up and down with this code: `<a-box position=\"0 1 0\" animation=\"property: position; to: 0 3 0; dur: 1000; loop: true\"></a-box>`. This will animate the box’s position, creating a continuous movement.'",
                          choices: [
                              { text: "CAN I MAKE MY SCENE INTERACTIVE?", next: "fraps1A102" }
                          ],
                          background: "Assets/images/animated-box.jpg",
                          sound: "Assets/sounds/animated-box.mp3"
                      },
                      fraps1A102: {
                          text: "'Interactivity is a key feature of any engaging VR scene. You can create interactive experiences using **event listeners** and components like `cursor` or `raycaster`. For example, you can trigger an event when the user clicks on an object: `<a-box event-set__click=\"_event: click; scale: 1.5 1.5 1.5\"></a-box>`. This code makes the box scale up when it’s clicked.'",
                          choices: [
                              { text: "WHAT ELSE CAN I INTERACT WITH?", next: "fraps1A103" }
                          ],
                          background: "Assets/images/interactivity.jpg",
                          sound: "Assets/sounds/interactivity.mp3"
                      },
                      fraps1A103: {
                          text: "'You can make virtually any component interactive. You can add interaction to lights, animations, cameras, or even entire scenes. For example, you could change the color of an object when the user looks at it using the `cursor` component: `<a-entity cursor=\"rayOrigin: mouse\" material=\"color: #F00\"></a-entity>`. This makes the object change color when the user gazes at it.'",
                          choices: [
                              { text: "HOW CAN I MAKE MY OBJECTS MORE REALISTIC?", next: "fraps1A104" }
                          ],
                          background: "Assets/images/realistic-scene.jpg",
                          sound: "Assets/sounds/realistic-scene.mp3"
                      },
                      fraps1A104: {
                          text: "'To make your objects more realistic, you can combine advanced lighting techniques with **shaders**. Shaders control the appearance of materials and allow you to create custom visual effects. A simple example is creating a glowing object with the `emissive` property: `<a-box material=\"emissive: #00F\"></a-box>`. This will make the box glow with a blue light.'",
                          choices: [
                              { text: "CAN I CREATE MY OWN SHADERS?", next: "fraps1A105" }
                          ],
                          background: "Assets/images/glowing-box.jpg",
                          sound: "Assets/sounds/glowing-box.mp3"
                      },
                      fraps1A105: {
                          text: "'Yes! You can create custom shaders using GLSL (OpenGL Shading Language) in A-Frame. A custom shader allows you to apply unique visual effects, such as creating water, fire, or even custom lighting effects. For example: `<a-entity material=\"shader: customShader; color: #00FF00\"></a-entity>`. This code will apply a custom shader to the entity and color it green.'",
                          choices: [
                              { text: "CAN I ADD MORE COMPLEX BEHAVIORS?", next: "fraps1A106" }
                          ],
                          background: "Assets/images/custom-shader.jpg",
                          sound: "Assets/sounds/custom-shader.mp3"
                      },
                      fraps1A106: {
                          text: "'For complex behaviors, A-Frame allows you to create **custom components**. These components are JavaScript functions that can be attached to any entity, enabling complex logic like physics interactions, AI, or custom animations. For instance, you can create a component to move objects based on user input or apply AI for object movement.'",
                          choices: [
                              { text: "WHAT ABOUT MIXING FEATURES?", next: "fraps1A107" }
                          ],
                          background: "Assets/images/custom-component.jpg",
                          sound: "Assets/sounds/custom-component.mp3"
                      },
                      fraps1A107: {
                          text: "'The true power of A-Frame lies in combining all of these advanced features. You can create highly dynamic worlds by mixing animations, interactivity, physics, and custom shaders. For example, you could animate a character, make it interactive, and apply physics so that it reacts to the world around it—all at once! The possibilities are endless.'",
                          choices: [
                              { text: "I'M READY TO EXPLORE ADVANCED FEATURES!", next: "fraps1A108" }
                          ],
                          background: "Assets/images/exploring-advanced.jpg",
                          sound: "Assets/sounds/exploring-advanced.mp3"
                      },
                      fraps1A108: {
                          text: "'Now that you’ve unlocked the advanced features of A-Frame, it’s time to create your own world with these tools. Don’t be afraid to experiment with different combinations of animations, interactivity, physics, and custom shaders to create a truly unique VR experience.'",
                          choices: [
                              { text: "WHAT CAN I CREATE NEXT?", next: "fraps1A109" }
                          ],
                          background: "Assets/images/future-world.jpg",
                          sound: "Assets/sounds/future-world.mp3"
                      },
                      fraps1A109: {
                          text: "'The next step is up to you! With your newfound knowledge of A-Frame’s advanced features, you can create anything from interactive games to immersive experiences. Keep experimenting and building your ideas—your creativity is the limit!'",
                          choices: [
                              { text: "LET'S KEEP CREATING!", next: "fraps1A110" }
                          ],
                          background: "Assets/images/creating-world.jpg",
                          sound: "Assets/sounds/creating-world.mp3"
                      },

                      fraps1A110: {
                          text: "'You’ve learned a lot so far, and now it’s time to dive into how A-Frame handles **loading assets**. Loading assets such as images, sounds, models, and textures is essential for creating immersive experiences in your VR world. A-Frame provides a powerful asset management system to handle all these resources efficiently.'",
                          choices: [
                              { text: "SHOW ME HOW TO LOAD ASSETS!", next: "fraps1A111" }
                          ],
                          background: "Assets/images/loading-assets-intro.jpg",
                          sound: "Assets/sounds/loading-assets-intro.mp3"
                      },
                  fraps1A111: {
                            text: "'A-Frame provides the `<a-assets>` element to load all your assets in advance, ensuring that everything is ready before your scene starts. The `<a-assets>` element holds all resources like images, sounds, and 3D models. Here's an example of how to load a texture and sound: `<a-assets><img id=\"myTexture\" src=\"Assets/images/my-texture.jpg\"></a-assets>`. By doing this, your assets will be available when you need them in the scene.'",
                            choices: [
                                { text: "HOW DO I USE THESE ASSETS?", next: "fraps1A112" }
                            ],
                            background: "Assets/images/assets-example.jpg",
                            sound: "Assets/sounds/assets-example.mp3"
                        },
                        fraps1A112: {
                            text: "'Once your assets are loaded, you can use them in your scene. For example, to apply the loaded texture to an object, you would reference the asset like this: `<a-box src=\"#myTexture\"></a-box>`. This makes the box use the texture that you’ve previously loaded in the `<a-assets>` element.'",
                            choices: [
                                { text: "CAN I LOAD 3D MODELS?", next: "fraps1A113" }
                            ],
                            background: "Assets/images/3d-model.jpg",
                            sound: "Assets/sounds/3d-model.mp3"
                        },
                        fraps1A113: {
                            text: "'Yes! You can load 3D models in various formats like `.obj` or `.glTF` and add them to your scene. For example, to load a `.glTF` model, you can use the `<a-asset-item>` tag like this: `<a-assets><a-asset-item id=\"myModel\" src=\"Assets/models/my-model.glb\"></a-asset-item></a-assets>`. You can then reference it in your scene with `<a-entity gltf-model=\"#myModel\"></a-entity>`.'",
                            choices: [
                                { text: "WHAT ABOUT SOUND ASSETS?", next: "fraps1A114" }
                            ],
                            background: "Assets/images/loading-sound.jpg",
                            sound: "Assets/sounds/loading-sound.mp3"
                        },
                        fraps1A114: {
                            text: "'You can also load sound assets using the same method. For example, to load an MP3 sound, use the `<a-assets>` element like this: `<a-assets><audio id=\"mySound\" src=\"Assets/sounds/my-sound.mp3\"></audio></a-assets>`. To play the sound in your scene, reference it like this: `<a-sound src=\"#mySound\"></a-sound>`. This will automatically load and play the sound in your scene.'",
                            choices: [
                                { text: "CAN I MAKE SURE MY ASSETS ARE READY?", next: "fraps1A115" }
                            ],
                            background: "Assets/images/loading-check.jpg",
                            sound: "Assets/sounds/loading-check.mp3"
                        },
                        fraps1A115: {
                            text: "'A-Frame ensures that assets are loaded before the scene starts by using the `preload` attribute. You can add this attribute to any asset to ensure it’s loaded before being used: `<a-image src=\"#myTexture\" preload></a-image>`. This way, you won’t experience any delay in loading the asset during runtime.'",
                            choices: [
                                { text: "WHAT IF I NEED TO MANAGE LOAD STATUS?", next: "fraps1A116" }
                            ],
                            background: "Assets/images/preload-status.jpg",
                            sound: "Assets/sounds/preload-status.mp3"
                        },
                        fraps1A116: {
                            text: "'If you want to track the loading status of your assets, A-Frame provides an event system. You can listen for events like `loaded` to know when an asset is ready to use. For example, to listen for when a model has finished loading, you can use this code: `<a-entity gltf-model=\"#myModel\" loaded=\"console.log('Model loaded!')\"></a-entity>`. This will log a message when the model is fully loaded.'",
                            choices: [
                                { text: "HOW CAN I HANDLE FAILURES?", next: "fraps1A117" }
                            ],
                            background: "Assets/images/load-failure.jpg",
                            sound: "Assets/sounds/load-failure.mp3"
                        },
                        fraps1A117: {
                            text: "'A-Frame also allows you to handle failures using the `error` event. For example, if an asset fails to load, you can listen for the `error` event and take action, such as displaying a fallback image: `<a-entity gltf-model=\"#myModel\" error=\"console.log('Failed to load model');\"></a-entity>`. This helps ensure a smooth user experience even if something goes wrong.'",
                            choices: [
                                { text: "CAN I OPTIMIZE LOADING PERFORMANCE?", next: "fraps1A118" }
                            ],
                            background: "Assets/images/loading-performance.jpg",
                            sound: "Assets/sounds/loading-performance.mp3"
                        },
                        fraps1A118: {
                            text: "'To optimize loading performance, consider **lazy loading** your assets. This means only loading assets when they are needed. For example, you can delay loading non-essential assets until after the main scene has loaded. You can use the `lazy` attribute to achieve this: `<a-entity gltf-model=\"#myModel\" lazy></a-entity>`. This will load the model only when it comes into view, reducing initial loading time.'",
                            choices: [
                                { text: "CAN I LOAD MULTIPLE ASSETS AT ONCE?", next: "fraps1A119" }
                            ],
                            background: "Assets/images/lazy-load.jpg",
                            sound: "Assets/sounds/lazy-load.mp3"
                        },
                        fraps1A119: {
                            text: "'Yes! You can use the `<a-assets>` tag to load multiple assets at once. Simply add all your assets inside the `<a-assets>` element, and A-Frame will handle the rest. For example, to load multiple textures and sounds, you can use: `<a-assets><img id=\"texture1\" src=\"Assets/images/texture1.jpg\"><audio id=\"sound1\" src=\"Assets/sounds/sound1.mp3\"></audio></a-assets>`.'",
                            choices: [
                                { text: "READY TO LOAD ASSETS IN MY SCENE!", next: "fraps1A120" }
                            ],
                            background: "Assets/images/multiple-assets.jpg",
                            sound: "Assets/sounds/multiple-assets.mp3"
                        },
                    fraps1A120: {
                              text: "'Now that you know how to load assets efficiently in A-Frame, you can start building more complex scenes by adding textures, models, sounds, and much more. Whether it’s for interactive features, animations, or just a visually stunning world, proper asset management is the key to creating seamless experiences.'",
                              choices: [
                                  { text: "LET'S START LOADING MY ASSETS!", next: "fraps1A121" }
                              ],
                              background: "Assets/images/asset-loaded.jpg",
                              sound: "Assets/sounds/asset-loaded.mp3"
                          },
                          fraps1A121: {
                              text: "'Start creating your world, and don’t forget to optimize your assets to ensure your scene runs smoothly. Use **lazy loading**, **preloading**, and **event listeners** to handle assets efficiently and create an immersive, seamless experience for users.'",
                              choices: [
                                  { text: "I'M READY TO CREATE!", next: "fraps1A122" }
                              ],
                              background: "Assets/images/creating-world.jpg",
                              sound: "Assets/sounds/creating-world.mp3"
                          },
                      
                          fraps1A122: {
                              text: "'You’ve learned about loading assets, and now we’re going to expand your skills. Let’s dive into **third-party integration** with A-Frame. A-Frame allows you to bring in external libraries, APIs, and services to enhance your virtual world. These integrations can add new features, interactivity, and real-time data to your scene. Are you ready to take your VR experience to the next level?'",
                              choices: [
                                  { text: "YES, LET'S INTEGRATE THIRD-PARTY SERVICES!", next: "fraps1A123" }
                              ],
                              background: "Assets/images/third-party-integration.jpg",
                              sound: "Assets/sounds/third-party-integration.mp3"
                          },
                          fraps1A123: {
                              text: "'Let’s start by adding a **physics engine**. With a physics engine like `ammo.js` or `cannon.js`, you can bring realistic physics into your scene. This means you can simulate gravity, collisions, and object movement. Let me show you how to integrate **ammo.js**.'",
                              choices: [
                                  { text: "SHOW ME HOW TO INTEGRATE A PHYSICS ENGINE!", next: "fraps1A124" }
                              ],
                              background: "Assets/images/physics-engine.jpg",
                              sound: "Assets/sounds/physics-engine.mp3"
                          },
                          fraps1A124: {
                              text: "'To integrate `ammo.js` with your A-Frame scene, include the library in your HTML file like this: `<script src=\"https://cdn.aframe.io/aframe-physics-system.min.js\"></script>`. This will enable physics in your scene, allowing you to interact with objects based on realistic forces. You can add physics properties like `dynamic`, `static`, and `kinematic` to control how objects behave.'",
                              choices: [
                                  { text: "CAN I ADD MORE LIBRARIES TO MY SCENE?", next: "fraps1A125" }
                              ],
                              background: "Assets/images/physics-example.jpg",
                              sound: "Assets/sounds/physics-example.mp3"
                          },
                          fraps1A125: {
                              text: "'Yes! You can integrate many different libraries into your scene. For example, you can use **three.js** for advanced 3D graphics or even connect to APIs like **Google Maps** for geospatial data. Let me show you how to add **three.js**.'",
                              choices: [
                                  { text: "SHOW ME HOW TO USE THREE.JS!", next: "fraps1A126" }
                              ],
                              background: "Assets/images/threejs-library.jpg",
                              sound: "Assets/sounds/threejs-library.mp3"
                          },
                          fraps1A126: {
                              text: "'To add `three.js` to your A-Frame project, you simply include the library in your HTML: `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>`. You can then use `three.js` to create complex 3D objects and import them into A-Frame. For example, you could create a custom 3D model using `three.js` and add it to your A-Frame scene with `<a-entity>`.'",
                              choices: [
                                  { text: "CAN I INTEGRATE GOOGLE MAPS?", next: "fraps1A127" }
                              ],
                              background: "Assets/images/google-maps-integration.jpg",
                              sound: "Assets/sounds/google-maps-integration.mp3"
                          },
                          fraps1A127: {
                              text: "'Of course! You can use **Google Maps** in your A-Frame scene by leveraging the `aframe-google-maps` component. Here’s an example: `<a-entity google-maps=\"location: 37.7749,-122.4194; zoom: 12;\"></a-entity>`. This will show a map of San Francisco at a zoom level of 12. It’s a great way to bring real-world geographic data into your scene.'",
                              choices: [
                                  { text: "HOW ABOUT USING OTHER APIS?", next: "fraps1A128" }
                              ],
                              background: "Assets/images/api-integration.jpg",
                              sound: "Assets/sounds/api-integration.mp3"
                          },
                          fraps1A128: {
                              text: "'A-Frame also allows you to integrate external **APIs** to bring dynamic data into your scene. For example, you can use weather APIs to show real-time weather information or news APIs to display live headlines. Let me show you an example of how you can use an API to update your scene.'",
                              choices: [
                                  { text: "SHOW ME HOW TO USE AN API!", next: "fraps1A129" }
                              ],
                              background: "Assets/images/fetch-api.jpg",
                              sound: "Assets/sounds/fetch-api.mp3"
                          },
                          fraps1A129: {
                              text: "'To use an API in A-Frame, you can use JavaScript’s `fetch` function to retrieve data. For example, you can fetch weather data from an API: `fetch('https://api.weather.com/data')`. Once you have the data, you can use it to update elements in your A-Frame scene, like changing the color of objects or displaying live weather information.'",
                              choices: [
                                  { text: "CAN I INTEGRATE SOCIAL MEDIA FEEDS?", next: "fraps1A130" }
                              ],
                              background: "Assets/images/social-media-integration.jpg",
                              sound: "Assets/sounds/social-media-integration.mp3"
                          },
                          fraps1A130: {
                              text: "'Yes, you can integrate social media feeds like Twitter or Instagram into your A-Frame scene. For example, you can use Twitter’s API to pull in live tweets and display them in your scene. The integration process is the same as any other API—you simply fetch the data and update your scene elements.'",
                              choices: [
                                  { text: "CAN I USE IOT DEVICES WITH A-FRAME?", next: "fraps1A131" }
                              ],
                              background: "Assets/images/iot-integration.jpg",
                              sound: "Assets/sounds/iot-integration.mp3"
                          },
                      fraps1A131: {
                                text: "'Definitely! You can integrate **Internet of Things (IoT)** devices with A-Frame to bring real-time data from physical sensors and devices into your virtual world. For example, you can use WebSocket or MQTT protocols to communicate with devices like motion sensors, temperature gauges, or even smart lights.'",
                                choices: [
                                    { text: "SHOW ME HOW TO INTEGRATE WITH IOT!", next: "fraps1A132" }
                                ],
                                background: "Assets/images/iot-example.jpg",
                                sound: "Assets/sounds/iot-example.mp3"
                            },
                            fraps1A132: {
                                text: "'To integrate IoT devices, you need to use WebSockets or MQTT to establish a connection between your A-Frame scene and the device. Here’s an example: `const socket = new WebSocket('ws://iot-device.local')`. Once connected, you can use data from your device to control A-Frame objects in real time, like changing their position or color based on sensor input.'",
                                choices: [
                                    { text: "READY TO INTEGRATE THIRD-PARTY SERVICES?", next: "fraps1A133" }
                                ],
                                background: "Assets/images/integrate-services.jpg",
                                sound: "Assets/sounds/integrate-services.mp3"
                            },
                            fraps1A133: {
                                text: "'Now you’re ready to integrate a variety of third-party services and libraries into your A-Frame world. By connecting to APIs, using physics engines, adding 3D libraries, and integrating IoT devices, the possibilities are endless. Start building your immersive experience today!'",
                                choices: [
                                    { text: "LET'S GET STARTED WITH THIRD-PARTY INTEGRATIONS!", next: "fraps1A134" }
                                ],
                                background: "Assets/images/third-party-integration-ready.jpg",
                                sound: "Assets/sounds/third-party-integration-ready.mp3"
                            },
                        
                            fraps1A134: {
                                text: "'Now that you've mastered third-party integrations, let’s dive into **customization**. Customizing your A-Frame world allows you to personalize the user experience and make your virtual environment truly unique. Whether it's adjusting the size, shape, colors, or even creating your own components, customization brings your world to life. Ready to customize your VR experience?'",
                                choices: [
                                    { text: "YES, LET'S CUSTOMIZE MY A-FRAME WORLD!", next: "fraps1A135" }
                                ],
                                background: "Assets/images/customization-intro.jpg",
                                sound: "Assets/sounds/customization-intro.mp3"
                            },
                            fraps1A135: {
                                text: "'Customization starts with adjusting the basic properties of entities. For example, changing the **color** or **material** of objects in your scene is one of the easiest customizations. Let me show you how to change the color of an object.'",
                                choices: [
                                    { text: "SHOW ME HOW TO CHANGE OBJECT COLORS!", next: "fraps1A136" }
                                ],
                                background: "Assets/images/change-color.jpg",
                                sound: "Assets/sounds/change-color.mp3"
                            },
                            fraps1A136: {
                                text: "'In A-Frame, you can change the color of an entity by modifying its `material` component. For example: `<a-box color=\"red\"></a-box>`. This will make the box appear red in your scene. You can also use hex values or RGB values to customize the color further.'",
                                choices: [
                                    { text: "CAN I USE TEXTURES FOR CUSTOMIZATION?", next: "fraps1A137" }
                                ],
                                background: "Assets/images/color-change.jpg",
                                sound: "Assets/sounds/color-change.mp3"
                            },
                            fraps1A137: {
                                text: "'Yes, A-Frame allows you to add **textures** to your objects, making your world even more dynamic. You can apply an image texture to a surface using the `src` attribute in the material component. For example: `<a-box material=\"src: url('Assets/textures/wood.jpg')\"></a-box>`. This will wrap your box with the wood texture image.'",
                                choices: [
                                    { text: "HOW ABOUT CREATING MY OWN COMPONENT?", next: "fraps1A138" }
                                ],
                                background: "Assets/images/texture-example.jpg",
                                sound: "Assets/sounds/texture-example.mp3"
                            },
                            fraps1A138: {
                                text: "'You can also create your own **custom components** in A-Frame! Components allow you to add specific behaviors and interactions to your entities. For example, you could create a component that makes an object rotate when clicked. Here's a simple custom component:'",
                                choices: [
                                    { text: "SHOW ME HOW TO CREATE A CUSTOM COMPONENT!", next: "fraps1A139" }
                                ],
                                background: "Assets/images/custom-component.jpg",
                                sound: "Assets/sounds/custom-component.mp3"
                            },
                            fraps1A139: {
                                text: "'To create a custom component, you need to define it using JavaScript. Here’s a simple example that makes a box rotate when clicked: `AFRAME.registerComponent('rotate-on-click', { schema: {}, init: function() { this.el.addEventListener('click', () => { this.el.setAttribute('rotation', {x: 0, y: 90, z: 0}); }); } });`. Now you can add `rotate-on-click` to any entity, and it will rotate when clicked.'",
                                choices: [
                                    { text: "CAN I CUSTOMIZE THE LIGHTING IN MY SCENE?", next: "fraps1A140" }
                                ],
                                background: "Assets/images/lighting-customization.jpg",
                                sound: "Assets/sounds/lighting-customization.mp3"
                            },
                            fraps1A140: {
                                text: "'Lighting is a critical aspect of any scene, and A-Frame offers a lot of customization options for lighting. You can adjust the **intensity**, **color**, and **position** of lights in your scene. For example, to add a directional light with a custom color, you can use: `<a-light type=\"directional\" color=\"#ff0000\" intensity=\"0.8\"></a-light>`. This will create a red light with moderate intensity.'",
                                choices: [
                                    { text: "HOW CAN I ADD MY OWN 3D MODELS?", next: "fraps1A141" }
                                ],
                                background: "Assets/images/lighting-example.jpg",
                                sound: "Assets/sounds/lighting-example.mp3"
                            },
                        fraps1A141: {
                                  text: "'Adding custom 3D models is another powerful form of customization. A-Frame allows you to import **3D models** created in external software like Blender or Maya. You can import models in formats like **OBJ**, **GLTF**, or **FBX**. Here’s how you can import a GLTF model: `<a-entity gltf-model=\"url('Assets/models/custom_model.glb')\"></a-entity>`. This will display your custom 3D model in the scene.'",
                                  choices: [
                                      { text: "CAN I CUSTOMIZE ANIMATIONS AND MOVEMENTS?", next: "fraps1A142" }
                                  ],
                                  background: "Assets/images/custom-model.jpg",
                                  sound: "Assets/sounds/custom-model.mp3"
                              },
                              fraps1A142: {
                                  text: "'A-Frame supports custom animations, allowing you to animate properties such as position, rotation, and scale. You can animate an object over time using A-Frame's built-in **animation** component. For example, to animate an object to move up and down: `<a-box animation=\"property: position; to: 0 2 0; dir: alternate; dur: 1000; loop: true\"></a-box>`. This will animate the box vertically.'",
                                  choices: [
                                      { text: "CAN I CUSTOMIZE SOUND IN MY SCENE?", next: "fraps1A143" }
                                  ],
                                  background: "Assets/images/animation-example.jpg",
                                  sound: "Assets/sounds/animation-example.mp3"
                              },
                              fraps1A143: {
                                  text: "'You can also **customize the audio** in your scene by adding sound effects or background music. A-Frame allows you to add audio sources and control their properties, like volume and playback rate. To add an ambient sound, use: `<a-sound src=\"url('Assets/sounds/ambient-sound.mp3')\" autoplay=\"true\" loop=\"true\"></a-sound>`. This will play the sound continuously in your scene.'",
                                  choices: [
                                      { text: "LET'S FINALIZE MY CUSTOMIZED SCENE!", next: "fraps1A144" }
                                  ],
                                  background: "Assets/images/sound-customization.jpg",
                                  sound: "Assets/sounds/sound-customization.mp3"
                              },
                              fraps1A144: {
                                  text: "'Now you’ve learned how to customize various aspects of your A-Frame scene, from colors and textures to animations and sound. By combining these customizations, you can create unique and engaging virtual worlds. It’s time to take everything you’ve learned and finalize your custom A-Frame scene!'",
                                  choices: [
                                      { text: "I'M READY TO FINALIZE MY SCENE!", next: "fraps1A145" }
                                  ],
                                  background: "Assets/images/finalized-scene.jpg",
                                  sound: "Assets/sounds/finalized-scene.mp3"
                              },
                         
                              fraps1A145: {
                                  text: "'Congratulations on customizing your A-Frame scene! Now, it’s time to focus on an essential aspect of development: **debugging and tools**. Debugging helps you identify and fix issues in your code, ensuring a smooth and bug-free experience for users. Let’s explore the tools available to help you debug and improve your A-Frame scenes.'",
                                  choices: [
                                      { text: "I'M READY TO LEARN ABOUT DEBUGGING!", next: "fraps1A146" }
                                  ],
                                  background: "Assets/images/debugging-intro.jpg",
                                  sound: "Assets/sounds/debugging-intro.mp3"
                              },
                              fraps1A146: {
                                  text: "'In A-Frame, you can use the **built-in debugger** to inspect and troubleshoot your scenes. The A-Frame Inspector is an interactive tool that allows you to see and modify the components of your scene in real time. To activate it, press `ctrl + alt + i` while your scene is open in a browser. You’ll be able to view all entities and components in your scene and adjust them directly.'",
                                  choices: [
                                      { text: "SHOW ME THE INSPECTOR TOOL!", next: "fraps1A147" }
                                  ],
                                  background: "Assets/images/inspector-tool.jpg",
                                  sound: "Assets/sounds/inspector-tool.mp3"
                              },
                              fraps1A147: {
                                  text: "'The Inspector tool provides a graphical interface where you can select any object in your scene. Once you select an object, you can view and change its properties like position, rotation, and scale, or modify its components like materials and animations. This is a great way to test and debug different elements of your scene in real-time.'",
                                  choices: [
                                      { text: "CAN I DEBUG SCRIPTS TOO?", next: "fraps1A148" }
                                  ],
                                  background: "Assets/images/debugging-scripts.jpg",
                                  sound: "Assets/sounds/debugging-scripts.mp3"
                              },
                              fraps1A148: {
                                  text: "'Yes! You can also debug **JavaScript scripts** by using the **browser’s developer tools**. Most modern browsers like Chrome, Firefox, and Edge have built-in developer tools that let you inspect your code, set breakpoints, and log errors. You can open the developer tools by pressing `F12` or right-clicking on your page and selecting `Inspect`.'",
                                  choices: [
                                      { text: "SHOW ME HOW TO USE THE DEV TOOLS!", next: "fraps1A149" }
                                  ],
                                  background: "Assets/images/dev-tools.jpg",
                                  sound: "Assets/sounds/dev-tools.mp3"
                              },
                              fraps1A149: {
                                  text: "'Once the developer tools are open, navigate to the **Console** tab. This will display any errors or logs that have occurred in your JavaScript code. You can also set breakpoints in the **Sources** tab, which will pause the execution of your code at a specific line, allowing you to inspect variables and understand what’s going wrong.'",
                                  choices: [
                                      { text: "WHAT ABOUT PERFORMANCE DEBUGGING?", next: "fraps1A150" }
                                  ],
                                  background: "Assets/images/performance-debugging.jpg",
                                  sound: "Assets/sounds/performance-debugging.mp3"
                              },
                              fraps1A150: {
                                  text: "'Performance debugging is another key aspect of optimizing your A-Frame scenes. A-Frame provides tools like **WebVR** and **WebGL** debugging to track performance issues like low frame rates or high memory usage. The **Performance Monitor** tool in the A-Frame Inspector helps you track the frame rate and performance statistics in real time.'",
                                  choices: [
                                      { text: "HOW DO I USE THE PERFORMANCE MONITOR?", next: "fraps1A151" }
                                  ],
                                  background: "Assets/images/performance-monitor.jpg",
                                  sound: "Assets/sounds/performance-monitor.mp3"
                              },
                          fraps1A151: {
                                    text: "'To activate the Performance Monitor, open the A-Frame Inspector and navigate to the **Performance** tab. This will show you real-time metrics like the frame rate, memory usage, and number of draw calls in your scene. Use this information to identify bottlenecks and optimize your scene for better performance.'",
                                    choices: [
                                        { text: "CAN I DEBUG NETWORK ISSUES TOO?", next: "fraps1A152" }
                                    ],
                                    background: "Assets/images/network-debugging.jpg",
                                    sound: "Assets/sounds/network-debugging.mp3"
                                },
                                fraps1A152: {
                                    text: "'Yes, debugging network issues is possible in A-Frame, especially for multiplayer or networked scenes. Tools like **WebSocket debugging** and **network performance monitoring** can help you track data transmission and identify network-related problems. The **Network Debugger** in A-Frame allows you to see network connections and troubleshoot connectivity issues.'",
                                    choices: [
                                        { text: "SHOW ME NETWORK DEBUGGING TOOLS!", next: "fraps1A153" }
                                    ],
                                    background: "Assets/images/network-debugging-tools.jpg",
                                    sound: "Assets/sounds/network-debugging-tools.mp3"
                                },
                                fraps1A153: {
                                    text: "'The Network Debugger is built into the A-Frame Inspector. Once you open the Inspector, navigate to the **Network** tab. This will show you a list of connected clients and allow you to monitor network traffic in real time. It can help you troubleshoot issues like lag, disconnections, or data synchronization problems.'",
                                    choices: [
                                        { text: "ANY OTHER DEBUGGING TOOLS?", next: "fraps1A154" }
                                    ],
                                    background: "Assets/images/other-debugging-tools.jpg",
                                    sound: "Assets/sounds/other-debugging-tools.mp3"
                                },
                                fraps1A154: {
                                    text: "'In addition to these built-in tools, there are many **third-party tools** available that can help with debugging and optimizing your A-Frame scene. For example, tools like **three.js inspector** and **WebVR Emulator** can provide deeper insights into your 3D scene’s performance and behavior. Don’t forget to regularly check for **errors in the console** and test your code thoroughly in different browsers.'",
                                    choices: [
                                        { text: "I'M READY TO DEBUG MY SCENE!", next: "fraps1A155" }
                                    ],
                                    background: "Assets/images/debugging-final.jpg",
                                    sound: "Assets/sounds/debugging-final.mp3"
                                },
                                fraps1A155: {
                                    text: "'Now that you know the essential debugging tools and techniques, it’s time to put them into practice. Regular debugging is essential for maintaining a stable, high-performance A-Frame scene. By using the A-Frame Inspector, developer tools, and performance monitoring, you’ll be able to optimize your scenes and fix any issues that arise.'",
                                    choices: [
                                        { text: "I'M READY TO FINALIZE MY SCENE AND DEBUG!", next: "fraps1A156" }
                                    ],
                                    background: "Assets/images/final-debugging.jpg",
                                    sound: "Assets/sounds/final-debugging.mp3"
                                },
                           
                                fraps1A156: {
                                    text: "'You’ve learned how to debug and optimize your A-Frame scenes, but now it’s time to dive into something exciting: **Networking and Multiplayer**. Multiplayer experiences are becoming a significant part of virtual reality and interactive scenes. A-Frame provides built-in tools for creating real-time multiplayer experiences with ease. Let’s explore how you can integrate multiplayer into your A-Frame projects.'",
                                    choices: [
                                        { text: "I'M EXCITED TO LEARN ABOUT NETWORKING!", next: "fraps1A157" }
                                    ],
                                    background: "Assets/images/multiplayer-intro.jpg",
                                    sound: "Assets/sounds/multiplayer-intro.mp3"
                                },
                                fraps1A157: {
                                    text: "'To get started with networking in A-Frame, you’ll need to use the **networked-aframe** component. This component allows you to create multiplayer experiences by syncing your A-Frame scene across different devices in real-time. It uses **WebSockets** to enable seamless communication between clients, ensuring all players see the same scene.'",
                                    choices: [
                                        { text: "TELL ME MORE ABOUT THE NETWORKED-AFRAME COMPONENT!", next: "fraps1A158" }
                                    ],
                                    background: "Assets/images/networked-aframe.jpg",
                                    sound: "Assets/sounds/networked-aframe.mp3"
                                },
                                fraps1A158: {
                                    text: "'The **networked-aframe** component is a JavaScript-based framework for multiplayer experiences. It enables entities to be synchronized across multiple users’ browsers. When one user moves an object or interacts with the scene, the changes are reflected in real time for all other users. This component is essential for creating multiplayer environments in A-Frame.'",
                                    choices: [
                                        { text: "HOW DO I SET UP A NETWORKED SCENE?", next: "fraps1A159" }
                                    ],
                                    background: "Assets/images/networked-scene.jpg",
                                    sound: "Assets/sounds/networked-scene.mp3"
                                },
                                fraps1A159: {
                                    text: "'To set up a basic networked scene, you’ll need to import the **networked-aframe** library and create a networked entity for the players. This entity will be synced across all clients. You can also set up a server using **A-Frame's networking server** or a third-party server like **PeerJS** to manage connections. Here’s a basic setup:'",
                                    choices: [
                                        { text: "SHOW ME THE CODE FOR A BASIC NETWORKED SCENE!", next: "fraps1A160" }
                                    ],
                                    background: "Assets/images/code-setup.jpg",
                                    sound: "Assets/sounds/code-setup.mp3"
                                },
                                fraps1A160: {
                                    text: "'Here’s a basic example of setting up a networked scene in A-Frame. First, include the networked-aframe script in your HTML file and set up a networked entity:'" +
                                    "<pre>" +
                                    "&lt;script src='https://unpkg.com/networked-aframe/dist/networked-aframe.min.js'&gt;&lt;/script&gt;" +
                                    "&lt;a-scene networked-scene='room: room1'&gt;" +
                                    "    &lt;a-box networked='template: #box-template' position='0 1.5 -3'&gt;&lt;/a-box&gt;" +
                                    "&lt;/a-scene&gt;" +
                                    "</pre>",
                                    choices: [
                                        { text: "WHAT IF I WANT TO ADD PLAYER AVATARS?", next: "fraps1A161" }
                                    ],
                                    background: "Assets/images/player-avatars.jpg",
                                    sound: "Assets/sounds/player-avatars.mp3"
                                },
                            fraps1A161: {
                                      text: "'In multiplayer environments, avatars are essential to represent the players. To add avatars, you can create a networked **avatar** component that updates the player’s position, rotation, and actions across all clients. Here’s an example of how you might set up a basic avatar component:'" +
                                      "<pre>" +
                                      "&lt;a-entity networked='template: #avatar-template' position='0 1.5 -3'&gt;&lt;/a-entity&gt;" +
                                      "</pre>",
                                      choices: [
                                          { text: "CAN I ADD MULTIPLE PLAYERS?", next: "fraps1A162" }
                                      ],
                                      background: "Assets/images/multiple-players.jpg",
                                      sound: "Assets/sounds/multiple-players.mp3"
                                  },
                                  fraps1A162: {
                                      text: "'Yes! A-Frame’s **networked-aframe** component supports multiple players by syncing each player’s avatar and actions. As each player enters the scene, their avatar and actions are synchronized across all clients. You can easily add multiple players by replicating the player setup and managing their actions through the **networked** component.'",
                                      choices: [
                                          { text: "HOW DO I MANAGE PLAYER INTERACTIONS?", next: "fraps1A63" }
                                      ],
                                      background: "Assets/images/player-interactions.jpg",
                                      sound: "Assets/sounds/player-interactions.mp3"
                                  },
                                  fraps1A163: {
                                      text: "'You can manage player interactions through the **networked-events** system. This allows you to trigger events such as **grabbing an object**, **picking up items**, or **shooting projectiles** that are synchronized across all clients. By emitting events from one player’s client and listening for those events on all other clients, you can create complex interactions.'",
                                      choices: [
                                          { text: "SHOW ME HOW TO HANDLE EVENTS!", next: "fraps1A164" }
                                      ],
                                      background: "Assets/images/handle-events.jpg",
                                      sound: "Assets/sounds/handle-events.mp3"
                                  },
                                  fraps1A164: {
                                      text: "'Here’s an example of how to emit and listen for networked events:'" +
                                      "<pre>" +
                                      "AFRAME.registerComponent('event-example', {" +
                                      "  init: function () {" +
                                      "    this.el.addEventListener('click', () => {" +
                                      "      this.el.emit('interact', {});" +
                                      "    });" +
                                      "  }" +
                                      "});" +
                                      "</pre>",
                                      choices: [
                                          { text: "WHAT ABOUT SERVER SETUP?", next: "fraps1A165" }
                                      ],
                                      background: "Assets/images/server-setup.jpg",
                                      sound: "Assets/sounds/server-setup.mp3"
                                  },
                                  fraps1A165: {
                                      text: "'To manage the networked connections, you’ll need a **server** that handles multiple clients. You can set up a simple WebSocket server with **Node.js** and **socket.io** to manage client connections. A-Frame’s **networked-aframe** allows you to easily connect your client-side code with a server for real-time multiplayer experiences.'",
                                      choices: [
                                          { text: "SHOW ME HOW TO SET UP THE SERVER!", next: "fraps1A166" }
                                      ],
                                      background: "Assets/images/websocket-server.jpg",
                                      sound: "Assets/sounds/websocket-server.mp3"
                                  },
                                  fraps1A166: {
                                      text: "'To set up the server, you’ll first need to install **socket.io** in your Node.js project. Then, create a WebSocket server that listens for connections and broadcasts events to all clients. Here’s a basic server setup:'" +
                                      "<pre>" +
                                      "const express = require('express');" +
                                      "const http = require('http');" +
                                      "const socketIo = require('socket.io');" +
                                      "const app = express();" +
                                      "const server = http.createServer(app);" +
                                      "const io = socketIo(server);" +
                                      "io.on('connection', socket => {" +
                                      "  console.log('A user connected');" +
                                      "  socket.on('disconnect', () => {" +
                                      "    console.log('User disconnected');" +
                                      "  });" +
                                      "});" +
                                      "server.listen(3000, () => console.log('Server running on port 3000'));"+
                                      "</pre>",
                                      choices: [
                                          { text: "I'M READY TO IMPLEMENT MULTIPLAYER!", next: "fraps1A167" }
                                      ],
                                      background: "Assets/images/ready-to-implement.jpg",
                                      sound: "Assets/sounds/ready-to-implement.mp3"
                                  },
                                  fraps1A167: {
                                      text: "'Great! Now that you know the basics of multiplayer setup with A-Frame, it’s time to get your hands dirty and start building your own networked scenes. Experiment with syncing avatars, handling player interactions, and managing server connections. The possibilities are endless when it comes to creating multiplayer A-Frame experiences.'",
                                      choices: [
                                          { text: "FINISH THE STORY AND START BUILDING!", next: "mainPage" },
                                  {text:"now learn how to make a sprig game using sprig editor by hackclub ",next :"sprig1game1"}
                              ],
                                      background: "Assets/images/final-multiplayer.jpg",
                                      sound: "Assets/sounds/final-multiplayer.mp3"
                                  },
sprig1game1: {
      text: "'Welcome to NeoGrid City, where reality is coded, and every street holds digital secrets. You’re a rookie hacker in the Coders’ Underground, a secret society working to rebuild the city. Your first mission: learn how to set **legends** to shape the city’s foundation.'",
          choices: [
                  { text: "TELL ME MORE ABOUT LEGENDS.", next: "sprig1game2" },
                          { text: "I’M READY TO CODE LEGENDS NOW!", next: "sprig1game3" }
                              ],
                                  background: "src=images/neoGridCity.jpg",
                                      sound: "sounds/introTheme.mp3"
                                      },

                                      sprig1game2: {
                                          text: "'Legends are the building blocks of NeoGrid. They define the look and purpose of objects in the game. For example, you might have a **player** (p) and a **wall** (w). Each legend needs a visual representation, which is where **bitmaps** come in.'",
                                              choices: [
                                                      { text: "SHOW ME AN EXAMPLE.", next: "sprig1game4" },
                                                              { text: "I WANT TO TRY IT OUT!", next: "sprig1game3" }
                                                                  ],
                                                                      background: "src=images/legendsBackground.jpg",
                                                                          sound: "sounds/bitmapsTutorial.mp3"
                                                                          },

                                                                          sprig1game3: {
                                                                              text: "'Alright, let’s dive in. Here’s how you define legends using Sprig’s `setLegend` function.'\n\n```javascript\nconst player = \"p\";\nconst wall = \"w\";\n\nsetLegend(\n  [player, bitmap`\n  .......\n  .XXXXX.\n  .X...X.\n  .XXXXX.\n  .......\n  `],\n  [wall, bitmap`\n  .......\n  .XXXXX.\n  .XXXXX.\n  .XXXXX.\n  .......\n  `]\n);\n```\n\n'This sets up a **player** and a **wall**.'",
                                                                                  choices: [
                                                                                          { text: "WHAT DOES THIS CODE DO?", next: "sprig1game5" },
                                                                                                  { text: "SHOW ME HOW TO PLACE LEGENDS ON A MAP!", next: "sprig1game6" }
                                                                                                      ],
                                                                                                          background: "src=images/codeBackground.jpg",
                                                                                                              sound: "sounds/codeExplained.mp3"
                                                                                                              },

                                                                                                              sprig1game4: {
                                                                                                                  text: "'Here’s an example legend setup:\n\n```javascript\nconst player = \"p\";\nconst wall = \"w\";\nsetLegend(\n  [player, bitmap`...\n`],\n  [wall, bitmap`...\n`]\n);\n```\n\n'Each object is defined by a **letter** and a **bitmap**.'",
                                                                                                                      choices: [
                                                                                                                              { text: "GOT IT! WHAT’S NEXT?", next: "sprig1game3" }
                                                                                                                                  ],
                                                                                                                                      background: "src=images/exampleBackground.jpg",
                                                                                                                                          sound: "sounds/exampleCode.mp3"
                                                                                                                                          },

                                                                                                                                          sprig1game5: {
                                                                                                                                              text: "'The `setLegend` function does two things:\n\n1. It defines your objects (like player and wall).\n2. It gives them a visual representation using **bitmaps**.'",
                                                                                                                                                  choices: [
                                                                                                                                                          { text: "UNDERSTOOD! LET’S BUILD A MAP.", next: "sprig1game6" }
                                                                                                                                                              ],
                                                                                                                                                                  background: "src=images/setLegendExplained.jpg",
                                                                                                                                                                      sound: "sounds/legendExplanation.mp3"
                                                                                                                                                                      },

                                                                                                                                                                      sprig1game6: {
                                                                                                                                                                          text: "'Now that you’ve defined legends, it’s time to place them in a map using the `setMap` function. Here’s an example:'\n\n```javascript\nsetMap(map`\n  wwwww\n  w...w\n  w.p.w\n  w...w\n  wwwww\n`);\n```\n\n'Here, `w` is the wall, and `p` is the player.'",
                                                                                                                                                                              choices: [
                                                                                                                                                                                      { text: "SHOW ME A CHALLENGE!", next: "sprig1game7" },
                                                                                                                                                                                              { text: "I WANT TO LEARN MORE FIRST.", next: "sprig1game8" }
                                                                                                                                                                                                  ],
                                                                                                                                                                                                      background: "src=images/mapBackground.jpg",
                                                                                                                                                                                                          sound: "sounds/setMapTutorial.mp3"
                                                                                                                                                                                                          },

                                                                                                                                                                                                          sprig1game7: {
                                                                                                                                                                                                              text: "'Your first challenge: Build a simple map with walls surrounding a player in the center. Try this code:'\n\n```javascript\nconst player = \"p\";\nconst wall = \"w\";\nsetLegend(\n  [player, bitmap`...\n`],\n  [wall, bitmap`...\n`]\n);\nsetMap(map`\n  ?????\n  ?.p.?\n  ?????\n`);\n```\n\n'Replace the `?` symbols with `w` to create the walls!'",
                                                                                                                                                                                                                  choices: [
                                                                                                                                                                                                                          { text: "CHALLENGE COMPLETED! WHAT’S NEXT?", next: "sprig1game9" },
                                                                                                                                                                                                                                  { text: "I NEED HELP!", next: "sprig1game8" }
                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                          background: "src=images/challengeBackground.jpg",
                                                                                                                                                                                                                                              sound: "sounds/challengeSound.mp3"
                                                                                                                                                                                                                                              },

                                                                                                                                                                                                                                              sprig1game8: {
                                                                                                                                                                                                                                                  text: "'No worries, coder. Let’s review:\n\n1. Use `setLegend` to define objects.\n2. Use `setMap` to place objects on the map.\n\n'Now, try this example to practice:'\n\n```javascript\nsetMap(map`\n  wwwww\n  w...w\n  w.p.w\n  w...w\n  wwwww\n`);\n```",
                                                                                                                                                                                                                                                      choices: [
                                                                                                                                                                                                                                                              { text: "GOT IT! BACK TO THE CHALLENGE.", next: "sprig1game7" }
                                                                                                                                                                                                                                                                  ],
                                                                                                                                                                                                                                                                      background: "src=images/reviewBackground.jpg",
                                                                                                                                                                                                                                                                          sound: "sounds/reviewCode.mp3"
                                                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                                                          sprig1game9: {
                                                                                                                                                                                                                                                                              text: "'Great job, coder! You’ve mastered the basics of setting legends and building maps. NeoGrid City awaits your creativity. What will you create next?'",
                                                                                                                                                                                                                                                                                  choices: [
                                                                                                                                                                                                                                                                                          { text: "mainmenu", next: "mainPage" },
                                                                                                                                                                                                                                                                                                  { text: "EXPLORE SPRIG FUNCTIONS", next: "sprig2game1 " }
                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                          background: "src=images/neoGridCityEnd.jpg",
                                                                                                                                                                                                                                                                                                              sound: "sounds/celebration.mp3"
                                                                                                                                                                                                                                                                                                              },
  sprig2game1: {
      text: "'You’ve mastered backgrounds, now it’s time to add some life to them with animations! With the power of dynamic visuals, you can make your world come alive. Ready to animate your backgrounds?'",
        choices: [
            { text: "YES, LET’S ANIMATE!", next: "sprig2game2" },
                { text: "I NEED MORE INFO FIRST.", next: "sprig2game3" }
                  ],
                    background: "src=images/background_animate_start.jpg",
                      sound: "sounds/animate_intro.mp3"
                      },

                      sprig2game2: {
                        text: "'In Sprig, you can use the `setInterval` function to change the background every few milliseconds. This creates the illusion of movement. Let’s see an example of how to animate the background.'\n\n```javascript\nsetInterval(() => {\n  setBackground(bitmap`\n    .#####.\n    .#####.\n    ......\n  `);\n}, 1000);`\n`This will change the background every second, creating movement.'",
                          choices: [
                              { text: "I WANT TO TRY IT MYSELF!", next: "sprig2game4" },
                                  { text: "SHOW ME AN EXAMPLE!", next: "sprig2game5" }
                                    ],
                                      background: "src=images/animation_example.jpg",
                                        sound: "sounds/animate_example.mp3"
                                        },

                                        sprig2game3: {
                                          text: "'Animations make your world feel more alive. By changing visual elements over time, you can create movement, flowing objects, or even simulate changing environments.'",
                                            choices: [
                                                { text: "SHOW ME HOW TO CODE IT.", next: "sprig2game2" }
                                                  ],
                                                    background: "src=images/animation_info.jpg",
                                                      sound: "sounds/animate_info.mp3"
                                                      },

                                                      sprig2game4: {
                                                        text: "'Here’s an example of a simple animation where the background changes every second. Try running this code in your game to see it in action.'\n\n```javascript\nsetInterval(() => {\n  setBackground(bitmap`\n    .#####.\n    .#####.\n    ......\n  `);\n}, 1000);`\n`This creates a dynamic animation every second.'",
                                                          choices: [
                                                              { text: "I’VE GOT IT! LET’S MOVE ON.", next: "sprig2game6" }
                                                                ],
                                                                  background: "src=images/animation_code.jpg",
                                                                    sound: "sounds/animation_run.mp3"
                                                                    },

                                                                    sprig2game5: {
                                                                      text: "'Here’s a more complex background animation, with multiple layers of visuals:\n\n```javascript\nsetInterval(() => {\n  setBackground(bitmap`\n    .#####.\n    .###.#.\n    .......\n  `);\n}, 500);`\n`This creates a more varied animated effect every half second.'",
                                                                        choices: [
                                                                            { text: "I WANT TO TRY THIS ONE!", next: "sprig2game6" }
                                                                              ],
                                                                                background: "src=images/complex_animation.jpg",
                                                                                  sound: "sounds/complex_animation.mp3"
                                                                                  },

                                                                                  sprig2game6: {
                                                                                    text: "'Now that you know how to animate, let’s add more complex layers to the background. You can combine static and dynamic elements to create more immersive worlds. Check out this multi-layered animation example.'\n\n```javascript\nsetInterval(() => {\n  setBackground(bitmap`\n    .####..\n    .#####.\n    .######\n  `);\n}, 1000);`\n`This layers multiple backgrounds together for a richer effect.'",
                                                                                      choices: [
                                                                                          { text: "I’M READY TO ADD INTERACTIONS!", next: "sprig2game7" },
                                                                                              { text: "I WANT TO ADD A SCENE BACKGROUND!", next: "sprig2game8" }
                                                                                                ],
                                                                                                  background: "src=images/multilayer_animation.jpg",
                                                                                                    sound: "sounds/multilayer_animate.mp3"
                                                                                                    },

                                                                                                    sprig2game7: {
                                                                                                      text: "'It’s time to add interactivity to your backgrounds! You can tie animations to player actions or events in the game. Let’s look at an example where the background changes when the player presses a key.'\n\n```javascript\nsetInterval(() => {\n  if (keyIsPressed) {\n    setBackground(bitmap`\n      .#####.\n      .#####.\n      ......\n    `);\n  }\n}, 1000);`\n`This code makes the background change whenever a key is pressed.'",
                                                                                                        choices: [
                                                                                                            { text: "INTERACTIVE ANIMATION COMPLETED!", next: "sprig2game8" },
                                                                                                                { text: "SHOW ME MORE ADVANCED STUFF!", next: "sprig3game1" }
                                                                                                                  ],
                                                                                                                    background: "src=images/interactive_background.jpg",
                                                                                                                      sound: "sounds/interactive_animate.mp3"
                                                                                                                      },

                                                                                                                      sprig2game8: {
                                                                                                                        text: "'Great job, you’ve learned how to add background animations and interactivity to NeoGrid City. Now your world can come alive with vibrant, ever-changing visuals. Ready to explore new possibilities?'",
                                                                                                                          choices: [
                                                                                                                              { text: "LEARN ABOUT PLAYER MOVEMENT", next: "sprig3game1" },
                                                                                                                                  { text: "EXPLORE MORE SPRIG FEATURES", next: "sprig3game2" }
                                                                                                                                    ],
                                                                                                                                      background: "src=images/neo_grid_city.jpg",
                                                                                                                                        sound: "sounds/city_vibes.mp3"
                                                                                                                                        },

                                                                                                                                        sprig3game1: {
                                                                                                                                          text: "'Let’s take things to the next level! You’ve built the visual foundation of NeoGrid, now it’s time to control movement. Learn how to move your player across the map and bring your game to life.'",
                                                                                                                                            choices: [
                                                                                                                                                { text: "YES, LET’S LEARN PLAYER MOVEMENT!", next: "sprig3game2" },
                                                                                                                                                    { text: "I NEED MORE INFO FIRST.", next: "sprig3game3" }
                                                                                                                                                      ],
                                                                                                                                                        background: "src=images/movement_intro.jpg",
                                                                                                                                                          sound: "sounds/movement_intro.mp3"
                                                                                                                                                          },

                                                                                                                                                          sprig3game2: {
                                                                                                                                                            text: "'In Sprig, player movement is done using the `move` function. You can make the player move in any direction by specifying the amount of steps. Let’s start with moving the player up by one step.'\n\n```javascript\nmove(UP, 1);\n```",
                                                                                                                                                              choices: [
                                                                                                                                                                  { text: "SHOW ME MORE MOVEMENT EXAMPLES.", next: "mainPage " },
                                                                                                                                                                      { text: "I’M READY TO TRY IT MYSELF!", next: "sprig3game1" }
                                                                                                                                                                        ],
                                                                                                                                                                          background: "src=images/player_movement.jpg",
                                                                                                                                                                            sound: "sounds/movement_example.mp3"
                                                                                                                                                                            },
    
  
     sprig3game1: {
        text: "'Welcome to NeoGrid City, young developer! Setting the map is a crucial step in your game world. With the `setMap` function, you can define the areas, roads, and buildings that make up the game world. Are you ready to start setting up your map?'",
          choices: [
              { text: "YES, LET’S SET UP THE MAP!", next: "sprig3game2" },
                  { text: "I NEED TO KNOW MORE FIRST.", next: "sprig3game3" }
                    ],
                      background: "src=images/map_background.jpeg",
                        sound: "sounds/map_intro.mp3"
                        },

                        sprig3game2: {
                          text: "'The `setMap` function in Sprig is used to define the layout of your game world. You’ll use tiles to represent different types of terrain, buildings, and objects. Let's start simple with a grid-based map where `.` represents empty spaces and `#` represents walls or buildings.'\n\n```javascript\nsetMap(`\n  ######\n  #....#\n  #....#\n  ######\n`);\n`' This will create a small map with walls on the edges and an open area inside.'",
                            choices: [
                                { text: "WHAT DOES THIS CODE DO?", next: "sprig3game4" },
                                    { text: "LET’S TRY A MAP WITH MORE DETAIL.", next: "sprig3game5" }
                                      ],
                                        background: "src=images/simple_map.jpeg",
                                          sound: "sounds/simple_map.mp3"
                                          },

                                          sprig3game3: {
                                            text: "'The map is the foundation of your game world. It consists of a grid where each character (`#`, `.`, or others) represents an element in the world. With `setMap`, you can create a grid-based layout, defining open spaces, roads, and walls.'",
                                              choices: [
                                                  { text: "SHOW ME HOW TO CODE IT.", next: "sprig3game2" }
                                                    ],
                                                      background: "src=images/foundation_map.jpeg",
                                                        sound: "sounds/foundation_map.mp3"
                                                        },

                                                        sprig3game4: {
                                                          text: "'The code sets a simple grid-based map. The `#` characters represent solid elements, like walls or obstacles, while `.` represents open spaces where characters can move freely. This map is a foundation, and you can add complexity to it.'",
                                                            choices: [
                                                                { text: "LET'S ADD SOME STRUCTURES TO THE MAP.", next: "sprig3game5" }
                                                                  ],
                                                                    background: "src=images/grid_map.jpeg",
                                                                      sound: "sounds/grid_map.mp3"
                                                                      },

                                                                      sprig3game5: {
                                                                        text: "'Now, let’s add more complexity! Let’s place buildings (`B`), roads (`R`), and grass (`G`) on the map to create a more detailed NeoGrid City layout.\n\n```javascript\nsetMap(`\n  ######\n  #BB..#\n  #RR..#\n  ######\n`);\n`This code defines a layout with two buildings (`B`), a road (`R`), and open space.'",
                                                                          choices: [
                                                                              { text: "IT LOOKS COOL! WHAT’S NEXT?", next: "sprig3game6" },
                                                                                  { text: "LET’S MAKE A MORE COMPLEX MAP.", next: "sprig3game7" }
                                                                                    ],
                                                                                      background: "src=images/complex_map.jpeg",
                                                                                        sound: "sounds/complex_map.mp3"
                                                                                        },

                                                                                        sprig3game6: {
                                                                                          text: "'Nice work! You’ve now added some structures to the map. Next, let’s look at how to add paths that players can follow, creating interactive routes through the map.'",
                                                                                            choices: [
                                                                                                { text: "HOW CAN I MAKE INTERACTIVE PATHS?", next: "sprig4game1" },
                                                                                                    { text: "LET'S ADD A DYNAMIC ELEMENT TO THE MAP.", next: "sprig4game2" }
                                                                                                      ],
                                                                                                        background: "src=images/interactive_map.jpeg",
                                                                                                          sound: "sounds/interactive_map.mp3"
                                                                                                          },

                                                                                                          sprig3game7: {
                                                                                                            text: "'Let's get more creative with our map! We can define roads, water bodies, and buildings on a larger scale.\n\nHere's a new map layout with diverse features:\n\n```javascript\nsetMap(`\n  #######\n  #...R.#\n  #BB..#.#\n  #R..R.#\n  #...G.#\n`);\n`\nThis one includes roads (`R`), buildings (`B`), and grass (`G`). Try adding more elements!'",
                                                                                                              choices: [
                                                                                                                  { text: "MAP COMPLETED! SHOW ME MORE.", next: "sprig3game8" },
                                                                                                                      { text: "I WANT TO ADD A MOVABLE OBJECT TO THE MAP.", next: "sprig3game9" }
                                                                                                                        ],
                                                                                                                          background: "src=images/creative_map.jpeg",
                                                                                                                            sound: "sounds/creative_map.mp3"
                                                                                                                            },

                                                                                                                            sprig3game8: {
                                                                                                                              text: "'Nice work! You’ve set up a solid map for NeoGrid City. Now that the map is ready, it’s time to add characters or objects that can move through it, interact with it, or even be part of a larger story.'",
                                                                                                                                choices: [
                                                                                                                                    { text: "LET’S ADD MOVABLE OBJECTS.", next: "sprig4game1" },
                                                                                                                                        { text: "WHAT’S NEXT IN CREATING A DYNAMIC WORLD?", next: "sprig4game2" }
                                                                                                                                          ],
                                                                                                                                            background: "src=images/solid_map.jpeg",
                                                                                                                                              sound: "sounds/solid_map.mp3"
                                                                                                                                              },

                                                                                                                                              sprig3game9: {
                                                                                                                                                text: "'Great idea! To add movable objects on the map, you can place entities like players or NPCs. For example, a player character that moves through the map could look like this:\n\n```javascript\nsetEntity({x: 2, y: 2, sprite: 'player.png'});\n`\nThis will place a player at coordinates (2, 2) on the map. You can move them around using keyboard events or other controls.'",
                                                                                                                                                  choices: [
                                                                                                                                                      { text: "mainPage ",  next: "mainPage " },
                                                                                                                                                          { text: "MAP COMPLETED! WHAT'S NEXT?", next: "sprig4game1 " }
                                                                                                                                                            ],
                                                                                                                                                              background: "src=images/movable_objects.jpeg",
                                                                                                                                                                sound: "sounds/movable_objects.mp3"
                                                                                                                                                                },
        sprig4game1: {
            text: "'Welcome back to NeoGrid City, developer! Now that you’ve set up your map, it’s time to add solid elements to your world. Solids are objects that players cannot pass through—like buildings, walls, or barriers. They define the boundaries of your environment.'",
              choices: [
                  { text: "LET’S ADD SOME SOLID WALLS!", next: "sprig4game2" },
                      { text: "I NEED TO UNDERSTAND SOLIDS BETTER FIRST.", next: "sprig4game3" }
                        ],
                          background: "src=images/neoGridCity.jpeg",
                            sound: "sounds/tutorialMusic.mp3"
                            },

                            sprig4game2: {
                              text: "'In Sprig, solids are typically defined using the `setSolid` function. This function marks an object as something the player can’t walk through. Let’s start by adding some walls around our map.\n\n```javascript\nsetSolid(0, 0, 5, 1); // Creates a solid wall from (0, 0) to (5, 1)\nsetSolid(5, 0, 5, 5); // Creates a vertical wall from (5, 0) to (5, 5)\n`\nThis will create walls around our map, blocking the player from passing through them.'",
                                choices: [
                                    { text: "WHAT DOES THE CODE DO?", next: "sprig4game4" },
                                        { text: "LET’S ADD MORE SOLID OBJECTS TO THE MAP.", next: "sprig4game5" }
                                          ],
                                            background: "src=images/wallsMap.jpeg",
                                              sound: "sounds/codeExplanation.mp3"
                                              },

                                              sprig4game3: {
                                                text: "'Solids are objects that act as physical barriers in the world. They prevent players from walking through them. Using `setSolid`, you can mark areas, walls, or even buildings that should be unpassable.'",
                                                  choices: [
                                                      { text: "SHOW ME HOW TO CODE IT.", next: "sprig4game2" }
                                                        ],
                                                          background: "src=images/barriers.jpeg",
                                                            sound: "sounds/understandingSolids.mp3"
                                                            },

                                                            sprig4game4: {
                                                              text: "'The first line of code, `setSolid(0, 0, 5, 1)`, creates a horizontal wall from (0, 0) to (5, 1). This means it starts at position (0, 0) and stretches to (5, 1), forming a solid barrier. The second line, `setSolid(5, 0, 5, 5)`, creates a vertical wall from (5, 0) to (5, 5). Now, your player will be blocked by these walls as they try to move.'",
                                                                choices: [
                                                                    { text: "LET’S ADD SOME MORE COMPLEX SOLIDS!", next: "sprig4game5" }
                                                                      ],
                                                                        background: "src=images/solidCodeExplained.jpeg",
                                                                          sound: "sounds/solidCoding.mp3"
                                                                          },

                                                                          sprig4game5: {
                                                                            text: "'Now, let’s add more solid objects to our map. Instead of just walls, we can add obstacles like benches, cars, or fountains. Each of these objects can be marked as solid using the same `setSolid` function.\n\nExample:\n\n```javascript\nsetSolid(2, 2, 2, 3); // Bench\nsetSolid(3, 3, 4, 4); // Fountain\n`\nThis marks specific positions on the map as solid, creating objects that players can’t pass through.'",
                                                                              choices: [
                                                                                  { text: "HOW CAN I MAKE A SOLID AREA LARGER?", next: "sprig4game6" },
                                                                                      { text: "I WANT TO CREATE A CHARACTER TO INTERACT WITH SOLIDS.", next: "sprig4game7" }
                                                                                        ],
                                                                                          background: "src=images/obstacles.jpeg",
                                                                                            sound: "sounds/creatingObjects.mp3"
                                                                                            },

                                                                                            sprig4game6: {
                                                                                              text: "'To make a solid area larger, simply extend the coordinates. For example:\n\n```javascript\nsetSolid(0, 0, 10, 1); // A longer horizontal wall\n`\nThis creates a larger solid area stretching from (0, 0) to (10, 1). The larger the range of coordinates, the larger the solid object.'",
                                                                                                choices: [
                                                                                                    { text: "LET’S ADD A COMPLEX STRUCTURE.", next: "sprig4game8" },
                                                                                                        { text: "I WANT TO TEST SOLIDS WITH A CHARACTER.", next: "sprig4game7" }
                                                                                                          ],
                                                                                                            background: "src=images/extendedWalls.jpeg",
                                                                                                              sound: "sounds/largeSolids.mp3"
                                                                                                              },

                                                                                                              sprig4game7: {
                                                                                                                text: "'Now that we’ve created some solid objects, let’s create a character that interacts with them. We can use `setEntity` to place a character on the map and use controls to make sure they can’t walk through solids.\n\nExample:\n\n```javascript\nsetEntity({x: 1, y: 1, sprite: 'player.png'}); // Places a player at (1, 1)\n`\nIf the player tries to walk into a solid object, the game will prevent them from moving.'",
                                                                                                                  choices: [
                                                                                                                      { text: "LET’S MAKE THE PLAYER MOVE!", next: "sprig5game1" },
                                                                                                                          { text: "LET'S ADD MORE INTERACTIVE SOLID OBJECTS.", next: "sprig5game2" }
                                                                                                                            ],
                                                                                                                              background: "src=images/characterInteraction.jpeg",
                                                                                                                                sound: "sounds/playerMovement.mp3"
                                                                                                                                },

                                                                                                                                sprig4game8: {
                                                                                                                                  text: "'Let’s make things more interesting by adding larger solid structures. Perhaps a building with multiple floors? You can use `setSolid` to mark walls in a building layout or create larger, more complex structures for players to navigate around.'\n\nExample:\n\n```javascript\nsetSolid(0, 0, 10, 10); // Large building wall\n`\nThis will create a large building or structure on the map.'",
                                                                                                                                    choices: [
                                                                                                                                        { text: "next .", next: "sprig5game1" },
                                                                                                                                            { text: "mainmenu ", next: "mainPage " }
                                                                                                                                              ],
                                                                                                                                                background: "src=images/largeStructures.jpeg",
                                                                                                                                                  sound: "sounds/creatingBuildings.mp3"
                                                                                                                                                  },
    sprig5game1: {
        text: "'Ah, you’ve made it to NeoGrid City’s industrial district. Here, developers like you can set pushable objects—things the player can move around. Pushables are useful for creating interactive puzzles, challenges, or just adding a touch of realism to your game world.'",
          choices: [
              { text: "LET’S MAKE A PUSHABLE BOX!", next: "sprig5game2" },
                  { text: "WHAT ARE PUSHABLES?", next: "sprig5game3" }
                    ],
                      background: "src=images/industrial_district.jpeg",
                        sound: "sounds/industrial_district_theme.mp3"
                        },

                        sprig5game2: {
                          text: "'In Sprig, setting an object as pushable is as easy as calling `setPushable` on it. Let’s start by creating a simple pushable box. Here's how you do it:\n\n```javascript\nsetPushable(2, 2, 1, 1); // Creates a pushable box at (2, 2)\n`\nThis will create a box that players can push around the map. Give it a try in your game!'",
                            choices: [
                                { text: "WHAT DOES `setPushable` DO?", next: "sprig5game4" },
                                    { text: "LET’S MAKE THE BOX MOVABLE!", next: "sprig5game5" }
                                      ],
                                        background: "src=images/pushable_box.jpeg",
                                          sound: "sounds/pushable_box_create.mp3"
                                          },

                                          sprig5game3: {
                                            text: "'Pushables are objects that the player can interact with by pushing them. You can use `setPushable` to make any object movable by the player. These are useful for making objects that players need to move to solve puzzles or navigate through areas.'",
                                              choices: [
                                                  { text: "SHOW ME HOW TO CODE IT.", next: "sprig5game2" }
                                                    ],
                                                      background: "src=images/overview_pushables.jpeg",
                                                        sound: "sounds/pushable_overview.mp3"
                                                        },

                                                        sprig5game4: {
                                                          text: "'The function `setPushable(x, y, width, height)` marks an object as pushable. For example, `setPushable(2, 2, 1, 1)` creates a pushable box at coordinates (2, 2) with a width and height of 1 unit. Once an object is pushable, players can push it in any direction as long as there’s space.'",
                                                            choices: [
                                                                { text: "LET’S MOVE THE PUSHABLE BOX!", next: "sprig5game5" }
                                                                  ],
                                                                    background: "src=images/moving_pushable.jpeg",
                                                                      sound: "sounds/set_pushable_function.mp3"
                                                                      },

                                                                      sprig5game5: {
                                                                        text: "'To make the box movable, you need to set up controls that allow the player to push it. You can use simple controls like arrow keys or WASD to move the box around. Here's how you can add movement to the pushable box:\n\n```javascript\nif (keyIsDown(LEFT_ARROW)) {\n  movePushable(2, 2, -1, 0); // Moves the box left\n}\nif (keyIsDown(RIGHT_ARROW)) {\n  movePushable(2, 2, 1, 0); // Moves the box right\n}\n`\nNow, the player can push the box left and right using the arrow keys.'",
                                                                          choices: [
                                                                              { text: "CAN I PUSH THE BOX UP OR DOWN?", next: "sprig5game6" },
                                                                                  { text: "LET’S ADD A PUSHABLE BUTTON!", next: "sprig5game7" }
                                                                                    ],
                                                                                      background: "src=images/movable_box.jpeg",
                                                                                        sound: "sounds/move_pushable_box.mp3"
                                                                                        },

                                                                                        sprig5game6: {
                                                                                          text: "'Yes, you can! To make the box move up or down, simply modify the `movePushable` function. For example:\n\n```javascript\nif (keyIsDown(UP_ARROW)) {\n  movePushable(2, 2, 0, -1); // Moves the box up\n}\nif (keyIsDown(DOWN_ARROW)) {\n  movePushable(2, 2, 0, 1); // Moves the box down\n}\n`\nNow the player can push the box in all four directions.'",
                                                                                            choices: [
                                                                                                { text: "LET’S ADD A PUSHABLE DOOR!", next: "sprig5game8" },
                                                                                                    { text: "LET’S CREATE A COMPLEX MOVEMENT SYSTEM.", next: "sprig6game1" }
                                                                                                      ],
                                                                                                        background: "src=images/up_down_pushable.jpeg",
                                                                                                          sound: "sounds/pushable_all_directions.mp3"
                                                                                                          },

                                                                                                          sprig5game7: {
                                                                                                            text: "'Let’s take things a step further and add a pushable button. Imagine that pushing the button opens a door or activates a platform. You can set up a pushable button just like you did with the box:\n\n```javascript\nsetPushable(3, 3, 1, 1); // Places a pushable button at (3, 3)\n`\nNow, the player can push the button in the game.'",
                                                                                                              choices: [
                                                                                                                  { text: "WHAT DOES THE BUTTON DO?", next: "sprig5game8" },
                                                                                                                      { text: "LET’S ADD A PUSHABLE PLATFORM.", next: "sprig6game2" }
                                                                                                                        ],
                                                                                                                          background: "src=images/pushable_button.jpeg",
                                                                                                                            sound: "sounds/pushable_button.mp3"
                                                                                                                            },

                                                                                                                            sprig5game8: {
                                                                                                                              text: "'Now that the button is pushable, you can create an action for it when pushed, such as opening a door. You could check if the button is pushed, then trigger a door animation. Here’s an example of how to trigger a door opening when the button is pushed:\n\n```javascript\nif (buttonPushed(3, 3)) {\n  openDoor(); // Opens the door when the button is pushed\n}\n`\nNow your player can push the button to open a door or activate another object in the game.'",
                                                                                                                                choices: [
                                                                                                                                    { text: "next ", next: "sprig6game1" },
                                                                                                                                        { text: "mainmenu  ", next: "mainPage " }
                                                                                                                                          ],
                                                                                                                                            background: "src=images/button_activated_door.jpeg",
                                                                                                                                              sound: "sounds/button_activation.mp3"
                                                                                                                                              },
     sprig6game1: {
        text: "'To add animations to your pushable objects, you can use the `setAnimation` function. This allows you to animate the object when it’s pushed, adding a more immersive experience. For example, you could animate the box to shrink when it’s pushed, or make it bounce slightly.\n\nExample:\n\n```javascript\nsetAnimation(2, 2, 'shrink', 1); // Shrinks the box when pushed\n`\nThis creates a dynamic pushable experience.'",
          choices: [
              { text: "LET’S CREATE A COMBO PUZZLE WITH PUSHABLES.", next: "sprig6game2" },
                  { text: "I WANT TO CREATE MORE COMPLEX PUSHABLE OBJECTS.", next: "sprig6game3" }
                    ],
                      background: "images/puzzleBackground.jpg",
                        sound: "sounds/animationSound.mp3"
                        },

                        sprig6game2: {
                          text: "'Let’s continue adding pushable objects! For instance, you can create a pushable crate or a boulder that blocks the path, and the player needs to push it to clear the way. To do this, simply use `setPushable` again and place them strategically on the map.'",
                            choices: [
                                { text: "CREATE A PUSHABLE BLOCKING OBJECT.", next: "sprig6game4" },
                                    { text: "LET’S ADD MULTIPLE PUSHABLES IN A PUZZLE.", next: "sprig6game5" }
                                      ],
                                        background: "images/blockingObjectBackground.jpg",
                                          sound: "sounds/blockSound.mp3"
                                          },

                                          sprig6game3: {
                                            text: "'Let’s create a puzzle where the player needs to push a series of objects in the correct order to unlock a door. For example, you can create a sequence where the player needs to push a box onto a pressure plate to open a door, or move crates to create a path.'",
                                              choices: [
                                                  { text: "CREATE THE PUZZLE!", next: "sprig6game6" }
                                                    ],
                                                      background: "images/puzzleCreation.jpg",
                                                        sound: "sounds/puzzleSolve.mp3"
                                                        },

                                                        sprig6game4: {
                                                          text: "'To make pushable objects more interesting, you can make them interact with each other. For example, if a player pushes a box into a boulder, the boulder might roll away. You can set up these interactions by checking for collisions and applying forces when objects meet.'",
                                                            choices: [
                                                                { text: "LET’S ADD A PUSHABLE OBJECT COLLISION!", next: "sprig6game6" },
                                                                    { text: "CREATE A PUSHABLE WITH A UNIQUE EFFECT.", next: "sprig6game7" }
                                                                      ],
                                                                        background: "images/collisionEffect.jpg",
                                                                          sound: "sounds/collisionSound.mp3"
                                                                          },

                                                                          sprig6game5: {
                                                                            text: "'Now, let’s finish the puzzle by adding some finishing touches! For example, when the player pushes the last object to the correct spot, they can unlock a door or open a gate to the next level.'",
                                                                              choices: [
                                                                                  { text: "LET’S TEST OUR PUSHABLE PUZZLE!", next: "sprig6game7" }
                                                                                    ],
                                                                                      background: "images/finalTouches.jpg",
                                                                                        sound: "sounds/testPuzzle.mp3"
                                                                                        },

                                                                                        sprig6game6: {
                                                                                          text: "'Creating pushable objects with unique effects can add depth to your game. For instance, you could make a pushable barrel explode when pushed, or a pushable crate release a surprise when moved. These effects can be triggered using the same `setPushable` method, but adding extra code for interactions and animations.'",
                                                                                            choices: [
                                                                                                { text: "LET’S ADD A SPECIAL PUSHABLE OBJECT.", next: "sprig6game7" }
                                                                                                  ],
                                                                                                    background: "images/specialPushable.jpg",
                                                                                                      sound: "sounds/specialEffect.mp3"
                                                                                                      },

                                                                                                      sprig6game7: {
                                                                                                        text: "'Congratulations! You’ve learned how to create pushable objects and even how to make them interact with each other. Now you can make dynamic puzzles and interactive challenges in your game!'",
                                                                                                          choices: [
                                                                                                              { text: "next ", next: "sprig7game1 " },
                                                                                                                  { text: "mainmen.", next: "mainPage " }
                                                                                                                    ],
                                                                                                                      background: "images/congratulations.jpg",
                                                                                                                        sound: "sounds/congratulationsSound.mp3"
                                                                                                                        },


        sprig7game1: {
            text: "'To add animations to your pushable objects, you can use the `setAnimation` function. This allows you to animate the object when it’s pushed, adding a more immersive experience. For example, you could animate the box to shrink when it’s pushed, or make it bounce slightly.\n\nExample:\n\n```javascript\nsetAnimation(2, 2, 'shrink', 1); // Shrinks the box when pushed\n`\nThis creates a dynamic pushable experience.'",
              choices: [
                  { text: "LET’S CREATE A COMBO PUZZLE WITH PUSHABLES.", next: "sprig7game3" },
                      { text: "I WANT TO CREATE MORE COMPLEX PUSHABLE OBJECTS.", next: "sprig7game4" }
                        ],
                          background: "src=images/pushable1.jpg",
                            sound: "sounds/animation.mp3"
                            },

                            sprig7game2: {
                              text: "'Let’s continue adding pushable objects! For instance, you can create a pushable crate or a boulder that blocks the path, and the player needs to push it to clear the way. To do this, simply use `setPushable` again and place them strategically on the map.'",
                                choices: [
                                    { text: "CREATE A PUSHABLE BLOCKING OBJECT.", next: "sprig7game4" },
                                        { text: "LET’S ADD MULTIPLE PUSHABLES IN A PUZZLE.", next: "sprig7game3" }
                                          ],
                                            background: "src=images/blocking_object.jpg",
                                              sound: "sounds/pushable_block.mp3"
                                              },

                                              sprig7game3: {
                                                text: "'Let’s create a puzzle where the player needs to push a series of objects in the correct order to unlock a door. For example, you can create a sequence where the player needs to push a box onto a pressure plate to open a door, or move crates to create a path.'",
                                                  choices: [
                                                      { text: "CREATE THE PUZZLE!", next: "sprig7game5" }
                                                        ],
                                                          background: "src=images/puzzle_scene.jpg",
                                                            sound: "sounds/puzzle.mp3"
                                                            },

                                                            sprig7game4: {
                                                              text: "'To make pushable objects more interesting, you can make them interact with each other. For example, if a player pushes a box into a boulder, the boulder might roll away. You can set up these interactions by checking for collisions and applying forces when objects meet.'",
                                                                choices: [
                                                                    { text: "LET’S ADD A PUSHABLE OBJECT COLLISION!", next: "sprig7game5" },
                                                                        { text: "CREATE A PUSHABLE WITH A UNIQUE EFFECT.", next: "sprig7game6" }
                                                                          ],
                                                                            background: "src=images/interaction.jpg",
                                                                              sound: "sounds/collision.mp3"
                                                                              },

                                                                              sprig7game5: {
                                                                                text: "'Now, let’s finish the puzzle by adding some finishing touches! For example, when the player pushes the last object to the correct spot, they can unlock a door or open a gate to the next level.'",
                                                                                  choices: [
                                                                                      { text: "LET’S TEST OUR PUSHABLE PUZZLE!", next: "sprig7game7" }
                                                                                        ],
                                                                                          background: "src=images/final_touches.jpg",
                                                                                            sound: "sounds/finish.mp3"
                                                                                            },

                                                                                            sprig7game6: {
                                                                                              text: "'Creating pushable objects with unique effects can add depth to your game. For instance, you could make a pushable barrel explode when pushed, or a pushable crate release a surprise when moved. These effects can be triggered using the same `setPushable` method, but adding extra code for interactions and animations.'",
                                                                                                choices: [
                                                                                                    { text: "LET’S ADD A SPECIAL PUSHABLE OBJECT.", next: "sprig7game7" }
                                                                                                      ],
                                                                                                        background: "src=images/special_effect.jpg",
                                                                                                          sound: "sounds/special_effect.mp3"
                                                                                                          },

                                                                                                          sprig7game7: {
                                                                                                            text: "'Congratulations! You’ve learned how to create pushable objects and even how to make them interact with each other. Now you can make dynamic puzzles and interactive challenges in your game!'",
                                                                                                              choices: [
                                                                                                                  { text: "CREATE A NEW LEVEL WITH PUSHABLE OBJECTS.", next: "sprig7game8" },
                                                                                                                      { text: "LET’S GO BACK AND TWEAK THE CURRENT LEVEL.", next: "sprig6game1" }
                                                                                                                        ],
                                                                                                                          background: "src=images/congratulations.jpg",
                                                                                                                            sound: "sounds/congratulations.mp3"
                                                                                                                            },

                                                                                                                            sprig7game8: {
                                                                                                                              text: "'You have completed the tutorial. Now, let's create a new level that uses everything you've learned about pushable objects, animations, and interactions.'",
                                                                                                                                choices: [
                                                                                                                                    { text: "CREATE A NEW LEVEL!", next: "sprig7game9" }
                                                                                                                                      ],
                                                                                                                                        background: "src=images/new_level.jpg",
                                                                                                                                          sound: "sounds/new_level.mp3"
                                                                                                                                          },
sprig8game1: {
        text: "'You can add sound effects that play after user input by combining `afterinput` with sound functions. For instance, you could play a sound when the player submits their choice or when they type something.\n\nHere’s how you could add sound after input:\n\n```javascript\nafterinput('playerChoice', () => {\n  playSound('buttonClick'); // Plays a sound after the player selects an option\n});\n`\nThis enhances the feedback for the user after input.'",
              choices: [
                      { text: "CREATE A GAME WITH SOUND FEEDBACK.", next: "sprig8game2" },
                              { text: "SHOW ME HOW TO CHANGE INPUT TYPES.", next: "sprig8game3" }
                                    ],
                                          background: "src=images/gameBackground1.jpeg",
                                                sound: "sounds/gameSound1.mp3"
                                                    },

                                                        sprig8game2: {
                                                              text: "'Let’s add sound feedback to our interactive choice system. For instance, when the player selects a choice, a button click sound can play to confirm their input.\n\nExample:\n\n```javascript\nafterinput('userChoice', () => {\n  playSound('clickSound'); // Plays sound after choice\n  proceedToNextStage(); // Continues to next stage after input\n});\n`\nThis will add audio feedback to the choices the player makes.'",
                                                                    choices: [
                                                                            { text: "LET’S MAKE THE INPUT MORE INTERESTING.", next: "sprig8game3" },
                                                                                    { text: "CREATE A CUSTOM SOUND ON INPUT.", next: "sprig8game4" }
                                                                                          ],
                                                                                                background: "src=images/gameBackground2.jpeg",
                                                                                                      sound: "sounds/gameSound2.mp3"
                                                                                                          },

                                                                                                              sprig8game3: {
                                                                                                                    text: "'You can create different types of inputs based on the needs of your game. For example, use text inputs for name entry, but radio buttons or drop-downs for choices. To change the input type, you can simply use `setInputType`:\n\n```javascript\nsetInputType('playerChoice', 'radio'); // Makes the input a radio button\n`\nThis allows you to customize how the player interacts with the input fields.'",
                                                                                                                          choices: [
                                                                                                                                  { text: "CREATE A RADIO BUTTON CHOICE SYSTEM.", next: "sprig8game4" },
                                                                                                                                          { text: "LET’S ADD A SLIDER INPUT.", next: "sprig8game5" }
                                                                                                                                                ],
                                                                                                                                                      background: "src=images/gameBackground3.jpeg",
                                                                                                                                                            sound: "sounds/gameSound3.mp3"
                                                                                                                                                                },

                                                                                                                                                                    sprig8game4: {
                                                                                                                                                                          text: "'With radio buttons, you can create a set of options for the player to choose from. For example, if you want the player to select a difficulty level, you could use radio buttons to display the options.'",
                                                                                                                                                                                choices: [
                                                                                                                                                                                        { text: "LET’S ADD A DIFFICULTY SELECTION!", next: "sprig8game5" },
                                                                                                                                                                                                { text: "LET’S MAKE THE INPUT FIELD LOOK NICE.", next: "sprig8game6" }
                                                                                                                                                                                                      ],
                                                                                                                                                                                                            background: "src=images/gameBackground4.jpeg",
                                                                                                                                                                                                                  sound: "sounds/gameSound4.mp3"
                                                                                                                                                                                                                      },

                                                                                                                                                                                                                          sprig8game5: {
                                                                                                                                                                                                                                text: "'Sliders allow players to choose a value in a range, like adjusting volume or brightness. You can create a slider with `setSlider` like this:\n\n```javascript\nsetSlider('volume', 0, 100); // Creates a slider for volume adjustment\n`\nThis gives the player a more interactive way to input values.'",
                                                                                                                                                                                                                                      choices: [
                                                                                                                                                                                                                                              { text: "CREATE A VOLUME CONTROL SLIDER.", next: "sprig8game6" }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                          background: "src=images/gameBackground5.jpeg",
                                                                                                                                                                                                                                                                sound: "sounds/gameSound5.mp3"
                                                                                                                                                                                                                                                                    },

                                                                                                                                                                                                                                                                        sprig8game6: {
                                                                                                                                                                                                                                                                              text: "'By now, you’ve learned how to handle user input with `oninput` and `afterinput`, and you’ve explored various ways to make your game interactive and dynamic. The next step is to combine these techniques with other features like animations, events, and gameplay logic to create an even more engaging experience for the player.'",
                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                            { text: "BUILD A COMPLEX INTERACTIVE LEVEL.", next: "sprig8game7" }
                                                                                                                                                                                                                                                                                                  ],
                                                                                                                                                                                                                                                                                                        background: "src=images/gameBackground6.jpeg",
                                                                                                                                                                                                                                                                                                              sound: "sounds/gameSound6.mp3"
                                                                                                                                                                                                                                                                                                                  },

                                                                                                                                                                                                                                                                                                                      sprig8game7: {
                                                                                                                                                                                                                                                                                                                            text: "'Congratulations! You’ve learned how to create pushable objects and even how to make them interact with each other. Now you can make dynamic puzzles and interactive challenges in your game!'",
                                                                                                                                                                                                                                                                                                                                  choices: [
                                                                                                                                                                                                                                                                                                                                          { text: "CREATE A NEW LEVEL WITH PUSHABLE OBJECTS.", next: "sprig8game8" },
                                                                                                                                                                                                                                                                                                                                                  { text: "LET’S GO BACK AND TWEAK THE CURRENT LEVEL.", next: "sprig8game1" }
                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                              background: "src=images/gameBackground7.jpeg",
                                                                                                                                                                                                                                                                                                                                                                    sound: "sounds/gameSound7.mp3"
                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                            sprig8game8: {
                                                                                                                                                                                                                                                                                                                                                                                  text: "'You’re now ready to design the most advanced interactive gameplay levels with multiple pathways, dynamic inputs, sound, and visual effects. Keep experimenting and making your game better!.'",
                                                                                                                                                                                                                                                                                                                                                                                        choices: [
                                                                                                                                                                                                                                                                                                                                                                                                { text: "RETURN TO MAIN MENU.", next: "mainPage" }
                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                            background: "src=images/gameBackground8.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                  sound: "sounds/gameSound8.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                                                                      sprig9game1: {
                                                                                                                                                                                                                                                                                                                                                                                                                          text: "'Welcome to the advanced Sprig tutorial! Let’s dive deeper into making your game even more interactive and dynamic with new input techniques.'",
                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "SHOW ME HOW TO ADD SOUND EFFECTS.", next: "sprig9game2" },
                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "LET'S ADD A NEW SCENE.", next: "sprig9game3" }
                                                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/advanced_tutorial_bg.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                          sound: "sounds/tutorial_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                                                                                                                                                                                                                          sprig9game2: {
                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'In this section, we’ll explore how to add sound effects based on user actions. You can play a sound when the player selects a choice, clicks a button, or performs any other action in the game.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                              choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "SHOW ME AN EXAMPLE!", next: "sprig9game4" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "LET'S MOVE ON TO SCENE MANAGEMENT.", next: "sprig9game5" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                          background: "src=images/sound_effects.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/click_sound.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                            sprig9game3: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                              text: "'Let’s add a new scene to your game! Use `setScene()` to switch from one part of the game to another. Here’s how you can manage different environments based on player input.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "CREATE A COMPLEX SCENE.", next: "sprig9game6" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "ADD MORE INTERACTIVITY TO THE SCENE.", next: "sprig9game7" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            background: "src=images/game_world_scene.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sound: "sounds/world_transition.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sprig9game4: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                text: "'Here’s how to trigger sound effects after a user makes a choice. You can tie sound effects to input actions like button clicks or selecting a choice.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "SHOW ME HOW TO TRIGGER SOUND ON INPUT.", next: "sprig9game8" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "LET'S MOVE TO SCENE MANAGEMENT.", next: "sprig9game5" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              background: "src=images/button_click_scene.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sound: "sounds/button_click.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sprig9game5: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  text: "'In this section, we’ll manage multiple scenes in the game and how player input affects the flow. For example, you can have different scenes for various stages of the game.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "SHOW ME SCENE TRANSITIONS.", next: "sprig9game6" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET'S ADD A NEW GAME MECHANIC.", next: "sprig9game9" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                background: "src=images/scene_transition_bg.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sound: "sounds/scene_transition.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sprig9game6: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    text: "'Now let’s add a complex scene that changes based on the choices made by the player. You can use `setScene()` with conditions to create dynamic game environments.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "CREATE A COMPLEX CHOICE SYSTEM.", next: "sprig9game7" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { text: "ADD MULTIPLE SCENES WITH SOUND EFFECTS.", next: "sprig9game8" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  background: "src=images/complex_scene.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sound: "sounds/complex_game.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sprig9game7: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      text: "'Let’s now focus on making your game more interactive with choices that affect the storyline. Use `oninput` and `afterinput` functions to make the player’s decisions meaningful.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "SHOW ME AN EXAMPLE OF CHOICE IMPACT.", next: "sprig9game9" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "LET'S ADD A SOUND FEEDBACK FOR INPUT.", next: "sprig9game10" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    background: "src=images/interactive_choices.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sound: "sounds/choice_impact.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sprig9game8: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        text: "'This section will show you how to handle multiple choice options and how each option can trigger different scenes and events.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { text: "ADD A SOUND AFTER CHOICE.", next: "sprig9game9" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "SHOW ME MORE EXAMPLES.", next: "sprig9game10" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      background: "src=images/multiple_choices.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/multiple_choices.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig9game9: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          text: "'Now, let’s create an even more dynamic experience by combining sound and complex choices. This will elevate your game’s interactivity and feedback.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "CREATE A DYNAMIC GAME MECHANIC.", next: "sprig9game10" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "LET'S ADD A FINAL GAME MECHANIC.", next: "sprig9game11" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/dynamic_gameplay.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sound: "sounds/dynamic_interaction.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sprig9game10: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'Congratulations! You’ve now learned how to combine user input, scene management, and sound effects to create an immersive experience in Sprig. Keep experimenting to create even more engaging gameplay.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "START A NEW TUTORIAL!", next: "sprig10game1 " }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      background: "src=images/congrats_scene.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/congratulations.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig10game1: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'Welcome to the advanced world of NeoGrid! Here, you will discover new features to enhance your game using tiles. Let’s dive right into it!'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "WHAT'S NEW IN THIS PART?", next: "sprig10game2" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "LET’S REFRESH THE BASICS.", next: "sprig10game3" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          background: "src=images/advancedWorld.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/advancedIntro.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sprig10game2: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              text: "'In this section, we will explore how to work with **tile animations**. Tiles can move, scale, and change over time to create dynamic effects in your game. Here’s an example:\n\n```javascript\nlet myTile = getTiles('grass');\nsetTile(myTile, 5, 5);\nmyTile.animate('move', { x: 10, y: 10, duration: 2 }); // Moves tile over 2 seconds\n`\nThis will animate the tile’s position over a duration, making your world feel alive.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "HOW CAN I ADD TILE ROTATION?", next: "sprig10game3" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "SHOW ME MORE TILE ANIMATION TYPES.", next: "sprig10game4" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            background: "src=images/tileAnimations.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sound: "sounds/tileAnimation.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sprig10game3: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                text: "'You can also rotate tiles to create more dynamic perspectives. Use the `rotateTile()` function to spin your tiles:\n\n```javascript\nlet treeTile = getTiles('tree');\nsetTile(treeTile, 5, 5);\ntreeTile.rotate(90); // Rotates the tree tile by 90 degrees\n`\nThis will turn your tiles to create more engaging scenes.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "CAN I SCALE TILES?", next: "sprig10game4" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "LET’S ADD TILE LAYERS AND EFFECTS.", next: "sprig10game5" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              background: "src=images/tileRotation.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sound: "sounds/tileRotation.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sprig10game4: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  text: "'Scaling tiles allows you to adjust their size dynamically. Here's how you can make a tile bigger or smaller:\n\n```javascript\nlet flowerTile = getTiles('flower');\nsetTile(flowerTile, 7, 8);\nflowerTile.scale(2); // Doubles the size of the flower tile\n`\nScaling can add depth and perspective to your game environment.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "LET’S ADD TILE LAYERS AND EFFECTS.", next: "sprig10game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "HOW DO I ADD TILE SHADOWS?", next: "sprig10game6" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                background: "src=images/scalingTiles.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sound: "sounds/scalingEffect.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sprig10game5: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    text: "'You can combine various tile effects such as scaling, rotation, and animation to create stunning visual effects. For instance, by combining the scale and animation functions, you can make tiles that grow while moving:\n\n```javascript\nlet stoneTile = getTiles('stone');\nsetTile(stoneTile, 4, 4);\nstoneTile.animate('move', { x: 10, y: 10, duration: 3 });\nstoneTile.scale(1.5); // Enlarges the tile as it moves\n`\nThis technique brings your game world to life with complex animations and interactions.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "LET’S ADD TILE SHADOWS.", next: "sprig10game6" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { text: "HOW CAN I ADD TILE LIGHTING?", next: "sprig10game7" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  background: "src=images/tileEffects.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sound: "sounds/tileEffects.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sprig10game6: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      text: "'You can add shadows to your tiles to create a more realistic and immersive environment. To add a shadow, use the `setShadow()` function:\n\n```javascript\nlet rockTile = getTiles('rock');\nsetTile(rockTile, 3, 3);\nrockTile.setShadow(true); // Adds a shadow beneath the rock tile\n`\nThis will create a shadow under your tile, enhancing the depth of your world.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET’S ADD TILE LIGHTING.", next: "sprig10game7" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "SHOW ME HOW TO MAKE TILES INTERACTIVE.", next: "sprig10game8" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    background: "src=images/tileShadows.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sound: "sounds/tileShadows.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sprig10game7: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        text: "'Lighting can add a unique atmosphere to your game. You can add dynamic lighting to your tiles using the `setLighting()` function:\n\n```javascript\nlet lightTile = getTiles('light');\nsetTile(lightTile, 6, 6);\nlightTile.setLighting('glow'); // Adds a glowing effect to the light tile\n`\nLighting effects can be used for ambient lighting or dramatic lighting in your world.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { text: "SHOW ME HOW TO MAKE TILES INTERACTIVE.", next: "sprig10game8" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "LET’S CREATE A TILE-BASED GAME.", next: "sprig10game9" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      background: "src=images/tileLighting.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/tileLighting.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig10game8: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          text: "'You can make your tiles interactive by using event listeners. For example, when the player clicks on a tile, it can trigger an action. Here’s how to add an interactive tile:\n\n```javascript\nlet buttonTile = getTiles('button');\nsetTile(buttonTile, 5, 5);\nbuttonTile.on('click', () => {\n  console.log('Button clicked!');\n});\n`\nNow, the button tile will trigger a message when clicked, making it interactive.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "LET’S CREATE A TILE-BASED GAME.", next: "sprig10game9" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "SHOW ME HOW TO MAKE A TILE-BASED PUZZLE.", next: "sprig10game10" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/interactiveTiles.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sound: "sounds/tileInteractive.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sprig10game9: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'Now, it’s time to create your own tile-based game! Use everything you've learned to design a game where tiles interact with the player. You can have puzzles, challenges, and more! Start by designing a simple game map with interactive tiles.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "START CREATING YOUR TILE GAME!", next: "sprig10game1" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      background: "src=images/gameDesign.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/gameCreation.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig10game10: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          text: "'Creating a tile-based puzzle game involves designing levels where players interact with tiles to solve challenges. You can add goals, obstacles, and rewards. Here's an example of how you can start building a puzzle game using tiles:\n\n```javascript\nlet puzzleTile = getTiles('puzzle');\nsetTile(puzzleTile, 2, 3);\npuzzleTile.on('click', () => {\n  console.log('Puzzle solved!');\n});\n`\nThis can be expanded into a full puzzle game with multiple levels and challenges.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "START CREATING YOUR TILE PUZZLE GAME!", next:"mainpage " },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {text:"next ",next:"sprig11game1"}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    background: "src=images/puzzleGame.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sound: "sounds/puzzleGame.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sprig11game1: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          text: "'Welcome to the Sprig advanced tutorial! Here, we will dive deeper into Sprig’s powerful capabilities. In this chapter, you’ll learn how to enhance your game world with dynamic animations, interactions, and complex tile types. Are you ready to take your game to the next level?'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "LET'S ADD ANIMATION TO OUR SPRITES.", next: "sprig11game2" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "LET'S CREATE COMPLEX TILE TYPES.", next: "sprig11game3" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/sprig_background1.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sound: "sounds/sprig_intro.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sprig11game2: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'Animation brings life to your sprites. Instead of static images, you can use multiple frames to animate your characters. In Sprig, the `animateSprite()` function allows you to cycle through images or frames for a smooth animation effect. Here’s an example where a hero sprite runs across the screen: \n\n```javascript\nanimateSprite('hero.png', ['hero_run1.png', 'hero_run2.png'], 5); // Animates the hero running\n```'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "HOW DO I CREATE COMPLEX TILE TYPES?", next: "sprig11game3" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "LET'S COMBINE ANIMATIONS WITH EVENTS.", next: "sprig11game4" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          background: "src=images/animation_background.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/animation_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sprig11game3: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              text: "'Complex tile types add depth to your game environment. You can create tiles that change behavior based on game events or player interactions. For instance, a tile could be water that freezes when a certain event happens, or a road that becomes a bridge under specific conditions.\n\nYou can use the `setTileBehavior()` function to assign behaviors to tiles:\n\n```javascript\nsetTileBehavior('water', 'freeze'); // Water tiles freeze on a specific event\n```'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "LET'S COMBINE TILE TYPES WITH EVENTS.", next: "sprig11game4" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "WHAT IF I WANT TO ADD INTERACTIVE ELEMENTS?", next: "sprig11game5" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            background: "src=images/tile_types_background.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sound: "sounds/tile_types_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sprig11game4: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                text: "'Combining animations with events opens up a world of possibilities. For example, when the hero sprite collides with a frozen water tile, the sprite could trigger an animation to show it’s sliding over the ice. Here’s how you can make that happen:\n\n```javascript\nhero.on('collide', (tile) => {\n  if (tile.type === 'water' && tile.behavior === 'freeze') {\n    animateSprite('hero.png', ['hero_slide1.png', 'hero_slide2.png'], 5);\n  }\n});\n```'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "LET'S ADD INTERACTIVE ELEMENTS TO OUR GAME.", next: "sprig11game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "LET'S EXPLORE MORE COMBINED FEATURES.", next: "sprig11game6" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              background: "src=images/animation_event_background.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sound: "sounds/animation_event_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sprig11game5: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  text: "'Interactive elements add an extra layer of fun and engagement to your game. For example, you could create a puzzle where tiles rearrange themselves when a player clicks them. Here’s how to create an interactive tile puzzle:\n\n```javascript\nlet puzzleTile = getTile(3, 3);\npuzzleTile.on('click', () => {\n  setTileBehavior('puzzle', 'rearrange');\n});\n```'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "LET'S COMBINE INTERACTIVE ELEMENTS WITH EVENTS.", next: "sprig11game6" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "WHAT ABOUT ANIMATED EVENTS AND TILE TYPES?", next: "sprig11game7" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                background: "src=images/interactive_elements_background.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sound: "sounds/interactive_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sprig11game6: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    text: "'With interactive elements, you can add even more complexity. Imagine a level where clicking on specific tiles causes animations to trigger, and tile behaviors change. By combining animations, tile types, and interactive elements, you can create a game world that feels alive and reactive. Here’s a quick example:\n\n```javascript\nlet specialTile = getTile(4, 4);\nspecialTile.on('click', () => {\n  animateSprite('hero.png', ['hero_jump1.png', 'hero_jump2.png'], 5);\n  setTileBehavior('lava', 'activate');\n});\n```'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "LET'S SEE THE FINAL RESULT.", next: "sprig11game7" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { text: "BACK TO ADVANCED TUTORIAL.", next: "sprig11game8" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  background: "src=images/combined_elements_background.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sound: "sounds/combined_elements_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sprig11game7: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      text: "'With these advanced techniques, you’re ready to create a truly interactive and immersive game world. From animations and tile behaviors to events and interactive elements, you have the tools to bring your vision to life. Go ahead and experiment with all these features to create something amazing!'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET'S CONTINUE EXPLORING SPRIG.", next: "sprig12game1 " }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                background: "src=images/final_result_background.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sound: "sounds/final_result_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sprig12game1: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        text: "'Welcome to the next level of Sprig! Now, we’ll delve into advanced interactions between sprites and tiles, adding sounds and animations to make your world even more dynamic. Let's explore how you can integrate sound effects and background changes into your game environment.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "LET'S ADD SOUND TO SPRITES.", next: "sprig12game2" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET'S WORK ON TILE EFFECTS FIRST.", next: "sprig12game3" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    background: "src=images/sprig_game_background2.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/sprig_ambient.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig12game2: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'To add sound effects to your sprites, you can use the following method. For example, play a sound when a sprite is clicked:\n\n```javascript\nsprite1.on('click', () => {\n  playSound('sounds/sprite_click.mp3'); // Plays sound when sprite is clicked\n});\n`\nThis will trigger a sound every time the sprite is clicked.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "SHOW ME HOW TO ADD ANIMATION WITH SOUND.", next: "sprig12game4" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "LET'S ADD BACKGROUND MUSIC.", next: "sprig12game5" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/sprig_game_sprite_interaction.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/sprite_click.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sprig12game3: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                text: "'Let’s work on adding effects to tiles. You can change the background or play a sound when a tile is interacted with. For instance, if a player steps on a specific tile, a sound can be triggered to indicate their action.\n\n```javascript\nlet specialTile = getTiles('grass');\nspecialTile.on('step', () => {\n  playSound('sounds/tile_step.mp3'); // Plays sound when the tile is stepped on\n});\n`\nThis adds a fun sound effect to your tile interactions.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET'S ADD BACKGROUND MUSIC.", next: "sprig12game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "SHOW ME HOW TO COMBINE TILE EFFECTS WITH SPRITE MOVEMENTS.", next: "sprig12game6" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            background: "src=images/sprig_game_tile_effects.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sound: "sounds/tile_step.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sprig12game4: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    text: "'You can combine animations with sound to create a more immersive experience. For example, you could animate a sprite moving while playing a sound during the animation:\n\n```javascript\nanimateSprite(sprite1, {x: 5, y: 5}, 1000); // Moves sprite\nplaySound('sounds/sprite_move.mp3'); // Plays sound during movement\n`\nThis combines visual and audio effects for a richer experience.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "SHOW ME HOW TO USE BOTH FOR TILE EFFECTS.", next: "sprig12game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "LET’S ADD A BACKGROUND MUSIC LOOP.", next: "sprig12game6" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                background: "src=images/sprig_game_animation_sound.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sound: "sounds/sprite_move.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sprig12game5: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        text: "'Adding background music is simple. You can loop a sound throughout the game, creating an immersive atmosphere for your players. Use the following code to play background music:\n\n```javascript\nlet bgMusic = new Audio('sounds/background_music.mp3');\nbgMusic.loop = true;\nbgMusic.play(); // Plays background music on loop\n`\nThis will continuously play the music in the background.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "SHOW ME HOW TO ADD TILE INTERACTIONS WITH MUSIC.", next: "sprig12game6" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET'S ADD SOUND TO SPRITE COLLISIONS.", next: "sprig12game7" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    background: "src=images/sprig_game_background_music.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/background_music.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig12game6: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'You can trigger specific tile interactions while playing background music. For example, play a sound when stepping on a certain tile while the background music is still playing:\n\n```javascript\nlet specialTile = getTiles('stone');\nspecialTile.on('step', () => {\n  playSound('sounds/tile_step_stone.mp3'); // Plays sound on stone tile\n});\n`\nThis allows you to add variety while keeping the background music continuous.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "LET'S ADD SOUND TO SPRITE COLLISIONS.", next: "sprig12game7" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "SHOW ME HOW TO LOOP MUSIC AND SOUNDS TOGETHER.", next: "sprig12game8" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/sprig_game_tile_music_interaction.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/tile_step_stone.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sprig12game7: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                text: "'You can also add sounds to **sprite collisions**. For example, when two sprites collide, you can play a collision sound:\n\n```javascript\nsprite1.on('collide', () => {\n  playSound('sounds/collision.mp3'); // Plays sound when sprites collide\n});\n`\nThis adds another layer of interaction, making the game even more dynamic.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "SHOW ME HOW TO COMBINE THIS WITH TILE EFFECTS.", next: "sprig12game8" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "LET'S ADD ANIMATED COLLISIONS WITH SOUND.", next: "sprig12game9" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            background: "src=images/sprig_game_sprite_collision.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sound: "sounds/collision.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sprig12game8: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    text: "'You can combine music, sound effects, and animations to create a seamless experience. For example, use a sprite animation that triggers a sound when it reaches a specific tile and plays music in the background:\n\n```javascript\nanimateSprite(sprite1, {x: 5, y: 5}, 1000);\nplaySound('sounds/sprite_move.mp3');\nmoveSprite(sprite1, 2, 2);\n`\nThis allows for synchronized effects and music in your game.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "LET'S ADD MULTIPLE SOUND TRIGGERS.", next: "sprig12game9" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "SHOW ME HOW TO CREATE A SOUND-DRIVEN GAME.", next: "sprig12game10" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                background: "src=images/sprig_game_seamless_interaction.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sound: "sounds/sprite_move.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sprig12game9: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        text: "'You can set up **multiple sound triggers** that activate at different times during the game. For example, you could trigger one sound when a sprite reaches a destination and another sound when it interacts with a tile:\n\n```javascript\nsprite1.on('arrive', () => {\n  playSound('sounds/sprite_arrive.mp3'); // Plays sound when sprite reaches destination\n});\n`\nThis enables diverse interactions and triggers based on player actions.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "SHOW ME HOW TO CREATE A SOUND-DRIVEN GAME.", next: "sprig12game10" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET'S CREATE A FULL SOUND DESIGN FOR THE GAME.", next: "sprig12game11" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    background: "src=images/sprig_game_multiple_triggers.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/sprite_arrive.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig12game10: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'In a **sound-driven game**, you can control the game flow using sounds. For example, you can trigger events based on specific sound cues, or even make certain tiles respond to sounds:\n\n```javascript\nlet soundTriggerTile = getTiles('sand');\nsoundTriggerTile.on('step', () => {\n  playSound('sounds/sand_step.mp3'); // Plays sound on sand tile\n});\n`\nThis allows for immersive gameplay where sounds affect the environment.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "LET'S CREATE A SOUND-BASED PUZZLE GAME.", next: "sprig12game11" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "SHOW ME HOW TO USE ALL SOUNDS IN ONE GAME.", next: "sprig12game12" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/sprig_game_sound_design.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/sand_step.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sprig12game11: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                text: "'You’ve learned how to integrate sounds into your game, from sprite movements to tile interactions. Now, you're ready to combine everything into a complete sound-driven game with immersive effects and background music. Ready to bring your creation to life?'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "START CREATING YOUR SOUND-DRIVEN GAME!", next: "sprig12game1" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {text:"next infinte loop ",next:"sprig13game1 "}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    background: "src=images/sprig_game_final_stage.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/final_stage_music.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig13game1: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'Ah, welcome, traveler! You’ve ventured into the world of endless possibilities. In this digital realm, certain functions allow you to make things move endlessly, creating a seamless experience for your players. Today, we will learn how to use the power of the `infinite` and `loop` functions to add dynamic elements to your game. Let’s begin!'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "WHAT IS THE `INFINITE` FUNCTION?", next: "sprig13game2" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "I WANT TO LEARN ABOUT LOOPING FIRST.", next: "sprig13game5" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          background: "src=images/sprig_intro.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/sprig_theme.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sprig13game2: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              text: "'The `infinite` function is like an unbroken chain—it can make certain elements or actions in your game repeat forever. Imagine a world where a character runs endlessly, or background music plays non-stop. This function allows you to make those elements persist, keeping the world alive and constantly moving.'\n\n```javascript\ninfinite(() => {\n  // Your repeated action here\n  console.log('This will run forever!');\n});\n```\n'With this, the action inside the `infinite` function will continue to run until the game ends, without any interruption. It’s perfect for creating things like constant animations, continuous movement, or ongoing changes in the game world.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "SHOW ME HOW TO LOOP ELEMENTS INSTEAD.", next: "sprig13game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "CAN I CONTROL THE SPEED OF AN INFINITE ACTION?", next: "sprig13game3" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            background: "src=images/infinite_function.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sound: "sounds/infinite_function.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              sprig13game3: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                text: "'Yes, traveler, you can control how fast an action repeats using the `infinite` function. By combining it with a `delay` or adjusting the frequency of execution, you can make sure the action happens at a smooth pace. For example, you can make an object slowly move across the screen, repeating forever without overwhelming the player.'\n\n```javascript\ninfinite(() => {\n  moveObject(); // Repeats the movement\n}, 1000); // Repeats every 1000ms (1 second)\n```\n'Now your action is smoothly repeated at the interval you set, ensuring a consistent pace in the game.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "SHOW ME HOW TO LOOP ELEMENTS.", next: "sprig13game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "I WANT TO APPLY INFINITE TO A MOVING OBJECT.", next: "sprig13game4" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              background: "src=images/control_speed.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sound: "sounds/speed_control.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                sprig13game4: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  text: "'Let's apply the `infinite` function to move an object. In this example, we'll have a character run endlessly across the screen, repeating their movement at a steady pace:'\n\n```javascript\nlet x = 0;\ninfinite(() => {\n  x += 5;\n  character.setPosition(x, 0); // Moves the character to the right\n}, 50); // Updates every 50ms\n```\n'Now your character will run across the screen continuously, and you have complete control over their speed and direction.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { text: "SHOW ME HOW TO LOOP ELEMENTS.", next: "sprig13game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { text: "LET’S PAUSE THE INFINITE ACTION.", next: "sprig13game6" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                background: "src=images/moving_object.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sound: "sounds/move_object.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  sprig13game5: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    text: "'The `loop` function is another essential tool in your arsenal, but it differs from `infinite` in that it’s more focused on creating repeating actions that are tied to specific events, like when a player interacts with an object or reaches a certain point in the game. Here’s an example of looping a sound effect every time the player interacts with something in the world:'\n\n```javascript\nloop(() => {\n  playSound('interaction-sound.mp3'); // Repeats the sound on each interaction\n}, playerInteract); // Runs when the player interacts\n```\n'Now every time the player interacts, the sound effect will play again. You can adjust how often or under what conditions the loop runs.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { text: "CAN I CONTROL THE NUMBER OF LOOPS?", next: "sprig13game7" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { text: "WHAT IF I WANT TO CHANGE THE SOUND AFTER A FEW LOOPS?", next: "sprig13game8" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  background: "src=images/loop_function.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sound: "sounds/loop_function.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sprig13game6: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        text: "'To pause an infinite action, you can use a `stop` function or a conditional break. Here's an example where an infinite movement stops when a specific key is pressed:'\n\n```javascript\nlet running = true;\ninfinite(() => {\n  if (!running) return; // Stops the loop\n  x += 5;\n  character.setPosition(x, 0);\n});\n\nonKeyPress('space', () => {\n  running = false; // Pauses the movement when space is pressed\n});\n```\n'Now your infinite action will stop or pause when the player triggers the condition.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { text: "SHOW ME HOW TO CONTROL THE NUMBER OF LOOPS.", next: "sprig13game7" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "TAKE ME BACK TO THE BEGINNING.", next: "sprig13game1" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      background: "src=images/pause_action.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sound: "sounds/pause_action.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        sprig13game7: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          text: "'Ah, controlling the number of loops is simple! Use a counter to track how many times the loop has run. For example, you can limit a repeating action to five iterations:'\n\n```javascript\nlet count = 0;\ninfinite(() => {\n  if (count >= 5) return; // Stops after 5 loops\n  playSound('ding.mp3');\n  count++;\n}, 1000);\n```\n'Now the sound will play five times at one-second intervals, and then it will stop.'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { text: "WHAT IF I WANT TO CHANGE THE SOUND AFTER A FEW LOOPS?", next: "sprig13game8" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { text: "I WANT TO GO BACK TO LEARN ABOUT INFINITE ACTIONS.", next: "sprig13game2" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        background: "src=images/control_loops.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sound: "sounds/control_loops.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          sprig13game8: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            text: "'You can change actions mid-loop by adding conditions. For example, play one sound for the first three loops, then another sound for the rest:'\n\n```javascript\nlet count = 0;\ninfinite(() => {\n  if (count < 3) {\n    playSound('sound1.mp3');\n  } else {\n    playSound('sound2.mp3');\n  }\n  count++;\n  if (count >= 6) return; // Stops after 6 loops\n}, 1000);\n```\n'Here, the action changes after three loops, adding variety to your game!'",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              choices: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { text: "TAKE ME TO LOOPING ELEMENTS.", next: "sprig13game5" },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { text: "let me try ", next:"endtutorial" }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          background: "src=images/change_sound.jpeg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            sound: "sounds/change_sound.mp3"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            },
endTutorial: {
  text: "'Congratulations! You’ve completed the tutorial. Now it’s your turn to bring your ideas to life. Head over to the Sprig Editor and start building your own amazing games. The only limit is your imagination!'",
    choices: [
        { text: "GO TO SPRIG EDITOR", link: "https://editor.sprig.hackclub.com/" },
        {text:"mainmenu ", next:"mainpage"}

          ],
            background: "src=images/congrats.jpeg",
              sound: "sounds/victory.mp3"
              }
            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                            
  


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
