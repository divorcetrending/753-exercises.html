const button = document.getElementbyId("message-button")
const message = document.getElementbyId("message");

button.addEventListener("click", function() {
    message.hidden = !message.hidden;
  });
