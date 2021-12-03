//Modal n24

// Get the modal
var modaln24 = document.getElementById("modelN24");

// Get the button that opens the modal
var btnn24 = document.getElementById("n24");

// Get the <span> element that closes the modal
var spann24 = document.getElementById("closeN24");

// When the user clicks the button, open the modal 
btnn24.onclick = function() {
  modaln24.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann24.onclick = function() {
  modaln24.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln24.style.display = "none";
  }
}