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