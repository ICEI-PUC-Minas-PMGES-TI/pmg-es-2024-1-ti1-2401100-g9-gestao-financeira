const apiUrl = 'https://5c76b2df-9da7-43f5-b653-086cbc26cd60-00-2me34kfudax39.picard.replit.dev/movimentacoes';

function readMovimentacao(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler movimentações via API JSONServer:', error);
        });
}

function readWithQueryStringMovimentacao(queryString, processaDados) {
    return fetch(`${apiUrl}${queryString}`)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler movimentações via API JSONServer:', error);
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
        });
}

function createMovimentacao(movimentacao, refreshFunction) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movimentacao),
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao inserir movimentação via API JSONServer:', error);
        })
        .finally(() => {
            if (refreshFunction)
                refreshFunction();
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
        .catch(error => {
            console.error('Erro ao atualizar movimentação via API JSONServer:', error);
        })
        .finally(() => {
            if (refreshFunction)
                refreshFunction();
        });
}

function deleteMovimentacao(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover movimentação via API JSONServer:', error);
        })
        .finally(()  => {
            if (refreshFunction)
                refreshFunction();
        });
}

function validaInput(input) {
    return input?.name !== '' &&
        input?.description !== '' &&
        input?.amount !== 0 &&
        input?.date !== '';
}

function listarMovimentacoesRecorrentes () {
    let movimentacoes;
    readWithQueryStringMovimentacao(`?recurrency=true&originalId=null`, (dados) => dados).then((dados) => movimentacoes = dados);
    return movimentacoes;
}

function listarMovimentacoesDerivadas (originalId) {
    let movimentacoes;
    readWithQueryStringMovimentacao(`?recurrency=true&originalId=${originalId}`, (dados) => {return dados}).then((dados) => {movimentacoes = dados === undefined ? [] : dados});
    return movimentacoes;
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
        updateMovimentacao(id, inputObject, () => {window.location = 'listagem.html';})
    } else {
        alert("Dados inválidos");
    }
}

function createRecurringMovimentacaoOptions(originalId, recurrenceType, recurrenceEndDate, originalExpenditure) {
    return {
        recurrencyOptions: {
            recurrenceType,
            recurrenceEndDate
        },
        originalId,
        originalExpenditure
    };
}

function gerarMovimentacaoRecorrente (movimentacaoOriginal, date) {
    const movimentacao = {
        ...movimentacaoOriginal,
        date,
        recurrencyOptions: {
            ...movimentacaoOriginal.recurrencyOptions,
            originalId: movimentacaoOriginal.id
        },
        originalExpenditure: false
    } 
    delete movimentacao.id
    return movimentacao;
}

async function cadastrarMovimentacao() {
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value + ':00';
    const movementType = document.querySelector("#movementType").value;
    const amount = movementType === 'expense' ? $("#amount").maskMoney('unmasked')[0] * -1 : $("#amount").maskMoney('unmasked')[0];

    const recurrency = document.querySelector('#recorrencia-switch').value === 'on' ? true : false;
    const recurrenceType = document.querySelector('#recurrence-type').value;
    const recurrenceEndDate = document.querySelector('#recurrence-end-date').value + ':00';

    let recurrencyOptions = {};

    if (recurrency) {
        recurrencyOptions = createRecurringMovimentacaoOptions(null, recurrenceType, recurrenceEndDate, true);
    }

    const inputObject = {
        name,
        description,
        date,
        amount,
        recurrency,
        ...recurrencyOptions
    }

    if (validaInput(inputObject)) {
        if (recurrency) {
            await createMovimentacao(inputObject).then(async (data) => {await cadastrarMovimentacoesRecorrentesSubsequentes(data).then(() => window.location = 'listagem.html')});
            return;
        }
        createMovimentacao(inputObject).then(() => window.location = 'listagem.html');
    } else {
        alert("Dados inválidos");
    }
}

function excluirMovimentacao (id) {
    deleteMovimentacao(id);
}

function getSecondsDurationOfRecurrencyType(recurrencyType) {
    switch (recurrencyType) {
        case 'weekly': 
            return 604800000;
        case 'biweekly':
            return 1296000000;
        case 'monthly':
            return 2628000000;
        default:
            return 2628000000;
    }
}

async function cadastrarMovimentacoesRecorrentesSubsequentes(movimentacao) {
    const recurrencyTimeGap = getSecondsDurationOfRecurrencyType(movimentacao.recurrencyOptions.recurrenceType)
    const dataFinal = Date.parse(movimentacao.recurrencyOptions.recurrenceEndDate);
    let dataUltimaMovimentacaoRecorrente = Date.parse(movimentacao.date); 

    while (dataUltimaMovimentacaoRecorrente <= dataFinal) {
        const novaMovimentacao = gerarMovimentacaoRecorrente(movimentacao, (new Date(dataUltimaMovimentacaoRecorrente)).toISOString().slice(0, 19));
        await createMovimentacao(novaMovimentacao);
        dataUltimaMovimentacaoRecorrente += recurrencyTimeGap;
    }
}

$(function() {
     $("#amount").maskMoney({prefix:'R$', allowNegative: false, thousands:'.', decimal:',', affixesStay: false});
});