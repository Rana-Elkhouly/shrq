//Modal n16b

// Get the modal
var modaln16b = document.getElementById("modelN16b");

// Get the button that opens the modal
var btnn16b = document.getElementById("n16b");

// Get the <span> element that closes the modal
var spann16b = document.getElementById("closeN16b");

// When the user clicks the button, open the modal 
btnn16b.onclick = function() {
  modaln16b.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann16b.onclick = function() {
  modaln16b.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln16b.style.display = "none";
  }
}