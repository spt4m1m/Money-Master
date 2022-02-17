// functions 
function incomeInputFunc() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputNumber = parseFloat(incomeInput.value);
    return incomeInputNumber;
}

function foodExpenseInputFunc() {
    const foodInput = document.getElementById('food-input');
    const foodInputNumber = parseFloat(foodInput.value);
    return foodInputNumber;
}
function rentExpenseInputFunc() {
    const rentInput = document.getElementById('rent-input');
    const rentInputNumber = parseFloat(rentInput.value);
    return rentInputNumber;
}
function clothExpenseInputFunc() {
    const clothsInput = document.getElementById('cloths-input');
    const clothsInputNumber = parseFloat(clothsInput.value);
    return clothsInputNumber;
}



// Expenses Calculate 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // make sum of expenses values 
    const totalExpenses = foodExpenseInputFunc() + rentExpenseInputFunc() + clothExpenseInputFunc();
    const totalBalance = incomeInputFunc() - totalExpenses;


    // select expenses and balance html 
    const expenses = document.getElementById('expenses');
    const balance = document.getElementById('total-balance');

    // changing inner text to total expenses  and Error Handling
    // Error Handling 1
    if (totalBalance < 0) {
        alert('your Expens Balance bigger then income Balance');
        expenses.innerText = 0;
        balance.innerText = 0;
    }
    if (foodExpenseInputFunc() < 0 || rentExpenseInputFunc() < 0 || clothExpenseInputFunc() < 0) {
        alert("You Can't set Negitive number")
    }
    // Error Handling 2
    if (isNaN(foodExpenseInputFunc()) || isNaN(rentExpenseInputFunc()) || isNaN(clothExpenseInputFunc())) {
        alert('Enter Number ')
    }

    // Extra Error Handling 
    if (foodExpenseInputFunc() > incomeInputFunc() || rentExpenseInputFunc() > incomeInputFunc() || clothExpenseInputFunc() > incomeInputFunc()) {
        alert('Oops !! Your Expense Balance is Bigger then your Income Balance')
    }
    if (foodExpenseInputFunc() > 0 && rentExpenseInputFunc() > 0 && clothExpenseInputFunc() > 0) {
        expenses.innerText = totalExpenses;
        balance.innerText = totalBalance;
    }
    if (incomeInputFunc() = 0) {
        alert('Enter Income')
    }

})


// save Calculate 
document.getElementById('save-btn').addEventListener('click', function () {
    // select inputs 
    const saveInput = document.getElementById('save-input');

    // select save balance and remain balance html 
    const saveBalance = document.getElementById('save-amount');
    const remainBalance = document.getElementById('remain-amount');
    const balance = document.getElementById('total-balance');

    // assinign input values and covert to parseFloat
    const saveINputNumber = parseFloat(saveInput.value);

    const balanceNumber = parseFloat(balance.innerText);

    // calculate save percentage 
    const totalSave = incomeInputFunc() * (saveINputNumber / 100);
    const remainBalanceNumber = balanceNumber - totalSave;

    // changing innerText of htmls and error handling
    if (saveINputNumber > 0) {
        saveBalance.innerText = totalSave;
        remainBalance.innerText = remainBalanceNumber;
    }
    if (saveINputNumber < 0) {
        alert("you can't set negative number In Save Input")
    }
    if (isNaN(saveINputNumber)) {
        alert('Invalid Percentage')
    }
    if (totalSave > balanceNumber) {
        alert('you have not Enough Money to Save');
        saveBalance.innerText = 00;
        remainBalance.innerText = 00;
    }

})