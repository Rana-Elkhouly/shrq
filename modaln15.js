//Modal n15

// Get the modal
var modaln15 = document.getElementById("modelN15");

// Get the button that opens the modal
var btnn15 = document.getElementById("n15");

// Get the <span> element that closes the modal
var spann15 = document.getElementById("closeN15");

// When the user clicks the button, open the modal 
btnn15.onclick = function() {
  modaln15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann15.onclick = function() {
  modaln15.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln15.style.display = "none";
  }
}