//Modal n21

// Get the modal
var modaln21 = document.getElementById("modelN21");

// Get the button that opens the modal
var btnn21 = document.getElementById("n21");

// Get the <span> element that closes the modal
var spann21 = document.getElementById("closeN21");

// When the user clicks the button, open the modal 
btnn21.onclick = function() {
  modaln21.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann21.onclick = function() {
  modaln21.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln21.style.display = "none";
  }
}