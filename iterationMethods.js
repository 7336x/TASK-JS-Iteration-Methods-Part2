const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];



// 1) Write a `filterIncomeTransactions` function that returns a new array containing only the income transactions.
function filterIncomeTransactions(transactions) {
  // Use the filter method to create a new array containing only the income transactions
  return transactions.filter(function(transaction) {
    // Checking if the first element of the transaction array is "income"
    return transaction[0] === "income"; // Returning true to include this transaction in the new array
  });
}




// 2) Write a `filterExpenseTransactions` function that return a new array containing only the expense transactions.
function filterExpenseTransactions(transactions) {
  // Useing the filter method to create a new array containing only the expense transactions
  return transactions.filter(function(transaction) {
    // Checking if the first element of the transaction array is "expense"
    return transaction[0] === "expense"; // Returning true to include this transaction in the new array
  });
}





// 3) Write a `calculateTotalIncome` function that calculates the total income and returns it.
function calculateTotalIncome(transactions) {
 // Initializing the total income to 0
 return transactions.reduce(function(total, transaction) {
  // Checking if the transaction type is income
  if (transaction[0] === "income") {
    // Adding the transaction amount to the total
    return total + transaction[1];
  }
  // Returning the total unchanged if not an income transaction
  return total;
}, 0); //  The starting value for total is 0
}





// 4) Write a `calculateTotalExpenses` function that calculates the total expense and returns it.
function calculateTotalExpenses(transactions) {
  // Useing the filter method to create an array of only the expense transactions
  const expenseTransactions = transactions.filter(function(transaction) {
    // Checking if the first element of the transaction array is "expense"
    return transaction[0] === "expense"; // Returning true to include this transaction
  });

  // Useing the reduce method to calculate the total of the expense amounts
  return expenseTransactions.reduce(function(total, transaction) {
    // Adding the second element (amount) of each expense transaction to the total
    return total + transaction[1]; // Returning the new total
  }, 0); // Starting the total at 0
}





// 5) Write a `calculateNetTotal` function that calculates the net total (total income - total expenses) and returns it.
function calculateNetTotal(transactions) {
  // Calculating the total income by filtering income transactions and summing their amounts
  const totalIncome = transactions.filter(function(transaction) {
    // Checking if the first element of the transaction array is "income"
    return transaction[0] === "income"; // Returning true to include this transaction
  }).reduce(function(total, transaction) {
    //  here the sum up the amounts of the income transactions
    return total + transaction[1]; // Return the new total
  }, 0); // Starting the total at 0

  // Calculating the total expenses by filtering expense transactions and summing their amounts
  const totalExpenses = transactions.filter(function(transaction) {
    // Checking if the first element of the transaction array is "expense"
    return transaction[0] === "expense"; // Returning true to include this transaction
  }).reduce(function(total, transaction) {
    //  also here the Sum up the amounts of the expense transactions
    return total + transaction[1]; // Return the new total
  }, 0); // Start the total at 0

  // Calculateing the net total by subtracting total expenses from total income
  return totalIncome - totalExpenses; //  finally returning the net total
}




// 6) Write a `filterSignificantTransactions` function that identifies and creates a new array with transactions (both incomes and expenses) above or equal to $500.
function filterSignificantTransactions(transactions, threshold = 500) {
  // Using the filter method to create a new array of transactions meeting the threshold criteria
  return transactions.filter(function(transaction) {
    // Checking if the second element (amount) of the transaction is greater than or equal to the threshold
    return transaction[1] >= threshold; // Returning true to include this transaction in the new array
  });
}




module.exports = {
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
