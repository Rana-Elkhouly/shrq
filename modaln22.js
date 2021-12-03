//Modal n22

// Get the modal
var modaln22 = document.getElementById("modelN22");

// Get the button that opens the modal
var btnn22 = document.getElementById("n22");

// Get the <span> element that closes the modal
var spann22 = document.getElementById("closeN22");

// When the user clicks the button, open the modal 
btnn22.onclick = function() {
  modaln22.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann22.onclick = function() {
  modaln22.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln22.style.display = "none";
  }
}