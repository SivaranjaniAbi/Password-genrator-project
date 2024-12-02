document.getElementById('addExpenseBtn').addEventListener('click', function () {
    const description = document.getElementById('expenseDescription').value.trim();
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;
  
    if (!description || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid description and amount!');
      return;
    }
  
    // Create expense item
    const expenseList = document.getElementById('expenseList');
    const expenseItem = document.createElement('li');
    expenseItem.innerHTML = `
      ${description} - ₹${amount.toFixed(2)} (${category})
      <button class="delete-btn">Delete</button>
    `;
  
    // Add delete functionality
    expenseItem.querySelector('.delete-btn').addEventListener('click', function () {
      expenseList.removeChild(expenseItem);
      updateTotal(-amount);
    });
  
    // Add expense to the list
    expenseList.appendChild(expenseItem);
  
    // Update total
    updateTotal(amount);
  
    // Clear inputs
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseAmount').value = '';
  });
  
  // Function to update the total amount
  function updateTotal(amount) {
    const totalAmount = document.getElementById('totalAmount');
    const currentTotal = parseFloat(totalAmount.textContent);
    totalAmount.textContent = (currentTotal + amount).toFixed(2);
  }
  