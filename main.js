const d = document

const $inputForm = d.querySelector('.form-input')
const $error = d.querySelector('.error')

$inputForm.addEventListener('input', (e) => {
    if ($inputForm.validity.valid) {
        $error.classList.remove('error-active')
    } else {
        $error.classList.add('error-active')
    }
})
