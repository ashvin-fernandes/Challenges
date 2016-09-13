/*An anagram is a form of word play, where you take a word (or set of words) and form a different word (or different set of words) that use the same letters, just rearranged. All words must be valid spelling, and shuffling words around doesn't count.

Some serious word play aficionados find that some anagrams can contain meaning, like "Clint Eastwood" and "Old West Action", or "silent" and "listen".

Someone once said, "All the life's wisdom can be found in anagrams. Anagrams never lie." How they don't lie is beyond me, but there you go.

Punctuation, spaces, and capitalization don't matter, just treat the letters as you would scrabble tiles

NOTE: Missed punctuation requirement, should use regex next time.*/



//Shuffling words around doesn't count
var wordShuffle = function(input){
	var LSWords = input[0].toLowerCase().trim().split(" ").sort()
	var RSWords = input[1].toLowerCase().trim().split(" ").sort()
	var valid = true
	if (LSWords.length !== RSWords.length){
		//pass
	}else{
		for (var i = 0; i < LSWords.length; i++){
			if (LSWords[i] === RSWords[i]){
				valid = false
				break
			}
		}
	}
	
	return valid
}

var anagramCheck = function(input){
	var LS = input[0].replace(/ /g, "").toLowerCase().split("").sort()
	var RS = input[1].replace(/ /g, "").toLowerCase().split("").sort()
	var valid = true

	if (LS.length !== RS.length){
		valid = false
	}else{
		for (var i = 0; i < LS.length; i++){
			if (LS[i] !== RS[i]){
				valid = false
				break
			}
		}
	}
	
	return valid
}



var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('anagrams.txt')
});

lineReader.on('line', function (line) {
	input = line.split("?")

	if (wordShuffle(input) && anagramCheck(input)){
		console.log(input[0] + " is an Anagram of " + input[1]);
	}else{
		console.log(input[0] + " is NOT an Anagram of " + input[1]);
	}
});


