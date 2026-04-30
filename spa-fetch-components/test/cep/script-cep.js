const inputCep = document.querySelector('#input__cep')
const btnThen = document.querySelector('#btn__then')
const btnAW = document.querySelector('#btn__aw')


const url = 'https://viacep.com.br/ws/${inputCep}/json/'
const consulta = fetch(url)

const then = () => {
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
}

