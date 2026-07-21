const legends = ['legend-dados-pessoais', 'legend-dados-pet', 'legend-buscar-pet'];

legends.forEach(legendId => {
    const legend = document.getElementById(legendId);
    if (legend && legend.parentElement) {
        const fieldset = legend.parentElement;
        const elements = fieldset.querySelectorAll('input, select, textarea');

        elements.forEach(el => {
            if (el.type !== 'hidden' && el.type !== 'submit' && el.type !== 'button') {
                el.required = true;

                el.addEventListener('invalid', function (e) {
                    if (!this.value) {
                        this.setCustomValidity('Campo obrigatório, por favor preencher');
                    }
                });

                el.addEventListener('input', function (e) {
                    this.setCustomValidity('');
                });
            }
        });
    }
});
