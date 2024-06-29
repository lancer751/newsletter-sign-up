const formulario =  document.querySelector('#emailForm');
const inputForm = document.querySelector('.updatecard__input');
const btnForm = document.querySelector('.updatecard__form button')

inputForm.addEventListener('input', e=> {
    e.preventDefault()
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const emaiInput = e.target.value;

    // verficando email
    const isValidEmail = regexEmail.test(emaiInput)
    isValidEmail ? cleanError(): showError()
})

formulario.addEventListener('submit', e=>{
    e.preventDefault();

    showFinish()
})

function showError(){
    const errorText = document.querySelector('.error-text')


    errorText.style.display = 'inline-block'
    inputForm.classList.remove('updatecard__input')
    inputForm.classList.add('error-input')
    btnForm.disabled = true
    btnForm.classList.remove('updatecard__btn--active')
}

function cleanError(){
    const errorText = document.querySelector('.error-text')

    errorText.style.display = 'none'
    inputForm.classList.remove('error-input')
    inputForm.classList.add('updatecard__input')
    btnForm.disabled = false
    btnForm.classList.add('updatecard__btn--active')
}

function showFinish(){
    const cardForm = document.querySelector('#cardToUpdate')
    const cardSuccess = document.querySelector('#cardSuccess')

    console.log(cardForm)
    cardForm.classList.add('updatecard-hidden')
    cardSuccess.classList.add('success__active')
}