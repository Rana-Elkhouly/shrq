//Modal n16a

// Get the modal
var modaln16a = document.getElementById("modelN16a");

// Get the button that opens the modal
var btnn16a = document.getElementById("n16a");

// Get the <span> element that closes the modal
var spann16a = document.getElementById("closeN16a");

// When the user clicks the button, open the modal 
btnn16a.onclick = function() {
  modaln16a.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann16a.onclick = function() {
  modaln16a.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln16a.style.display = "none";
  }
}