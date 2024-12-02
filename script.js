let startButton = document.getElementById("startButton");
let executeButton = document.getElementById("executeButton");
let titleInput = document.getElementById("title");
let artistInput = document.getElementById("artist");
let question = document.getElementById("questionText");
let answer = document.getElementById("answerText");
let playAgainButton = document.getElementById("playAgainButton");

let songs = ["🌊👀", "🗣🌝", "🍉🍬", "🕊️🪶", "🪦😄", "🙏🙏🙏", "🏢"];
let titles = ["Ocean Eyes", "Talking to the Moon", "Watermelon Sugar", "Birds of a Feather", "Die with a Smile", "Please Please Please", "Apt"];
let artists = ["Billie Eilish", "Bruno Mars", "Harry Styles", "Billie Eilish", "Bruno Mars, Lady Gaga", "Sabrina Carpenter", "Rose, Bruno Mars"];

let index = 0;

if(window.location.pathname.includes("index.html")) {
	startButton.addEventListener("click", function() {
		console.log("Start Button Clicked!");
		window.location = "game.html";
		
	});
}

console.log(index);
if(window.location.pathname.includes("game.html")) {
	generateQuestion();
	executeButton.addEventListener("click", function() {
		let title = titleInput.value;
		let artist = artistInput.value;
		checkAnswer();
	});

	playAgainButton.addEventListener("click", function() {
    	window.location.reload(); // This will reload the current page
	});
}


function generateQuestion() {
	index = Math.floor(Math.random() * songs.length);
	console.log(songs[index]);
	question.innerText = songs[index];
}

function checkAnswer() {
	if(titleInput.value.toLowerCase() == titles[index].toLowerCase() && artistInput.value.toLowerCase() == artists[index].toLowerCase()) {
		answer.innerText = "Correct!";
	} else {
		answer.innerText = "Incorrect! It's actually " + titles[index] + " by " + artists[index];
	}

	playAgainButton.style.display = "inline-block";
}