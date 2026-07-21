let formElem = document.getElementById("form_adocao_pet");

formElem.onsubmit = function (e) {
    e.preventDefault();

    if (!formElem.checkValidity()) {
        formElem.reportValidity();
        return;
    }

    const camposInvalidos = formElem.querySelectorAll('.invalid');

    if (camposInvalidos.length > 0) {
        camposInvalidos[0].focus();
        alert("Erro: Formulário foi preenchido de maneira errada.");
        return;
    }

    let dadosFormulario = new FormData(formElem);
    let dadosObj = {};
    dadosFormulario.forEach(function (valor, chave) {
        if (dadosObj[chave]) {
            if (!Array.isArray(dadosObj[chave])) {
                dadosObj[chave] = [dadosObj[chave]];
            }
            dadosObj[chave].push(valor);
        } else {
            dadosObj[chave] = valor;
        }
    });

    console.log("Dados do formulário:", dadosObj);

    alert("Formulário enviado com sucesso!");

    // FORA DO ESCOPO (comentado):
    // O trecho abaixo usava fetch() para enviar os dados a um servidor backend.
    // O exercício pede apenas capturar o submit, ler valores, validar com JS
    // e exibir mensagens de erro/sucesso — não requer um servidor backend.
    //
    // let response = await fetch('/artivle/formdata/post/user', {
    //     method: 'POST',
    //     body: new FormData(formElem)
    // });
    //
    // if (response.ok) {
    //     let htmlResponse = await response.json();
    //     console.log("Deu certo! HTML recebido:", htmlResponse);
    //     alert("Formulario foi enviado com sucesso!");
    // } else {
    //     alert("HTTP-Error: " + response.status);
    // }
};
