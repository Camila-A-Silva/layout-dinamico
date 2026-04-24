// Teste com os exeplos da w3 Schools





try{
    okmygt
}catch(erro){
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br/>
    <strong>Mensagem:</strong> ${erro.message} <br/>
    <strong>Stack:</strong> <span> ${erro.stack} </span>
    `;

    document.body.innerHTML = text
};