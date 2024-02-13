//active current navbar link

let navLinks = document.querySelectorAll('.navbar-link');
let currentPagePath = window.location.pathname.split('/').pop();

if (currentPagePath === "") {
    navLinks[0].classList.add('active');
} else {
    navLinks.forEach((link) => {
        let linkPath = link.getAttribute('href');
        if (currentPagePath === linkPath) {
            link.classList.add('active');
        }
    });
}


//modal window
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("open-modal-btn").addEventListener("click", function () {
        document.getElementById("my-modal").classList.add("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("open-modal-btn").addEventListener("click", function () {
        document.getElementById("my-modal").classList.remove("open");
    });
});


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.getElementById("my-modal").classList.remove("open")
    }
});


//burger menu
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger-open-btn").addEventListener("click", function () {
        document.querySelector("header").classList.add("open")
    })
})/* проверка на загрузку дома */

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger-close-btn").addEventListener("click", function () {
        document.querySelector("header").classList.remove("open")
    })
})

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.querySelector("header").classList.remove("open")
    }
});



