// Define an array of questions and answers
var questions = [{ q: "What is the main circuit board in a computer called?", a: "motherboard" }, { q: "What component in a computer stores data for long-term use?", a: "hard drive" }, { q: "What component in a computer handles processing instructions?", a: "CPU" }];

// Define a function to shuffle the order of the questions in the array
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

// Define a function to dynamically generate the quiz form
function generateQuiz() {
	// Shuffle the order of the questions in the array
	shuffleArray(questions);
	// Get the quiz form element from the HTML document
	var quizForm = document.getElementById("quiz-form");
	// Loop through each question in the array
	for (var i = 0; i < questions.length; i++) {
		// Get the question text and answer from the array
		var question = questions[i].q;
		var answer = questions[i].a;
		// Create a new input element for the answer field
		var input = document.createElement("input");
		input.type = "text";
		input.name = "q" + i;
		input.placeholder = "Type your answer here";
		// Insert the input element, question text, and a line break into the quiz form
		quizForm.insertBefore(input, quizForm.lastChild);
		quizForm.insertBefore(document.createTextNode(question), input);
		quizForm.insertBefore(document.createElement("br"), input);
	}
}

// Define a function to validate the quiz form
function validateQuiz(event) {
	// Prevent the form from submitting and refreshing the page
	event.preventDefault();
	// Get the quiz form element from the HTML document
	var quizForm = document.getElementById("quiz-form");
	// Get all the input elements from the quiz form
	var inputs = quizForm.getElementsByTagName("input");
	// Set the initial score to 0
	var score = 0;
	// Loop through each input element
	for (var i = 0; i < inputs.length; i++) {
		// Get the question index from the input element name
		var questionIndex = parseInt(input.name.substr(1));
		// Get the correct answer from the array using the question index
		var answer = questions[questionIndex].a;
		// Check if the user's answer matches the correct answer
		if (input.value.toLowerCase() === answer.toLowerCase()) {
			// If the answers match, increment the score and add the "correct" class to the input element
			score++;
			input.classList.add("correct");
		} else {
			// If the answers do not match, add the "incorrect" class to the input element
			input.classList.add("incorrect");
		}
	}
	// Display the final score in an alert box
	alert("Your score is " + score + " out of " + questions.length);
}

// Call the generateQuiz function to create the quiz form
generateQuiz();
function validateQuiz(event) {
	event.preventDefault();
	var quizForm = document.getElementById("quiz-form");
	var inputs = quizForm.getElementsByTagName("input");
	var score = 0;

	for (var i = 0; i < inputs.length; i++) {
		var questionIndex = parseInt(inputs[i].name.substr(1));
		var answer = questions[questionIndex].a;
		if (inputs[i].value.toLowerCase() === answer.toLowerCase()) {
			score++;
			inputs[i].classList.add("correct");
			inputs[i].classList.remove("incorrect");
		} else {
			inputs[i].classList.add("incorrect");
			inputs[i].classList.remove("correct");
		}
	}

	alert("Your score is " + score + " out of " + questions.length);
}