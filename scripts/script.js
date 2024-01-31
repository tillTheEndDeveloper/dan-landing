//active current navbar link

let navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach((link) => {
    // Получить атрибут href для каждой ссылки
    let linkPath = link.getAttribute('href');

    // Получить относительный путь страницы из текущего URL
    let currentPagePath = window.location.pathname.split('/').pop();

    // Проверить, соответствует ли текущий путь относительному пути ссылки
    if (currentPagePath === linkPath) {
        // Если да, добавить класс "test" (или "active")
        link.classList.add('active');
    }
});


//modal window
document.getElementById("open-modal-btn").addEventListener("click", function (){
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-model-btn").addEventListener("click", function (){
    document.getElementById("my-modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.getElementById("my-modal").classList.remove("open")
    }
});

/*


document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("burger").addEventListener("click", function (){
        document.querySelector("header").classList.toggle("open") /!*
        тоггл для выключения/включения *!/
    })
})/!* проверка на загрузку дома *!/


// // Закрыть меню при нажатии на Esc
// window.addEventListener('keydown', (e) => {
//     if (e.key === "Escape") {
//         // Действие при клике
//         document.querySelector(".header").classList.remove("open")
//     }
// });

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    document.querySelector(".header").classList.remove("open")
});

//modal
document.getElementById("open-modal-btn").addEventListener("click", function (){
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-model-btn").addEventListener("click", function (){
    document.getElementById("my-modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.getElementById("my-modal").classList.remove("open")
    }
});
*/


