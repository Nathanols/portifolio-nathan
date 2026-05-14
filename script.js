
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// DARK MODE

themeToggle.addEventListener('click', () => {

    body.classList.toggle('light-mode');

    if(body.classList.contains('light-mode')) {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
    else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
});

// MENU MOBILE

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// FECHAR MENU AO CLICAR

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

