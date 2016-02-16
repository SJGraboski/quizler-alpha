// Eloquent Lifetaker FUN.OH

// What letters will the program accept as input
var allowedLetters = [
	'a','b','c','d','e','f','g','h','i','j','k',
	'l','m','n','o','p','q','r','s','t','u','v',
	'w','x','y','z'
	];

// Verify user input against allowedLetters array
function letInput(letter){
	for (var i = 0; i < allowedLetters.length; i++){
		if (letter === allowedLetters[i]){
			return letter;
		}
	}
}

// input test
document.onkeyup = function(event){
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letInput(letter));
}
