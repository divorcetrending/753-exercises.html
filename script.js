const button = document.getElementById("skull-button");
const message = document.getElementById("skull");

button.addEventListener("click", function() {
    message.hidden = !message.hidden;
  });
