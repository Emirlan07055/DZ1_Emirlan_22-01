const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('.phoneCheck')
const phoneResult = document.querySelector('span')

const regExp = /\w@gmail.com$/

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerText = 'ok'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'not ok'
        phoneResult.style.color = 'red'
    }
})

const phoneInputCod = document.querySelector('#phoneInputCod')
const codCheck = document.querySelector('.codCheck')
const phoneResultat = document.querySelector('#span')

const regExpi = /\w{4}/

codCheck.addEventListener('click', () => {
    if (regExpi.test(phoneInputCod.value)){
        phoneResultat.innerText = 'ok'
        phoneResultat.style.color = 'green'
    }else {
        phoneResultat.innerText = 'not ok'
        phoneResultat.style.color = 'red'
    }
})

/**************************/

const block = document.querySelector('.block')
const button = document.querySelector('#button')

let i = 0

button.addEventListener('click',() => {
    if (i < 500){
        block.style.left = `${i}px`
        i+=50
    }
})

/**********************/
