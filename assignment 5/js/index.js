// Expenses Calculate 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // selection inputs 
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothsInput = document.getElementById('cloths-input');

    const incomeInput = document.getElementById('income-input');

    // assinign input values and covert to parseFloat
    const foodInputNumber = parseFloat(foodInput.value);
    const rentInputNumber = parseFloat(rentInput.value);
    const clothsInputNumber = parseFloat(clothsInput.value);

    const incomeInputNumber = parseFloat(incomeInput.value);

    // clear input feilds
    foodInput.value = '';
    rentInput.value = '';
    clothsInput.value = '';
    incomeInput.value = '';

    // make sum of expenses values 
    const totalExpenses = foodInputNumber + rentInputNumber + clothsInputNumber;

    const totalBalance = incomeInputNumber - totalExpenses;
    // select expenses and balance html 
    const expenses = document.getElementById('expenses');
    const balance = document.getElementById('total-balance');

    // changing inner text to total expenses 
    expenses.innerText = totalExpenses;
    balance.innerText = totalBalance;
})