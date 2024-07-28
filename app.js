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
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.listItem = [];
    this.itemID = 0;
  }
//submit budget method
 enterBudget() {
  //console.log("Budget submitted"); 
  const value= this.budgetInput.value;
  if (value === "" || value < 0) {
    this.budgetMessage.classList.add("showMessage");
    this.budgetMessage.innerHTML = 
    `<div>Please enter a value. You cannot enter a negative number.</div>`;
    const refer = this;
    setTimeout( () => {
      refer.budgetMessage.classList.remove("showMessage");
    }, 4000);
}else{
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
  //console.log("Expense submitted");
  const expenseValue = this.expenseInput.value;

  const amountValue = this.amountInput.value;
  if (expenseValue === "" || amountValue ===  "" || amountValue < 0) {
  this.expenseMessage.classList.add("showMessage");
  this.expenseMessage.innerHTML =
   `<div>Fields cannot be negative or empty.</div>`;
const refer = this;
setTimeout(() => {
  refer.expenseMessage.classList.remove("showMessage");
}, 4000);
} else {
  let amount = parseInt(amountValue);
  this.expenseInput.value = "";
  this.amountInput.value = "";

  let expense ={
    id: this.itemID,
    title: expenseValue,
  amount:amount,
  };
  this.itemID++;
  this.listItem.push(expense);
  this.addToExpense(expense);
  this.showBalance();
}
}
addToExpense(expense){
  const div = document.createElement('div');
  div.classList.add("expense");
  div.innerHTML =
`   <div class="expense-item d-flex justify-content-evenly align-items-baseline">
    <h6 class="expense-title list-item">${expense.title}</h6>
    <h6 class="expense-amount list-item">${expense.amount}</h6>
    <div class="expense-icons list-item">
    <a href="#" class="edit-icon" data-id="${expense.id}">
    <i class="fas fa-edit"></i>
    </a>
    <a href="#" class="delete-icon" data-id="${expense.id}">
    <i class="fas fa-trash"></i>
    </a>
    </div> 
    </div> `;
this.expenseList.appendChild(div);
}
sumOfExpenses() {
let total = 0;
if (this.listItem.length > 0) {
  total = this.listItem.reduce(function(acc, curr) {
    //console.log(`Total is ${acc} and the current value is ${curr.amount}`);
    acc += curr.amount;
    return acc;
  }, 0);
  }
  this. expenseTotal.textContent = total;
  return total;
}
editExpense(element) {
let id = parseInt(element.dataset.id);
let parent = element.parentElement.parentElement.parentElement;
//remove from the DOM
this.expenseList.removeChild(parent);
let expense = this.listItem.filter(function(item){
  return item.id === id;
});
//show value
this.expenseInput.value = expense[0].title;
this.amountInput.value = expense[0].amount;
//remove from list
let temporaryLine = this.listItem.filter(function(item){
  return item.id !== id;
});
this.listItem = temporaryLine;
this.showBalance();
}
removeExpense(element){
let id = parseInt(element.dataset.id);
let parent = element.parentElement.parentElement.parentElement;
//remove from the DOM
this.expenseList.removeChild(parent);
//remove from the list
let temporaryLine = this.listItem.filter(function(item){
  return item.id !== id;
});
this.listItem = temporaryLine;
this.showBalance();
}
}

function eventListeners() {
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
//new instance of UI class

const ui = new UI();

// Add event listeners
budgetForm.addEventListener("submit", function(event) {
  event.preventDefault();
  ui.enterBudget();
});

expenseForm.addEventListener("submit", function(event) {
  event.preventDefault();
  ui.enterExpenses();
});
expenseList.addEventListener("click", function(event){
if(event.target.parentElement.classList.contains('edit-icon')){
  ui.editExpense(event.target.parentElement)
} 
else if(event.target.parentElement.classList.contains('delete-icon'))
{
  ui.removeExpense(event.target.parentElement)
}
});

}
document.addEventListener ("DOMContentLoaded", function() {
  eventListeners();
});