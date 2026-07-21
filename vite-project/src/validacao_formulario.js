let senha = document.getElementById('senha');
let error_senha = document.getElementById('error_senha')
senha.onblur = function () {
    if ((senha.value.length > 8)) {
        this.classList.add('invalid');
        error_senha.innerHTML = "Senha invalida! Maior que 8 characteres"
    }
    else {
        if ((senha.value.length <= 8) && (this.classList.contains('invalid'))) {
            this.classList.remove('invalid');
            error_senha.innerHTML = "";
        }
    }
};

let confirmar_senha = document.getElementById('confirmar_senha');
let error_confirmar_senha = document.getElementById('error_confirmar_senha');

confirmar_senha.onblur = function () {
    if ((confirmar_senha.value != senha.value)) {
        this.classList.add('invalid');
        error_confirmar_senha.innerHTML = "Senhas diferentes!"
    }
    else {
        if ((confirmar_senha.value == senha.value) && (this.classList.contains('invalid'))) {
            this.classList.remove('invalid');
            error_confirmar_senha.innerHTML = "";
        }
    }
};


let nome = document.getElementById('name');
let error_nome = document.getElementById('error_name');
nome.onblur = function () {
    if (nome.value.length > 100) {
        this.classList.add('invalid');
        error_nome.innerHTML = "O nome exedeu 100 characteres";
    } else {
        if (nome.value.length <= 100 && this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error_nome.innerHTML = "";
        }
    }
};


let email = document.getElementById('email');
let error_email = document.getElementById('error_email');
email.onblur = function () {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value) && email.value !== "") {
        this.classList.add('invalid');
        error_email.innerHTML = "Não é um email valido";
    } else {
        if ((regexEmail.test(email.value) || email.value === "") && this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error_email.innerHTML = "";
        }
    }
};


let telefone = document.getElementById('telefone');
let error_telefone = document.getElementById('error_telefone');
telefone.onblur = function () {
    let numeros = telefone.value.replace(/\D/g, '');
    if (numeros.length !== 11 && telefone.value !== "") {
        this.classList.add('invalid');
        error_telefone.innerHTML = "O numero é invalido";
    } else {
        if ((numeros.length === 11 || telefone.value === "") && this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error_telefone.innerHTML = "";
        }
    }
};


let rede_social = document.getElementById('rede_social');
let error_rede_social = document.getElementById('error_rede_social');
rede_social.onblur = function () {
    let regexUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!regexUrl.test(rede_social.value) && rede_social.value !== "") {
        this.classList.add('invalid');
        error_rede_social.innerHTML = "perfil de rede social deve ser um link";
    } else {
        if ((regexUrl.test(rede_social.value) || rede_social.value === "") && this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error_rede_social.innerHTML = "";
        }
    }
};


let pesquisa = document.getElementById('pesquisa');
let error_pesquisa = document.getElementById('error_pesquisa');
pesquisa.onblur = function () {
    let isApenasNumeros = /^\d+$/.test(pesquisa.value);
    let isValido = false;

    if (isApenasNumeros) {
        if (pesquisa.value.length <= 10) {
            isValido = true;
        }
    } else {
        if (pesquisa.value.length <= 100) {
            isValido = true;
        }
    }

    if (!isValido) {
        this.classList.add('invalid');
        error_pesquisa.innerHTML = "o nome ou codigo nao existe no sistema.";
    } else {
        if (isValido && this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error_pesquisa.innerHTML = "";
        }
    }
};

let nome_pet = document.getElementById('nome_pet');
let error_nome_pet = document.getElementById('error_nome_pet');
nome_pet.onblur = function () {
    let isApenasNumeros = /^\d+$/.test(nome_pet.value);
    let isValido = false;

    if (isApenasNumeros) {
        if (nome_pet.value.length <= 10) {
            isValido = true;
        }
    } else {
        if (nome_pet.value.length <= 100) {
            isValido = true;
        }
    }

    if (!isValido) {
        this.classList.add('invalid');
        error_nome_pet.innerHTML = "o nome ou codigo nao existe no sistema.";
    } else {
        if (isValido && this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error_nome_pet.innerHTML = "";
        }
    }
};

let doc_identidade = document.getElementById('documento_de_identidade');
let error_doc = document.getElementById('error_documento_de_identidade');
doc_identidade.addEventListener('change', function () {
    let arquivo = doc_identidade.files[0];
    if (arquivo) {
        if (arquivo.type !== 'application/pdf' && !arquivo.name.toLowerCase().endsWith('.pdf')) {
            this.classList.add('invalid');
            error_doc.innerHTML = "o arquivo não é um pdf";
        } else {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
                error_doc.innerHTML = "";
            }
        }
    } else {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error_doc.innerHTML = "";
        }
    }
});