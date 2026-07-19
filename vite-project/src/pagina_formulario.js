

const opecoesAvaliacao = [
    { value: 'tratamento', label: 'Tratamento'},
    { value: 'localidade', label: 'Localidade'},
    { value: 'tratamento_animais', label:'Tratamento aos animais'},
    { value: 'condicao_predio', label:'Condição do predio'},
    { valeu: 'informacoes' , label:'Informações'}
]

function gerarCheckboxes(opcoes,name){
    let html = '';

    opcoes.forEach(opcao => {
        html += `
            <div>
                <label for="${name}_${opcao.value}">${opcao.label}</label>
                <input type="" name="${name}" value="${opcao.value}" id ="${name}_${opcao.value}">
            </div>
        `;
    });

    return html;
}

const containerMais = document.getElementById('container-mais-gostou');
const containerMenos = document.getElementById('cointer-menos-gostou');

containerMais.innerHTML = gerarCheckeboxes(opecoesAvalaioacao, 'mais_gostou');
containerMenos.innerHTML = gerarCheckboxes(opcoesAvaliacao, 'menos_gostou');
