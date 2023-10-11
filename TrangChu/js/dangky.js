
var btnOpen = document.querySelector('.dangky')
var btnClose = document.querySelector('.modal-header i')

function toggleModal (e) {
    console.log(e.target)
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)

