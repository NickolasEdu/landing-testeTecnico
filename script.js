const isLoading = document.getElementById('isLoading')
const productsItem = document.getElementById('product-section')
const moreButton = document.getElementById('showMoreProducts')

let page = 0

function getProductsList() {
    page++
    return fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        .then(jsonTransform)
        .then(showProducts)
}

function jsonTransform(response) {
    return response.json()
}


function showProducts(data) {


    isLoading.classList.add('loadingComplete')


    data.products.map((item) => {
        const div = document.createElement('div')

        div.setAttribute('id', item.id)
        div.classList.add('productBox')

        div.innerHTML += `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <h3>De: R$${item.oldPrice}</h3>
                    <h2>Por: R$${item.price}</h2>
                    <span>Ou 2x de R$${item.price / 2}</span>
                    <button>Comprar</button>
                `

        productsItem.appendChild(div)
    });
}

moreButton.onclick = function () {
    getProductsList()
}

getProductsList()



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