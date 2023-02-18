//MODAL

//get the modal
var modal = document.getElementById("modal");

//get the button that opens the modal
var btn = document.getElementById("openModalBtn");

//get the <span> element that closes the modal
var  btn =document.getElementById("contact__submit");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
btn.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }