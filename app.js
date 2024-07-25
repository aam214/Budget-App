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
    this.itemList = [];
    this.itemID = 0;
  }
//submit budget method
 enterBudget() {
  const value= this.budgetInput.value;
  if (value=== "" || value < 0) {
    this.budgetMessage.classList.add("showMessage");
    this.budgetMessage.innerHTML = 
    `<div>Please enter a value. You cannot enter a negative number.</div>`;
    const refer = this;
    //console.log(this);

    setTimeout(function() {
      refer.budgetMessage.classList.remove("showMessage");
    }, 5000)
} else{
  this.budgetTotal.textContent = value;
  this.budgetInput.value = '';
  this.showBalance();
}
}
showBalance(){
 const expense = this.sumofExpenses();
 const total = parseInt(this.budgetTotal.textContent) - expense;
 this.balanceTotal.textContent = total;

 if (total < 0){
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
sumofExpenses(){
  let total = 200;
  return total;
 }
 } 

function eventListeners (){
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");


//new instance of UI class
const ui = new UI()

budgetForm.addEventListener("submit", function(event){
event.preventDefault();
ui.enterBudget();
})

expenseForm.addEventListener("submit", function(event){
  event.preventDefault(); 
  ui.enterExpense();
})

expenseList.addEventListener("click", function(){

})
}
document.addEventListener ('DOMContentLoaded' , function(){
  eventListeners();
})