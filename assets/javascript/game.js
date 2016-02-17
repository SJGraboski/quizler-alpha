// Eloquent Lifetaker FUN.OH

// What letters will the program accept as input
var allowedLetters = [
	'a','b','c','d','e','f','g','h','i','j','k',
	'l','m','n','o','p','q','r','s','t','u','v',
	'w','x','y','z'
	];

// Verify user input against allowedLetters array
function letInput(letter){
	if (allowedLetters.indexOf(letter) != -1){
		return true;
	}
}

// game object
var game = {

	// counters and containers
	guesses : 0,
	wins : 0,
	usedKeys : [],
	display : [],
	word : Object,

	// HTML updates
	winCounter : function() {
		document.querySelector("#win-counter").innerHTML = 
			"<p>Wins: " + this.wins + "</p>";
	},
	guessCounter : function() {
		document.querySelector("#guess-counter").innerHTML = 
			"<p>Number of guesses remaining: " + this.guesses;
	},
	usedKeysCounter : function() {
		document.querySelector("#letters-guessed").innerHTML = 
			"<p>Letters you already guessed: " + this.usedKeys.join(", ");
	},
	wordDisplay : function() {
		document.querySelector("#word-display").innerHTML = 
			"<p>" + this.display.join(" ") + "</p>";
	},
	victory : function() {
		document.querySelector("#consequence").innerHTML = 
			"<p>You Won!</p>" +
			"<p class='win-word'>" + this.word.name + "</p>"
	},
	defeat : function() {
		document.querySelector("#consequence").innerHTML = 
			"<p>Too bad!</p>" +
			"<p class='lose-word'>The word was " + this.word.name + "...</p>"
	},

	// start game
	start : function() {
		// set default values
		this.guesses = 12;
		this.display = [];
		this.usedKeys = [];

		// set up display ( _ _ _ _ _ _ )
		this.word = dictionary[ Math.floor(Math.random() * dictionary.length) ];
		for (var i = 0; i < this.word.name.length; i++){
			this.display.push("_");
		}

		// refresh the HTML
		this.winCounter();
		this.guessCounter();
		this.wordDisplay();
	},

	// input
	input : function(lett) {
		// verify a valid, unused key was pressed
		if( letInput(lett) && this.usedKeys.indexOf(lett) === -1) {

			// checker switch: turns true if a match is found
			checker = false;

			// if valid, check against the Word.name
			for (var i = 0; i < this.word.name.length; i++) {

				// if there's a match, replace a '_' in game.display
				if (lett === this.word.name[i]) {
					this.display[i] = lett;
					checker = true;
					console.log("Got one! \n" + this.display.join(" "));
				}
			}

			// if checker's still false, take a guess point away
			if (!checker) {
				this.guesses--;
				console.log("Wrong. " + this.guesses + " guesses left");
			}

			// add key to used keys array, sort it alphabetically
			this.usedKeys.push(lett);
			this.usedKeys.sort();

			// update the HTML
					this.winCounter();
					this.guessCounter();
					this.wordDisplay();
					this.usedKeysCounter();

			/* Win Condition (!!!):
			 * no more '_'s in game.display
			 */
			if (this.display.indexOf('_') === -1){
				this.wins++;
				this.victory();
				this.start();
			}

			/* Lose Condition (!!!):
			 * no more guesses left
			 */
			if (this.guesses <= 0) {
				this.defeat();
				this.start();
			}
		}
	}
}

// onload event
document.onLoad = game.start();

// keyboard events
document.onkeyup = function(event){
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letter);
	game.input(letter);
}
