// Seleciona elementos do DOM
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Adiciona evento de clique no menu hambúrguer
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Seleciona todos os links do menu
const links = document.querySelectorAll('.nav-links a');

// Adiciona evento de clique para cada link do menu
links.forEach(link => {
    link.addEventListener('click', () => {
        // Verifica se o menu está ativo
        if (navLinks.classList.contains('active')) {
            // Remove a classe 'active' para fechar o menu
            navLinks.classList.remove('active');
        }
    });
});