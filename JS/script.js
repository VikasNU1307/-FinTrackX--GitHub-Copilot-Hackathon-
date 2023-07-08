document.addEventListener("DOMContentLoaded", function() {
    const transactionForm = document.getElementById("transactionForm");
    const descriptionInput = document.getElementById("descriptionInput");
    const amountInput = document.getElementById("amountInput");
    const dateInput = document.getElementById("dateInput");
    const transactionType = document.getElementById("transactionType");
    const transactionList = document.getElementById("transactionList"); 
    const balanceElement = document.getElementById("balance"); 
  
    let balance = 0; 
  
    transactionForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const description = descriptionInput.value;
      const amount = parseFloat(amountInput.value);
      const date = new Date(dateInput.value);
      const type = transactionType.value;
  
      const transaction = document.createElement("li");
      transaction.innerHTML = `
        <div>${description} - $${amount} (${type})</div>
        <div class="date">${date.toDateString()}</div>
      `;
      transaction.classList.add(type);
  
      if (type === "income") {
        balance += amount;
      } else if (type === "expense") {
        balance -= amount;
      }
  
      transactionList.appendChild(transaction);
  
      updateBalance();
      clearForm();
    });
  
    function updateBalance() {
      balanceElement.innerText = `Current Balance: $${balance}`;
    }
  
    function clearForm() {
      descriptionInput.value = "";
      amountInput.value = "";
        
      dateInput.value = "";
    }
  });
  
