let pagamentos = [];
let pagamento = {};

const form = document.querySelector("form");
const idInput = document.querySelector("#id-pgto");
const nomeInput = document.querySelector("#nome-pgto");
const valorInput = document.querySelector("#valor-pgto");

function carregarDadosFormulario() {

    const id = sessionStorage.getItem("idPagamento");

    pagamentos = JSON.parse(localStorage.getItem("pagamentos")) || [];

    pagamento = pagamentos.find((d) => { 
        return d.id == id; 
    });

    idInput.value = pagamento.id;
    nomeInput.value = pagamento.nome;
    valorInput.value = pagamento.valor;
}

function buscarPagamento(id) {

    for (let i = 0; i < pagamentos.length; i++) {
        
        if (pagamentos[i].id == id)
            return i;
    }

    return -1;
}

function atualizar() {

    pagamento.nome = nomeInput.value.trim();
    pagamento.valor = valorInput.value.trim();

    let indice = buscarPagamento(pagamento.id);

    pagamentos[indice] = pagamento;

    localStorage.setItem("pagamentos", JSON.stringify(pagamentos));

    form.reset(); 

    window.location.href = "index.html";
    
}

window.addEventListener("load", () => {

    carregarDadosFormulario();

});