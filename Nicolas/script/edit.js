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

        // Verificar se o valor inicial é maior que o objetivo
        

        if (isValid) {
            updateMeta(); // Save the form data only if the form is valid
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
        const nomeMeta = document.getElementById('input1').value;
        const objetivo = document.getElementById('input2').value;
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
    
            // Verificar se o valor digitado é menor que o valor inicial
            if (valorInputFloat < valorInicial) {
                throw new Error('O valor inserido é menor que o valor atual');
            }
    
            // Atualizar nome da meta e objetivo
            metas[0].nomeMeta = nomeMeta;
            metas[0].objetivo = objetivo;
    
            // Atualizar metas no localStorage
            localStorage.setItem('metas', JSON.stringify(metas));
    
            alert('Meta atualizada com sucesso!');
            window.location.href = "metas.html"; 
        } catch (error) {
            console.error('Erro:', error);
            alert(error.message);
        }
    }
    
    
   
});
