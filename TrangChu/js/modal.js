var openLogin = document.querySelector('.dangnhap')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal-header i')

function toggleModal(e) {
    modal.classList.toggle('hide')
}

openLogin.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModal()
    }
})


