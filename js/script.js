// Script para garantir que apenas um formulário esteja aberto por vez
const collapseElements = document.querySelectorAll('.collapse');

document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-bs-target');
        
        // Fechar todos os outros formulários
        collapseElements.forEach(element => {
            if (element.id !== target.substring(1)) {
                const bsCollapse = new bootstrap.Collapse(element, {toggle: false});
                bsCollapse.hide();
            }
        });
    });
});

// Simular animações de entrada
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 200 * index);
    });
});