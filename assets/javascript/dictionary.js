// HANGMAN DICTIONARY

// create an empty array for our word objects
var dictionary = [];

// Word class constructor
function Word(name, definition, example, sound, dict) {
	// set Word properties
	this.name = name;
	this.definition = definition;
	this.example = example;
	this.sound = sound;

	// send new Word to dictionary array ASAP
	dict.push(this);

	// (debug) Verify that we created the word
	console.log(this.name + " instantiated");
}

// ADD EACH WORD TO DICTIONARY
var eloquence = new Word(
	'eloquence', 
	'Sounding cool and stuff', 
	'Aw yeah! This is happenin\'!', 
	'no sound',
	dictionary
);

var noteloquence = new Word(
	'noteloquence', 
	'Sounding cool and stuff', 
	'Aw yeah! This is happenin\'!', 
	'no sound',
	dictionary
);
