//COPY EMAIL MODAL
function myEmail() {
    var copyText = document.getElementById("email");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
}

//DARK MODE

function toggleContrast() {
    var element = document.body;
    element.classList.toggle("dark-theme");
  }
  
//MODAL

/* const open_modal_nav = document.getElementById('open_modal_nav')
 const modal_container = document.getElementById('modal_container')
 const close_modal = document.getElementById('close_modal')

open_modal_nav.addEventListener('click', ()) */

