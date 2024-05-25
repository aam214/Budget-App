class Tracker {
  constructor() {
    this.budgetMessage = document.querySelector(".budget-message");
    this.expenseMessage = document.querySelector(".expense-message");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-total");
    this.expenseAmount = document.getElementById("expense-total");
    this.balance = document.getElementById("balance-summary");
    this.balanceAmount = document.getElementById("balance-total");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
 enterBudget(){
  const inputValue= this.budgetInput.inputValue;
  if (inputValue=== '' || inputValue<0){
    this.budgetMessage.classList
  }
 } 
}

function eventListener (){
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

}

const UI = new UI()

budgetForm.addEventListener('submit', function(event){
event.preventDefault();
})

expenseForm.addEventListener('submit', function(event){
  event.preventDefault(); 
})

expenseList.addEventListener('click', function(event){
  event.preventDefault(); 
})

document.addEventListener ('DOMContentLoaded' , function(){
eventListener();
}

)