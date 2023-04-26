/// Set the correct answer for the image
const correctAnswer = "Text 2";

// Get the image and feedback elements
const image = document.getElementById("image");
const feedback = document.getElementById("feedback");

// Add event listeners for the drag and drop functionality
image.addEventListener("dragover", (event) => {
    event.preventDefault();
});

image.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data === correctAnswer) {
        feedback.classList.add("correct");
        feedback.innerText = "Congratulations! That is correct.";
        event.target.appendChild(document.getElementById(data));
    } else {
        feedback.classList.add("incorrect");
        feedback.innerText = "Sorry, you may want to review the video again.";
    }
});

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
