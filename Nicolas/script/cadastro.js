document.addEventListener("DOMContentLoaded", function() {
    var inputsValor = document.querySelectorAll('.valor');

    inputsValor.forEach(function(input) {
        input.addEventListener('input', function(e) {
            var valor = e.target.value.replace(/\D/g, ''); 
            
            if (valor === '') {
                e.target.value = '';
                return;
            }
            
            valor = (parseInt(valor) / 100).toFixed(2);

            valor = valor.replace(/\./g, ',');
            valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

            e.target.value = 'R$' + valor; 
        });
    });

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        var isValid = true;

        var inputs = this.querySelectorAll('input');
        inputs.forEach(function(input) {
            var errorElement = input.nextElementSibling;
            if (input.value.trim() === '') {
                setError(input, errorElement);
                isValid = false;
            } else if (input.id === 'input2' && input.value.trim() === 'R$0,00') {
                setError(input, errorElement, "Digite um valor maior");
                isValid = false;
            } else {
                if (input.classList.contains('valor')) {
                    var numericalValue = input.value.replace(/[^\d,]/g, '').replace(',', '.');
                    if (isNaN(parseFloat(numericalValue))) {
                        setError(input, errorElement, "Valor inválido");
                        input.value = '';
                        isValid = false;
                    } else {
                        removeError(input, errorElement);
                    }
                } else {
                    removeError(input, errorElement);
                }
            }
        });

        if (isValid) {
            saveMeta(); // Save the form data only if the form is valid
        }
    });

    function setError(element, errorElement, message = "Campo Vazio!") {
        element.style.border = '2px solid red';
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function removeError(element, errorElement) {
        element.style.border = '';
        errorElement.style.display = 'none';
    }

    function saveMeta() {
        const nomeMeta = document.getElementById('input1').value;
        const objetivo = document.getElementById('input2').value;
        const valorInicial = document.getElementById('input3').value;

        const meta = {
            nomeMeta: nomeMeta,
            objetivo: objetivo,
            valorInicial: valorInicial
        };

        let metas = JSON.parse(localStorage.getItem('metas')) || [];

        metas.push(meta);

        localStorage.setItem('metas', JSON.stringify(metas));

        alert('Meta salva com sucesso!');
        document.getElementById('form').reset(); // Clear the form after saving
    }
});
