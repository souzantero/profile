document.addEventListener('DOMContentLoaded', function() {
    // Efeito de animação para elementos da timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Função para verificar se um elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Função para animar elementos quando estiverem visíveis
    function animateOnScroll() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animated');
            }
        });
    }
    
    // Inicializar animações
    animateOnScroll();
    
    // Verificar novamente quando rolar a página
    window.addEventListener('scroll', animateOnScroll);
    
    // Adicionar classe 'animated' aos itens inicialmente visíveis
    setTimeout(() => {
        document.querySelectorAll('.profile-card, .section-title').forEach(el => {
            el.classList.add('animated');
        });
    }, 300);

    // Funcionalidade de alternância de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Função para atualizar o idioma na página
    function updateLanguage(lang) {
        document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
        
        // Atualizar todos os elementos com atributos data-pt e data-en
        document.querySelectorAll('[data-pt], [data-en]').forEach(element => {
            if (element.hasAttribute('data-' + lang)) {
                element.textContent = element.getAttribute('data-' + lang);
            }
        });
    }
    
    // Adicionar evento de clique aos botões de idioma
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Remover classe 'active' de todos os botões
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe 'active' ao botão clicado
            this.classList.add('active');
            
            // Atualizar o idioma
            updateLanguage(lang);
            
            // Salvar a preferência de idioma no localStorage
            localStorage.setItem('preferredLanguage', lang);
        });
    });
    
    // Verificar se há uma preferência de idioma salva
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        // Ativar o botão do idioma salvo
        document.querySelector('.lang-btn[data-lang="' + savedLanguage + '"]').click();
    }
});
