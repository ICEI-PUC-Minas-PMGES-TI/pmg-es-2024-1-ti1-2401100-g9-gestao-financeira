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

    carregarMetas();

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
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
            updateMeta();
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

    function carregarMetas() {
        try {
            // Verifica se há metas no localStorage
            const metas = JSON.parse(localStorage.getItem('metas'));
    
            if (metas) {
                console.log('Metas carregadas do localStorage:');
                console.log(metas);
            } else {
                console.log('Nenhuma meta encontrada no localStorage.');
            }
        } catch (error) {
            console.error('Erro ao carregar as metas do localStorage:', error);
        }
    }
    
    function updateMeta() {
        const valorInput = document.getElementById('input2').value;
    
        try {
            // Obter metas do localStorage
            let metas = JSON.parse(localStorage.getItem('metas')) || [];
    
            // Verificar se há pelo menos uma meta
            if (metas.length === 0) {
                throw new Error('Nenhuma meta encontrada');
            }

            // Obter o valor inicial da primeira meta
            const valorInicial = parseFloat(metas[0].valorInicial.replace('R$', '').replace('.', '').replace(',', '.'));

            // Obter o valor digitado no input2
            const valorInputFloat = parseFloat(valorInput.replace('R$', '').replace('.', '').replace(',', '.'));

            // Somar os valores
            const novoValor = valorInicial - valorInputFloat;

            // Atualizar o valor inicial da meta
            metas[0].valorInicial = 'R$' + novoValor.toFixed(2).replace('.', ',');

            // Atualizar metas no localStorage
            localStorage.setItem('metas', JSON.stringify(metas));
    
            alert('Valor atualizado com sucesso!');
            window.location.href = "metas.html"; 
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao atualizar o valor');
        }
    }
});
