const formulario =  document.querySelector('#emailForm');
formulario.addEventListener('submit', e=>{
    e.preventDefault();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let formData = new FormData(formulario);

    const emailInput = formData.get('email');

    // verficando email
    const isValidEmail = regexEmail.test(emailInput)
    if(isValidEmail){
        showFinish()
    }
})

function showError(){
    const errorText = document.querySelector('.error-text')
    const errorInput = document.querySelector('.updatecard__form input')

    console.log(errorText)

    errorText.style.display = 'inline-block'
    errorInput.classList.remove('updatecard__input')
    errorInput.classList.add('error-input')
}

function showFinish(){
    const cardForm = document.querySelector('#cardToUpdate')
    const cardSuccess = document.querySelector('#cardSuccess')

    console.log(cardForm)
    cardForm.classList.add('updatecard-hidden')
    cardSuccess.classList.remove('success__active')
}