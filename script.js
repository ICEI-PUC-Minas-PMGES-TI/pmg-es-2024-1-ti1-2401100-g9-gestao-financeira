// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTransactionBtn = document.getElementById('add-transaction-btn');
    const modal = document.getElementById('transaction-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const transactionForm = document.getElementById('transaction-form');
    const expensesAmountElem = document.getElementById('expenses-amount');
    const incomesAmountElem = document.getElementById('incomes-amount');
    const balanceAmountElem = document.getElementById('balance-amount');
    const transactionsContainer = document.getElementById('transactions-container');
    
    let expenses = 0.00;
    let incomes = 0.00;

    function updateBalance() {
        const balance = incomes - expenses;
        expensesAmountElem.textContent = `$${expenses.toFixed(2)}`;
        incomesAmountElem.textContent = `$${incomes.toFixed(2)}`;
        balanceAmountElem.textContent = `$${balance.toFixed(2)}`;
    }

    function addTransaction(type, amount) {
        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const transactionElem = document.createElement('div');
        transactionElem.classList.add('transaction');

        const transactionTypeElem = document.createElement('div');
        transactionTypeElem.classList.add('transaction-type', type === 'income' ? 'income' : 'expense');

        const transactionDetailsElem = document.createElement('div');
        transactionDetailsElem.classList.add('transaction-details');
        transactionDetailsElem.innerHTML = `
            <p>${type === 'income' ? 'Entrada' : 'Saída'}</p>
            <p>${time} - ${month} ${day}</p>
        `;

        const transactionAmountElem = document.createElement('div');
        transactionAmountElem.classList.add('transaction-amount');
        transactionAmountElem.textContent = `${type === 'income' ? '+' : '-'}R$${amount.toFixed(2)}`;

        transactionElem.appendChild(transactionTypeElem);
        transactionElem.appendChild(transactionDetailsElem);
        transactionElem.appendChild(transactionAmountElem);

        let monthElem = document.getElementById(month);
        if (!monthElem) {
            monthElem = document.createElement('div');
            monthElem.classList.add('month');
            monthElem.id = month;
            monthElem.innerHTML = `<h2>${month}</h2>`;
            transactionsContainer.appendChild(monthElem);
        }

        monthElem.appendChild(transactionElem);

        if (type === 'income') {
            incomes += amount;
        } else {
            expenses += amount;
        }

        updateBalance();
    }

    addTransactionBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    transactionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const type = document.getElementById('transaction-type').value;
        const amount = parseFloat(document.getElementById('transaction-amount').value);

        if (!isNaN(amount) && amount > 0) {
            addTransaction(type, amount);
        }

        transactionForm.reset();
        modal.style.display = 'none';
    });

    updateBalance();
});
document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-btn');
    
    backBtn.addEventListener('click', () => {
        window.history.back();
    });


});
