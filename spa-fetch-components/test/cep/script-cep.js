const inputCep = document.querySelector('.input__cep')
const btnThen = document.querySelector('.btn__then')
const btnAW = document.querySelector('.btn__aw')

btnThen.addEventListener('click',() => {
    const cep = inputCep.value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const consulta = fetch(url)

    consulta
    // Converte o JSON para objeto e estrai os dados
    .then((resposta) => {
        
        if(!resposta.ok){
            throw new Error('Erro na Requisição.')
        }
        return resposta.json()

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
})


async function buscarCep(){
    const cep = inputCep.value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const consulta = fetch(url);

    if(!responta.ok){
        let dataObj = await resposta.json();
        console.log(dataObj);
    }else{
        throw new Error('Erro na Requisição.')
    }


    
    
};

btnAW.addEventListener('click', buscarCep);


 


