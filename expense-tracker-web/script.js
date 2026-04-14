const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const total = document.getElementById("total");

let totalAmount = 0;

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const expense = text.value;
  const value = +amount.value;

  const li = document.createElement("li");
  li.innerText = `${expense} - ₹${value}`;

  list.appendChild(li);

  totalAmount += value;
  total.innerText = totalAmount;

  text.value = "";
  amount.value = "";
});