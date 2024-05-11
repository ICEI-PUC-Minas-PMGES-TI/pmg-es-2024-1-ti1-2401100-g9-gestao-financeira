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
        if (element.classList.contains('numN') && parseInt(element.value) <= 0) {
            setError(element, errorElement);
            errorElement.textContent = "Valor não pode ser zero ou negativo!";
        } else if (element.classList.contains('valor')) {
            var valor = parseFloat(element.value.replace('R$', '').replace('.', '').replace(',', '.'));
            if (valor <= 0) {
                setError(element, errorElement);
                errorElement.textContent = "Valor não pode ser zero ou negativo!";
            } else {
                removeError(element, errorElement);
            }
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

    var camposInvalidos = document.querySelectorAll('.span-required[style="display: block;"]');
    if (camposInvalidos.length > 0) return;

    var objetivo = parseFloat(document.querySelector('.valor').value.replace('R$', '').replace('.', '').replace(',', '.'));
    var meses = parseInt(document.querySelector('.numN').value);
    var risco = document.querySelector('select').value;
    var aportes = parseFloat(document.querySelectorAll('.valor')[1].value.replace('R$', '').replace('.', '').replace(',', '.'));

    var sugestao = "";

    if (risco === "1") { // Alto risco
        if (meses >= 12) {
            if (objetivo >= 10000) {
                sugestao = "Considerando o risco alto, o prazo e o valor significativo, uma sugestão de investimento seria em ações ou fundos de investimento diversificados.";
            } else {
                sugestao = "Considerando o risco alto, o prazo e o valor mais baixo, uma sugestão de investimento seria em criptomoedas.";
            }
        } else {
            sugestao = "Considerando o risco alto e o prazo curto, é importante avaliar opções de liquidez imediata, como investimentos de curto prazo ou até mesmo manter o dinheiro disponível em uma conta poupança.";
        }
    } else if(risco === "2"){ // Baixo risco
        if (meses >= 24) {
            if (objetivo >= 5000) {
                sugestao = "Considerando o risco baixo, o prazo e o valor significativo, uma sugestão de investimento seria em títulos públicos ou fundos de renda fixa.";
            } else {
                sugestao = "Considerando o risco baixo, o prazo e o valor mais baixo, uma sugestão de investimento seria em poupança ou tesouro direto.";
            }
        } else {
            sugestao = "Considerando o risco baixo e o prazo curto, é importante priorizar opções de liquidez imediata, como poupança ou tesouro direto.";
        }
    }else if (risco === "3") { // Médio risco
        if (meses >= 18) {
            if (objetivo >= 7500) {
                sugestao = "Considerando o risco médio, o prazo e o valor significativo, uma sugestão de investimento seria em fundos multimercado com uma diversificação adequada.";
            } else {
                sugestao = "Considerando o risco médio, o prazo e o valor mais baixo, uma sugestão de investimento seria em ações de empresas com bom potencial de crescimento.";
            }
        } else {
            sugestao = "Considerando o risco médio e o prazo relativamente curto, é importante buscar opções de investimento que ofereçam um equilíbrio entre risco e retorno. Uma estratégia interessante seria diversificar os investimentos em diferentes classes de ativos, como ações, títulos e fundos imobiliários.";
        }
    }

    document.querySelector('.result').textContent = sugestao;
});

