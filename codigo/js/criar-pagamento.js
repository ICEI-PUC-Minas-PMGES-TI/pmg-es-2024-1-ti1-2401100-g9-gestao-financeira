const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome-pgto");
const valorInput = document.querySelector("#valor-pgto");

function cadastrar() {

    let pagamento = new Object();
    pagamento.id = obterID();
    pagamento.nome = nomeInput.value.trim();
    pagamento.valor = valorInput.value.trim();

    let pagamentos = JSON.parse(localStorage.getItem("pagamentos")) || [];
    pagamentos.push(pagamento);  
    localStorage.setItem("pagamentos", JSON.stringify(pagamentos));

    form.reset(); 
    window.location.href = "index.html"; 
}

function obterID() {

    let id = parseInt(localStorage.getItem("id")) || 0;

    id += 1;
    
    localStorage.setItem("id", id);

    return id;
}