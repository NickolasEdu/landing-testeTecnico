const isLoading = document.getElementById('isLoading')
let page = 1

const setProductList = () => {
    fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        .then(response => response.json())
        .then(data => {
            isLoading.classList.add('loadingComplete')
            console.log(data)
            const productsItem = document.getElementById('product-box')

            const productBoxes = data.map((item) => {
                const div = document.createElement('div')

                div.setAttribute('id', item.id)
                div.innerHTML = `
                <h1>${item.name}
                `
                productsItem.appendChild(div)
            });

            productBoxes()
        })
        .catch(console.error('Something Went Wrong'))
}

setProductList()



const mainform = document.getElementById('mainForm')

const inputName = document.forms['mainForm']['userName']
const inputEmail = document.forms['mainForm']['userEmail']
const inputCPF = document.forms['mainForm']['userCPF']
const inputGender = document.forms['mainForm']['userGender']
const helperMenssage = document.getElementById('helperText')
const sucessTxt = document.getElementById('sucessText')


mainform.onsubmit = function nameValidation(e) {

    e.preventDefault()

    if (!inputName.value) {
        inputName.classList.add('returnError')
        errorText()
    } else {
        inputName.classList.remove('returnError')
        defaultText()
        emailValidation()
    }
}


function emailValidation() {

    if (!inputEmail.value) {
        inputEmail.classList.add('returnError')
        errorText()
    } else {
        inputEmail.classList.remove('returnError')
        defaultText()
        identifyValidation()
    }
}

function identifyValidation() {

    if (!inputCPF.value) {
        inputCPF.classList.add('returnError')
        errorText()
    } else {
        inputCPF.classList.remove('returnError')
        defaultText()
        genderValidation()
    }
}

function genderValidation() {

    if (!inputGender.value) {
        errorText()
    } else {
        defaultText()
        sucessText()
    }
}

function errorText() {
    helperMenssage.classList.add('helper-text')
    helperMenssage.classList.remove('hidden')
}

function defaultText() {
    helperMenssage.classList.remove('helper-text')
    helperMenssage.classList.add('hidden')
}

function sucessText() {
    sucessTxt.classList.remove('hidden')
    sucessTxt.classList.add('sucess-text')
}