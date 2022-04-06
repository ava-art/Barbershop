

/* Modal Login*/

let login = document.querySelector('.login_link')
let popap = document.querySelector('.modal--login')
let modalCloseLogin = document.querySelector('#close-login')
const inputLogin = popap.querySelector('[name=login]')
const inputPassword = popap.querySelector('[name=password]')
const form = popap.querySelector('.login_form')
const storage = localStorage.getItem('inputLogin')




form.addEventListener('submit', function(evt){

    localStorage.setItem('inputLogin', inputLogin.value)



    if(inputLogin.classList.contains('input_error') || inputPassword.classList.contains('input_error')){
        inputLogin.classList.remove('input_error')
        inputPassword.classList.remove('input_error')
    }

    if (!inputLogin.value){
        evt.preventDefault();
        console.log('Введите Логин')
        popap.classList.remove('modal-error');
        popap.offsetWidth = popap.offsetWidth;
        popap.classList.add('modal-error');
        inputLogin.focus();
        inputLogin.classList.add('input_error')
    } 
     
    if (!inputPassword.value){
        evt.preventDefault();
        console.log('Введите Пароль')
        popap.classList.remove('modal-error');
        popap.offsetWidth = popap.offsetWidth
        popap.classList.add('modal-error')
            if (inputLogin.value){
        inputPassword.focus();
    }
        inputPassword.classList.add('input_error')
    } 
    

})


const modalLogin = (evt) =>{
    evt.preventDefault();
        
        popap.classList.add('login-active');
    inputLogin.focus();

    if (storage){
        inputLogin.value = storage;
        inputPassword.focus();
    } else {
        inputLogin.focus();
    }
}

if (!popap.classList.contains('login-active')){
login.addEventListener('click', modalLogin)
}

modalCloseLogin.addEventListener('click', function(){
    popap.classList.remove('login-active');
})

window.addEventListener('keydown', function(evt){
    if (evt.keyCode === 27) {
        
        if (popap.classList.contains('login-active')){
            evt.preventDefault();
            popap.classList.remove('login-active')}  
    }
})

/* Modal Map*/

const map1 = document.querySelector('#map1')
const map2 = document.querySelector('#map2')
let view = document.querySelector('.modal--map')
let modalCloseMap = document.querySelector('#close-map')

const modalMap = (evt) => {
    evt.preventDefault();
    view.classList.toggle('map_active')
}

map1.addEventListener('click', modalMap)
map2.addEventListener('click', modalMap)
modalCloseMap.addEventListener('click', modalMap)




window.addEventListener('keydown', function(evt){
    if (evt.keyCode === 27) {
        
        if (view.classList.contains('map_active')){
            evt.preventDefault();
            view.classList.remove('map_active')}
    }
})

/* Тряска Формы*/

