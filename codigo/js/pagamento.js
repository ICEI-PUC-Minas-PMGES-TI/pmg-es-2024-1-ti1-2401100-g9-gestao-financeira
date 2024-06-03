const tbody = document.querySelector("tbody");

function carregarTabela() {

    let pagamentos = JSON.parse(localStorage.getItem("pagamentos")) || [];

    for (let i = 0; i < pagamentos.length; i++) {
        
        const pagamento = pagamentos[i];

        let tr = document.createElement("tr");
        tr.id = `pagamento-${pagamento.id}`;

        const celulas = Object.values(pagamento);

        for (let j = 0; j < celulas.length; j++) {
            
            const td = document.createElement("td");
            td.innerText = celulas[j];
            tr.appendChild(td);
        }

        let tdAcao = criarBotoesAcao();
        tr.appendChild(tdAcao);

        tbody.appendChild(tr);   
    }
}

function criarBotao(rotulo) {

    const botao = document.createElement("button");

    botao.type = "button";

    botao.innerText = rotulo;

    return botao; 
}

function criarBotoesAcao() {

    const td = document.createElement("td");
    const editarButton = criarBotao("Editar");
    const excluirButton = criarBotao("Excluir");

    editarButton.addEventListener("click", (event) => {

        const linha = event.target.parentElement.parentElement;
        const celulas = linha.childNodes;
        let id = parseInt(celulas[0].innerText);
        
        sessionStorage.setItem("idPagamento", id);

        window.location.href = "editar-pagamento.html";
    });

    excluirButton.addEventListener("click", (event) => {

        const linha = event.target.parentElement.parentElement;
        excluir(linha);

    });

    td.appendChild(editarButton);
    td.appendChild(excluirButton);

    return td;
}

function excluir(linha) {

    const celulas = linha.childNodes;
    let idPgto = parseInt(celulas[0].innerText);

    let pagamentos = JSON.parse(localStorage.getItem("pagamentos")) || [];

    let indicePgtoExcluido = buscarPagamento(idPgto, pagamentos);

    let confirmacao = confirm("Deseja excluir esta categoria?");

    if (confirmacao) {

        pagamentos.splice(indicePgtoExcluido, 1);

        localStorage.setItem("pagamentos", JSON.stringify(pagamentos));

        linha.remove();
    }
}

function buscarPagamento(id, pagamentos) {

    for (let i = 0; i < pagamentos.length; i++) {
        
        if (pagamentos[i].id == id)
            return i;
    }

    return -1;
}

window.addEventListener("load", () => {
    carregarTabela();
});
