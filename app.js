class UI {
  constructor() {
    this.budgetMessage = document.querySelector(".budget-message");
    this.expenseMessage = document.querySelector(".expense-message");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetTotal = document.getElementById("budget-total");
    this.expenseTotal = document.getElementById("expense-total");
    this.balance= document.getElementById("balance");
    this.balanceTotal = document.getElementById("balance-total");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.memoInput = document.getElementById("memo-input");
    this.expenseList = document.getElementById("expense-list");
    this.listItem = [];
    this.itemID = 0;
  }
//submit budget method
 enterBudget() {
  const value= this.budgetInput.value;
  if (value === "" || value < 0) {
    this.budgetMessage.classList.add("showMessage");
    this.budgetMessage.innerHTML = 
    `<div>Please enter a value. You cannot enter a negative number.</div>`;
    const refer = this;
    setTimeout(() => {
      refer.budgetMessage.classList.remove("showMessage");
    }, 5000);
} else{
  this.budgetTotal.textContent = value;
  this.budgetInput.value = "";
  this.showBalance();

}
}


showBalance() {
 const expense = this.sumOfExpenses();
 const total = parseInt(this.budgetTotal.textContent) - expense;
 this.balanceTotal.textContent = total;
if (total < 0) {
  this.balance.classList.remove("greenFont", "blackFont");
  this.balance.classList.add("redFont");
 } else if (total > 0) {
  this.balance.classList.remove("redFont", "blackFont");
  this.balance.classList.add("greenFont");
 }  else if (total === 0) {
  this.balance.classList.remove("redFont", "greenFont");
  this.balance.classList.add("blackFont");
 }
}
enterExpenses() {
  const expenseValue = this.expenseInput.value;
  const memoValue = this.memoInput.value;
  if (memoValue === "" || expenseValue ===  "" || expenseValue < 0) {
  this.expenseMessage.classList.add("showMessage");
  this.expenseMessage.innerHTML =
   `<div>Fields cannot be negative or empty.</div>`;
const refer = this;
setTimeout(() => {
  refer.expenseMessage.classList.remove("showMessage");
}, 4000);
} else {
  let amount = parseInt(memoValue);
  this.expenseInput.value = "";
  this.memoInput.value = "";

  let expense ={
    id: this.itemID,
    title: expenseValue,
    amount: amount,
  }
  this.itemID++;
  this.listItem.push(expense);
  this.addExpense(expense);
//show Balance
}
}
addExpense(expense){
  const div = document.createElement('div');
  div.classList.add('expense');
  div.innerHTML =
    `
  <div class="expense-item d-flex justify-content-between align-items-baseline">
   <h6 class="expense-title mb-0 text-uppercase list-item">title</h6>
   <h5 class="expense-amount mb-0 list-item">amount</h5>
   <div class="expense-icons list-item">
    <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
     <i class="fas fa-edit"></i>
    </a>
    <a href="#" class="delete-icon" data-id="${expense.id}">
     <i class="fas fa-trash"></i>
    </a>
   </div>`;

}
sumOfExpenses() {
  let total = 200;
  return total;
 }
}
function eventListeners() {
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");


//new instance of UI class
const ui = new UI();

budgetForm.addEventListener("submit", function(event) {
event.preventDefault();
ui.enterBudget();

});
expenseForm.addEventListener("submit", function(event) {
event.preventDefault(); 
ui.enterExpenses();
});

expenseList.addEventListener("click", function() {});
}
document.addEventListener ("DOMContentLoaded", function() {
  eventListeners();
});