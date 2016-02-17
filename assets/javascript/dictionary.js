// Hangman Dictionary

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
}

// ADD EACH WORD TO DICTIONARY
var alliteration = new Word(
	// name
	'alliteration',
	// definition
	'When a writer takes words with the same beginning letter or sound, and places them near eachother.',  
	// example
	"<p>The fair breeze blew, the white foam flew,</p>" +
	"<p>The furrow followed free;</p>" +
	"<p>We were the first that ever burst</p>" +
	"<p>Into that silent sea.</p>" +
	"<p>(Samuel Coleridge, \"Rime of the Ancient Mariner\")", 
	// sound
	'assets/sounds/alliteration.mp3',
	// dictionary array
	dictionary
);

var polyptoton = new Word(
	// name
	'polyptoton',
	// definition
	'Using the same word numerous times, but as a different part of speech or in a different grammatical form.',  
	// example
	"<p>\"And she bare him a son, and he called his name Gershom: " +
	 "for he said, I have been a stranger in a strange land.\" " +
	 "(King James Bible, Exodus 2:22)</p>", 
	// sound
	'assets/sounds/polyptoton.mp3',
	// dictionary array
	dictionary
);

var antithesis = new Word(
	// name
	'antithesis',
	// definition
	'First state one point, then state something contradictory.',  
	// example
	"<p>\"It was the best of times, it was the worst of times, " +
	"it was the age of wisdom, it was the age of foolishness [...] \" " +
	 "(Mark Twain, \"A Tale of Two Cities\")", 
	// sound
	'assets/sounds/antithesis.mp3',
	// dictionary array
	dictionary
);

var merism = new Word(
	// name
	'merism',
	// definition
	'Writing out the parts of a person, place or concept rather than simply mentioning the whole.',  
	// example
"<p>Cannon to the right of them,</p>" +
	"<p>Cannon to the left of them,</p>" +
	"<p>Cannon in front of them...</p>" +
	"<p>(Alfred Tennyson, \"The Charge of the Light Brigade\")</p>", 
	// sound
	'assets/sounds/merism.mp3',
	// dictionary array
	dictionary
);

var blazon = new Word(
	// name
	'blazon',
	// definition
	'An extended merism made up of similes, describind something in long detail.',  
	// example
	"<p>Full fathom five thy father lies;</p>" +
	"<p>Of his bones are coral made;</p>" +
	"<p>These are pearls that were his eyes;</p>" +
	"<p>Nothing of him that doth fade,</p>" +
	"<p>But doth suffer a sea-change</p>" +
	"<p>Into something rich and strange.</p>" +
	"<p>(William Shakespeare, \"The Tempest\")</p>", 
	// sound
	'assets/sounds/blazon.mp3',
	// dictionary array
	dictionary
);

var synaesthesia = new Word(
	// name
	'synaesthesia',
	// definition
	'When a writer describes a sense in terms of another sense' +
	'--like describing an image by using words associated with sounds.',  
	// example
	"<p>\"I love the smell of napalm in the morning. [...] Smelled like ... victory.\"</p>" +
	"<p>(Francis Ford Coppola, John Milius, Michael Herr, \"Apocalypse Now\")</p>", 
	// sound
	'assets/sounds/synaesthesia.mp3',
	// dictionary array
	dictionary
);

var aposiopesis = new Word(
	// name
	'aposiopesis',
	// definition
	'Ending a sentence prematurely (usually with an ellipsis) for dramatic effect.',
	// example
	"<p>\"\'Have fire in this garret before night or&#8212;\'\"</p>" +
	"<p>\"He stopped because he could not go on. It was an aposiopesis of the purest kind\"</p>" +
	"<p>(Samuel Beckett, \"Murphy\")</p>", 
	// sound
	'assets/sounds/aposiopesis.mp3',
	// dictionary array
	dictionary
);

var hyperbaton = new Word(
	// name
	'hyperbaton',
	// definition
	'Writing words in odd orders to amplify a sentence\'s energy.',
	// example
	"<p>Stone walls do not a prison make,</p>" +
	"<p>Nor iron bars a cage...</p>" +
	"<p>(Richard Lovelace, \"To Althea, From Prison\")</p>", 
	// sound
	'assets/sounds/hyperbaton.mp3',
	// dictionary array
	dictionary
);

var anadiplosis = new Word(
	// name
	'anadiplosis',
	// definition
	'Using one of the last words of one statement ' +
	'as one of the first words of the next, creating a link.',
	// example
	"<p>\"Suffering breeds character; chracter breeds faith; " +
	"in the end faith will not dissapoint</p>" +
	"<p>(Jesse Jackson, 1988 Democratic National Convention Address)</p>", 
	// sound
	'assets/sounds/anadiplosis.mp3',
	// dictionary array
	dictionary
);

var diacope = new Word(
	// name
	'diacope',
	// definition
	'When a writer repeats a word or phrase after a brief interuption.',
	// example
	"<p>\"Bond. James Bond.\"" +
	"<p>(\"Dr. No,\" film version))</p>", 
	// sound
	'assets/sounds/diacope.mp3',
	// dictionary array
	dictionary
);
