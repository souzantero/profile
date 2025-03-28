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
});
