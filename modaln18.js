//Modal n18

// Get the modal
var modaln18 = document.getElementById("modelN18");

// Get the button that opens the modal
var btnn18 = document.getElementById("n18");

// Get the <span> element that closes the modal
var spann18 = document.getElementById("closeN18");

// When the user clicks the button, open the modal 
btnn18.onclick = function() {
  modaln18.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spann18.onclick = function() {
  modaln18.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaln18.style.display = "none";
  }
}