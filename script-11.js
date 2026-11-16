const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach( function(button) {
  
 button.addEventListener("click", function() {
   details.forEach(function(item) {
     item.hidden = true;
   });
   
  const target = button.dataset.target;
   document.getElementById(target).hidden = false;
 });
  
});

const form = document.querySelector("#registration-form");
const confirmation = document.querySelector ("#confirmation-message");

form.addEventListener("submit", function(event){
  event.preventDefault();
  
  const name = document.querySelector("#registration-name").value;
  const program = document.querySelector("#registration-program").value;

  const message = "Thanks " + name + " for registering for " + program + "!";

  confirmation.textContent = message;
  confirmation.hidden = false;
});
