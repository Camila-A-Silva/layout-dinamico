// 2- Utiliza querySelector para seleção mais moderna e flexivel

const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelector('.news');

const loadPreferences = () => {
    // Cor 
    const savedColor = localStorage.getItem('primaryColor');
    if(savedColor) {
        document.documentElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    }

    // Cor dos Artigos
    const savedArticleColor = localStorage.getItem('articleColor');
    if(savedArticleColor) {
        document.documentElement.style.setProperty('--article-color', savedArticleColor);
        articleColorPicker.value = savedArticleColor;
    }

    // Fonte
    const savedFont = localStorage.getItem('fontFamily');
    if(savedFont) {
        document.documentElement.style.setProperty('--font-family', savedFont);
        fontSelect.value = savedFont;
    }

    // Tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = '<span class="material-icons">light_mode</span>';
    }
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

fontSelect.addEventListener('change', (e) => {
    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font);
    localStorage.setItem('fontFamily', font)
});

themeToggle.addEventListener('click', () => {
    // verifica se existe a classe. Se existe - tira, se não - coloque
    body.classList.toggle('dark');
    // Procura pela classe
    const isDark = body.classList.contains('dark')

    themeToggle.innerHTML = isDark
        ? '<span class="material-icons">light_mode</span>'
        : '<span class="material-icons">dark_mode</span>';
        // if ternario
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Inicializa a aplicação carregando as preferências
loadPreferences();
