// Teste com os exeplos da w3 Schools

let result = "Not Active.";
let isActive = true;
console.log(result, isActive)

if (isActive = true) {
    result = "Active!";
}else{
    result = "Not Active"
}

console.log(result, isActive)

try{
    

}catch(erro){
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br/>
    <strong>Mensagem:</strong> ${erro.message} <br/>
    <strong>Stack:</strong> <span> ${erro.stack} </span>
    `;

    document.body.innerHTML = text
};


const carregarComponente = async (caminho, container) => {
    try {
        const resposta = await fetch(caminho);

        if (!resposta.ok) {
            throw new Error('Erro ao carregar componente');
        }

        const html = await resposta.text();

        container.innerHTML = html;

    }catch(erro){
        console.error(erro);

    }
};