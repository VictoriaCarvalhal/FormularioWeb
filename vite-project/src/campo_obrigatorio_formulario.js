const camposObrigatorios = document.querySelectorAll('[aria-required="true"]');

camposObrigatorios.forEach(el => {
    el.required = true;

    el.addEventListener('invalid', function () {
        if (!this.value) {
            this.setCustomValidity('Campo obrigatório, por favor preencher');
        }
    });

    el.addEventListener('input', function () {
        this.setCustomValidity('');
    });
});
