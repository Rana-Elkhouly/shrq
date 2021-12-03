//Modal n20

// Get the modal
var modaln20 = document.getElementById("modelN20");

// Get the button that opens the modal
var btnn20 = document.getElementById("n20");

// Get the <span> element that closes the modal
var spann20 = document.getElementById("closeN20");

// When the user clicks the button, open the modal 
btnn20.onclick = function() {
  modaln20.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann20.onclick = function() {
  modaln20.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln20.style.display = "none";
  }
}