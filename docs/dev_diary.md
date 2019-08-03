# Developer diary for Funky Bunny (aka. Battle Ship Stretch goal)

## Quick Links

[The project](#the-project)

- [Why Funky Bunny?](#why-funky-bunny)

- [Project Requirements](#project-requirements)

  - [Functional requirements](#functional-requirements)

  - [Display requirements](#display-requirements)

  - [Stretch goals](#stretch-goals)

[Setting the stage (aka. Where this gets personal)](#setting-the-stage)

- [About me](#about-me)

- [Early project decisions](#early-project-decisions)

[The Diary](#the-diary)

- [How it all started (2019-08-02 - 22h06)](#how-it-all-started---2019-08-02)

- [Getting Onto It (2019-08-02 - 23h50)](#getting-onto-it---2019-08-02)

- [Whiteboarding It - (2019-08-03 - 02h30)](#whiteboarding-it---2019-08-03)

- [Laundromat coding - (2019-08-03 - 09h30)](#laundromat-coding---2019-08-03)

Laundromat coding - 2019-08-03

## The Project

### Why Funky Bunny

This project is a stretch goal from Lighthouse Labs curriculum. When I first saw it, I felt it could be fun to do it. At this point, with the exception of two ten hours reading, I've done everything on the curriculum, but I'm too aware that time is very limited. Time being scarce and coding being a form of expression to me, I like doing it well and I like taking my time to do it... So huge parts of me no longer want to do this project. It's not that technically challenging, it's time consuming (I expect the overall project to take from 20 to 32 hours of development, but more on that later) and in two days, we'll jump back into the curriculum, which, with all the stretch goals, tend to be 12 to 16 hours a day. That being said, I have a keen interest in project management so I'll do this project with this perspective in mind. For that purpose, I've decided to also include a developer diary. I realize that I might be judged, for future employment, based on this work and can only ask that you don't judge me too harshly, it'll be the first time I'll undertake a project from this angle, but I'm eager to learn and I'm eager to do this journey with you, if you’d like to join me in this thought experiment called "Funky Bunny".

### Project Requirements

The following is a summary of Lighthouse Labs Curriculum

#### Functional requirements

- Allow the player to start a new game.

- Ships should be able to be rotated so they can be either vertically or horizontally placed.

- Allow the player to take a shot on their turn only.

- Allow the player to play against an AI.

- Have a leaderboard for games against the AI

#### Display requirements

- Players should be able to see the other players board and their own.

- The players board should show the following:

  - The players ship placement

  - Any shots the opposing player has made.

- The opponents board should show the following:

  - Any shots made by the player, and whether it was a HIT or a MISS

- Both boards should show:

  - Coordinates of the cells, up to you on how this should be displayed.

- The game should show who’s turn it currently is, the player or the opponent.

- Show a list of ships for each player

- When a ship is destroyed, indicate this in the list of ships

- Show a log of shots and messages to the player.

#### Stretch goals

- Allow the player to save a replay of the game

- You should also allow a player to load a replay and step through each turn.

- Allow the player to set up options before starting the game

  - Number of ships
  - Number of shots per turn
  - Board size

- Allow the user to pick the difficulty of the AI player.

- Allow the player to play against another person on a different computer

## Setting the stage

(aka. Where this gets personal)

### About me

Well... What to say... I feel it's important to talk about myself a little bit, but what to say. I've seen and interacted with my first lines of code 36 years ago, on a commodore 64. Back then, we took them out of magazines and wrote them down manually. I was only 5, at the time, but that's how I first learned about the mystery (magic?) of code. At 16, I had already been through a few forced re-format on my father’s computer system, I was curious, I explored a lot, I made many mistakes, mostly Linux related, and little by little, became more and more capable of fixing them myself, which was quite the adventure before Google or any decent search engine, you had to rely on often partial and deprecated documentation, combined with creative thinking and a feel for exploration, that's also when I first discovered HTML and rudimentary styling options(before CSS). ;-) By the age of 18, I was hired as a tech expert and spent the last 20 years dabbling and fixing all kinds of more and more involving technical challenges, which gave me the opportunity to develop expertise in all things network related, years of database (MS-SQL) and coding(perl) skills, I kept in touch with web development through personal interest and projects like Drupal, which I've been keen of since version 6. As a web developer, I'm stronger at Back-End, but Front-End also has a place in my heart. All that being said, after spending so many years coding/computing, I'm more and more interested in the people and the teams behind the code than the code itself. I guess that's why I'm keen on project management and project involving schools and the likes, but I might very well have a poetic and unrealistic vision of what that entails, for my creative sides often makes me a natural dreamer and thought explorers. Humanitarian projects and NGOs are also a huge part of my life. On a very personal note, I'm 150% introvert, I love people, I'll always be available for one-on-one honest talk, I love those, but you won't see me at parties or the likes, I'm so transparent as a person that my emotions would easily show how miserable I feel in those situations.

### Early project decisions

This project is called Funky Bunny because I simply couldn't see myself do a war-related game. So it's gonna be about bunny stealing carrots from each other’s garden.

I won't aim for the stretch goals, they're too time consuming, but the code will take into account all of these, I simply won't build an interactive interface for them:

- Allow the player to save a replay of the game (2 - 4 hours, doing a nice UI for this would take time)
- You should also allow a player to load a replay and step through each turn. (Part of the UI challenge just before, I don't "see it" being nice if rushed.)

- Allow the player to set up options before starting the game
- Number of ships (planned in the design, but not sure I'll want to do the extra UI for that (2 - 3 hours))
- Number of shots per turns (Didn't seem that interesting of an option, I'll code it in the global, but I wouldn't want to play that mode, so it doesn't make it)
- Board size (planned in the code, but it all depends on the way I handle the carrots. I'm not that great at graphics, so if I decide the board size affects the size of the carrots, I'll have to redo/modify the UI in major ways (3 - 8 hours))

- Allow the user to pick the difficulty of the AI player. (I like the idea of AI, all in all, around 3 to 9 hours for implementing up to the hardest level, but that's more than half a day of coding, which I may not have.)

This one won't be looked into at all, I don't want to go into port configuration of host machine and the likes. The game will be planned to accept multiple human players, but getting into the connection process adds authentication (45 minutes), a DB to track the users (20 - 30 minutes) and opens the door to so many questions that although could be fun to tackle simply don't have the time to see the light of day (6 - 8 hours)

- Allow the player to play against another person on a different computer

## The Diary

### How it all started - 2019-08-02

#### (22h06)

Before coding anything, I must admit I've already conceived most of the project in my mind. If you look at the code grows, here's a few things you might want to know.

I'll use hexa for everything coordinates related, this should allow, without much issue, to scale the board up to 16x16. I've just finished setting up the project(SaSS, ejs, nodemon, morgan and chai) and already have my unit tests and functions for:

convertDecToHex

and

generateCoordsArray

First one is self-explanatory, but the second one is in charge of generating an array of coordinates in the form of ['00', '01,'10,'11'], up to [...,'FF'] if passed the right parameters, easily taking into consideration a grid of up to 16 spaces. I intend to iterate through it in order to display the grids in a table format, and use a conditional modulo based on the seed do define each table rows.

I've also decided NOT to do a mobile option. The reason being mostly the option to choose the board size, combined with the need to display 2 boards. Swipe left and right could solve this problem, but there would be a need for user 'feedback' when the computer is done with its turn, so the person knows to go back, although I could load the screen based on the phase, but then I'd have to considerably increase the artificial delays for the AI "feel" so it doesn't feel exhausting to be moved back and forth... Anyhow, many considerations that I felt would add anywhere between 6 and 10 hours to the project in order to do them to a level I'd like to take them, so no mobile interface, at this point).

The AI as also been conceived, in my mind, with 3 different difficulty levels:

- 'easy' would play 'randomly'
- 'medium' would do an alternating ( % 2) grid pattern and will most likely use an 'unresolved' state for any hit it encounters, exploring it further in a semi-random fashion
- 'hard' would build on the medium difficulty but will have to take into consideration the remaining spaces on the grid and compare them to the size of carrots left

 None of these are that technically hard, but I feel they would be in the ballpark of easy(2h), medium(30 minutes for the grid approach, 2-5h for the unresolved state implementation but I could potentially save a lot of time if the previous hit storage is designed the 'right' way), hard(2 - 7 hours, could be over evaluated).

 At this point in time, no DB integration has been planned, but I feel I'll want one down the road.

 I've decided to use the approach of a multiple page app, but I'm really torn on it. I'd love to further develop in Ajax, but that would add an extra 15 to 22% time. I'll see how the rest goes and I’m open to change this, if it makes more sense, since the project mostly revolves around a single page, I don't feel it'll be that involving migrating down the road.

This developer diary will take way longer than I would've wanted to, but it might very well be, to me, the best part of this project.

At this point, although I know the overall flow of the whole project, there's still one aspect that I haven't been able to solve. The carrot placements. There are a few approaches to it, but the thing is, I'd LOVE to be able to do it as draggable objects, but then, I have to make sure we can select them both as horizontal or vertical variations, that changes the UI interface a bit and has to be taken into consideration. Many ideas were brought forth, among them, a slider to control the orientation of the carrots and therefore load a specific set of carrots. That seems like the most promising approach, but I'm a bit afraid that if I don't read on ways to interact with objects as draggable entities, I might have to do some major overhaul of aspects of the project at some point in the future. That being said, I will still do everything up to that point, by using a static object to give the carrots position. Once I am at that place where I need to implement it, perhaps, there'll be new ideas that'll come my way, or I'll have decided that enough time was spent on the project and the room to grow, as a developer and as a person isn't there anymore. In the end, the only reason for it to exist is to learn, keeping that in mind will be one of my challenges.

### Getting Onto It - 2019-08-02

#### (23h50)

Here's a list of what I'd like to accomplish tonight.

- [X] Build the "global object", which will entail all the game settings, including a set of default values. (5 minutes planning, 5 minutes Unit Testing, 5 minutes building) (took 21 minutes)

- [ ] Use the global object values of grid size and number of players to build grids on the webpage with unique ids for each cell, based on the player and coords (ex: p1-03) (30 minutes for the grid, 10 minutes for the ids, 15 minutes refactoring)

- [ ] Adding to the global object the strategy for carrot storage, hit tracking and game progression (20 minutes planning, 5 minutes Unit testing(?), 10 minutes building) (I'll put more time into planning it since parts of it will directly affect the AI behaviours, if the planning is done properly, doing the advanced AI will be incredibly simple)

Nice to do:

- [ ] Building and Testing the event handlers to make sure I receive the coords selected on the grid, in the "click" event. (15 to 25 minutes, depending on how extensive the testing I do.)

-> Take into consideration that I'll want to "stop" any behaviour process while the AI is thinking.

### Whiteboarding It - 2019-08-03

#### (02h30)

Just completed a first draft of the layout. I pretty much had the structure planned in my head, but drawing the wireframe did bring an interesting solution to the lack of inspiration I had for the option / setting up the game menu and to the display moves summary. Something that could work well, while not taking anything away from the user experience.

On a side note, I've decided to take my time and enjoy this project, so I might revisit the idea of including extra stretch goals I had set aside.

!['Layout first draft'](https://github.com/SebDufresne/funkyBunny/blob/master/docs/planning/layout-2019-08-02.png)

### Laundromat coding - 2019-08-03

#### (09h32)

Putting the final touches to the defaults settings and gameState object. Most of it was thought of months ago, but still feels like the directory structure could/should be improved on. That's a minor refactoring I'll push down the road, once there's more code, it'll be easier to see how to structure it. Also of consideration, I'm designing from the ground up for multiple Ai support and multiple players, but at this point, I haven't planned to design for various AI levels simultaneously. Well, now that I've thought about it, may very well do, we'll see, if this happens, if I do, it'll be in the gameState structure.

I've also decided to store the "Hits" values in two different formats. I was concerned for data duplication, but the needs are so different that it seems like the best way to do it. Basically, I'll create a matrix for the AI, it'll greatly simplify the "search for the best move" process. I won't, however, go as deep as to calculate a presence ratio for each possible outcome, though I'll keep that idea in the back of my mind, could be an extension of hard. (Let's say you hit a square in the middle of the garden Is there even a ratio of probability for the presence of a carrot, or is it 25% for each direction? That ratio could definitely be influenced by the remaining carrots, but... Anyhow, we'll put more thought into that once everything else has been done.)

This new way of doing the AI creates the need for

- [ ] generateMatrix Unit Tests
- [ ] generateMatrix
