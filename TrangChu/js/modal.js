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

// Su kien dang ky trong modal dang nhap
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

// Su kien nut dang ky o trang chu
var btnDangKy = document.querySelector('.giohang')

btnDangKy.addEventListener('click', toggleDangky)

// Validation
var check1 = fasle, check2 = false, check3 = false, check4 = false

var userName = document.querySelector('#username')
var error1 = document.querySelector('.error-message-form1')

var userEmail = document.querySelector('#email')
var error2 = document.querySelector('.error-message-form2')

var userPassword = document.querySelector('#password')
var error3 = document.querySelector('.error-message-form3')

var checkPassword = document.querySelector('#check-password')
var error4 = document.querySelector('.error-message-form4')

// Focus event
userName.addEventListener('focus', function () {
    error1.innerHTML = ''
})

userEmail.addEventListener('focus', function () {
    error2.innerHTML = ''
})

userPassword.addEventListener('focus', function () {
    error3.innerHTML = ''
})

checkPassword.addEventListener('focus', function () {
    error4.innerHTML = ''
})

// Blur event
userName.addEventListener('blur', function () {
    let value = userName.value
    if (value.length == 0) {
        error1.innerHTML = 'Vui lòng nhập trường này!'
    } else if (value.length < 4) {
        error1.innerHTML = 'Tên đăng nhập phải có tối thiểu 4 kí tự!'
    } else {
        error1.innerHTML = ''
        check1 = true;
    }
})

userEmail.addEventListener('blur', function () {
    let value = userEmail.value
    let checka = false
    let checkb = false

    if (value.length == 0) {
        error2.innerHTML = 'Vui lòng nhập trường này!'
    } else if (value.length < 5) {
        error2.innerHTML = 'Vui lòng nhập email hợp lệ có hơn hoặc bằng 5 kí tự!'
    } else {
        for (let i = 0; i < value.length; i++) {
            if (value[i] === '@') checka = true
            else if (value[i] === '.') checkb = true
        }
        if (!(checka && checkb)) {
            error2.innerHTML = 'Vui lòng nhập email hợp lệ có các kí tự "@" và "."!'
        } else {
            error2 = ''
            check2 = true
        }
    }
})

userPassword.addEventListener('blur', function () {
    let value = userPassword.value
    if (value.length == 0) {
        error3.innerHTML = 'Vui lòng nhập trường này!'
    } else {
        error3.innerHTML = ''
        check3 = true
    }
})

checkPassword.addEventListener('blur', function () {
    let value = checkPassword.value
    if (value.length == 0) {
        error4.innerHTML = 'Vui lòng nhập trường này!'
    } else {
        if (!(value === userPassword.value)) {
            error4.innerHTML = 'Mật khẩu không trùng khớp!'
        } else {
            error4.innerHTML = ''
            check4 = true
        }
    }
})

// Su kien an nut dang ki

var btnCheckSignUp = document.querySelector('.btn-dangky')

btnCheckSignUp.addEventListener('click', function () {
    if (check1 && check2 && check3 && check4) {
        alert('Đăng ký thành công!')
    } else {
        alert('Vui lòng nhập lại thông tin đúng định dạng')
    }
})
