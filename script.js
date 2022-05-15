const isLoading = document.getElementById('isLoading')
const productsItem = document.getElementById('product-section')
const moreButton = document.getElementById('showMoreProducts')

let page = 0

function getProductsList() {
    page++
    return fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        .then(jsonTransform)
        .then(showProducts)
        .catch(showError)
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
                    <div class="productImg">
                    <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="productInfo">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span>De: R$${item.oldPrice}</span>
                    <h2>Por: R$${item.price}</h2>
                    <span>Ou 2x de R$${item.price / 2}</span>
                    <button>Comprar</button>
                    </div>
                `

        productsItem.appendChild(div)
    });
}

moreButton.onclick = function () {
    getProductsList()
}

getProductsList()

function showError() {
    console.error('This is not working')
}

const mainform = document.getElementById('mainForm')
const inputName = document.forms['mainForm']['userName']
const inputEmail = document.forms['mainForm']['userEmail']
const inputCPF = document.forms['mainForm']['userCPF']
const inputGender = document.forms['mainForm']['userGender']
const helperMenssage = document.getElementById('helperText')
const sucessTxt = document.getElementById('sucessText')


mainform.onsubmit = function mainFormValidation(e) {

    e.preventDefault()
    nameValidation()
}

function nameValidation() {

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
    mainform.reset()
}

const toFriendForm = document.getElementById('toFriendEmail')
const friendName = document.forms['toFriendEmail']['friendName']
const friendEmail = document.forms['toFriendEmail']['friendEmail']

toFriendForm.onsubmit = function toFriendValidation(e) {
    e.preventDefault()
    friendNameValidation()
}

function friendNameValidation() {
    
    if (!friendName.value) {
        friendName.classList.add('returnError')
    } else {
        friendEmailValidation()
        friendName.classList.remove('returnError')
    }
}

function friendEmailValidation() {

    if (!friendEmail.value) {
        friendEmail.classList.add('returnError')
    } else {
        friendEmail.classList.remove('returnError')
        toFriendSucess()
    }
}

function toFriendSucess() {
    toFriendForm.reset()
    alert('Um email foi enviado para o seu amigo. Obrigado!')
}