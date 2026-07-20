
const opcoesAvaliacao = [
    { value: 'tratamento', label: 'Tratamento'},
    { value: 'localidade', label: 'Localidade'},
    { value: 'tratamento_animais', label:'Tratamento aos animais'},
    { value: 'condicao_predio', label:'Condição do predio'},
    { value: 'informacoes', label:'Informações'}
];


function gerarCheckboxes(opcoes, name) {
    return opcoes.map(opcao => `
        <div>
            <label for="${name}_${opcao.value}">${opcao.label}</label>
            <input type="checkbox" name="${name}" value="${opcao.value}" id="${name}_${opcao.value}">
        </div>
    `).join('');
}

const containerMais = document.getElementById('checkboxes-mais-gostou');
const containerMenos = document.getElementById('checkboxes-menos-gostou');

containerMais.innerHTML = gerarCheckboxes(opcoesAvaliacao, 'mais_gostou');
containerMenos.innerHTML = gerarCheckboxes(opcoesAvaliacao, 'menos_gostou');

