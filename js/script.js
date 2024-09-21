// Добавляет класс scrolled к элементу header при прокрутке страницы более чем на 50 пикселей.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
    } else {
        document.getElementById("header").classList.remove("scrolled");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function (){
        document.querySelector("header").classList.toggle("open")
    })
})

//
// const header = document.querySelector('header');
// const body = document.querySelector('body');
//
// if (header.classList.contains('open')) {
//     body.classList.add('lock');
// } else {
//     body.classList.remove('lock');
// }

// Найти элементы header и body
const header = document.querySelector('header');
const body = document.querySelector('body');

// Функция для добавления класса .lock к body
function addLockClass() {
    body.classList.add('lock');
}

// Функция для удаления класса .lock из body
function removeLockClass() {
    body.classList.remove('lock');
}

// Проверить, открыто ли меню (header с классом open)
function checkMenuState() {
    if (header.classList.contains('open')) {
        addLockClass();
    } else {
        removeLockClass();
    }
}

// Вызвать функцию проверки состояния меню при загрузке страницы и при изменении класса header
document.addEventListener('DOMContentLoaded', checkMenuState);
header.addEventListener('click', checkMenuState);