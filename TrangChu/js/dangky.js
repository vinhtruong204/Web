var openSignUp = document.querySelector('.modal-dangky')
var modal = document.querySelector('.dangky')
var iconClose = document.querySelector('.modal-header i')

function toggleModal(e) {
    console.log(e.target)
    modal.classList.toggle('hide')
}

openSignUp.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModal()
    }
})

