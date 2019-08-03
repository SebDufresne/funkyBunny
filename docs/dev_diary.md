# Developer diary for Funky Bunny (aka. Battle Ship Stretch goal)

## Why Funky Bunny?

This project is a stretch goal from Lighthouse Labs curriculum. When I first saw it, I felt it could be fun to do it. At this point, with the exception of two ten hours reading, I've done everything, but I'm too aware that time is very limited. Time being scarce and coding being an extension of expression for me, I like doing it well... So huge parts of me no longer want to do this project. It's not that technically challenging, it's time consuming (I expect the overall project to take from 20 to 32 hours of development, but more on that later) and in two days, we'll jump back into the curriculum, which, with all the stretch goals, tend to be 12 to 16 hours a day. That being said, I have a keen interest in project management so I'll do this project with this aspect as the centre preoccupation. For that purpose, I've decided to also include a developer diary. I realize that I might be judged, for future employment, based on this work and can only ask that you don't judge me too harshly, it'll be the first time I'll undertake a project from this angle, but I'm eager to learn and I'm eager to do this journey with you, if you’d like to join me in this thought experiment called "Funky Bunny".


## Requirements

_The following is a summary of Lighthouse Labs Curriculum_

### Functional requirements

 - Allow the player to start a new game.

- Ships should be able to be rotated so they can be either vertically or horizontally placed.

- Allow the player to take a shot on their turn only.

- Allow the player to play against an AI.

- Have a leaderboard for games against the AI

### Display requirements

- Players should be able to see the other players board and their own.

- The players board should show the following:

    - The players ship placement

    - Any shots the opposing player has made.

- The opponents board should show the following:

    Any shots made by the player, and whether it was a HIT or a MISS

- Both boards should show:

    Coordinates of the cells, up to you on how this should be displayed.

- The game should show who’s turn it currently is, the player or the opponent.

- Show a list of ships for each player

- When a ship is destroyed, indicate this in the list of ships

- Show a log of shots and messages to the player.

### Stretch goals and early project decisions

- Allow the player to save a replay of the game

- You should also allow a player to load a replay and step through each turn.

- Allow the player to set up options before starting the game

- Number of ships
- Number of shots per turn
- Board size

- Allow the user to pick the difficulty of the AI player.

- Allow the player to play against another person on a different computer

## Setting the stage (aka. Where this gets personal)

### Basic decisions

This project is called Funky Bunny because I simply couldn't see myself do a war-related game. So it's gonna be about bunny stealing carrots from each other’s garden.

I won't aim for the stretch goals, they're too time consuming, but the code will take into account all of these, I simply won't build an interactive interface for them:

- Allow the player to save a replay of the game
- You should also allow a player to load a replay and step through each turn.

- Allow the player to set up options before starting the game
- Number of ships
- Number of shots per turn
- Board size

- Allow the user to pick the difficulty of the AI player.

This one won't be looked at at all:
- Allow the player to play against another person on a different computer

### How it all started (2019-08-02 22h06)

Before coding anything, I must admit I've already conceived most of the project in my mind. If you look at the code grows, here's a few things you might want to know.

I'll use hexa for everything coordinates related, this should allow, without much issue, to scale the board up to 16x16. I've just finished the setting up of the project and already have my unit tests and functions for:

convertDecToHex

and

generateCoordsArray

The second one being in charge of generating an array of coordinates in the form of ['00', '01,'10,'11'], up to [...,'FF'] if passed the right parameters, easily taking into consideration a grid of up to 16 spaces. I intend to iterate through it in order to display the grids in a table format, and use a conditional modulo based on the seed do define each table rows.

I've also decided NOT to do a mobile option. The reason being mostly the option to choose the board size, combined with the need to display 2 boards. Swipe left and right could solve this problem, but there would be a need for user 'feedback' when the computer is done with its turn, so the person knows to go back, although I could load one after the other the screen based on the phase, but then I'd have to artificially increase the delays the AI takes so it doesn't feel exhausting to be moved back and forth... Anyhow, many considerations that I felt would add anywhere between 6 and 10 hours to the project, so no mobile interface, at this point).

The AI as also been conceived, in my mind, with 3 different difficulty levels:
 - 'easy' would play 'randomly'
 - 'medium' would do an alternating ( % 2) grid pattern and will most likely use an 'unresolved' state for any hit it does
 - 'hard' will build on the medium difficulty but will have to take into consideration the remaining spaces on the grid and compare them to the size of carrots left

 None of these are that technically hard, but I feel they would be in the ballpark of easy(2h), medium(30 minutes for the grid approach, 2-5h for the unresolved state implementation but could potentially save a lot of time if the previous hit storage is designed the 'right' way), hard(2 - 7 hours, could be over evaluated).

 At this point in time, no DB integration has been planned, but I feel I'll want one down the road.

 I've decided to use the approach of a multiple page app, but I'm really torn about it. I'd love to further develop in Ajax, but that would add an extra 15 to 22% time. I'll see how the rest goes and I’m open to change this, if it makes more sense, since the project mostly revolves around a single page, I don't feel it'll be that involving migrating down the road.

This developer diary will take way longer than I would've wanted to, but it might very well be, to me, the best part of this project.

At this point, although I know the general flow of the whole project, there's still one aspect that I haven't been able to solve. The carrot placements. There's a few approach to it, but the thing is, I'd LOVE to be able to to it as dragable objects, but then, I have to make sure we can select them both as horizontal or vertical variations, that changes the UI interface a bit and has to be taken into consideration. Many ideas were brought forth, among them, a slider to control the orientation of the carrots and therefore load a specific sets of carrots, That seems like the most promising approach, but I'm a bit afraid that if I don't read on ways to interact with object, I might have to do some major overhaul of aspects of the projects. That being said, I will still do everthing up to that point, by using a static object to give the carrots position. At that point, peraphs, there'll be new ideas that'll come my way, or I'll have decided that enough time was spent on the project. In the end, the only reason for it to exist is to learn.


### Tonights work (2019-08-02 23h20)

Here's a list of what I'd like to accomplish tonight.

Build the "gobal object", which will entail all the game settings, including a set of default values. (5 minutes planning, 5 minutes Unit Testing, 5 minutes building)

Use the global oject values of grid size and number of players to build grids on the webpage with unique ids for each cells, based on the player and coords (ex: p1-03) (30 minutes for the grid, 10 minutes for the ids, 15 minutes refactoring)

Adding to the global object the strategy for ship storage, hit tracking and game progression (20 minutes planning, 5 minutes Unit testing(?), 10 minutes bulding) (I'll put more time into planning it since parts of it will dirrectly affect the AI behaviours, if the planning is done properly, doing the advanced AI will be incredibly simple)

Nice to do:
Building and Testing the event handlers to make sure I receive the coords selected on the grid, in the "click" event. (15 to 25 minutes, depending on how extensive the testing is)