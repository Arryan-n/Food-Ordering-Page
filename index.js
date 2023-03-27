const cardDetails = document.getElementById("card-details");
const pizzaBtn = document.getElementById("pizza-btn");
const hamburgerBtn = document.getElementById("hamburger-btn");
const wineBtn = document.getElementById("wine-btn");
const darkmode = document.getElementById("dark-mode");
const remove = document.getElementById("remove");
const foodslip = document.getElementById("food-slip");
const checkouttick = document.getElementById("checkout-tick");

const foodOrder = [
  {
    emoji: "🍕",
    name: "Pizza",
    toppings: "peppironi,mushrom,mozarella",
    price: "14",
    id: "pizza",
  },
  {
    emoji: "🍔",
    name: "Hamburgur",
    toppings: "beef,cheese,lettuce",
    price: "12",
    id: "burgur",
  },
  {
    emoji: "🍺",
    name: "Beer",
    toppings: "grain,hops,yeast,water",
    price: "12",
    id: "beer",
  },
];

const mainel = document.getElementById("main");
let str = "";
let itemArr = [];

function search(toSearch) {
  let ans = -1;
  itemArr.forEach((curr, index) => {
    if (curr.name === toSearch) ans = index;
  });
  // return -1 if not found
  return ans;
}

function handleDelete(name, index, quantity) {
  if (quantity == 1) {
    itemArr.splice(index, 1);
  } else {
    itemArr[index].quantity -= 1;
  }
  renderItem();
}

function renderItem() {
  const displayEl = document.getElementById("display");
  if (itemArr.length === 0) {
    displayEl.innerHTML = "";
    return;
  }
  let toDisplay = `<h1 class="pay-slip">Your Order</h1>`;
  let total = 0;
  itemArr.forEach((curr, index) => {
    // toDisplay += `<h2>${curr.name} </h2>`;

    toDisplay += `
      <div class = "food-slip" id="food-slip">
      <h2 class="food-slip-2">
      ${curr.name}<span class="span-quantity">  x${curr.quantity}</span>
      
      <div class="remove-btn" id="remove" onclick="handleDelete('${
        curr.name
      }','${index}','${curr.quantity}')">🗑️</div>
      </h2>
      
      <h2>$${curr.price * curr.quantity} 
      </h2>
      
      </div>
      `;
    total += parseInt(curr.price * curr.quantity);
  });
  toDisplay += `<div class="bill-line" id="bill-line"></div>`;
  toDisplay += `<div class="total">
  <h2>Total Cost</h2>
  <h2>$${total}</h2>
  </div>`;
  toDisplay += `
  <div class="complete-btn"  onclick="checkout()">
  <div>
  <h1 id="checkout-tick">
  <i class="fa-brands fa-apple"></i>Pay
  </h1>
  </div>
  </div>
  `;
  // Complete Order
  displayEl.innerHTML = toDisplay;
}

function addItem(e) {
  const name = e.currentTarget.getAttribute("data-name");
  const price = e.currentTarget.getAttribute("data-price");

  if (search(name) === -1)
    itemArr.push({ name: name, quantity: 1, price: price });
  else {
    let index = search(name);
    itemArr[index].quantity += 1;
  }

  renderItem();
}
function handleClick(e) {
  addItem(e);
}
function renderMain() {
  for (let i = 0; i < foodOrder.length; i++) {
    const current = foodOrder[i];
    str += `
    <div class="div-food">
    <div class="emoji">${current.emoji}</div>
    <div class="box">
    <div class="orders">
    <h3>${current.name}</h3>
    <p>${current.toppings}</p>
    <p>$${current.price}</p>
    </div>
    <div class="btn">
    <button id="addBtn"
    data-name="${current.name}"
    data-price="${current.price}"
    class="button"
    >+
    </button>
    </div>
    </div>
    </div>
    `;
  }
  mainel.innerHTML = str;
}
renderMain();

let className = document.querySelectorAll("#addBtn");
className.forEach((curr) => curr.addEventListener("click", handleClick));
const billLine = document.getElementById("bill-line");
const darkwhite = document.getElementById("dark-white");
let count = 0;
darkmode.addEventListener("click", () => {
  count++;
  if (count % 2 != 0) {
    darkmode.innerText = "⚡";
    darkwhite.style.background = "#282828";
    mainel.style.color = "#FFFFFF";
    darkwhite.style.color = "#FFFFFF";
  } else {
    darkmode.innerText = "🌙";
    darkwhite.style.background = "#FFFFFF";
    mainel.style.color = "#000000";
    darkwhite.style.color = "#000000";
  }
});
let string = "";
function checkout() {
  console.log("worked");
  setTimeout(() => {
    console.log("working in 2s");
    // console.log((string = "Done"));
  }, 2000);
}
// console.log((checkouttick.innerHTML = string));
{
  /* <i class="fa-sharp fa-regular fa-circle-check"></i>; */
}
