let elForm = document.querySelector(".shopping-form");
let elInput = document.querySelector(".product-taker");
let elList = document.querySelector(".shopping-list");

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  let list = [];
  let elInputValue = elInput.value;
  elInput.value = "";
  list.push(elInputValue);

  for (item of list) {
    let elItem = document.createElement("li");
    elItem.textContent = item;
    elList.appendChild(elItem);
  }
})