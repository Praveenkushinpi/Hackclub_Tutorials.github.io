const sprigTutorial = {
    sprig1game1: {
      text: "'Welcome to NeoGrid City, where reality is coded, and every street holds digital secrets. You’re a rookie hacker in the Coders’ Underground, a secret society working to rebuild the city. Your first mission: learn how to set **legends** to shape the city’s foundation.'",
      choices: [
        { text: "TELL ME MORE ABOUT LEGENDS.", next: "sprig1game2" },
        { text: "I’M READY TO CODE LEGENDS NOW!", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'Legends are the building blocks of NeoGrid. They define the look and purpose of objects in the game. For example, you might have a **player** (p) and a **wall** (w). Each legend needs a visual representation, which is where **bitmaps** come in.'",
      choices: [
        { text: "SHOW ME AN EXAMPLE.", next: "sprig1game4" },
        { text: "I WANT TO TRY IT OUT!", next: "sprig1game3" }
      ]
    },
  
    sprig1game3: {
      text: "'Alright, let’s dive in. Here’s how you define legends using Sprig’s `setLegend` function.'\n\n```javascript\nconst player = \"p\";\nconst wall = \"w\";\n\nsetLegend(\n  [player, bitmap`\n  .......\n  .XXXXX.\n  .X...X.\n  .XXXXX.\n  .......\n  `],\n  [wall, bitmap`\n  .......\n  .XXXXX.\n  .XXXXX.\n  .XXXXX.\n  .......\n  `]\n);\n```\n\n'This sets up a **player** and a **wall**.'",
      choices: [
        { text: "WHAT DOES THIS CODE DO?", next: "sprig1game5" },
        { text: "SHOW ME HOW TO PLACE LEGENDS ON A MAP!", next: "sprig1game6" }
      ]
    },
  
    sprig1game4: {
      text: "'Here’s an example legend setup:\n\n```javascript\nconst player = \"p\";\nconst wall = \"w\";\nsetLegend(\n  [player, bitmap`...\n`],\n  [wall, bitmap`...\n`]\n);\n```\n\n'Each object is defined by a **letter** and a **bitmap**.'",
      choices: [
        { text: "GOT IT! WHAT’S NEXT?", next: "sprig1game3" }
      ]
    },
  
    sprig1game5: {
      text: "'The `setLegend` function does two things:\n\n1. It defines your objects (like player and wall).\n2. It gives them a visual representation using **bitmaps**.'",
      choices: [
        { text: "UNDERSTOOD! LET’S BUILD A MAP.", next: "sprig1game6" }
      ]
    },
  
    sprig1game6: {
      text: "'Now that you’ve defined legends, it’s time to place them in a map using the `setMap` function. Here’s an example:'\n\n```javascript\nsetMap(map`\n  wwwww\n  w...w\n  w.p.w\n  w...w\n  wwwww\n`);\n```\n\n'Here, `w` is the wall, and `p` is the player.'",
      choices: [
        { text: "SHOW ME A CHALLENGE!", next: "sprig1game7" },
        { text: "I WANT TO LEARN MORE FIRST.", next: "sprig1game8" }
      ]
    },
  
    sprig1game7: {
      text: "'Your first challenge: Build a simple map with walls surrounding a player in the center. Try this code:'\n\n```javascript\nconst player = \"p\";\nconst wall = \"w\";\nsetLegend(\n  [player, bitmap`...\n`],\n  [wall, bitmap`...\n`]\n);\nsetMap(map`\n  ?????\n  ?.p.?\n  ?????\n`);\n```\n\n'Replace the `?` symbols with `w` to create the walls!'",
      choices: [
        { text: "CHALLENGE COMPLETED! WHAT’S NEXT?", next: "sprig1game9" },
        { text: "I NEED HELP!", next: "sprig1game8" }
      ]
    },
  
    sprig1game8: {
      text: "'No worries, coder. Let’s review:\n\n1. Use `setLegend` to define objects.\n2. Use `setMap` to place objects on the map.\n\n'Now, try this example to practice:'\n\n```javascript\nsetMap(map`\n  wwwww\n  w...w\n  w.p.w\n  w...w\n  wwwww\n`);\n```",
      choices: [
        { text: "GOT IT! BACK TO THE CHALLENGE.", next: "sprig1game7" }
      ]
    },
  
    sprig1game9: {
      text: "'Great job, coder! You’ve mastered the basics of setting legends and building maps. NeoGrid City awaits your creativity. What will you create next?'",
      choices: [
        { text: "LEARN ABOUT PLAYER MOVEMENT", next: "sprig2game1" },
        { text: "EXPLORE SPRIG FUNCTIONS", next: "sprig2game2" }
      ]
    },

    sprig1game1: {
      text: "'You’ve mastered legends, rookie. Now, it's time to add some life to NeoGrid City. Backgrounds are like the canvas of your game, setting the mood and giving context to your world. Ready to learn how to set the background?'",
      choices: [
        { text: "YES, LET’S ADD A BACKGROUND!", next: "sprig1game2" },
        { text: "I NEED MORE INFO FIRST.", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'In Sprig, backgrounds are set using the `setBackground` function. You can add static backgrounds or dynamic ones. Let’s start with a simple static background.'\n\n```javascript\nsetBackground(bitmap`\n  ..........\n  .######..\n  .######..\n  ..........\n`);\n```",
      choices: [
        { text: "WHAT DOES THIS CODE DO?", next: "sprig1game4" },
        { text: "I WANT TO TRY IT MYSELF!", next: "sprig1game5" }
      ]
    },
  
    sprig1game3: {
      text: "'A background is what surrounds your map. It could be a sky, a cityscape, or something abstract. You can set it with the `setBackground` function and make it as simple or complex as you like.'",
      choices: [
        { text: "SHOW ME HOW TO CODE IT.", next: "sprig1game2" }
      ]
    },
  
    sprig1game4: {
      text: "'This code sets a background using the `bitmap` function. The `.` represents empty space, and `#` represents solid elements in the image.\n\nYou can use bitmaps for all sorts of visuals, like skies, cityscapes, or any abstract art you want!'",
      choices: [
        { text: "OKAY, LET’S TRY A DIFFERENT BACKGROUND.", next: "sprig1game5" }
      ]
    },
  
    sprig1game5: {
      text: "'Great, let’s try this one. This time, we’ll use a more dynamic background with a slight gradient effect.\n\n```javascript\nsetBackground(bitmap`\n  ..........\n  .@@@@@@..\n  .@@@@@@..\n  ..........\n`);\n`'\nThis will give a more layered background feel.'",
      choices: [
        { text: "I WANT TO ADD A SCENE BACKGROUND!", next: "sprig1game6" },
        { text: "SHOW ME A CHALLENGE!", next: "sprig1game7" }
      ]
    },
  
    sprig1game6: {
      text: "'Time to set a full scene background! Here’s an example of setting a large cityscape to immerse your player in NeoGrid.'\n\n```javascript\nsetBackground(bitmap`\n  .@@@@@@@@@@@@.\n  .@...........@.\n  .@.######.###@.\n  .@...........@.\n  .@@@@@@@@@@@@.\n`);\n`'This creates a background of a city skyline.'",
      choices: [
        { text: "IT LOOKS AMAZING! WHAT’S NEXT?", next: "sprig1game8" },
        { text: "I WANT TO ADD AN ANIMATED BACKGROUND!", next: "sprig1game9" }
      ]
    },
  
    sprig1game7: {
      text: "'Let’s try a challenge. Build your own background using a combination of `.` and `#` to represent buildings, roads, and open sky.\n\nHere's an example prompt for you to work on:\n\n```javascript\nsetBackground(bitmap`\n  ......\n  .##..\n  .####\n  ......\n`);\n```\n\nReplace the `#` symbols to create a more complex scene!'",
      choices: [
        { text: "CHALLENGE COMPLETE! SHOW ME MORE.", next: "sprig1game8" },
        { text: "I NEED SOME HELP!", next: "sprig1game6" }
      ]
    },
  
    sprig1game8: {
      text: "'Nice work, coder! You’ve got the hang of setting backgrounds. Now, let’s bring NeoGrid City to life with more advanced visual effects.'",
      choices: [
        { text: "LEARN ABOUT ANIMATED BACKGROUNDS", next: "sprig2game1" },
        { text: "I’M READY TO ADD INTERACTIONS!", next: "sprig2game2" }
      ]
    },
  
    sprig1game9: {
      text: "'Let’s animate that background! Instead of a static background, we’ll create an illusion of movement by changing the background in real-time. You can use the `setInterval` function to periodically change the background, giving it a dynamic feel.'\n\n```javascript\nsetInterval(() => {\n  setBackground(bitmap`\n    ......\n    .#####.\n    .#####.\n    ......\n  `);\n}, 1000);`\n`This code will change the background every second, creating movement.'",
      choices: [
        { text: "ANIMATED BACKGROUND COMPLETED!", next: "sprig1game8" },
        { text: "SHOW ME MORE ADVANCED STUFF!", next: "sprig2game1" }
      ]
    }
,
    sprig1game1: {
      text: "'Welcome to NeoGrid City, young developer! Setting the map is a crucial step in your game world. With the `setMap` function, you can define the areas, roads, and buildings that make up the game world. Are you ready to start setting up your map?'",
      choices: [
        { text: "YES, LET’S SET UP THE MAP!", next: "sprig1game2" },
        { text: "I NEED TO KNOW MORE FIRST.", next: "sprig1game3" }
      ]
    },
    sprig1game2: {
      text: "'The `setMap` function in Sprig is used to define the layout of your game world. You’ll use tiles to represent different types of terrain, buildings, and objects. Let's start simple with a grid-based map where `.` represents empty spaces and `#` represents walls or buildings.'\n\n```javascript\nsetMap(`\n  ######\n  #....#\n  #....#\n  ######\n`);\n`' This will create a small map with walls on the edges and an open area inside.'",
      choices: [
        { text: "WHAT DOES THIS CODE DO?", next: "sprig1game4" },
        { text: "LET’S TRY A MAP WITH MORE DETAIL.", next: "sprig1game5" }
      ]
    },
  
    sprig1game3: {
      text: "'The map is the foundation of your game world. It consists of a grid where each character (`#`, `.`, or others) represents an element in the world. With `setMap`, you can create a grid-based layout, defining open spaces, roads, and walls.'",
      choices: [
        { text: "SHOW ME HOW TO CODE IT.", next: "sprig1game2" }
      ]
    },
  
    sprig1game4: {
      text: "'The code sets a simple grid-based map. The `#` characters represent solid elements, like walls or obstacles, while `.` represents open spaces where characters can move freely. This map is a foundation, and you can add complexity to it.'",
      choices: [
        { text: "LET'S ADD SOME STRUCTURES TO THE MAP.", next: "sprig1game5" }
      ]
    },
  
    sprig1game5: {
      text: "'Now, let’s add more complexity! Let’s place buildings (`B`), roads (`R`), and grass (`G`) on the map to create a more detailed NeoGrid City layout.\n\n```javascript\nsetMap(`\n  ######\n  #BB..#\n  #RR..#\n  ######\n`);\n`This code defines a layout with two buildings (`B`), a road (`R`), and open space.'",
      choices: [
        { text: "IT LOOKS COOL! WHAT’S NEXT?", next: "sprig1game6" },
        { text: "LET’S MAKE A MORE COMPLEX MAP.", next: "sprig1game7" }
      ]
    },
  
    sprig1game6: {
      text: "'Nice work! You’ve now added some structures to the map. Next, let’s look at how to add paths that players can follow, creating interactive routes through the map.'",
      choices: [
        { text: "HOW CAN I MAKE INTERACTIVE PATHS?", next: "sprig2game1" },
        { text: "LET'S ADD A DYNAMIC ELEMENT TO THE MAP.", next: "sprig2game2" }
      ]
    },
  
    sprig1game7: {
      text: "'Let's get more creative with our map! We can define roads, water bodies, and buildings on a larger scale.\n\nHere's a new map layout with diverse features:\n\n```javascript\nsetMap(`\n  #######\n  #...R.#\n  #BB..#.#\n  #R..R.#\n  #...G.#\n`);\n`\nThis one includes roads (`R`), buildings (`B`), and grass (`G`). Try adding more elements!'",
      choices: [
        { text: "MAP COMPLETED! SHOW ME MORE.", next: "sprig1game8" },
        { text: "I WANT TO ADD A MOVABLE OBJECT TO THE MAP.", next: "sprig1game9" }
      ]
    },
  
    sprig1game8: {
      text: "'Nice work! You’ve set up a solid map for NeoGrid City. Now that the map is ready, it’s time to add characters or objects that can move through it, interact with it, or even be part of a larger story.'",
      choices: [
        { text: "LET’S ADD MOVABLE OBJECTS.", next: "sprig2game1" },
        { text: "WHAT’S NEXT IN CREATING A DYNAMIC WORLD?", next: "sprig2game2" }
      ]
    },
  
    sprig1game9: {
      text: "'Great idea! To add movable objects on the map, you can place entities like players or NPCs. For example, a player character that moves through the map could look like this:\n\n```javascript\nsetEntity({x: 2, y: 2, sprite: 'player.png'});\n`\nThis will place a player at coordinates (2, 2) on the map. You can move them around using keyboard events or other controls.'",
      choices: [
        { text: "LET'S MAKE THE PLAYER MOVE!", next: "sprig2game3" },
        { text: "MAP COMPLETED! WHAT'S NEXT?", next: "sprig1game8" }
      ]
    },

    sprig1game1: {
      text: "'Welcome back to NeoGrid City, developer! Now that you’ve set up your map, it’s time to add solid elements to your world. Solids are objects that players cannot pass through—like buildings, walls, or barriers. They define the boundaries of your environment.'",
      choices: [
        { text: "LET’S ADD SOME SOLID WALLS!", next: "sprig1game2" },
        { text: "I NEED TO UNDERSTAND SOLIDS BETTER FIRST.", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'In Sprig, solids are typically defined using the `setSolid` function. This function marks an object as something the player can’t walk through. Let’s start by adding some walls around our map.\n\n```javascript\nsetSolid(0, 0, 5, 1); // Creates a solid wall from (0, 0) to (5, 1)\nsetSolid(5, 0, 5, 5); // Creates a vertical wall from (5, 0) to (5, 5)\n`\nThis will create walls around our map, blocking the player from passing through them.'",
      choices: [
        { text: "WHAT DOES THE CODE DO?", next: "sprig1game4" },
        { text: "LET’S ADD MORE SOLID OBJECTS TO THE MAP.", next: "sprig1game5" }
      ]
    },
  
    sprig1game3: {
      text: "'Solids are objects that act as physical barriers in the world. They prevent players from walking through them. Using `setSolid`, you can mark areas, walls, or even buildings that should be unpassable.'",
      choices: [
        { text: "SHOW ME HOW TO CODE IT.", next: "sprig1game2" }
      ]
    },
  
    sprig1game4: {
      text: "'The first line of code, `setSolid(0, 0, 5, 1)`, creates a horizontal wall from (0, 0) to (5, 1). This means it starts at position (0, 0) and stretches to (5, 1), forming a solid barrier. The second line, `setSolid(5, 0, 5, 5)`, creates a vertical wall from (5, 0) to (5, 5). Now, your player will be blocked by these walls as they try to move.'",
      choices: [
        { text: "LET’S ADD SOME MORE COMPLEX SOLIDS!", next: "sprig1game5" }
      ]
    },
  
    sprig1game5: {
      text: "'Now, let’s add more solid objects to our map. Instead of just walls, we can add obstacles like benches, cars, or fountains. Each of these objects can be marked as solid using the same `setSolid` function.\n\nExample:\n\n```javascript\nsetSolid(2, 2, 2, 3); // Bench\nsetSolid(3, 3, 4, 4); // Fountain\n`\nThis marks specific positions on the map as solid, creating objects that players can’t pass through.'",
      choices: [
        { text: "HOW CAN I MAKE A SOLID AREA LARGER?", next: "sprig1game6" },
        { text: "I WANT TO CREATE A CHARACTER TO INTERACT WITH SOLIDS.", next: "sprig1game7" }
      ]
    },
  
    sprig1game6: {
      text: "'To make a solid area larger, simply extend the coordinates. For example:\n\n```javascript\nsetSolid(0, 0, 10, 1); // A longer horizontal wall\n`\nThis creates a larger solid area stretching from (0, 0) to (10, 1). The larger the range of coordinates, the larger the solid object.'",
      choices: [
        { text: "LET’S ADD A COMPLEX STRUCTURE.", next: "sprig1game8" },
        { text: "I WANT TO TEST SOLIDS WITH A CHARACTER.", next: "sprig1game7" }
      ]
    },
  
    sprig1game7: {
      text: "'Now that we’ve created some solid objects, let’s create a character that interacts with them. We can use `setEntity` to place a character on the map and use controls to make sure they can’t walk through solids.\n\nExample:\n\n```javascript\nsetEntity({x: 1, y: 1, sprite: 'player.png'}); // Places a player at (1, 1)\n`\nIf the player tries to walk into a solid object, the game will prevent them from moving.'",
      choices: [
        { text: "LET’S MAKE THE PLAYER MOVE!", next: "sprig2game1" },
        { text: "LET'S ADD MORE INTERACTIVE SOLID OBJECTS.", next: "sprig2game2" }
      ]
    },
  
    sprig1game8: {
      text: "'Let’s make things more interesting by adding larger solid structures. Perhaps a building with multiple floors? You can use `setSolid` to mark walls in a building layout or create larger, more complex structures for players to navigate around.'\n\nExample:\n\n```javascript\nsetSolid(0, 0, 10, 10); // Large building wall\n`\nThis will create a large building or structure on the map.'",
      choices: [
        { text: "CREATE A DYNAMIC WORLD WITH MOVABLE OBJECTS.", next: "sprig2game1" },
        { text: "LET'S TRY CREATING A LARGER MAP.", next: "sprig2game2" }
      ]
    }
,
    sprig1game1: {
      text: "'Ah, you’ve made it to NeoGrid City’s industrial district. Here, developers like you can set pushable objects—things the player can move around. Pushables are useful for creating interactive puzzles, challenges, or just adding a touch of realism to your game world.'",
      choices: [
        { text: "LET’S MAKE A PUSHABLE BOX!", next: "sprig1game2" },
        { text: "WHAT ARE PUSHABLES?", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'In Sprig, setting an object as pushable is as easy as calling `setPushable` on it. Let’s start by creating a simple pushable box. Here's how you do it:\n\n```javascript\nsetPushable(2, 2, 1, 1); // Creates a pushable box at (2, 2)\n`\nThis will create a box that players can push around the map. Give it a try in your game!'",
      choices: [
        { text: "WHAT DOES `setPushable` DO?", next: "sprig1game4" },
        { text: "LET’S MAKE THE BOX MOVABLE!", next: "sprig1game5" }
      ]
    },
  
    sprig1game3: {
      text: "'Pushables are objects that the player can interact with by pushing them. You can use `setPushable` to make any object movable by the player. These are useful for making objects that players need to move to solve puzzles or navigate through areas.'",
      choices: [
        { text: "SHOW ME HOW TO CODE IT.", next: "sprig1game2" }
      ]
    },
  
    sprig1game4: {
      text: "'The function `setPushable(x, y, width, height)` marks an object as pushable. For example, `setPushable(2, 2, 1, 1)` creates a pushable box at coordinates (2, 2) with a width and height of 1 unit. Once an object is pushable, players can push it in any direction as long as there’s space.'",
      choices: [
        { text: "LET’S MOVE THE PUSHABLE BOX!", next: "sprig1game5" }
      ]
    },
  
    sprig1game5: {
      text: "'To make the box movable, you need to set up controls that allow the player to push it. You can use simple controls like arrow keys or WASD to move the box around. Here's how you can add movement to the pushable box:\n\n```javascript\nif (keyIsDown(LEFT_ARROW)) {\n  movePushable(2, 2, -1, 0); // Moves the box left\n}\nif (keyIsDown(RIGHT_ARROW)) {\n  movePushable(2, 2, 1, 0); // Moves the box right\n}\n`\nNow, the player can push the box left and right using the arrow keys.'",
      choices: [
        { text: "CAN I PUSH THE BOX UP OR DOWN?", next: "sprig1game6" },
        { text: "LET’S ADD A PUSHABLE BUTTON!", next: "sprig1game7" }
      ]
    },
  
    sprig1game6: {
      text: "'Yes, you can! To make the box move up or down, simply modify the `movePushable` function. For example:\n\n```javascript\nif (keyIsDown(UP_ARROW)) {\n  movePushable(2, 2, 0, -1); // Moves the box up\n}\nif (keyIsDown(DOWN_ARROW)) {\n  movePushable(2, 2, 0, 1); // Moves the box down\n}\n`\nNow the player can push the box in all four directions.'",
      choices: [
        { text: "LET’S ADD A PUSHABLE DOOR!", next: "sprig1game8" },
        { text: "LET’S CREATE A COMPLEX MOVEMENT SYSTEM.", next: "sprig2game1" }
      ]
    },
  
    sprig1game7: {
      text: "'Let’s take things a step further and add a pushable button. Imagine that pushing the button opens a door or activates a platform. You can set up a pushable button just like you did with the box:\n\n```javascript\nsetPushable(3, 3, 1, 1); // Places a pushable button at (3, 3)\n`\nNow, the player can push the button in the game.'",
      choices: [
        { text: "WHAT DOES THE BUTTON DO?", next: "sprig1game8" },
        { text: "LET’S ADD A PUSHABLE PLATFORM.", next: "sprig2game2" }
      ]
    },
  
    sprig1game8: {
      text: "'Now that the button is pushable, you can create an action for it when pushed, such as opening a door. You could check if the button is pushed, then trigger a door animation. Here’s an example of how to trigger a door opening when the button is pushed:\n\n```javascript\nif (buttonPushed(3, 3)) {\n  openDoor(); // Opens the door when the button is pushed\n}\n`\nNow your player can push the button to open a door or activate another object in the game.'",
      choices: [
        { text: "CREATE A PUSHABLE OBJECT WITH ANIMATIONS.", next: "sprig2game1" },
        { text: "LET’S ADD MORE PUSHABLE OBJECTS.", next: "sprig2game2" }
      ]
    },
  
    sprig2game1: {
      text: "'To add animations to your pushable objects, you can use the `setAnimation` function. This allows you to animate the object when it’s pushed, adding a more immersive experience. For example, you could animate the box to shrink when it’s pushed, or make it bounce slightly.\n\nExample:\n\n```javascript\nsetAnimation(2, 2, 'shrink', 1); // Shrinks the box when pushed\n`\nThis creates a dynamic pushable experience.'",
      choices: [
        { text: "LET’S CREATE A COMBO PUZZLE WITH PUSHABLES.", next: "sprig2game3" },
        { text: "I WANT TO CREATE MORE COMPLEX PUSHABLE OBJECTS.", next: "sprig2game4" }
      ]
    },
  
    sprig2game2: {
      text: "'Let’s continue adding pushable objects! For instance, you can create a pushable crate or a boulder that blocks the path, and the player needs to push it to clear the way. To do this, simply use `setPushable` again and place them strategically on the map.'",
      choices: [
        { text: "CREATE A PUSHABLE BLOCKING OBJECT.", next: "sprig2game4" },
        { text: "LET’S ADD MULTIPLE PUSHABLES IN A PUZZLE.", next: "sprig2game3" }
      ]
    },
  
    sprig2game3: {
      text: "'Let’s create a puzzle where the player needs to push a series of objects in the correct order to unlock a door. For example, you can create a sequence where the player needs to push a box onto a pressure plate to open a door, or move crates to create a path.'",
      choices: [
        { text: "CREATE THE PUZZLE!", next: "sprig2game5" }
      ]
    },
  
    sprig2game4: {
      text: "'To make pushable objects more interesting, you can make them interact with each other. For example, if a player pushes a box into a boulder, the boulder might roll away. You can set up these interactions by checking for collisions and applying forces when objects meet.'",
      choices: [
        { text: "LET’S ADD A PUSHABLE OBJECT COLLISION!", next: "sprig2game5" },
        { text: "CREATE A PUSHABLE WITH A UNIQUE EFFECT.", next: "sprig2game6" }
      ]
    },
  
    sprig2game5: {
      text: "'Now, let’s finish the puzzle by adding some finishing touches! For example, when the player pushes the last object to the correct spot, they can unlock a door or open a gate to the next level.'",
      choices: [
        { text: "LET’S TEST OUR PUSHABLE PUZZLE!", next: "sprig2game7" }
      ]
    },
  
    sprig2game6: {
      text: "'Creating pushable objects with unique effects can add depth to your game. For instance, you could make a pushable barrel explode when pushed, or a pushable crate release a surprise when moved. These effects can be triggered using the same `setPushable` method, but adding extra code for interactions and animations.'",
      choices: [
        { text: "LET’S ADD A SPECIAL PUSHABLE OBJECT.", next: "sprig2game7" }
      ]
    },
  
    sprig2game7: {
      text: "'Congratulations! You’ve learned how to create pushable objects and even how to make them interact with each other. Now you can make dynamic puzzles and interactive challenges in your game!'",
      choices: [
        { text: "CREATE A NEW LEVEL WITH PUSHABLE OBJECTS.", next: "sprig2game8" },
        { text: "LET’S GO BACK AND TWEAK THE CURRENT LEVEL.", next: "sprig1game1" }
      ]
    },
  
    sprig1game1: {
      text: "'Welcome to the Digital Streets of NeoGrid, developer! Here, you’ll learn how to capture and handle user input to make your game feel more interactive. We’ll focus on two key functions: `oninput` and `afterinput`. These will allow you to respond to player actions and create dynamic gameplay.'",
      choices: [
        { text: "WHAT IS `oninput`?", next: "sprig1game2" },
        { text: "LET’S START WITH `afterinput`!", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'The `oninput` function listens for any changes in the user input. For example, it could track when the player types something in a text field, or presses a key. Here’s an example of how to use `oninput` in Sprig to capture text input from the user:\n\n```javascript\nsetInput('playerName'); // Sets an input field for player’s name\noninput('playerName', (value) => {\n  console.log('User input:', value);\n});\n`\nThis will log the player’s name as they type.'",
      choices: [
        { text: "WHAT IF I WANT TO ACT AFTER THE INPUT?", next: "sprig1game3" },
        { text: "SHOW ME MORE EXAMPLES!", next: "sprig1game4" }
      ]
    },
  
    sprig1game3: {
      text: "'The `afterinput` function is used when you want to act after the player has completed their input. For example, after the user types in a name or selects an option, you can use `afterinput` to trigger an event, like starting the game or displaying a message. Here’s an example:\n\n```javascript\nsetInput('userChoice'); // Sets an input field for the user’s choice\nafterinput('userChoice', () => {\n  console.log('User has made a choice!');\n  startGame(); // Starts the game after user input\n});\n`\nThis waits for the player to finish their input and then runs a function once they’re done.'",
      choices: [
        { text: "SHOW ME HOW TO COMBINE `oninput` AND `afterinput`.", next: "sprig1game4" },
        { text: "LET’S ADD A USER INTERACTION TO START THE GAME.", next: "sprig1game5" }
      ]
    },
  
    sprig1game4: {
      text: "'You can combine `oninput` and `afterinput` to create a more dynamic user experience. For example, you could allow the player to type a name and then confirm it before starting the game. Here’s how you can do it:\n\n```javascript\nsetInput('playerName');\n\noninput('playerName', (value) => {\n  console.log('User is typing:', value);\n});\n\nafterinput('playerName', () => {\n  console.log('User has confirmed their name!');\n  startGame(); // Start the game after confirmation\n});\n`\nThis way, you can track both ongoing input and final input actions.'",
      choices: [
        { text: "LET’S CREATE A CHARACTER SELECT SCREEN.", next: "sprig1game6" },
        { text: "SHOW ME HOW TO CHANGE SCENE AFTER INPUT.", next: "sprig1game7" }
      ]
    },
  
    sprig1game5: {
      text: "'Let’s create an interactive prompt where the player inputs their name to start the game. You can use `oninput` to display a message as they type their name, and then use `afterinput` to proceed with the game once they’ve finished typing.'",
      choices: [
        { text: "CREATE THE NAME ENTRY SCREEN!", next: "sprig1game6" }
      ]
    },
  
    sprig1game6: {
      text: "'Here’s how to create the name entry screen:\n\n```javascript\nsetInput('playerName');\n\noninput('playerName', (value) => {\n  updateMessage('Hello, ' + value + '! Ready to start?'); // Updates message as user types\n});\n\nafterinput('playerName', () => {\n  console.log('User has entered their name!');\n  startGame(); // Starts the game after input\n});\n`\nThis will let the player see a message as they type their name. Once done, the game starts.'",
      choices: [
        { text: "HOW CAN I CHANGE SCENES AFTER INPUT?", next: "sprig1game7" },
        { text: "LET’S CREATE A SCENE WITH MULTIPLE CHOICES.", next: "sprig1game8" }
      ]
    },
  
    sprig1game7: {
      text: "'After the player provides their input, you may want to change the scene or the environment in your game. You can use the `setScene` function to switch to a different scene based on their input.\n\nExample:\n\n```javascript\nafterinput('playerName', () => {\n  setScene('gameWorld'); // Switches to the game scene\n});\n`\nThis will change the scene after the player has entered their name.'",
      choices: [
        { text: "CREATE A COMPLEX INPUT CHOICE SYSTEM.", next: "sprig1game8" },
        { text: "LET’S ADD SOUND AFTER INPUT.", next: "sprig2game1" }
      ]
    },
  
    sprig1game8: {
      text: "'Let’s add a scene where the player can choose between multiple options, and each choice leads to a different path in the game. You can use `oninput` to track the choice the player makes and `afterinput` to proceed accordingly.\n\nHere’s an example of a multiple-choice input system:\n\n```javascript\nsetInput('userChoice');\n\noninput('userChoice', (value) => {\n  console.log('User has selected: ' + value);\n});\n\nafterinput('userChoice', () => {\n  if (value === 'Option 1') {\n    goToOption1();\n  } else if (value === 'Option 2') {\n    goToOption2();\n  }\n});\n`\nNow you can handle multiple choices and send the player down different paths depending on their input.'",
      choices: [
        { text: "LET’S ADD A SOUND EFFECT AFTER INPUT.", next: "sprig2game1" }
      ]
    },
  
    sprig2game1: {
      text: "'You can add sound effects that play after user input by combining `afterinput` with sound functions. For instance, you could play a sound when the player submits their choice or when they type something.\n\nHere’s how you could add sound after input:\n\n```javascript\nafterinput('playerChoice', () => {\n  playSound('buttonClick'); // Plays a sound after the player selects an option\n});\n`\nThis enhances the feedback for the user after input.'",
      choices: [
        { text: "CREATE A GAME WITH SOUND FEEDBACK.", next: "sprig2game2" },
        { text: "SHOW ME HOW TO CHANGE INPUT TYPES.", next: "sprig2game3" }
      ]
    },
  
    sprig2game2: {
      text: "'Let’s add sound feedback to our interactive choice system. For instance, when the player selects a choice, a button click sound can play to confirm their input.\n\nExample:\n\n```javascript\nafterinput('userChoice', () => {\n  playSound('clickSound'); // Plays sound after choice\n  proceedToNextStage(); // Continues to next stage after input\n});\n`\nThis will add audio feedback to the choices the player makes.'",
      choices: [
        { text: "LET’S MAKE THE INPUT MORE INTERESTING.", next: "sprig2game3" },
        { text: "CREATE A CUSTOM SOUND ON INPUT.", next: "sprig2game4" }
      ]
    },
  
    sprig2game3: {
      text: "'You can create different types of inputs based on the needs of your game. For example, use text inputs for name entry, but radio buttons or drop-downs for choices. To change the input type, you can simply use `setInputType`:\n\n```javascript\nsetInputType('playerChoice', 'radio'); // Makes the input a radio button\n`\nThis allows you to customize how the player interacts with the input fields.'",
      choices: [
        { text: "CREATE A RADIO BUTTON CHOICE SYSTEM.", next: "sprig2game4" },
        { text: "LET’S ADD A SLIDER INPUT.", next: "sprig2game5" }
      ]
    },
  
    sprig2game4: {
      text: "'With radio buttons, you can create a set of options for the player to choose from. For example, if you want the player to select a difficulty level, you could use radio buttons to display the options.'",
      choices: [
        { text: "LET’S ADD A DIFFICULTY SELECTION!", next: "sprig2game5" },
        { text: "LET’S MAKE THE INPUT FIELD LOOK NICE.", next: "sprig2game6" }
      ]
    },
  
    sprig2game5: {
      text: "'Sliders allow players to choose a value in a range, like adjusting volume or brightness. You can create a slider with `setSlider` like this:\n\n```javascript\nsetSlider('volume', 0, 100); // Creates a slider for volume adjustment\n`\nThis gives the player a more interactive way to input values.'",
      choices: [
        { text: "CREATE A VOLUME CONTROL SLIDER.", next: "sprig2game6" }
      ]
    },
  
    sprig2game6: {
      text: "'By now, you’ve learned how to handle user input with `oninput` and `afterinput`, and you’ve explored various ways to make your game interactive and dynamic. The next step is to combine these techniques with other features like animations, events, and gameplay logic to create an even more engaging experience for the player.'",
      choices: [
        { text: "BUILD A COMPLEX INTERACTIVE LEVEL.", next: "sprig2game7" }
      ]
    },
  
    
  sprig2game7: {
    text: "'Congratulations! You’ve learned how to create pushable objects and even how to make them interact with each other. Now you can make dynamic puzzles and interactive challenges in your game!'",
    choices: [
      { text: "CREATE A NEW LEVEL WITH PUSHABLE OBJECTS.", next: "sprig2game8" },
      { text: "LET’S GO BACK AND TWEAK THE CURRENT LEVEL.", next: "sprig1game1" }
    ]
  },
    sprig1game1: {
      text: "'Welcome to the Digital Streets of NeoGrid, developer! Here, you’ll learn how to capture and handle user input to make your game feel more interactive. We’ll focus on two key functions: `oninput` and `afterinput`. These will allow you to respond to player actions and create dynamic gameplay.'",
      choices: [
        { text: "WHAT IS `oninput`?", next: "sprig1game2" },
        { text: "LET’S START WITH `afterinput`!", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'The `oninput` function listens for any changes in the user input. For example, it could track when the player types something in a text field, or presses a key. Here’s an example of how to use `oninput` in Sprig to capture text input from the user:\n\n```javascript\nsetInput('playerName'); // Sets an input field for player’s name\noninput('playerName', (value) => {\n  console.log('User input:', value);\n});\n`\nThis will log the player’s name as they type.'",
      choices: [
        { text: "WHAT IF I WANT TO ACT AFTER THE INPUT?", next: "sprig1game3" },
        { text: "SHOW ME MORE EXAMPLES!", next: "sprig1game4" }
      ]
    },
  
    sprig1game3: {
      text: "'The `afterinput` function is used when you want to act after the player has completed their input. For example, after the user types in a name or selects an option, you can use `afterinput` to trigger an event, like starting the game or displaying a message. Here’s an example:\n\n```javascript\nsetInput('userChoice'); // Sets an input field for the user’s choice\nafterinput('userChoice', () => {\n  console.log('User has made a choice!');\n  startGame(); // Starts the game after user input\n});\n`\nThis waits for the player to finish their input and then runs a function once they’re done.'",
      choices: [
        { text: "SHOW ME HOW TO COMBINE `oninput` AND `afterinput`.", next: "sprig1game4" },
        { text: "LET’S ADD A USER INTERACTION TO START THE GAME.", next: "sprig1game5" }
      ]
    },
  
    sprig1game4: {
      text: "'You can combine `oninput` and `afterinput` to create a more dynamic user experience. For example, you could allow the player to type a name and then confirm it before starting the game. Here’s how you can do it:\n\n```javascript\nsetInput('playerName');\n\noninput('playerName', (value) => {\n  console.log('User is typing:', value);\n});\n\nafterinput('playerName', () => {\n  console.log('User has confirmed their name!');\n  startGame(); // Start the game after confirmation\n});\n`\nThis way, you can track both ongoing input and final input actions.'",
      choices: [
        { text: "LET’S CREATE A CHARACTER SELECT SCREEN.", next: "sprig1game6" },
        { text: "SHOW ME HOW TO CHANGE SCENE AFTER INPUT.", next: "sprig1game7" }
      ]
    },
  
    sprig1game5: {
      text: "'Let’s create an interactive prompt where the player inputs their name to start the game. You can use `oninput` to display a message as they type their name, and then use `afterinput` to proceed with the game once they’ve finished typing.'",
      choices: [
        { text: "CREATE THE NAME ENTRY SCREEN!", next: "sprig1game6" }
      ]
    },
  
    sprig1game6: {
      text: "'Here’s how to create the name entry screen:\n\n```javascript\nsetInput('playerName');\n\noninput('playerName', (value) => {\n  updateMessage('Hello, ' + value + '! Ready to start?'); // Updates message as user types\n});\n\nafterinput('playerName', () => {\n  console.log('User has entered their name!');\n  startGame(); // Starts the game after input\n});\n`\nThis will let the player see a message as they type their name. Once done, the game starts.'",
      choices: [
        { text: "HOW CAN I CHANGE SCENES AFTER INPUT?", next: "sprig1game7" },
        { text: "LET’S CREATE A SCENE WITH MULTIPLE CHOICES.", next: "sprig1game8" }
      ]
    },
  
    sprig1game7: {
      text: "'After the player provides their input, you may want to change the scene or the environment in your game. You can use the `setScene` function to switch to a different scene based on their input.\n\nExample:\n\n```javascript\nafterinput('playerName', () => {\n  setScene('gameWorld'); // Switches to the game scene\n});\n`\nThis will change the scene after the player has entered their name.'",
      choices: [
        { text: "CREATE A COMPLEX INPUT CHOICE SYSTEM.", next: "sprig1game8" },
        { text: "LET’S ADD SOUND AFTER INPUT.", next: "sprig2game1" }
      ]
    },
  
    sprig1game8: {
      text: "'Let’s add a scene where the player can choose between multiple options, and each choice leads to a different path in the game. You can use `oninput` to track the choice the player makes and `afterinput` to proceed accordingly.\n\nHere’s an example of a multiple-choice input system:\n\n```javascript\nsetInput('userChoice');\n\noninput('userChoice', (value) => {\n  console.log('User has selected: ' + value);\n});\n\nafterinput('userChoice', () => {\n  if (value === 'Option 1') {\n    goToOption1();\n  } else if (value === 'Option 2') {\n    goToOption2();\n  }\n});\n`\nNow you can handle multiple choices and send the player down different paths depending on their input.'",
      choices: [
        { text: "LET’S ADD A SOUND EFFECT AFTER INPUT.", next: "sprig2game1" }
      ]
    },
  
    sprig2game1: {
      text: "'You can add sound effects that play after user input by combining `afterinput` with sound functions. For instance, you could play a sound when the player submits their choice or when they type something.\n\nHere’s how you could add sound after input:\n\n```javascript\nafterinput('playerChoice', () => {\n  playSound('buttonClick'); // Plays a sound after the player selects an option\n});\n`\nThis enhances the feedback for the user after input.'",
      choices: [
        { text: "CREATE A GAME WITH SOUND FEEDBACK.", next: "sprig2game2" },
        { text: "SHOW ME HOW TO CHANGE INPUT TYPES.", next: "sprig2game3" }
      ]
    },
  
    sprig2game2: {
      text: "'Let’s add sound feedback to our interactive choice system. For instance, when the player selects a choice, a button click sound can play to confirm their input.\n\nExample:\n\n```javascript\nafterinput('userChoice', () => {\n  playSound('clickSound'); // Plays sound after choice\n  proceedToNextStage(); // Continues to next stage after input\n});\n`\nThis will add audio feedback to the choices the player makes.'",
      choices: [
        { text: "LET’S MAKE THE INPUT MORE INTERESTING.", next: "sprig2game3" },
        { text: "CREATE A CUSTOM SOUND ON INPUT.", next: "sprig2game4" }
      ]
    },
  
    sprig2game3: {
      text: "'You can create different types of inputs based on the needs of your game. For example, use text inputs for name entry, but radio buttons or drop-downs for choices. To change the input type, you can simply use `setInputType`:\n\n```javascript\nsetInputType('playerChoice', 'radio'); // Makes the input a radio button\n`\nThis allows you to customize how the player interacts with the input fields.'",
      choices: [
        { text: "CREATE A RADIO BUTTON CHOICE SYSTEM.", next: "sprig2game4" },
        { text: "LET’S ADD A SLIDER INPUT.", next: "sprig2game5" }
      ]
    },
  
    sprig2game4: {
      text: "'With radio buttons, you can create a set of options for the player to choose from. For example, if you want the player to select a difficulty level, you could use radio buttons to display the options.'",
      choices: [
        { text: "LET’S ADD A DIFFICULTY SELECTION!", next: "sprig2game5" },
        { text: "LET’S MAKE THE INPUT FIELD LOOK NICE.", next: "sprig2game6" }
      ]
    },
  
    sprig2game5: {
      text: "'Sliders allow players to choose a value in a range, like adjusting volume or brightness. You can create a slider with `setSlider` like this:\n\n```javascript\nsetSlider('volume', 0, 100); // Creates a slider for volume adjustment\n`\nThis gives the player a more interactive way to input values.'",
      choices: [
        { text: "CREATE A VOLUME CONTROL SLIDER.", next: "sprig2game6" }
      ]
    },
  
    sprig2game6: {
      text: "'By now, you’ve learned how to handle user input with `oninput` and `afterinput`, and you’ve explored various ways to make your game interactive and dynamic. The next step is to combine these techniques with other features like animations, events, and gameplay logic to create an even more engaging experience for the player.'",
      choices: [
        { text: "BUILD A COMPLEX INTERACTIVE LEVEL.", next: "sprig2game7" }
      ]
    },
  
    sprig2game7: {
      text: "'Congratulations! You now know how to handle user input in Sprig, and you’re ready to build even more complex and dynamic game mechanics. Keep experimenting with these tools to create engaging experiences for your players!'",
      choices: [
        { text: "START A NEW GAME!", next: "sprig1game1" }
      ]
    }
  };
  const sprigTilesTutorial = {
    sprig1game1: {
      text: "'Welcome to the bustling NeoGrid city, young creator. Here, you will learn how to use **tiles** to build your virtual world. Tiles are the building blocks of your environment, and using them correctly will bring your game to life. Let’s start with how to get tiles from Sprig and place them into your scene.'",
      choices: [
        { text: "HOW DO I GET TILES?", next: "sprig1game2" },
        { text: "LET’S START WITH PLACING TILES.", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'Getting tiles in Sprig is simple. You use the `getTiles()` function, which will allow you to retrieve specific tiles based on your needs. These tiles can be customized and placed in the world. Here's an example of how you can retrieve tiles from the grid:\n\n```javascript\nlet myTile = getTiles('grass'); // Gets a tile of type 'grass'\n`\nThis retrieves a 'grass' tile that you can place in your game world.'",
      choices: [
        { text: "HOW DO I PLACE A TILE IN MY SCENE?", next: "sprig1game3" },
        { text: "SHOW ME MORE EXAMPLES OF TILE TYPES.", next: "sprig1game4" }
      ]
    },
  
    sprig1game3: {
      text: "'Once you’ve retrieved your tile, you can place it into the world using the `setTile()` function. This is how you can put your tile into the scene. Here’s how to place a grass tile at a specific coordinate:\n\n```javascript\nsetTile(myTile, 5, 10); // Places the 'grass' tile at coordinates (5, 10)\n`\nYou can change the coordinates to place tiles anywhere you like in your world. Tiles are key to building the landscape!'",
      choices: [
        { text: "CAN I PLACE MULTIPLE TILES AT ONCE?", next: "sprig1game4" },
        { text: "SHOW ME HOW TO CREATE TILE LAYERS.", next: "sprig1game5" }
      ]
    },
  
    sprig1game4: {
      text: "'Absolutely! You can place multiple tiles at once using loops. For example, if you want to create a grassy path, you can place a series of tiles using a loop:\n\n```javascript\nfor (let x = 0; x < 10; x++) {\n  setTile(myTile, x, 5); // Places grass tiles in a horizontal line\n}\n`\nThis will create a line of grass tiles from coordinates (0, 5) to (9, 5). Loops give you the flexibility to generate large areas quickly!'",
      choices: [
        { text: "LET’S CREATE A TILE LAYER WITH MULTIPLE TILE TYPES.", next: "sprig1game5" },
        { text: "HOW DO I CHANGE TILE TYPES?", next: "sprig1game6" }
      ]
    },
  
    sprig1game5: {
      text: "'You can also create tile layers by stacking different types of tiles on top of each other. For example, you can create a layered effect by placing a ground tile first and then placing other tiles like trees or buildings on top:\n\n```javascript\nlet groundTile = getTiles('dirt');\nlet treeTile = getTiles('tree');\n\nsetTile(groundTile, 0, 0); // Places dirt at (0, 0)\nsetTile(treeTile, 0, 1); // Places a tree on top of dirt at (0, 1)\n`\nThis allows for the creation of complex terrains and multi-layered worlds.'",
      choices: [
        { text: "CAN I MODIFY TILE PROPERTIES?", next: "sprig1game6" },
        { text: "SHOW ME HOW TO REMOVE TILES.", next: "sprig1game7" }
      ]
    },
  
    sprig1game6: {
      text: "'Yes, you can modify tile properties like size, rotation, and color. This allows you to customize the appearance of your tiles. Here’s how you can modify a tile’s size and color:\n\n```javascript\nlet tile = getTiles('grass');\nsetTile(tile, 5, 5);\ntile.setSize(2); // Increases the tile size\n tile.setColor('green'); // Changes the tile’s color to green\n`\nThis gives you the power to make tiles fit your style perfectly.'",
      choices: [
        { text: "LET’S CHANGE TILE COLORS.", next: "sprig1game7" },
        { text: "HOW DO I REMOVE TILES?", next: "sprig1game8" }
      ]
    },
  
    sprig1game7: {
      text: "'To remove a tile, you can use the `removeTile()` function. For example, if you want to clear a tile at a certain coordinate, you can do it like this:\n\n```javascript\nremoveTile(5, 5); // Removes tile at coordinates (5, 5)\n`\nThis will remove the tile at the specified position, giving you more control over your environment.'",
      choices: [
        { text: "SHOW ME HOW TO CREATE TILE MAPS.", next: "sprig1game8" },
        { text: "LET’S REMOVE MULTIPLE TILES AT ONCE.", next: "sprig1game9" }
      ]
    },
  
    sprig1game8: {
      text: "'You can use tile maps to store large groups of tiles. A tile map is an array of tile coordinates and their associated types. For example, if you want to create a simple map of grass and dirt tiles, you can create a tile map like this:\n\n```javascript\nlet tileMap = [\n  ['grass', 'grass', 'grass'],\n  ['dirt', 'dirt', 'grass'],\n  ['grass', 'grass', 'grass']\n];\n\nfor (let x = 0; x < tileMap.length; x++) {\n  for (let y = 0; y < tileMap[x].length; y++) {\n    let tile = getTiles(tileMap[x][y]);\n    setTile(tile, x, y); // Places tiles according to map\n  }\n}\n`\nThis will generate a grid of tiles based on the provided map array.'",
      choices: [
        { text: "CREATE A COMPLEX TILE MAP.", next: "sprig1game9" },
        { text: "HOW DO I CREATE A TILE COLLIDER?", next: "sprig1game10" }
      ]
    },
  
    sprig1game9: {
      text: "'Now, let’s make a more complex map by combining multiple tile types and layers. You can layer tiles, create roads, forests, and even cities by simply using different tile types in your map arrays. Here's a more complex example:\n\n```javascript\nlet complexMap = [\n  ['grass', 'dirt', 'water'],\n  ['tree', 'grass', 'dirt'],\n  ['road', 'tree', 'grass']\n];\n\nfor (let x = 0; x < complexMap.length; x++) {\n  for (let y = 0; y < complexMap[x].length; y++) {\n    let tile = getTiles(complexMap[x][y]);\n    setTile(tile, x, y); // Places tiles according to the complex map\n  }\n}\n`\nThis allows you to create more detailed and intricate environments by simply combining different tiles.'",
      choices: [
        { text: "CREATE A COLLIDER FOR THESE TILES.", next: "sprig1game10" },
        { text: "LET’S ADD INTERACTIONS WITH TILES.", next: "sprig1game11" }
      ]
    },
  
    sprig1game10: {
      text: "'To create a **tile collider**, you can use the `setCollider()` function. This makes the tile interactable with the player or objects. Here's how to set a collider for a tile:\n\n```javascript\nlet grassTile = getTiles('grass');\nsetTile(grassTile, 3, 4);\nsetCollider(grassTile, 'solid'); // Makes grass tile solid\n`\nNow, the player will collide with the grass tile like they would with any other solid object.'",
      choices: [
        { text: "LET’S ADD INTERACTIVE TILE EVENTS.", next: "sprig1game11" },
        { text: "CREATE A TILE-BASED PUZZLE GAME.", next: "sprig1game12" }
      ]
    },
  
    sprig1game11: {
      text: "'You can add events to your tiles so that when the player interacts with them, something happens. For example, let’s create a tile that triggers a message when clicked:\n\n```javascript\nlet messageTile = getTiles('message');\nsetTile(messageTile, 2, 3);\nsetCollider(messageTile, 'interactive'); // Makes it interactive\nmessageTile.on('click', () => {\n  console.log('You have clicked the message tile!');\n});\n`\nNow, the player will get feedback when they click the tile.'",
      choices: [
        { text: "LET’S CREATE A TILE-BASED PUZZLE GAME.", next: "sprig1game12" }
      ]
    },
  
    sprig1game12: {
      text: "'Now that you’ve mastered getting tiles, placing them, modifying them, and making them interactive, it's time to create your own tile-based puzzle game! You can use all these tools to create challenging puzzles and interactive levels.'",
      choices: [
        { text: "START CREATING YOUR GAME!", next: "sprig1game1" }
      ]
    }
  };
  const sprigSpritesAndTilesTutorial = {
    sprig1game1: {
      text: "'Welcome to Sprig, where the world of sprites and tiles await your creative touch. Here, we’ll dive into the magical combination of sprites and tiles to bring your world to life. Get ready to explore how to manage tiles within sprites and set them in your game environment.'",
      choices: [
        { text: "WHAT ARE SPRITES AND TILES?", next: "sprig1game2" },
        { text: "LET’S START WITH TILES FIRST.", next: "sprig1game3" }
      ]
    },
  
    sprig1game2: {
      text: "'In Sprig, **sprites** are objects that represent 2D images or animations. **Tiles**, on the other hand, are grid-based elements that form the foundation of your environment. Together, sprites and tiles allow you to create rich, dynamic worlds. Let’s first see how to create a simple sprite and place it over a tile.'",
      choices: [
        { text: "SHOW ME HOW TO CREATE A SIMPLE SPRITE.", next: "sprig1game4" },
        { text: "LET’S GET INTO TILES AND MAPS FIRST.", next: "sprig1game5" }
      ]
    },
  
    sprig1game3: {
      text: "'Tiles are used to construct the environment, like a backdrop or ground, while sprites are placed on top of tiles as interactive characters or objects. For example, let’s add a tile as the ground and then place a sprite on top of it to create a character standing on the ground.'",
      choices: [
        { text: "LET’S CREATE A TILE AND SPRITE.", next: "sprig1game4" },
        { text: "WHAT IF I WANT TO MOVE THE SPRITE?", next: "sprig1game6" }
      ]
    },
  
    sprig1game4: {
      text: "'Here’s how you can create a **tile** and place a **sprite** on it:\n\n```javascript\nlet groundTile = getTiles('dirt');\nsetTile(groundTile, 0, 0); // Places a dirt tile at (0, 0)\n\nlet characterSprite = getSprite('character.png');\nsetSprite(characterSprite, 0, 0); // Places the character sprite at (0, 0)\n`\nThis creates a basic environment with a dirt tile as the ground and a character sprite on top of it.'",
      choices: [
        { text: "LET’S MOVE THE SPRITE AROUND.", next: "sprig1game6" },
        { text: "SHOW ME HOW TO STACK SPRITES AND TILES.", next: "sprig1game7" }
      ]
    },
  
    sprig1game5: {
      text: "'Now, let’s start with **tiles**. To create a map, you can define a grid of tiles and place them in your environment. For example, let’s create a simple map with grass and dirt tiles:\n\n```javascript\nlet tileMap = [\n  ['grass', 'grass', 'grass'],\n  ['dirt', 'dirt', 'grass'],\n  ['grass', 'grass', 'grass']\n];\n\nfor (let x = 0; x < tileMap.length; x++) {\n  for (let y = 0; y < tileMap[x].length; y++) {\n    let tile = getTiles(tileMap[x][y]);\n    setTile(tile, x, y); // Places tiles in the grid\n  }\n}\n`\nThis creates a basic map of grass and dirt tiles.'",
      choices: [
        { text: "LET’S ADD SPRITES TO THIS MAP.", next: "sprig1game6" },
        { text: "CAN I ADD MULTIPLE SPRITES?", next: "sprig1game7" }
      ]
    },
  
    sprig1game6: {
      text: "'To place a **sprite** on this map, we can use the same grid layout and add a sprite at the desired location. For example, if you want to place a character sprite on a dirt tile at (1, 1), you can do this:\n\n```javascript\nlet characterSprite = getSprite('character.png');\nsetSprite(characterSprite, 1, 1); // Places character sprite at (1, 1)\n`\nThis will place the sprite on top of the dirt tile.'",
      choices: [
        { text: "SHOW ME HOW TO MOVE SPRITES OVER TILES.", next: "sprig1game8" },
        { text: "CAN I PLACE MULTIPLE SPRITES AT ONCE?", next: "sprig1game9" }
      ]
    },
  
    sprig1game7: {
      text: "'You can stack **sprites** and **tiles** together by adding multiple sprites over different tiles in the same grid. Here’s how you can add multiple sprites to different locations on your tile grid:\n\n```javascript\nlet sprite1 = getSprite('character1.png');\nsetSprite(sprite1, 0, 0); // Places character1 sprite at (0, 0)\n\nlet sprite2 = getSprite('character2.png');\nsetSprite(sprite2, 1, 1); // Places character2 sprite at (1, 1)\n`\nNow you have two sprites placed over tiles at different coordinates.'",
      choices: [
        { text: "SHOW ME HOW TO MOVE SPRITES OVER THE MAP.", next: "sprig1game8" },
        { text: "CAN I MODIFY THE SPRITE’S SIZE?", next: "sprig1game10" }
      ]
    },
  
    sprig1game8: {
      text: "'You can move **sprites** around by updating their coordinates. For example, if you want to move a sprite from (0, 0) to (2, 2), you can update its position like this:\n\n```javascript\nmoveSprite(sprite1, 2, 2); // Moves sprite1 to (2, 2)\n`\nThis allows you to control the movement of sprites on the grid and create interactive scenarios.'",
      choices: [
        { text: "CAN I ANIMATE THE SPRITES?", next: "sprig1game9" },
        { text: "LET’S ADD MULTIPLE MOVEMENTS FOR SPRITES.", next: "sprig1game10" }
      ]
    },
  
    sprig1game9: {
      text: "'Yes, you can animate sprites! You can use a function like `animateSprite()` to create smooth animations for your sprites. Here’s how to animate a sprite moving from one tile to another over time:\n\n```javascript\nanimateSprite(sprite1, {x: 5, y: 5}, 1000); // Moves sprite1 to (5, 5) over 1 second\n`\nThis will make the sprite smoothly move from its current position to the target position in the specified duration.'",
      choices: [
        { text: "SHOW ME HOW TO ADD EVENTS WITH SPRITES.", next: "sprig1game10" },
        { text: "LET’S ADD MORE ANIMATED SPRITES.", next: "sprig1game11" }
      ]
    },
  
    sprig1game10: {
      text: "'You can add **events** to sprites to trigger interactions with the player. For example, if you want a sprite to change its appearance when clicked, you can do this:\n\n```javascript\nsprite1.on('click', () => {\n  sprite1.setTexture('newTexture.png'); // Changes sprite texture when clicked\n});\n`\nThis adds interactivity to your sprites, creating a more engaging experience.'",
      choices: [
        { text: "LET’S CREATE A TILE-BASED INTERACTION.", next: "sprig1game11" },
        { text: "SHOW ME HOW TO CREATE A SPRITE COLLIDER.", next: "sprig1game12" }
      ]
    },
  
    sprig1game11: {
      text: "'You can now create more interactive worlds by combining **sprites** and **tiles** with dynamic events. Imagine a tile-based game where sprites interact with tiles, triggering changes in the environment or the player’s progress.'",
      choices: [
        { text: "CREATE A TILE-BASED PUZZLE GAME.", next: "sprig1game12" },
        { text: "LET’S MAKE A SPRITE-BASED GAME.", next: "sprig1game13" }
      ]
    },
  
    sprig1game12: {
      text: "'You’ve learned how to work with **sprites** and **tiles** in Sprig, and you’re ready to start building your own dynamic and interactive worlds. Combining these elements will allow you to create exciting, engaging environments. Ready to start your game creation journey?'",
      choices: [
        { text: "START CREATING YOUR GAME!", next: "sprig1game1" }
      ]
    }
  };
  const sprigSpriteFunctionsTutorial = {
    sprig1game1: {
      text: "'Ah, welcome young coder! I see you’ve come to explore the world of Sprig, where your imagination can come to life. Today, we’ll journey into the art of placing sprites, clearing tiles, and managing different tile types. These tools are essential for creating dynamic, interactive environments in your games. Let’s begin our adventure!'",
      choices: [
        { text: "LET'S START WITH ADDING SPRITES.", next: "sprig1game2" },
        { text: "HOW DO I CLEAR TILES?", next: "sprig1game4" }
      ]
    },
  
    sprig1game2: {
      text: "'Imagine you are building a game where characters roam freely across a cityscape. To bring these characters into your world, we’ll use the `addSprite()` function. This function allows you to place a sprite (an image or object) onto a specific tile in your game world.'\n\n'Let’s say we want to add a hero character to our world. The code would look something like this:\n\n```javascript\naddSprite('hero.png', 3, 4); // Adds the hero at position (3, 4)\n`\n'You’ve just placed a hero sprite at the coordinate (3, 4), and they’ll be visible in the game world. But you can add multiple sprites too! Imagine placing several characters or objects all over your city!'",
      choices: [
        { text: "LET'S ADD MORE SPRITES TO THE CITY.", next: "sprig1game3" },
        { text: "WHAT ABOUT CLEARNING TILES?", next: "sprig1game4" }
      ]
    },
  
    sprig1game3: {
      text: "'Adding more sprites to the world is simple. All you need to do is repeat the `addSprite()` function with different coordinates. Let’s add a couple more characters to our bustling city, one near the park and one in the alleyway. Here’s how we can do it:\n\n```javascript\naddSprite('hero.png', 1, 2); // Adds a hero in the park at (1, 2)\naddSprite('villain.png', 5, 6); // Adds a villain in the alley at (5, 6)\n`\n'Now, we have two characters in our world, creating an exciting dynamic environment. The park and the alley now have their own distinct characters! How about making things more interesting by clearing tiles and removing obstacles from the world?'",
      choices: [
        { text: "SHOW ME HOW TO CLEAR TILES.", next: "sprig1game4" },
        { text: "LET'S EXPLORE TILE TYPES.", next: "sprig1game5" }
      ]
    },
  
    sprig1game4: {
      text: "'In a game world, there are times when you need to clear obstacles or reset a tile. That’s where the `clearTile()` function comes into play. Imagine you’ve placed a tree on a tile, but later you want to remove it to open up a path for the player.'\n\n'You can clear that tile using this simple function:\n\n```javascript\nclearTile(2, 3); // Clears the tile at position (2, 3)\n`\n'Now, the tree is gone, and you’ve made room for something new, like a bridge or a path. The cleared tile can now be repopulated with new elements, giving you control over the environment!'",
      choices: [
        { text: "WHAT IF I WANT TO GET ALL TILE TYPES?", next: "sprig1game5" },
        { text: "CAN I REPLACE A CLEARED TILE?", next: "sprig1game6" }
      ]
    },
  
    sprig1game5: {
      text: "'Now, in any game, there are different kinds of tiles. Some tiles are grassy, others might be water, and some might be roads or buildings. Each of these tiles has a specific **type** that defines its nature. To interact with tiles based on their type, you’ll need to know which types are present in your world.'\n\n'With the `getAllTypes()` function, you can gather all the tile types currently used in your world. It’s as if you’re examining your map and finding out which materials fill the environment. Here’s how you can do that:\n\n```javascript\nlet allTypes = getAllTypes();\nconsole.log(allTypes); // Logs all types present in the environment\n`\n'After running this, you’ll get a list of all types currently in your game world. For example, you might see `'grass'`, `'water'`, or `'building'`. This gives you full visibility of the environment, allowing you to plan interactions more efficiently.'",
      choices: [
        { text: "WHAT IF I ONLY NEED THE FIRST TYPE?", next: "sprig1game6" },
        { text: "CAN I FILTER TILE TYPES?", next: "sprig1game7" }
      ]
    },
  
    sprig1game6: {
      text: "'Sometimes, you may only need to know the first type in your world. Perhaps you want to focus on the most important or dominant type to trigger an event, such as an enemy appearing when a certain type is found.'\n\n'In such cases, you can use the `getFirstType()` function to retrieve the first type encountered in your environment. It’s quick, direct, and perfect for situations when you need a quick check.'\n\n```javascript\nlet firstType = getFirstType();\nconsole.log(firstType); // Logs the first type in the environment\n`\n'This is particularly useful for checking the initial state of your game world or triggering actions when certain types are present.'",
      choices: [
        { text: "CAN I CHANGE TILE TYPES AFTER GETTING THEM?", next: "sprig1game7" },
        { text: "LET'S COMBINE ALL THESE FUNCTIONS.", next: "sprig1game8" }
      ]
    },
  
    sprig1game7: {
      text: "'Absolutely! You can dynamically change tile types in your game world to react to the player’s actions or to create challenges. For instance, if you want to change a grass tile into water when a player steps on it, you can do that using the `setType()` function.'\n\n```javascript\nsetType(3, 4, 'water'); // Sets the tile at (3, 4) to water\n`\n'With `setType()`, you have full control over the environment. You can create puzzles, obstacles, or even magical effects, all by changing types as your game progresses.'",
      choices: [
        { text: "LET'S BUILD A GAME WITH THESE FUNCTIONS.", next: "sprig1game8" },
        { text: "WHAT ABOUT EVENTS AND TILE TYPES?", next: "sprig1game9" }
      ]
    },
  
    sprig1game8: {
      text: "'Now that we’ve learned how to **add sprites**, **clear tiles**, **get all types**, and **change tile types**, let’s see how we can put it all together. Imagine you have a hero sprite and a villain sprite. The hero is supposed to collect items, and the villain chases the hero around the map. You could use the `addSprite()` function to place them, then dynamically change the environment using `setType()` as the hero steps on specific tiles.'\n\n'Here’s a quick example that combines all the functions we’ve learned so far:\n\n```javascript\n// Step 1: Add hero and villain sprites\naddSprite('hero.png', 1, 1);\naddSprite('villain.png', 5, 5);\n\n// Step 2: Clear a tile and make space for something new\nclearTile(2, 2);\n\n// Step 3: Get all types and check the environment\nlet allTypes = getAllTypes();\nconsole.log(allTypes);\n\n// Step 4: Change a tile type to water\nsetType(3, 3, 'water');\n`\n'In this scenario, the hero and villain are placed, a tile is cleared, and we change one of the tiles to water to make things more challenging. It’s a fun dynamic world where the player’s actions and the world’s state are tightly connected.'",
      choices: [
        { text: "START BUILDING YOUR GAME WORLD!", next: "sprig1game10" },
        { text: "EXPLORE MORE SPRIG FUNCTIONALITY.", next: "sprig1game11" }
      ]
    },
  
    sprig1game9: {
      text: "'Now, you can enhance your game even more by adding **events** to specific tile types. For instance, you can detect when a sprite collides with a tile type and trigger some action—like a puzzle being solved or a quest being completed.'\n\n```javascript\nhero.on('collide', (tile) => {\n  if (tile.type === 'water') {\n    console.log('The hero has encountered water!');\n  }\n});\n`\n'With event listeners, you can make your game more interactive and reactive, opening up a world of possibilities for gameplay and storytelling.'",
      choices: [
        { text: "LET'S ADD EVENTS TO OUR GAME.", next: "sprig1game10" },
        { text: "REVISIT THE FUNCTIONS.", next: "sprig1game8" }
      ]
    },
  
    sprig1game10: {
      text: "'It’s time to get creative! Using the knowledge you’ve gained, you can now build a full game where your sprite interacts with the environment, clears tiles, and reacts to the types of tiles around them. Combine sprites, tile clearing, type checking, and event-based interactions to create a rich and immersive game world.'",
      choices: [
        { text: "START BUILDING YOUR GAME NOW!", next: "sprig1game1" }
      ]
    },
  
    sprig1game11: {
      text: "'There’s always more to explore in the world of Sprig! Once you’re comfortable with these functions, consider adding animations to your sprites, creating complex tile types, or even introducing new behaviors for objects in your world. The possibilities are endless. Keep experimenting, and who knows what kind of world you’ll create next!'",
      choices: [
        { text: "LET’S KEEP EXPLORING ADVANCED FEATURES.", next: "sprig1game1" }
      ]
    }
  };
  const sprigStory = {
    sprig1game1: {
      text: "'Ah, welcome, traveler! You’ve ventured into the world of endless possibilities. In this digital realm, certain functions allow you to make things move endlessly, creating a seamless experience for your players. Today, we will learn how to use the power of the `infinite` and `loop` functions to add dynamic elements to your game. Let’s begin!'",
      choices: [
        { text: "WHAT IS THE `INFINITE` FUNCTION?", next: "sprig1game2" },
        { text: "I WANT TO LEARN ABOUT LOOPING FIRST.", next: "sprig1game5" }
      ]
    },
  
    sprig1game2: {
      text: "'The `infinite` function is like an unbroken chain—it can make certain elements or actions in your game repeat forever. Imagine a world where a character runs endlessly, or a background music plays non-stop. This function allows you to make those elements persist, keeping the world alive and constantly moving.'\n\n```javascript\ninfinite(() => {\n  // Your repeated action here\n  console.log('This will run forever!');\n});\n`\n'With this, the action inside the `infinite` function will continue to run until the game ends, without any interruption. It’s perfect for creating things like constant animations, continuous movement, or ongoing changes in the game world.'",
      choices: [
        { text: "SHOW ME HOW TO LOOP ELEMENTS INSTEAD.", next: "sprig1game5" },
        { text: "CAN I CONTROL THE SPEED OF AN INFINITE ACTION?", next: "sprig1game3" }
      ]
    },
  
    sprig1game3: {
      text: "'Yes, traveler, you can control how fast an action repeats using the `infinite` function. By combining it with a `delay` or adjusting the frequency of execution, you can make sure the action happens at a smooth pace. For example, you can make an object slowly move across the screen, repeating forever without overwhelming the player.'\n\n```javascript\ninfinite(() => {\n  moveObject(); // Repeats the movement\n}, 1000); // Repeats every 1000ms (1 second)\n`\n'Now your action is smoothly repeated at the interval you set, ensuring a consistent pace in the game.'",
      choices: [
        { text: "SHOW ME HOW TO LOOP ELEMENTS.", next: "sprig1game5" },
        { text: "I WANT TO APPLY INFINITE TO A MOVING OBJECT.", next: "sprig1game4" }
      ]
    },
  
    sprig1game4: {
      text: "'Let's apply the `infinite` function to move an object. In this example, we'll have a character run endlessly across the screen, repeating their movement at a steady pace:'\n\n```javascript\nlet x = 0;\n in infinite(() => {\n  x += 5;\n  character.setPosition(x, 0); // Moves the character to the right\n}, 50); // Updates every 50ms\n`\n'Now your character will run across the screen continuously, and you have complete control over their speed and direction.'",
      choices: [
        { text: "SHOW ME HOW TO LOOP ELEMENTS.", next: "sprig1game5" },
        { text: "LET’S PAUSE THE INFINITE ACTION.", next: "sprig1game6" }
      ]
    },
  
    sprig1game5: {
      text: "'The `loop` function is another essential tool in your arsenal, but it differs from `infinite` in that it’s more focused on creating repeating actions that are tied to specific events, like when a player interacts with an object or reaches a certain point in the game. Here’s an example of looping a sound effect every time the player interacts with something in the world:'\n\n```javascript\nloop(() => {\n  playSound('interaction-sound.mp3'); // Repeats the sound on each interaction\n}, playerInteract); // Runs when the player interacts\n`\n'Now every time the player interacts, the sound effect will play again. You can adjust how often or under what conditions the loop runs.'",
      choices: [
        { text: "CAN I CONTROL THE NUMBER OF LOOPS?", next: "sprig1game7" },
        { text: "WHAT IF I WANT TO CHANGE THE SOUND AFTER A FEW LOOPS?", next: "sprig1game8" }
      ]
    },
  
    sprig1game7: {
      text: "'Yes, you can control how many times a loop runs using conditions or timers. For example, if you want a sound effect to play only three times, you can track the number of loops and stop after the third one.'\n\n```javascript\nlet loopCount = 0;\nloop(() => {\n  playSound('interaction-sound.mp3');\n  loopCount++;\n  if (loopCount >= 3) {\n    stopLoop(); // Stops the loop after 3 repetitions\n  }\n}, playerInteract);\n`\n'Now, the sound will only play three times, and then the loop will stop. This gives you control over how long certain actions repeat.'",
      choices: [
        { text: "WHAT IF I WANT TO CHANGE THE SOUND AFTER A FEW LOOPS?", next: "sprig1game8" },
        { text: "I’M READY TO TRY THESE IN MY GAME!", next: "sprig1game9" }
      ]
    },
  
    sprig1game8: {
      text: "'If you want to change the sound after a certain number of loops, you can add some logic that swaps the sound effect each time it loops. Here’s an example of how you could change the sound after two loops:'\n\n```javascript\nlet loopCount = 0;\nlet sounds = ['sound1.mp3', 'sound2.mp3'];\nloop(() => {\n  playSound(sounds[loopCount % sounds.length]); // Cycles through the sounds\n  loopCount++;\n}, playerInteract);\n`\n'With this code, the sound will alternate between two different sound effects every time the player interacts, making the experience feel fresh and dynamic.'",
      choices: [
        { text: "I’M READY TO TRY THESE IN MY GAME!", next: "sprig1game9" },
        { text: "SHOW ME MORE LOOPING EXAMPLES.", next: "sprig1game10" }
      ]
    },
  
    sprig1game9: {
      text: "'Now, with the power of `infinite` and `loop`, you can create dynamic, continuous actions in your game world. Whether you’re using `infinite` for repetitive actions like moving objects or `loop` to trigger events based on user actions, these functions allow you to make your game feel alive. Take what you’ve learned and start adding loops and infinite actions to your own project!'",
      choices: [
        { text: "START BUILDING MY GAME NOW!", next: "sprig1game1" }
      ]
    },
  
    sprig1game10: {
      text: "'Let’s explore even more ways to use loops in your game. You can make your game world truly dynamic with multiple looping actions. Here are a few more examples:\n\n```javascript\n// Looping background animation\nloop(() => {\n  animateBackground(); // Continuously animates the background\n}, 100);\n\n// Looping a character's movement in a specific path\nloop(() => {\n  character.moveAlongPath(); // Continuously moves the character along a path\n}, 200);\n`\n'By combining multiple loops, you can create a game that feels immersive, where everything is always moving and interacting. Experiment with these ideas in your game!'",
      choices: [
        { text: "I’M READY TO TRY THESE IN MY GAME!", next: "sprig1game9" }
      ]
    }
  };
  