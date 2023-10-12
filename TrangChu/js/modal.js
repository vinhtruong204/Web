var openLogin = document.querySelector('.dangnhap')
var modal = document.querySelector('.ving')
var iconCloseLogin = document.querySelector('.modal-header i')


function toggleModal(e) {
    modal.classList.toggle('hide')
}

openLogin.addEventListener('click', toggleModal)
iconCloseLogin.addEventListener('click', toggleModal)
modal.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModal(e)
    }
})

var dangky = document.querySelector('.dangky')
var openSignUp = document.querySelector('#modal-dangky')
var closeSignUp = document.querySelector('#closeSignUp')

function toggleDangky(e) {
    dangky.classList.toggle('hide')
}

openSignUp.addEventListener('click', function (e) {
    toggleModal()
    toggleDangky()
})
closeSignUp.addEventListener('click', toggleDangky)
dangky.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleDangky()
    }
})