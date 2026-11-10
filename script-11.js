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
