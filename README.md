**The Game Of Life:**

This project is a Conway's game of life as described by the following Wikipedia article (https://en.wikipedia.org/wiki/Conway's_Game_of_Life).  You are able to click on the board to add "live" cells. This can be done even when the game is running.

**How to run**

* git clone https://github.com/kmark1625/Game-of-Life.git
* yarn start (if yarn is not installed npm -g install yarn)

**Running tests**

* npm test

**Debugging**

Depending on your OS, node, and npm versions, you may run into an issue with running npm test.  If you run into the following error - "ERROR: f2d_register_rpc()".  If this occurs on OSX, "brew update watchman" and "brew install watchman" may resolve the issue.

**Design Decisions**

I decided to solve this problem using ReactJS. Rather than use a base html page with the React library, I used a starter package which allowed me to easily add npm packages, deploy with webpack, and easily add tests. Although there were some more light-weight options, I preferred the convenience of having all of these standard tools to use.

I decided to put the main logic for the game in the "Game" component. The "Board" component was responsible for rendering the board itself, which was made up of many "Square" components. I chose to model the board as a n x n array (array or arrays). I chose to only track a boolean value which was true if the cell was "alive" and false if the cell was "dead". The Game component contained the logic for progressing to the next state.

**Future Improvements**

* Improve board styling an increase board from 20x20 to 50x50. I ran into some styling issues with the larger board, so opted to keep the board at 20x20 for now.
* Add display of the current iteration number and add the ability to increase the rate of a run.
* Improve test coverage and add more detailed tests for run-cases.
