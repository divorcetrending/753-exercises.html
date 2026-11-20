const form = document.querySelector("#type");
const confirmation = document.querySelector ("#confirmation-message");

form.addEventListener("submit", function(event){
  event.preventDefault();
  
  const name = document.querySelector("#name").value;
  const program = document.querySelector("#type").value;

  const message = "Thanks " + name + " for request " + program + "!";

  confirmation.textContent = message;
  confirmation.hidden = false;
});
