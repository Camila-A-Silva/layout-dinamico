/* Inicializando um componente de menu mobile
    Recev=be o elemento como parâmetro para permitir reutlização */

const criarmenu = (menu) => {
    
    const botao = menu.querySelectorAll('.menu__botao');

    const toggleMneu = () => {

        menu.classList.toggle('active');

        const ativo = menu.classList.contains('active');

        botao.setAttribute('aria-expanded', ativo);
        botao.setAttribute(
            'aria-label',
            ativo ? 'Fechar Menu' : 'Abrir Menu'
        );
    };

    const fecharComEsc = (event) => {

        const isEsc = event.key === 'Escape';
        const ativo = menu.classList.contains('active');

        if (isEsc && ativo) {
            menu.classList.remove('active');
            botao.setAttribute('aria-expanded', false);
            botao.setAttribute('aria-label', 'Abri Menu');
            botao.focus();
        }
    };

    botao.addEventListener('click', toggleMneu);

    document.addEventListener('keydown', fecharComEsc);
};

/* Inicializar todos os componentes encontrados na página */
document.querySelectorAll('[data-menu').forEach((menu) => criarmenu(menu));