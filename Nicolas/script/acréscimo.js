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

    async function updateMeta() {
        const metaId = new URLSearchParams(window.location.search).get('id'); 
        const valorAcrescentar = parseFloat(document.getElementById('input2').value.replace('R$', '').replace('.', '').replace(',', '.'));
    
        if (isNaN(valorAcrescentar)) {
            alert('Por favor, insira um valor válido.');
            return;
        }
    
        try {
            const response = await fetch(`/localhost/metas/${id}`);
            const meta = await response.json();
    
            if (meta) {
                // Atualizando o valor inicial da meta
                meta.valorInicial += valorAcrescentar;
    
                // Salvando de volta no servidor
                const updateResponse = await fetch(`/localhost/metas/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(meta)
                });
    
                if (updateResponse.ok) {
                    alert('Valor atualizado com sucesso!');
                    window.location.href = './metas.html'; 
                } else {
                    alert('Ocorreu um erro ao atualizar a meta no servidor.');
                }
            } else {
                alert('Meta não encontrada.');
            }
        } catch (error) {
            console.error('Erro ao atualizar a meta:', error);
            alert('Ocorreu um erro ao atualizar a meta. Por favor, tente novamente mais tarde.');
        }
    }
});
