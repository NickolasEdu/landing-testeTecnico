// API

const mainform = document.getElementById('mainForm')

mainform.onsubmit = function(e) {

    e.preventDefault()

    const inputName = document.forms['mainForm']['userName']
    if (!inputName.value) {
        inputName.classList.add('returnError')
    } else {
        inputName.classList.remove('returnError')
        emailValidation()
    }
}


function emailValidation() {
    
    const inputEmail = document.forms['mainForm']['userEmail']
    
    if (!inputEmail.value) {
        inputEmail.classList.add('returnError')
    } else {
        inputEmail.classList.remove('returnError')
        identifyValidation()
    }
}

function identifyValidation() {
    const inputCPF = document.forms['mainForm']['userCPF']
    
    if (!inputCPF.value) {
        inputCPF.classList.add('returnError') 
    } else {
        inputCPF.classList.remove('returnError')
        genderValidation()
    }
}

function genderValidation() {
    const inputMaleGender = document.forms['mainForm']['userMale']
    const inputFemaleGender = document.forms['mainForm']['userFemale']

    if (!inputFemaleGender.value || !inputMaleGender.value) {
        alert('Gender Error')
    } else {
        alert('ok')
    }
}