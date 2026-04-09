// 2- Utiliza querySelector para seleção mais moderna e flexivel

const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelector('.news');

const loadPreferences = () => {
    
};

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value; // Capturar o movimento do mouse
    // Mudar o valor da variável no CSS, com o valor captura
    document.documentElement.style.setProperty('--primary-color', color);
    // Inserir a chave (primaryColor) e o valor (color) no local storag
    localStorage.setItem('primaryColor', color);    
});

articleColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    newsArticles.forEach(article => {
        article.style.backgroundColor = color;
    });
    localStorage.setItem('articleColor', color);
});

fontSelect.addEventListener('change', (e) => {});

themeToggle.addEventListener('click', () => {});

// Inicializa a aplicação carregando as preferências
