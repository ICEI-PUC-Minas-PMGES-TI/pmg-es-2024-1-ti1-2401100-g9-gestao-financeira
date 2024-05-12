const apiUrl = 'https://5c76b2df-9da7-43f5-b653-086cbc26cd60-00-2me34kfudax39.picard.replit.dev/movimentacoes';

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readMovimentacao(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler movimentações via API JSONServer:', error);
            displayMessage("Erro ao ler movimentações");
        });
}

function getMovimentacao(id, processaDados) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler movimentações via API JSONServer:', error);
            displayMessage("Erro ao ler movimentações");
        });
}

function createMovimentacao(movimentacao, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movimentacao),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Contato inserido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir movimentação via API JSONServer:', error);
            displayMessage("Erro ao inserir movimentação");
        })
        .finally(() => {
            window.location = 'listagem.html';
        });
}

function updateMovimentacao(id, movimentacao, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movimentacao),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Movimentação alterada com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar movimentação via API JSONServer:', error);
            displayMessage("Erro ao atualizar movimentação");
        })
        .finally(() => {
            window.location = 'listagem.html';
        });
}

function deleteMovimentacao(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Movimentação removida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover movimentação via API JSONServer:', error);
            displayMessage("Erro ao remover movimentação");
        })
        .finally(()  => {
            window.location = 'listagem.html';
        });
}

function validaInput(input) {
    return input?.name !== '' &&
        input?.description !== '' &&
        input?.amount !== 0 &&
        input?.date !== '';
}

function atualizarMovimentacao() {
    const id = document.querySelector("#id").value;
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value + ':00';
    const movementType = document.querySelector("#movementType").value;
    const amount = movementType === 'expense' ? $("#amount").maskMoney('unmasked')[0] * -1 : $("#amount").maskMoney('unmasked')[0];

    const inputObject = {
        name,
        description,
        date,
        amount
    }

    if (validaInput(inputObject)) {
        updateMovimentacao(id, inputObject)
    } else {
        alert("Dados inválidos");
    }
}

async function cadastrarMovimentacao() {
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value + ':00';
    const movementType = document.querySelector("#movementType").value;
    const amount = movementType === 'expense' ? $("#amount").maskMoney('unmasked')[0] * -1 : $("#amount").maskMoney('unmasked')[0];

    const inputObject = {
        name,
        description,
        date,
        amount
    }

    console.log(inputObject);

    if (validaInput(inputObject)) {
        await createMovimentacao(inputObject);
    } else {
        alert("Dados inválidos");
    }
}

function excluirMovimentacao (id) {
    deleteMovimentacao(id);
}

$(function() {
     $("#amount").maskMoney({prefix:'R$', allowNegative: false, thousands:'.', decimal:',', affixesStay: false});
});