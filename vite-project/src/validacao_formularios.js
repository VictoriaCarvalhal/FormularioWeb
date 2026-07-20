let senha = document.getElementById('senha');
let error_senha = document.getElementById('error_senha')
senha.onblur = function(){
    if ((senha.value.length > 8)){
        this.classList.add('invalid');
        error_senha.innerHTML = "Senha invalida! Maior que 8 characteres"
    }
    else{
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

if (this.classList.contains('invalid')) {
    
}