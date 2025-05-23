<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    // Função para gerar postagens automáticas
    function generateBlogPosts() {
        const posts = [
            {
                title: "A Revolução da IA em 2025",
                excerpt: "Descubra como a inteligência artificial está transformando o desenvolvimento de software neste ano, com destaque para os avanços em aprendizado profundo.",
                date: "23/05/2025",
                link: "#"
            },
            {
                title: "Curiosidade Tech: O Futuro dos Chips Quânticos",
                excerpt: "Saiba como os chips quânticos estão atraindo atenção e prometem revolucionar o processamento de dados até o final da década.",
                date: "23/05/2025",
                link: "#"
            },
            {
                title: "Notícia: Lançamento do Novo Framework JavaScript",
                excerpt: "Explore os detalhes do mais recente framework lançado hoje, otimizado para performance e escalabilidade em aplicações web.",
                date: "23/05/2025",
                link: "#"
            }
        ];

        const blogPosts = document.getElementById('blogPosts');
        if (blogPosts) {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'glass blog-post';
                postElement.innerHTML = `
                    <h2 class="blog-title">${post.title}</h2>
                    <p class="blog-date">${post.date}</p>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="${post.link}" class="btn-primary">Leia Mais</a>
                `;
                blogPosts.appendChild(postElement);
            });
        }
    }

    // Atualiza o ano no rodapé
    function updateYear() {
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = currentYear;
        }
    }

    // Função para adicionar classe active ao link da página atual
    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-link, .navbar-mobile-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    // Executa as funções
    generateBlogPosts();
    updateYear();
    setActiveLink();
});
=======
// Funcionalidades principais do portfólio
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Atualizar ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Efeito de scroll na navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Menu mobile toggle
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
        
        // Alterar ícone do botão
        const buttonIcon = mobileMenuButton.querySelector('svg');
        if (mobileMenu.classList.contains('open')) {
            buttonIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        } else {
            buttonIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        }
    });
    
    // Fechar menu mobile ao clicar em um link
    const mobileLinks = document.querySelectorAll('.navbar-mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            const buttonIcon = mobileMenuButton.querySelector('svg');
            buttonIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        });
    });
    
    // Smooth scroll para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignorar links com href="#"
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcular a posição considerando a navbar fixa
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animações de entrada ao scroll
    const animateElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    
    // Função para verificar se elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Função para animar elementos visíveis
    function animateOnScroll() {
        animateElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.classList.add('animated');
            }
        });
    }
    
    // Inicializar elementos como invisíveis
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });
    
    // Executar animação no carregamento e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validação básica
            if (!name || !email || !subject || !message) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            
            // Aqui você adicionaria o código para enviar o formulário
            // Por exemplo, usando fetch para uma API ou serviço de email
            
            // Simulação de envio bem-sucedido
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
});
>>>>>>> 60af6f16f0833987436042e9bcf66786533d3ded
