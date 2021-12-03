//Modal n17

// Get the modal
var modaln17 = document.getElementById("modelN17");

// Get the button that opens the modal
var btnn17 = document.getElementById("n17");

// Get the <span> element that closes the modal
var spann17 = document.getElementById("closeN17");

// When the user clicks the button, open the modal 
btnn17.onclick = function() {
  modaln17.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann17.onclick = function() {
  modaln17.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln17.style.display = "none";
  }
}