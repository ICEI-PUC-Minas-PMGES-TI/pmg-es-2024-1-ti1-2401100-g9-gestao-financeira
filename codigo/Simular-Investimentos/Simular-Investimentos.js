function convertCurrency() {
    // Pegando os valores fornecidos pelo usuário
    var valorInicial = parseFloat(document.querySelector('input[placeholder="0"]').value);
    var aportesMensais = parseFloat(document.querySelector('input[placeholder="0"]').value);
    var tipoAplicacao = document.getElementById("option-dados").value;
    var rendimentoAnual = parseFloat(document.querySelector('#option-dados option:checked').getAttribute('data-rendimento'));
    var tempoAplicacao = parseInt(document.querySelector('input[placeholder="0"]').value);

    // Calculando o resultado do investimento
    var rendimentoMensal = (rendimentoAnual / 12) / 100; // Convertendo a taxa anual para mensal
    var totalInvestido = valorInicial;
    for (var i = 1; i <= tempoAplicacao; i++) {
        totalInvestido += aportesMensais;
        totalInvestido += (totalInvestido * rendimentoMensal);
    }

    // Exibindo o resultado
    document.querySelector('h3').textContent = "R$" + totalInvestido.toFixed(2);
}