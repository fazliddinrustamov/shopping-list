let elForm = document.querySelector(".shopping-form");
let elInput = document.querySelector(".product-taker");
let elList = document.querySelector(".shopping-list");
let arrayList = [];

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  let elInputValue = elInput.value;
  elInput.value = "";
  
  arrayList.push(elInputValue);
  
  let elItem = document.createElement("li");

  for (item of arrayList) {
    elList.appendChild(elItem);
    elItem.textContent = "";
    elItem.textContent = item;
  }
  let elDeleteButton = document.createElement("button");
  elDeleteButton.textContent = "Delete!";
  elDeleteButton.classList.add("del-btn");
  elItem.appendChild(elDeleteButton);
  elItem.style.fontSize = "20px";
  elItem.style.color = "rgb(59, 65, 60)";
  elItem.style.cursor = "pointer";
  elItem.style.fontWeight = "bold";
  elItem.style.marginTop = "20px";

  elItem.addEventListener('click', function() {
    elItem.classList.toggle("product-item");
  });

  elDeleteButton.addEventListener('click', function(){
    elList.removeChild(elItem);
  });
}) 