// Teste com os exeplos da w3 Schools

function geradoraErro (mensagem, codigo, tipo) {

    let erro = new Error(mensagem);
        erro.codigo = codigo;
        erro.tipo = tipo;
        
        throw erro;
}


try{

    let idade = -5
    ;

    if (idade < 0) {
       throw geradoraErro('Idade inválida', 1001, 'VALIDACAO'); 
    }

}catch(erro){
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br/>
    <strong>Mensagem:</strong> ${erro.message} <br/>
    <strong>Código:</strong> ${erro.codigo} <br/>
    <strong>Topo:</strong> ${erro.tipo} <br/>
    <strong>Stack:</strong> <span> ${erro.stack} </span>
    `;

    document.body.innerHTML = text

    console.log(erro);
};

// carregarComponente('c-test.html', document.querySelector('body'))

// const test ='c-test.html'
// const conteiner = document.querySelector('body')
// carregarComponente(test, conteiner);



/* Criar uma requisição HTTP com fetch e .then */

const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url)

consulta
// Converte o JSON para objeto e estrai os dados
.then((response) => {
    
    if(!response.ok){
        throw new Error('Erro na Requisição.')
    }
    return response.json()

})  
// Exibe o dados estraídos 
.then((dados) => {

    if (dados.erro){
        throw new Error('CEP inválido ou não escontrado.')
    }
    console.log(dados)
})
.catch((erro) => {

    console.warn(erro.message)
})







/* Criar uma requisição HTTP com fecth e async/await */












