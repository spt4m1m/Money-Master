// Expenses Calculate 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // selection inputs 
    const incomeInput = document.getElementById('income-input');

    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothsInput = document.getElementById('cloths-input');


    // assinign input values and covert to parseFloat
    const incomeInputNumber = parseFloat(incomeInput.value);

    const foodInputNumber = parseFloat(foodInput.value);
    const rentInputNumber = parseFloat(rentInput.value);
    const clothsInputNumber = parseFloat(clothsInput.value);


    // make sum of expenses values 
    const totalExpenses = foodInputNumber + rentInputNumber + clothsInputNumber;
    const totalBalance = incomeInputNumber - totalExpenses;


    // select expenses and balance html 
    const expenses = document.getElementById('expenses');
    const balance = document.getElementById('total-balance');

    // changing inner text to total expenses  and Error Handling
    // Error Handling 1
    if (foodInputNumber < 0 || rentInputNumber < 0 || clothsInputNumber < 0) {
        alert("You Can't set Negitive number")
    }
    // Error Handling 2
    if (isNaN(foodInputNumber) || isNaN(rentInputNumber) || isNaN(clothsInputNumber)) {
        alert('Enter Number ')
    }

    // Extra Error Handling 
    if (foodInputNumber > incomeInputNumber || rentInputNumber > incomeInputNumber || clothsInputNumber > incomeInputNumber) {
        alert('Oops !! Your Expense Balance is Bigger then your Income Balance')
    }
    if (foodInputNumber > 0 && rentInputNumber > 0 && clothsInputNumber > 0) {
        expenses.innerText = totalExpenses;
        balance.innerText = totalBalance;
    }
    if (incomeInputNumber = 0) {
        alert('Enter Income')
    }
})


// save Calculate 
document.getElementById('save-btn').addEventListener('click', function () {
    // select inputs 
    const incomeInput = document.getElementById('income-input');
    const saveInput = document.getElementById('save-input');

    // select save balance and remain balance html 
    const saveBalance = document.getElementById('save-amount');
    const remainBalance = document.getElementById('remain-amount');
    const balance = document.getElementById('total-balance');

    // assinign input values and covert to parseFloat
    const incomeInputNumber = parseFloat(incomeInput.value);
    const saveINputNumber = parseFloat(saveInput.value);

    const balanceNumber = parseFloat(balance.innerText);

    // calculate save percentage 
    const totalSave = incomeInputNumber * (saveINputNumber / 100);
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