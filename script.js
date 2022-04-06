const mainform = document.getElementById('mainForm')

mainform.onsubmit = function(e) {

    e.preventDefault()

    const inputName = document.forms['mainForm']['userName']
    if (!inputName.value) {
        alert('Name error')
    } else {
        emailValidation()
    }
}


function emailValidation() {
    
    const inputEmail = document.forms['mainForm']['userEmail']
    
    if (!inputEmail.value) {
        inputEmail.classList.add('returnError')
    } else {
        identifyValidation()
    }
}

function identifyValidation() {
    const inputCPF = document.forms['mainForm']['userCPF']
    
    if (!inputCPF.value) {
        alert('CPF Error') 
    } else {
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