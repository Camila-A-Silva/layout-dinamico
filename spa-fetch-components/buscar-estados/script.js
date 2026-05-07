const estadoSelect = document.querySelector('#estados');
const municipiosSelect = document.querySelector('#municipios');


const uf = estado.value
const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`
const consulta = fetch(url)

estado.addEventListener('change', async function (){
    const estadoSelecionado = estadoSelect.value;
    municipiosSelect.innerHTML = '<option value=">Selecione um município</option>';
    municipiosSelect.disabled = true;

    if (estadoSelecionado){
        const re
    }
    
})