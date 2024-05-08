document.addEventListener("DOMContentLoaded", function() {
    var inputsValor = document.querySelectorAll('.valor');

    inputsValor.forEach(function(input) {
        input.addEventListener('input', function(e) {
            var valor = e.target.value.replace(/\D/g, ''); 
            valor = (parseInt(valor) / 100).toFixed(2); 

            valor = valor.replace(/\./g, ',');
            valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

            e.target.value = 'R$' + valor; 
        });
    });
});

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spanVazio = document.querySelectorAll('.span-required');
const spanNegativo = document.getElementById('span-negativo');
const mesesInput = document.getElementById('mesesInput');
const mesesError = document.getElementById('mesesError');

function setError(element, errorElement) {
    element.style.border = "2px solid #e63636";
    errorElement.style.display = 'block';
}

function removeError(element, errorElement) {
    element.style.border = '';
    errorElement.style.display = 'none';
}

function Validation(element, errorElement) {
    if (element.value.trim() === '') {
        setError(element, errorElement);
    } else {
        if (element.classList.contains('numN') && parseInt(element.value) < 0) {
            setError(element, errorElement);
            errorElement.textContent = "Valor não pode ser negativo!";
        } else {
            removeError(element, errorElement);
        }
    }
}


document.getElementById('sugerir').addEventListener('click', function(event) {
    event.preventDefault();

    campos.forEach(function(element, index) {
        Validation(element, spanVazio[index]);
    });

    Validation(mesesInput, mesesError);
});
