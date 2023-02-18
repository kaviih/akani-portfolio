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

 /*const open = document.querySelector('openModalMail');
 const modal = document.querySelector('modal');
 const modal_container = document.querySelector('modal_container');
 const close = document.querySelector('close');

 const openModal = function () {
    modal.classList.add("show");
    modal_container.classList("show");
 }

 open.addEventListener("click", openModal)





/*open.addEventListener('click', () => {
    modal_container.classList.add('show'); 
}) 

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
}) 

btn.onclick = function() {
    modal.style.display = "open";
  }*/

  /*function toggleModal() {
    var modal_container = document.getElementById("modal_container");
    if (openModalMail.style.display === "modal_container") {
      modal_container.style.display = "";
    } else {
        close.style.display = "none";
    }
  }*/