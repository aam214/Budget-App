
  
class UI {
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

 enterBudget() {
  const value= this.budgetInput.value;
  if (value=== "" || value < 0) {
    this.budgetMessage.classList.add("showMessage");
    this.budgetMessage.innerHTML = 
    `<p>Please enter a value. You cannot enter a negative number.</p>`;
    const referToMessage = this;
    console.log(this);

    setTimeout(function() {
      console.log(this);
      console.log(referToMessage);
      referToMessage.budgetMessage.classList.remove("showMessage");
    }, 4000)
}
}
 } 

function eventListeners (){
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");


const ui = new UI()

budgetForm.addEventListener("submit", function(event){
event.preventDefault();
ui.enterBudget();
})

expenseForm.addEventListener("submit", function(event){
  event.preventDefault(); 
})

expenseList.addEventListener("click", function(){

})
}
document.addEventListener ('DOMContentLoaded' , function(){
  eventListeners();
})